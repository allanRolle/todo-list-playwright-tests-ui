import { AfterAll, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let page: Page;
let browser: Browser;
setDefaultTimeout(60 * 1000 * 2);

BeforeAll(async function () {
  try {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    pageFixture.page = page;
  } catch (error) {
    console.error("BeforeAll hook failed:", error);
    throw error;
  }
});

// AfterAll(async function () {
//   await page.close();
//   await browser.close();
// });
