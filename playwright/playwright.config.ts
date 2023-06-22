import type { PlaywrightTestConfig } from '@ngx-playwright/test';
import { devices } from '@playwright/test';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  testDir: join(__dirname, 'specs'),
  testMatch: '**/*.e2e-spec.ts',

  reporter: [
    [process.env.GITHUB_ACTION ? 'github' : 'list'],
    ['junit', { outputFile: join(__dirname, 'results/junit.xml') }],
  ],
};

export default config;
