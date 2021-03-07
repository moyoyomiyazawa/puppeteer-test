const puppeteer = require('puppeteer');
const url = 'https://landscape-croquis.netlify.app/';

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  }
  );
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.screenshot({ path: './image.png' });
  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
  }
})();
