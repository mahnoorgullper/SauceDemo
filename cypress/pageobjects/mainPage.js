import "@testing-library/cypress/add-commands";

class mainPage {
  elements = {
    cart: () => cy.get("#shopping_cart_container a"),
    addBackPack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    addBikeLight: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
    addBoltTShirt: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
    removeBackPack: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    removeBikeLight: () => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
    removeBoltTShirt: () =>
      cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]'),
    backPackLink: () => cy.findByRole("link", { name: "Sauce Labs Backpack" }),
    bikeLightLink: () =>
      cy.findByRole("link", { name: "Sauce Labs Bike Light" }),
    boltTShirtLink: () =>
      cy.findByRole("link", { name: "Sauce Labs Bolt T-Shirt" }),
    checkOutButton: () => cy.get('[data-test="checkout"]'),
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postakCode: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    orderSuccessMessage: () =>
      cy.findByRole("heading", { name: "Thank you for your order!" }),
    resetButton: () => cy.findByRole("link", { name: "Reset App State" }),
    openMenuButton: () => cy.findByRole("button", { name: "Open Menu" }),
    allItemLink: () => cy.findByRole("link", { name: "All Items" }),
    aboutLink: () => cy.findByRole("link", { name: "About" }),
    sauceLabsLink: () => cy.findByRole("link", { name: "Saucelabs" }),
    logoutLink: () => cy.findByRole("link", { name: "Logout" }),
  };
}
export default mainPage;
