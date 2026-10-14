import{test,expect, Locator, Page} from '@playwright/test';
export 
class Baseclass{

     readonly page:Page;
     readonly LaunchURL;
     constructor(page:Page)
     {
        this.page= page;
        this.LaunchURL=page.goto('https://login.salesforce.com/')

     }
     async LaunchApplication()
     {
      await this.LaunchURL

}
}