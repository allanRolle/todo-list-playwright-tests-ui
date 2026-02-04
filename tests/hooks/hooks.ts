import { After, Before, ITestCaseHookParameter, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { CustomWorld } from "../support/custom-world";

setDefaultTimeout(60 * 1000 * 2);

Before(async function (this: CustomWorld) {
  try {
    await this.init();
  } catch (error) {
    console.error("BeforeAll hook failed:", error);
    throw error;
  }
});

After(async function (this: CustomWorld, { result }: ITestCaseHookParameter) {
  if (result?.status === Status.FAILED) {
    const screenshot = await this.page?.screenshot();
    if (screenshot) {
      await this.attach(screenshot, 'image/png');
    }
  }
  await this.cleanup();
});
