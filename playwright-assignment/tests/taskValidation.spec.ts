import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { DashboardPage } from '../pages/DashboardPage';

import testData from '../data/testData.json';

test.describe('Kanban Board Validation', () => {

  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);  

    await loginPage.navigate();

    await loginPage.login();

  });

  for (const data of testData) {

    test(`Validate task: ${data.task}`, async ({ page }) => {

      const dashboardPage = new DashboardPage(page);

      await dashboardPage.selectApplication(
        data.application
      );

      await dashboardPage.validateTaskInColumn(
        data.column,
        data.task
      );

      await dashboardPage.validateTags(
        data.column,
        data.task,
        data.tags
      );

    });

  }

});