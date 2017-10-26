// TODO(catkeck): Start script here.
const request = require('request');
const cheerio = require("cheerio");
const $ = cheerio.load("https://www.icoalert.com/");

// let blah = $(element).find('.ico-links')
// // $(".ico-links").each(function(index, element) {
// //   urls.push(element);
// // });

// var urls = $(
//  ".upcoming .ico-wrap"
// ).map(function(element) {
//  console.log(element);
// });

// console.log(urls);


request("https://www.icoalert.com/", function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
    const $ = cheerio.load(html);
    $('ico-wrap').each(function(i, element){
      var a = $(this).prev();
      console.log(a.text());
    });
  }
});