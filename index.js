const axios = require("axios");
const cheerio = require("cheerio");

const ICO_ALERT_URL = "https://www.icoalert.com/";

console.log("Fetching ICO Alert...");
axios.get(ICO_ALERT_URL).then(({ data }) => {
  console.log("Parsing ICO Alert...");
  parseIcoAlert(data);
});

const parseIcoAlert = html => {
  const $ = cheerio.load(html);

  // TODO(catkeck): Parse out urls from the anchor tags.
  $(".upcoming .ico-wrap .ico-links").each(console.log);
};
