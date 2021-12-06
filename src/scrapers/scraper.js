class Scraper {
    constructor(config) {
      this.config = config;
      console.log('config in Scraper is:\n', config)
    }

}
const scraper = new Scraper();
module.exports = scraper; 