const puppeteer = require('puppeteer');         // Require puppeteer

async function startBrowser(){                  // Function will start the browser and return an instance of it
    let browser;                                // Defined object

    try {
        console.log("Opening the browser......");
        browser = await puppeteer.launch({      // Method launches an instance, returns a promise, await to make sure the Promise resolves
            headless: false,                    // Browser will run with an interface, if deploying scraper to the cloud, set headless to true
            args: ["--disable-setuid-sandbox"], // Host configured
            'ignoreHTTPSErrors': true           // Allows to visit websites that aren’t hosted over a secure HTTPS protocol and ignore any HTTPS-related errors
        })
    } catch (err){                              // If promise gets rejected
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;                             // Return promise
}

module.exports = {                              // Object.startBrowser, key:value == startBrowser:startBrowser
    startBrowser
};