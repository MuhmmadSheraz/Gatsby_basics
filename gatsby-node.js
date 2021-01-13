exports.createPages = async function ({ actions }) {
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
};
