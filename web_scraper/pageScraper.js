const scraperObject = {                         // Create an object literal
    url: 'https://www.hikingproject.com/',      // URL of the web page to scrape
    async scraper(browser){                     // Passed in instance as an argument
        let page = await browser.newPage();     // Creates a new page instance in the browser
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);              // Navigate to URL
    }
}

module.exports = scraperObject;