import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/custom-world";

When(`I click on the delete button`, async function(this: CustomWorld) {
    await this.todoPage.todoItemDeleteButton.click();
});

Then(`The todo should be deleted`, async function(this: CustomWorld) {
    await expect(this.todoPage.sectionList).toHaveCount(0);
});