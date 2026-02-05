import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/custom-world";

Given(`A todo has been added`, async function (this: CustomWorld) {
  await this.todoPage.addTodo("Brand new todo")
});

When(`I edit a todo`, async function(this: CustomWorld){
    await this.todoPage.todoItemBody.dblclick();
    await this.todoPage.todoItemBody.fill('A second todo');
});

Then(`I should see the updated todo`, async function(this: CustomWorld) {
    await this.todoPage.checkContainsText(this.todoPage.todoItemBody, 'A second todo');
});