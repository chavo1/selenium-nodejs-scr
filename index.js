const { Builder, By, Key, util } = require("selenium-webdriver");
async function take_screenshot() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://google.com");
    await driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('scr.png', image, 'base64', function(err) {
                console.log(err);
            });
        });
}
take_screenshot();