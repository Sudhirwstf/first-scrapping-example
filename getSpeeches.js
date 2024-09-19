import { getOneYearSpeech } from "./getOneYearSpeech.js";
import { saveSpeechesToMongoDB } from "./saveSpeechesToMongoDB.js";

const allSpeeches = [];

export const getSpeeches = async (page) => {
  // Get page data
  const years = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("div.accordionButton")).map(
      (link) => link.innerText
    );
  });

  for (const year of years) {
    const speeches = await getOneYearSpeech(year, page);
    allSpeeches.push(...speeches);
  }
  await saveSpeechesToMongoDB(allSpeeches);
};
