import { Page, Locator } from "@playwright/test";

export class TodoPage {
    readonly page: Page;
    readonly mainInput: Locator;
    readonly sectionList: Locator;
    readonly todoItem: Locator;
    readonly todoItemBody: Locator;
    readonly todoItemDeleteButton: Locator;
    readonly footer: Locator;
    readonly todoCount: Locator;
    
    constructor(page:Page) {
        this.page = page;
        this.mainInput = this.page.locator('[data-test="app-main-input"]');
        this.sectionList = this.page.locator(".section_list");
        this.todoItem = this.page.locator("[data-test='app-todo-item']");
        this.todoItemBody = this.page.locator("[data-test='app-todo-item-body']");
        this.todoItemDeleteButton = this.page.locator("[data-test='app-todo-delete-button']");
        this.footer = this.page.locator(".footer_infos-wrapper");
        this.todoCount = this.page.locator("[data-test='app-footer-todo-count']");
    }

    async addTodo(text:string) {
        await this.mainInput.fill(text);
        await this.page.keyboard.press("Enter");        
    }
}