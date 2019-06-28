# This repo contain Selenium-NodeJS Example - How to get screenshot of webpage.
## Requirements
### Install [nodejs](https://nodejs.org/en/)
- for mac you can use brew:
```
brew install node
```
### Download needed driver for desired browser you want to test
- in my case I use [geckodriver](https://github.com/mozilla/geckodriver/releases/) for [Firefox-Mozilla](https://www.mozilla.org/)
- for mac you can use brew:
```
brew install geckodriver
```
### Clone the repo
```
git clone https://github.com/chavo1/selenium-nodejs-scr.git
cd selenium-nodejs-scr
```
### Create a package.json file in the root directory and install [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) just run:
```
npm init -y
npm install selenium-webdriver
```
### Start node and capture a website screenshot of "http://google.com"
```
node index
```
### Screenshot will be saved in your root directory with name "scr.png"