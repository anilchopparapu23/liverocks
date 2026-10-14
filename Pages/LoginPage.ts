import{test,expect, Locator, Page} from '@playwright/test';
export 
class LoginPage{
    readonly page: Page;
     readonly username: Locator;
     readonly password: Locator;
     readonly loginBtn: Locator;
    constructor(page: Page){
        this.page= page;
        this.username=page.locator('#username');
        this.password=page.locator('#password');
        this.loginBtn=page.locator('#Login');
    }
    async urlgoto()
    {
        
        await this.page.goto('https://login.salesforce.com/')
    }
    async Login(user:string, pass: string)
    {
      await this.username.fill(user);
      await this.password.fill(pass);
      await this.loginBtn.click();

    }

}