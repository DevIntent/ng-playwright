import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
});

test.describe('the main screen of the application', () => {
  test('it should have a title', async ({ page }) => {
    const header = page.getByTestId('header');

    await expect(header).toHaveText('Playwright e2e example');
  });
});
