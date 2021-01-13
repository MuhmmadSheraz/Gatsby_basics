import React from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div className="page-Wrapper">
        <h1 className="pageHeading">This Is Contact Page</h1>
        <Content data={"This Is Index Page And The Content Will be Dynamic"} />
      </div>
    </Layout>
  );
};
