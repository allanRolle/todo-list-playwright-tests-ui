import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/custom-world";

Given(`I am on the main page`, async function (this: CustomWorld) {
  await this.page?.goto(
    "https://angular-todo-app-with-signals.netlify.app/",
  );
});

When(`I enter a todo`, async function (this: CustomWorld) {
  await this.todoPage.addTodo("New Todo")
});

Then(`I should see the new todo`, async function (this: CustomWorld) {
  await this.todoPage.sectionList;
  await expect(this.todoPage.sectionList).toBeTruthy();
  await expect(this.todoPage.todoItem).toHaveCount(1);
  await expect(this.todoPage.todoCount).toContainText("1 item left");
});
