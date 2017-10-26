const cheerio = require('cheerio')
const $ = cheerio.load('https://www.icoalert.com/')

var urls = []

$('.vsc-initialized .container-main .col-contain-upcoming .col.upcoming .column-count .ico-wrap .ico-links').each(function(index, element){
  urls.push(element)
});

//this logs urlss
console.log(urls)