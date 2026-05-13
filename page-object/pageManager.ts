import { Page, Expect } from '@playwright/test';
import { NavigationPage } from '../page-object/navigationPage';
import { FormLayoutPage } from '../page-object/formLayoutPage';
import { DatepickerPage } from '../page-object/datepickerPage';

export class PageManager {

    private readonly page: Page;
    private readonly navigationPage: NavigationPage;
    private readonly formLayoutPage: FormLayoutPage;
    private readonly datepickerPage: DatepickerPage;


    constructor(page: Page) {
        this.page = page;
        this.navigationPage = new NavigationPage(page);
        this.formLayoutPage = new FormLayoutPage(page);
        this.datepickerPage = new DatepickerPage(page);
    }

    navigateTo() {
        return this.navigationPage;
    }
    onFormLayoutsPage() {
        return this.formLayoutPage;
    }
    onDatepickerPage() {
        return this.datepickerPage;
    }
}