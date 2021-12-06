class AliExpressScraper extends Scraper { 
    
    constructor(config) { 
        super(config);
        // console.log('config inside aliscraper\n', config);
    }

    run(){
        'running inside Aliexpress Scraper';
    }
}

module.exports = AliExpressScraper;