describe("template spec", () => {
  it("Login", () => {
    cy.visit("https://juice-shop.herokuapp.com/#/login");
    cy.get("#email").type("radwanahmed.sqa@gmail.com");
    cy.wait(3000);
    cy.get(".close-dialog").click();
    cy.wait(3000);
    cy.get("#password").type("cse3434rara****AAA");
    cy.get("#loginButton").click();
    cy.wait(3000);

    cy.visit("https://juice-shop.herokuapp.com/#/search");
    cy.get(
      ".mat-grid-tile.ng-star-inserted:nth-child(1)>div .mat-card>div:nth-child(2) .btn-basket"
    ).click();
    cy.wait(3000);
    cy.visit("https://juice-shop.herokuapp.com/#/basket");
    cy.get("#checkoutButton");

    cy.visit("https://juice-shop.herokuapp.com/#/address/select");
    cy.get("button[aria-label='Add a new address']").click();

    cy.wait(3000);

    cy.get("#mat-input-3").type("Bangladesh");
    cy.get("#mat-input-4").type("Radwan");
    cy.get("#mat-input-5").type("01873843384");
    cy.get("#mat-input-6").type("1212");
    cy.get("#address").type("DIT project");
    cy.get("#mat-input-8").type("Dhaka");
    cy.get("#mat-input-9").type("None");
    cy.get("#submitButton").click();

    // cy.get("#mat-input-1").type("Bangladesh");
    // cy.get("#mat-input-2").type("Radwan");
    // cy.get("#mat-input-3").type("01873843384");
    // cy.get("#mat-input-4").type("1212");
    // cy.get("#mat-input-5").type("DIT Project,Badda");
    // cy.get("#mat-input-6").type("Dhaka");
    // cy.get("#mat-input-7").type("None");
  });
});
