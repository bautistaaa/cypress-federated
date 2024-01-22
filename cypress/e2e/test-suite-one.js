const tests = [
  {
    visit: "/",
    description: "check if Vite is visible",
    validate: (cy) => {
      cy.contains("Vite");
    },
  },
  {
    visit: "/",
    description: "check if ggrandi is visible",
    validate: (cy) => {
      cy.contains("ggrandi");
    },
  },
];
