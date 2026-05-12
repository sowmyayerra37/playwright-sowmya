import { expect, Locator, Page } from '@playwright/test';

export class DashboardPage {

  constructor(private page: Page) {}

  async selectApplication(application: string) {

    await this.page
      .getByRole('button', { name: new RegExp(application) })
      .click();

  }

  getColumn(columnName: string): Locator {

    return this.page
      .locator('div')
      .filter({ hasText: new RegExp(`^${columnName}`) })
      .first();

  }

  async validateTaskInColumn(
    columnName: string,
    taskName: string
  ) {

    const column = this.getColumn(columnName);

    await column.scrollIntoViewIfNeeded();

    await expect(column).toContainText(taskName);

  }

  async validateTags(
    columnName: string,
    taskName: string,
    tags: string[]
  ) {

    const column = this.getColumn(columnName);

    const taskCard = column
      .locator('div')
      .filter({ hasText: taskName })
      .first();

    for (const tag of tags) {

      await expect(taskCard).toContainText(tag);

    }

  }

}