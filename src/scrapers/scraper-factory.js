
const scraper = require('./scraper/scraper.js');
const aliExpressScraper = require('./src/scrapers/scraper');

class ScraperFactory {
    constructor(config) {
      this.config = config;
    //   console.log('config in Scraper is:\n', config)
    }

    getScraper(source){
        switch(className) {
            case 'aliexpress':
                return new AliExpressScraper(config);
              break;
            case y:
              // code block
              break;
            default:
              // code block
          } 
    }

}
const scraperFactory = new ScraperFactory();
modules.export = scraperFactory;