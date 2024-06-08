import "@testing-library/cypress/add-commands";
class sauceLabsWeb{
elements ={
    documentLink: () => cy.findByRole('link', { name: "Documentation" }),
    facebookLink: () => cy.findByRole('link', { name: 'Facebook' }),
    facebookUsernameField: () => cy.findByPlaceholderText('Email or phone')
}
}
export default sauceLabsWeb