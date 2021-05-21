const pageScraper = require('./pageScraper');  // Require file to export 

async function scrapeAll(browserInstance){
    let browser;                               // Object
    
    try{
        browser = await browserInstance;       // Browser instance controls pageScraper.js file
        await pageScraper.scraper(browser);    // Passes instance as an argument

    }
    catch(err){                                // If promise does not resolve
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance) // Exports anonymous function that takes in the browser instance and passes it to function