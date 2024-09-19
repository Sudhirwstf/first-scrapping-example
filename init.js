import puppeteer from "puppeteer";

export const init = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(10 * 60 * 1000);
  // On this new page:
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://rbi.org.in/Scripts/BS_ViewSpeeches.aspx", {
    waitUntil: "domcontentloaded",
  });
  return { page, browser };
};
