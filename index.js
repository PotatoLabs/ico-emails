// TODO(catkeck): Start script here.
const request = require('request');
const cheerio = require("cheerio");
const $ = cheerio.load("https://www.icoalert.com/");
var urls = []
request("https://www.icoalert.com/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    const $ = cheerio.load(body);
    var links = $('.col-contain-upcoming').find('a')
    $(links).each(function(i, link){
      urls.push($(link).attr('href'));
    });
  }
  var emails = []
  urls.map(function(url){
    console.log(url)
    request(url, function (error, response, body){
      if (!error && response.statusCode == 200) {
        console.log(body.match(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gi));
      }
    })
  })

});