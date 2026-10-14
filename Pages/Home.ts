import{Locator, test, expect, Page} from '@playwright/test';
export class Home
{
     readonly page: Page;
     readonly Homepage: Locator;
     constructor(page: Page)
     {
        this.page= page;
        this.Homepage=page.locator("//h1[text()='Salesforce login']");

     }
     async VerifyHomepage()
     {
        await expect(this.Homepage).toBeVisible();
     }
}
