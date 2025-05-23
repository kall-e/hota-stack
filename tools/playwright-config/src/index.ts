import type { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';

/**
 * Creates a base Playwright configuration that can be extended by apps
 */
export default ({ port }: { port: number }): PlaywrightTestConfig => {
  const baseURL = `http://localhost:${port}`;

  const config: PlaywrightTestConfig = {
    testDir: './tests/e2e',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: process.env.CI
      ? [
          ['list', { printSteps: true }],
          ['json', { outputFile: 'playwright-results.json' }],
          ['html', { outputFolder: 'playwright-report/' }],
        ]
      : [
          ['list', { printSteps: true }],
          ['html', { outputFolder: 'playwright-report/' }],
        ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
      /* Base URL to use in actions like `await page.goto('/')`. */
      baseURL: process.env.BASE_URL ?? baseURL,

      /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
      trace: 'on-first-retry',
    },

    /* Configure projects for major browsers */
    projects: [
      // Setup project
      { name: 'setup', testMatch: /.*\.setup\.ts/ },
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
        dependencies: ['setup'],
      },

      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
        dependencies: ['setup'],
      },

      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
        dependencies: ['setup'],
      },

      /* Test against mobile viewports. */
      {
        name: 'Mobile Chrome',
        use: { ...devices['Pixel 5'] },
      },
      {
        name: 'Mobile Safari',
        use: { ...devices['iPhone 12'] },
      },
    ],

    /* Run your local dev server before starting the tests */
    webServer: {
      command: 'cd ../../ && pnpm dev',
      url: baseURL,
      reuseExistingServer: !process.env.CI,
    },
  };

  return defineConfig(config);
};
