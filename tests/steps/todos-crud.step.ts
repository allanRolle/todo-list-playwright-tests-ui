import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { expect } from "@playwright/test";

Given(`I am on the main page`, async function () {
  await pageFixture.page.goto(
    "https://angular-todo-app-with-signals.netlify.app/",
  );
});

When(`I enter a todo`, async function () {
  await pageFixture.page
    .locator('[data-test="app-main-input"]')
    .fill("My new todo");
  await pageFixture.page.keyboard.press("Enter");
});

Then(`I should see the new todo`, async function () {
  await pageFixture.page.waitForSelector(".section_list");
  await expect(
    pageFixture.page.locator("[data-test='app-todo-item']"),
  ).toBeTruthy();
  await expect(
    pageFixture.page.locator("[data-test='app-todo-item']"),
  ).toHaveCount(1);
  await pageFixture.page.waitForSelector(".footer_infos-wrapper");
  await expect(
    pageFixture.page.locator("[data-test='app-footer-todo-count']"),
  ).toContainText("1 item left");
});
