import { expect, createTest } from '@ngx-playwright/test';

import { MainScreen } from '../screens/main-screen.js';

const test = createTest(MainScreen);

test.describe('the main screen of the application', () => {
  test('it should have a title', async ({ $: { header } }) => {
    expect(await header.text()).toEqual('Playwright e2e example');
  });
});
