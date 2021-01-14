const path = require("path");
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulGatsbyBasics {
        nodes {
          titlle
          updatedAt
          blogImage {
            title
            updatedAt
            file {
              url
            }
          }
          blogContent {
            raw
          }
        }
      }
    }
  `);
  result.data.allContentfulGatsbyBasics.nodes.forEach((item) => {
    console.log("Item ===>", item.blogImage.file.url);

    createPage({
      path: `/blogs/${item.titlle}`,
      component: path.resolve("./src/Templates/Blogs.tsx"),
      context: {
        blogData: item,
      },
    });
  });
  console.log(JSON.stringify(result));
};
