const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const http = require("http");
const axios = require("axios");

const scraperFactory = require('./src/scrapers/scraper-factory.js');
// const scraper = require("./src/scrapers/scraper");

const config = {
    source: 'aliexpress',
    comments: true,
    cLevel: 3,
    targetItemCount: 60,
    pageUrlTemplate: "https://www.aliexpress.com/category/1509/jewelry-accessories.html?trafficChannel=main&catName=jewelry-accessories&CatId=1509&ltype=wholesale&SortType=default&page=[PAGE_NUMBER]&isrefine=y",
    launchOptions: {
        headless: false
    }
};


class Main {
    constructor(config) {
      this.config = config;
      console.log('config is:\n', config)

      let scraper = scraperFactory.getScraper(config.source);

    }

    run(){
        
    }
}

let x = new Main(config);