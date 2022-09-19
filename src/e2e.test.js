import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  test("navigates to the main page", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("#launchid");
    const text = await page.$eval("#launchid", (e) => e.textContent);
    expect(text).toContain("Praveen Gubbala");
  });

  test("navigate to counter",async ()=>{
    await page.goto("http://localhost:3000")
    await page.waitForSelector("#counterlink");
    await page.click("#counterlink")
    await page.waitForSelector("#counterText");
    const text = await page.$eval("#counterText", (e) => e.textContent);
    expect(text).toContain("0");
  })
  afterAll(() => browser.close());
});