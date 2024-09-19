import { getSpeeches } from "./getSpeeches.js";
import { init } from "./init.js";

const { page, browser } = await init();
await getSpeeches(page);
await browser.close();
