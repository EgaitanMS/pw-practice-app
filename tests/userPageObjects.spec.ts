import { test, expect } from '@playwright/test';
import { PageManager } from '../page-object/pageManager';
import {faker} from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
    try {
        await page.goto('http://localhost:4200');
    } catch (error) {
        console.error('Error al navegar a la página:', error);
        throw error;
    }
})

test("navigate to form page", async ({ page }) => {
    const pm = new PageManager(page);

    await pm.navigateTo().formLayoutsPage();
    await pm.navigateTo().datepickerPage();
    await pm.navigateTo().smartTablePage();
    await pm.navigateTo().toasterPage();
    await pm.navigateTo().tooltipPage();
})

test("parametrized methods", async ({ page }) => {
    const pm = new PageManager(page);
    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(10000)}@test.com`
    await pm.navigateTo().formLayoutsPage();
    await pm.onFormLayoutsPage().submitUsingTheGridFormCredentialsAndSelectOption('test@test.com', 'test1234', 'Option 2');
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true);
   
})


test("CI test", async ({ page }) => {
    const pm = new PageManager(page);

    await pm.navigateTo().formLayoutsPage();
    await pm.navigateTo().datepickerPage();
   
})