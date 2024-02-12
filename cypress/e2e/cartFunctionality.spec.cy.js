import LoginPage from "../pageobjects/loginpage";
import mainPage from "../pageobjects/mainPage";
import { baseUrl } from "../config";

describe("SwagLabsLoginTest", () => {
  const loginObj = new LoginPage();
  const mainPageObj = new mainPage();
  const prices = [];

  beforeEach(function () {
    cy.visit(baseUrl);
  });

  it("Verify reset functionality is removing items from cart", () => {
    loginObj.enterUsername("standard_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    mainPageObj.elements.addBackPack().click();
    mainPageObj.elements.cart().contains("a", "1");
    mainPageObj.elements.openMenuButton().click();
    mainPageObj.elements.resetButton().click();
    mainPageObj.elements.cart().should("be.visible");
  })

  it("Verify items are added and successfully removed from cart, and cart count has been updated", () => {
    loginObj.enterUsername("standard_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    mainPageObj.elements.addBackPack().click();
    mainPageObj.elements.addBikeLight().click();
    mainPageObj.elements.addBoltTShirt().click();
    mainPageObj.elements.cart().contains("a", "3");
    mainPageObj.elements.removeBackPack().click();
    mainPageObj.elements.removeBikeLight().click();
    mainPageObj.elements.removeBoltTShirt().click();
    mainPageObj.elements.cart().should("be.visible");
  });

  it("Verify all cart items have been added and available inside cart", () => {
    loginObj.enterUsername("standard_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    mainPageObj.elements.addBackPack().click();
    mainPageObj.elements.addBikeLight().click();
    mainPageObj.elements.addBoltTShirt().click();
    mainPageObj.elements.cart().click();
    mainPageObj.elements.backPackLink().should("be.visible");
    mainPageObj.elements.bikeLightLink().should("be.visible");
    mainPageObj.elements.boltTShirtLink().should("be.visible");
  });

  it("Verify payment amount is correctly added for selected cart items ", () => {
    loginObj.enterUsername("standard_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    mainPageObj.elements.addBackPack().click();
    mainPageObj.elements.addBikeLight().click();
    mainPageObj.elements.addBoltTShirt().click();
    mainPageObj.elements.cart().click();
    
    cy.get("#cart_contents_container").within(() => {
      cy.get(".cart_item").each(($item, index, $items) => {
        // get the amount of each item
        cy.wrap($item)
          .find(".cart_quantity")
          .invoke("text")
          .then((quantity) => {
            const totalItems = parseInt(quantity);
            // get price of each item
            cy.wrap($item)
              .find(".inventory_item_price")
              .invoke("text")
              .then((price) => {
                const itemPrice = parseFloat(
                  price.replace("$", "").replace(",", "")
                ); // Remove dollar sign and commas and parse to float
                const totalPriceForItem = itemPrice * totalItems;
                prices.push(totalPriceForItem); // store total price for quantity in an array
                cy.log(
                  `Item ${
                    index + 1
                  }: Quantity = ${totalItems}, Price = ${itemPrice}`
                );
              });
          });
      });
    });
    cy.wrap(prices).then((pricesArray) => {
      Promise.all(pricesArray).then((pricesArray) => {
        //calculate total price 
        const totalPrice = pricesArray.reduce((acc, curr) => acc + curr, 0);
        cy.log("Total Price:", totalPrice);
        mainPageObj.elements.checkOutButton().click();
        mainPageObj.elements.firstName().type("Tewfsf");
        mainPageObj.elements.lastName().type("lastname");
        mainPageObj.elements.postakCode().type("234w4");
        mainPageObj.elements.continueButton().click();
        cy.get(".summary_subtotal_label")
          .invoke("text")
          .then((totalPriceText) => {
            const numericTotalPriceText = parseFloat(
              //remove non digit values from price
              totalPriceText.replace(/[^\d.]/g, "")
            );
            cy.log("Total Price:", numericTotalPriceText);
            //check total price that is calculated by above method is equal to what has been displayed in total summary of price 
            expect(numericTotalPriceText).to.equal(totalPrice);
          });
      });
    });
  });
});
