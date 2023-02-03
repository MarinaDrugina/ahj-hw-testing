/**
 * @jest-environment jsdom
 */
import puppeteer from 'puppeteer';
import Widget from '../src/js/Widget.js';
import Validator from '../src/js/Validator.js';

jest.setTimeout(20000);

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;

  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  test('should add do something', async () => {
    new Widget();
    Validator.Validate('widget-card-input');
    await page.goto(baseUrl);
    const input = await page.$('.widget-card-input');
    await input.type('6011991626216935');
    const button = await page.$('.widget-card-input-button');
    await button.click();

    await page.waitForSelector('.widget-hint');
    const hint = await page.$('.widget-hint');
    const value = await page.evaluate((el) => el.textContent, hint);
    expect(value).toBe('This card is Valid');
  });

  test('should add do something', async () => {
    new Widget();
    Validator.Validate('widget-card-input');
    await page.goto(baseUrl);
    const input = await page.$('.widget-card-input');
    await input.type('6011991626216936');
    const button = await page.$('.widget-card-input-button');
    await button.click();

    await page.waitForSelector('.widget-hint');
    const hint = await page.$('.widget-hint');
    const value = await page.evaluate((el) => el.textContent, hint);
    expect(value).toBe('This card is invalid');
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });
});
