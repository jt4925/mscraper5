
const Scraper = require('./src/scrapers/scraper');
const AliExpressScraper = require('./src/scrapers/scraper');

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

modules.export = ScraperFactory;