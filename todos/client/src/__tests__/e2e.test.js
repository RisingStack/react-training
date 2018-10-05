import puppeteer from 'puppeteer';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

describe('Google', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display "google" text on page!', async () => {
    const todosText = await page.evaluate(
      () => document.querySelector('#test-todos-title').textContent
    );
    expect(todosText).toBe('Todos');

    await page.click('#test-todos-list > li:first-child a');

    await page.screenshot({ path: 'todo.png' });
  });
});
