import { navigate } from "@reach/router";
import React from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div className="page-Wrapper">
        <h1 className="pageHeading">Hello I Am Index Page of Gatsby Website</h1>{" "}
        <Content data={"This Is Index Page And The Content Will be Dynamic"} />
        <button onClick={() => navigate("/app/client-data-one")}>
          Go to My data-1
        </button>
        <button onClick={() => navigate("/app/client-data-two")}>
          Go to My data-2
        </button>
      </div>
    </Layout>
  );
};
