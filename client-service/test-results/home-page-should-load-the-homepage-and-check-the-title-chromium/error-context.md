# Test info

- Name: should load the homepage and check the title
- Location: C:\Users\catmu\Downloads\workspace\freelan\restaurant\client-service\tests\home-page.spec.ts:3:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\catmu\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
>  3 | test('should load the homepage and check the title', async ({ page }) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at C:\Users\catmu\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
   4 |   // Increase timeout if the page takes longer to load
   5 |   await page.goto('/', { timeout: 60000 });
   6 |
   7 |   // Optionally, wait for a specific element to appear
   8 |   await page.waitForSelector('h1'); // Wait for a header element
   9 |
  10 |   const title = await page.title();
  11 |   console.log(title);
  12 |   
  13 |   expect(title).toBe('My Next.js App');
  14 | });
  15 |
```