var webdriverio = require("webdriverio");
var options = {
    desiredCapabilities: {
        browserName: "firefox"
    }
};
const expect = require("chai").expect;

describe("UI", () => {
    let browser;

    beforeEach(() => {
        browser = webdriverio.remote(options).init().url("http://localhost:8081/");
    });

    afterEach(() => {
        browser.close();
    });

    it("has a page title", () =>
        browser
            .getTitle()
            .then(title => {
                console.log(title)
                expect(title).to.equal("Fibonacci Plot");
            })
            .end());
})