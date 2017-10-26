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


request("https://www.icoalert.com/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    const $ = cheerio.load(body);
    let links = $('a')
    $(links).each(function(i, link){
      console.log($(link).attr('href'));
    });
    // console.log($);
    // let length = $('.ico-links').children().first().text();
    // console.log(length)
    // let text = $('src').filter('.upcoming').attr('class');
    // // let text = $('.col.upcoming .ico-links').attr("src");
    // console.log(text);
    // $('ico-links').each(function(i, element){
    //   let a = $(this);
    //   console.log(a.text());
    // });
  }
});