class AliExpressScraper extends Scraper { 
    
    constructor(config) { 
        super(config);
        // console.log('config inside aliscraper\n', config);
    }

    run(){
        'running inside Aliexpress Scraper';
    }
}
const aliExpressScraper = new AliExpressScraper();
module.exports = aliExpressScraper;