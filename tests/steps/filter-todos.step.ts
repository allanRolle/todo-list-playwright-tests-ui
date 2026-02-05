import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/custom-world";

Given(`Multiple todos have been added`, async function (this: CustomWorld) {
    await this.todoPage.addTodo('Todo 1');
    await this.todoPage.addTodo('Todo 2');
    await this.todoPage.addTodo('Todo 3');
    await this.todoPage.addTodo('Todo 4');
    await this.todoPage.addTodo('Todo 5');
    await this.todoPage.checkContainsText(this.todoPage.todoCount, "5 items left");
});

When(`I click on the checkbox to toggle all todos`, async function(this: CustomWorld) {
    await this.todoPage.toggleAllCheck.check();
});

Then(`All todos are selected`, async function(this: CustomWorld) {
    for(const item of await this.todoPage.todoItem.all())
    await expect(item).toContainClass('selected'); 
});

When(`I uncheck a todo`, async function(this: CustomWorld) {
    await this.todoPage.todoItem
        .nth(1)
        .locator('[data-test="app-todo-item-input"]')
        .uncheck();
});

Then(`There should be 4 todos selected`, async function(this: CustomWorld) {
    await this.todoPage.checkTodoCount(this.todoPage.page.locator('.selected'), 4);
});

When(`I click on the button ALL`, async function(this: CustomWorld) {
    await this.todoPage.filterAllButton.click();
});

Then(`There should be 5 todos visible`, async function(this: CustomWorld) {
    await this.todoPage.checkTodoCount(this.todoPage.todoItem, 5) 
});

When(`I click on the button ACTIVE`, async function(this: CustomWorld) {
    await this.todoPage.filterActiveButton.click();
});

Then(`There should be one todo visible`, async function(this: CustomWorld) {
    await this.todoPage.checkTodoCount(this.todoPage.todoCount, 1);
});

When(`I click on the button COMPLETED`, async function(this: CustomWorld) {
    await this.todoPage.filterCompletedButton.click();
});

Then(`There should be 4 todos visible`, async function(this: CustomWorld) {
    await this.todoPage.checkTodoCount(this.todoPage.todoItem, 4); 
});

When(`I click on the button CLEAR COMPLETED`, async function(this: CustomWorld) {
    await this.todoPage.todoClearCompleted.click();
    await this.todoPage.filterAllButton.click();
});

Then(`There should be 1 todo visible`, async function(this: CustomWorld) {
    await this.todoPage.checkTodoCount(this.todoPage.todoItem, 1); 
});