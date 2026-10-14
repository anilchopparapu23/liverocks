import{test, expect}from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { Home } from '../Pages/Home';
import { Baseclass } from '../Fixtures/Base';

test('Login',async({page})=>{
    const loginPage=new LoginPage(page);
    const home=new Home(page);
    await loginPage.urlgoto();
    await home.VerifyHomepage();
    await loginPage.Login('Akhilchandra@gmail.com','Chandra123');


   
    
});