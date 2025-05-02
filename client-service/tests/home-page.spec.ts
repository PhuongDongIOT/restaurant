import { test, expect } from '@playwright/test';

test('should load the homepage and check the title', async ({ page }) => {
  // Increase timeout if the page takes longer to load
  await page.goto('/', { timeout: 60000 });

  // Optionally, wait for a specific element to appear
  await page.waitForSelector('h1'); // Wait for a header element

  const title = await page.title();  
  expect(title).toBe('My Next.js App');
});
