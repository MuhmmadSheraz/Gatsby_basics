exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
  const user = [
    { name: "Hamza", email: "Hamza@gmail.com" },
    { name: "Ali", email: "Ali32@gmail.com" },
  ];
  actions.createPage({
    path: "localuser",
    component: require.resolve(`./src/Templates/dynamic-page.tsx`),
    context: {
      data: user,
    },
  });
  console.log("End of Gatsby Node File");

  const Fuser = [
    { name: "Mark", email: "Mark@gmail.com" },
    { name: "John", email: "Ali32@gmail.com" },
  ];
  actions.createPage({
    path: "foriegnUser",
    component: require.resolve(`./src/Templates/dynamic-page.tsx`),
    context: {
      data: Fuser,
    },
  });
  console.log("End of Gatsby Node File");
}