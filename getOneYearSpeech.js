export const getOneYearSpeech = async (year, page) => {
  await page.evaluate((year) => {
    const element = document.getElementById(`${year}0`);
    if (element) {
      element.click();
    }
  }, year);

  await page.waitForSelector("table");

  const speeches = await page.evaluate(() => {
    let speeches = [];
    const speecheList = document.querySelectorAll("table tr");

    for (let i = 0; i < speecheList.length - 1; i += 2) {
      const dateElement = speecheList[i].querySelector(".tableheader>b");
      const valueElement = speecheList[i + 1].querySelector("td .link2");
      const pdfElement = speecheList[i + 1].querySelector('a[target="_blank"]');
      if (dateElement && valueElement && pdfElement) {
        const date = dateElement.innerText.trim();
        const value = valueElement.innerText.trim();
        const pdf = pdfElement.href;
        const isPdf = pdf.endsWith(".PDF");
        if (isPdf) speeches.push({ date, value, pdf });
      }
    }
    return speeches;
  });
  return speeches;
};
