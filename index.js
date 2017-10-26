// TODO(catkeck): Start script here.
const request = require('request');
const cheerio = require("cheerio");
const $ = cheerio.load("https://www.icoalert.com/");

request("https://www.icoalert.com/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    const $ = cheerio.load(body);
    let links = $('a')
    $(links).each(function(i, link){
      console.log($(link).attr('href'));
    });
  }
});