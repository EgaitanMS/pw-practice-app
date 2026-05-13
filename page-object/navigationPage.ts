import { Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';
export class NavigationPage extends HelperBase {

    readonly fromLayoutsItem: Locator;
    readonly datepickerItem: Locator;
    readonly smartTableItem: Locator;
    readonly toastrMenuItem: Locator;
    readonly tooltipMenuItem: Locator;

    constructor(page: Page) {
        super(page);
        this.fromLayoutsItem = page.getByText('Form Layouts');
        this.datepickerItem = page.getByText('Datepicker');
        this.smartTableItem = page.getByText('Smart Table');
        this.toastrMenuItem = page.getByText('Toastr');
        this.tooltipMenuItem = page.getByText('Tooltip');
    }
    async formLayoutsPage() {

        await this.selectGoupMenuItem('Forms');
        await this.fromLayoutsItem.click();
        await this.waitForNumberOfSeconds(2);
    }

    async datepickerPage() {

        await this.selectGoupMenuItem('Forms');
        await this.datepickerItem.click();
    }
    async smartTablePage() {
        await this.selectGoupMenuItem('Tables & Data');
        await this.smartTableItem.click();
    }

    async toasterPage() {
        await this.selectGoupMenuItem('Modal & Overlays');
        await this.toastrMenuItem.click();
    }


    async tooltipPage() {
        await this.selectGoupMenuItem('Modal & Overlays');
        await this.tooltipMenuItem.click();

    }

    private async selectGoupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle);
        const expandedState = await groupMenuItem.getAttribute('aria-expanded');
        if (expandedState === 'false') {
            await groupMenuItem.click();
        }
    }







}
