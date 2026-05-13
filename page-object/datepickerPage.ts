import { expect, Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class DatepickerPage extends HelperBase {


    constructor(page: Page) {
        super(page);
    }


    async selectCommonDatePickerDateFromToday(numberOfDays: number) {
        const calendarInputField = this.page.getByPlaceholder('Form Picker');
        await calendarInputField.click();
        const dateToAssert = await this.selectDateInTheCalendar(numberOfDays);
        await expect(calendarInputField).toHaveValue(dateToAssert);

    }

    async datePickerWithRangeFromToday(startDayFromToday: number, endDayFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Range Picker');
        await calendarInputField.click();
        const dateToAssertStart = await this.selectDateInTheCalendar(startDayFromToday);
        const dateToAssertEnd = await this.selectDateInTheCalendar(endDayFromToday);
        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`;
        await expect(calendarInputField).toHaveValue(dateToAssert);


    }

    private async selectDateInTheCalendar(numberOfDays: number) {


        let date = new Date();
        date.setDate(date.getDate() + numberOfDays); // Set to tomorrow's date
        const expectedDate = date.getDate().toString();
        const expectedMonthShort = date.toLocaleString('En-Us', { month: 'short' }); // Get abbreviated month name
        const expectedMonthLong = date.toLocaleString('En-Us', { month: 'long' }); // Get abbreviated month name

        const expectYear = date.getFullYear().toString();
        const dateAssert = expectedMonthShort + ' ' + expectedDate + ', ' + expectYear;
        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        const expectedMonthAndYear = `${expectedMonthLong} ${expectYear}`;

        while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        }

        await this.page.locator('.day-cell.ng-star-inserted:not(.bounding-month)').getByText(expectedDate, { exact: true }).click();
        return dateAssert;
    }








}