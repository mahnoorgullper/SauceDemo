import sauceLabsWeb from "../pageobjects/sauceLabs";
import LoginPage from "../pageobjects/loginpage";

describe("sauceDemo web navigation", () => {
  const loginObj = new LoginPage();
  const sauceLabObj = new sauceLabsWeb();
  const userName = "standard_user";
  const passWord = "secret_sauce";

  it("Verify page links", () => {
    const webUrl = Cypress.env("baseUrl");
    cy.visit(webUrl);
    loginObj.enterUsername(userName);
    loginObj.enterPassword(passWord);
    loginObj.clickLogin();
    sauceLabObj.elements.facebookLink().should("be.visible");
    sauceLabObj.elements.facebookLink().invoke("removeAttr", "target").click();
    cy.url().should("include", "https://www.facebook.com/saucelabs");
    sauceLabObj.elements.facebookUsernameField().should("be.visible");
    cy.go("back");
  });
});
