const { Builder, By, Key, util } = require("selenium-webdriver");
async function take_screenshots() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://google.com");
    await driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('google.png', image, 'base64', function(err) {
                console.log(err);
            });
        });
    await driver.get("https://demo.consul.io/ui/dc1/services");
    await driver.sleep(2000);
    await driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('consul_services.png', image, 'base64', function(err) {
                console.log(err);
            });
        });
    await driver.get("https://demo.consul.io/ui/dc1/nodes");
    await driver.sleep(2000);
    await driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('consul_nodes.png', image, 'base64', function(err) {
                console.log(err);
            });
        });
    driver.quit();
}
take_screenshots();