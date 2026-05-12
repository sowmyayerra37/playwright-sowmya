import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async navigate() {

    await this.page.goto(
      'https://animated-gingersnap-8cf7f2.netlify.app/'
    );

  }

  async login() {

    await this.page.locator('input[type="text"]').fill('admin');

    await this.page.locator('input[type="password"]').fill('password123');

    await this.page.getByRole('button', {
      name: 'Sign in'
    }).click();

  }

}