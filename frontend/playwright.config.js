module.exports = {
  testDir: "./tests", // Directory where your tests are located
  timeout: 30000, // Global timeout for tests
  expect: {
    timeout: 5000, // Timeout for expect assertions
  },
  use: {
    headless: false, // Run tests in headless mode
    baseURL: "http://localhost:3001", // Base URL for your app
    // You can also set other options like viewport size here
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: "Desktop",
      use: {
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
};
