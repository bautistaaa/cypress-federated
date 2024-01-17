export const tests = [
  {
    visit: "/",
    description: "check if Vite is visible",
    validate: (cy) => {
      cy.contains("Vite");
    },
  },
];
