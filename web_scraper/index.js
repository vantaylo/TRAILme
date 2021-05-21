const browserObject = require('./browser');             // Require files to export their functions
const scraperController = require('./pageController');

let browserInstance = browserObject.startBrowser();     // Start browser and create a browser instance

scraperController(browserInstance)                      // Pass the browser instance to the scraper controller
