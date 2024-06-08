import "@testing-library/cypress/add-commands";
import LoginPage from "../pageobjects/loginpage";
import mainPage from "../pageobjects/mainPage";

const loginObj = new LoginPage();
const mainPageObj = new mainPage();
let linksWithStatus = [];
const capturedUrls = [];
const baseURL = Cypress.env("baseUrl");

function checkAndLogBrokenLinks() {
  cy.get("a")
    .each(($link) => {
      const href = $link.prop("href");
      if (href && href !== "#") {
        cy.request({ url: href, failOnStatusCode: false }).then((response) => {
          linksWithStatus.push({
            url: href,
            status: response.status,
          });
        });
      }
    })
    .then(() => {
      cy.log("Links with status codes:", linksWithStatus);
    });
}
beforeEach(function () {
  cy.visit(baseURL);
});

describe("Capture all URLs", () => {
  it("Visit main website and log all urls with 200 and other status codes ", () => {
    loginObj.enterUsername("standard_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    checkAndLogBrokenLinks();
  });
});
