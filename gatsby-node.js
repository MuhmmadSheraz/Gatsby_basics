exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
  const user = [
    { name: "Hamza", email: "Hamza@gmail.com" },
    { name: "Ali", email: "Ali32@gmail.com" },
  ];
  const Fuser = [
    { name: "Mark", email: "Mark@gmail.com" },
    { name: "John", email: "Ali32@gmail.com" },
  ];
  actions.createPage({
    path: "localuser",
    component: require.resolve(`./src/Templates/dynamic-page.tsx`),
    context: {
      data: user,
    },
  });

  actions.createPage({
    path: "foriegnUser",
    component: require.resolve(`./src/Templates/dynamic-page.tsx`),
    context: {
      data: Fuser,
    },
  });
};
