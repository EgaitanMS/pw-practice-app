import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';
export class FormLayoutPage extends HelperBase {



    constructor(page: Page) {
        super(page);
    }


    async submitUsingTheGridFormCredentialsAndSelectOption(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', { hasText: "Using the Grid" });
        await usingTheGridForm.getByRole('textbox', { name: "Email" }).fill(email);
        await usingTheGridForm.getByPlaceholder('Password').fill(password);
        await usingTheGridForm.getByRole('radio', { name: optionText }).check({ force: true });
        await usingTheGridForm.getByRole('button', { name: 'Sign in' }).click();
    }

    /**
     * This method fills out and submits the inline form with the provided name, email, and checkbox option.
     * @param name - should be first and last name
     * @param email - email for the test user
     * @param rememberMe  -true or false if user session to be safed
     */
    async submitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
        const inlineForm = this.page.locator('nb-card', { hasText: "Inline Form" });
        await inlineForm.getByRole('textbox', { name: "Jane Doe" }).fill(name);
        await inlineForm.getByRole('textbox', { name: 'Email' }).fill(email);
        if (rememberMe) {
            await inlineForm.getByRole('checkbox').check({ force: true });
            await inlineForm.getByRole('button', { name: 'Submit' }).click();
        }
    }
}