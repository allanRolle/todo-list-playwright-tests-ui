import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/custom-world";

When(`I click on the delete button`, async function(this: CustomWorld) {
    await this.todoPage.todoItemDeleteButton.click();
});

Then(`The todo should be deleted`, async function(this: CustomWorld) {
    await this.todoPage.checkTodoCount(this.todoPage.sectionList, 0);
});