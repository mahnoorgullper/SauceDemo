import "@testing-library/cypress/add-commands";

class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginBtn: () => cy.get('[data-test="login-button"]'),
    error: () => cy.get('[data-test="error"]'),
    
    

  
  };

  enterUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  enterPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

}

export default LoginPage;
