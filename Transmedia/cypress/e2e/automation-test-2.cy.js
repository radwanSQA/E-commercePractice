describe("verify searc", () => {
  it("search", () => {
    cy.visit("https://juice-shop.herokuapp.com/#/");
    cy.get(
      ".mat-icon.notranslate.mat-ripple.mat-search_icon-search.ng-tns-c253-1.material-icons.mat-ligature-font.mat-icon-no-color"
    ).click();
    cy.get("#mat-input-0").type("apple").type("{enter}");

    //cy.get(".ng-star-inserted").should("have.length", 2);

    cy.get(".item-name").contains("Apple").should("exist");

    cy.get(".item-name").contains("Banana").should("not.exist");
  });
});
