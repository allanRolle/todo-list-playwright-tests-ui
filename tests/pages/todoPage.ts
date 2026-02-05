import { Page, Locator, expect } from "@playwright/test";

export class TodoPage {
    readonly page: Page;
    readonly mainInput: Locator;
    readonly toggleAllCheck: Locator;
    readonly sectionList: Locator;
    readonly todoItem: Locator;
    readonly todoItemBody: Locator;
    readonly todoItemDeleteButton: Locator;
    readonly footer: Locator;
    readonly todoCount: Locator;
    readonly filterAllButton: Locator;
    readonly filterActiveButton: Locator;
    readonly filterCompletedButton: Locator;
    readonly todoClearCompleted: Locator;
    
    constructor(page:Page) {
        this.page = page;
        this.mainInput = this.page.locator('[data-test="app-main-input"]');
        this.toggleAllCheck = this.page.locator('[data-test="app-check-toggle-all"]');
        this.sectionList = this.page.locator(".section_list");
        this.todoItem = this.page.locator("[data-test='app-todo-item']");
        this.todoItemBody = this.page.locator("[data-test='app-todo-item-body']");
        this.todoItemDeleteButton = this.page.locator("[data-test='app-todo-delete-button']");
        this.footer = this.page.locator(".footer_infos-wrapper");
        this.todoCount = this.page.locator("[data-test='app-footer-todo-count']");
        this.filterAllButton = this.page.locator('[data-test="app-filter-all"]');
        this.filterActiveButton = this.page.locator('[data-test="app-filter-active"]');
        this.filterCompletedButton = this.page.locator('[data-test="app-filter-completed"]');
        this.todoClearCompleted = this.page.locator('[data-test="app-clear-completed"]')
    }

    async addTodo(text:string) {
        await this.mainInput.fill(text);
        await this.page.keyboard.press("Enter");        
    }

    async checkTodoCount(element: Locator, count: number) {
        await expect(element).toHaveCount(count);
    }

    async checkContainsText(element: Locator, text: string) {
        await expect(element).toContainText(text);
    }
}