const scraperObject = {                         // Create an object literal
    url: 'https://www.hikingproject.com/',      // URL of the web page to scrape
    async scraper(browser){                     // Passed in instance as an argument
        let page = await browser.newPage();     // Creates a new page instance in the browser
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);              // Navigate to URL
        
        // Check page is rendered, 'div class=main-content-container' must render
        // If not, scroll to render

        // Input user's city into placeholder of <input class="form-control>
        // Loop through <div class="suggestion-results">
        // Match <a class="suggestion city"></a> with users location
        // Click matching <a class="suggestion city"></a>

        // In <div class="filter-container hike">
        // Click <button>Difficulty</button>
        // Uncheck all levelss but users level preference
        // Repeat process with distance button
    }
}

module.exports = scraperObject;