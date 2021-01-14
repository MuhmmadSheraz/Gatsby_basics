import { navigate } from "@reach/router";
import React from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
export default () => {
  return (
    <Layout>
      <div className="page-Wrapper">
        <h1 className="pageHeading">Hello I Am Index Page of Gatsby Website</h1>{" "}
        <Content data={"This Is Index Page And The Content Will be Dynamic"} />
        <div className="div-center">
          <Button
            onClick={() => navigate("/app/client-data-one")}
            variant="contained"
            color="primary"
          >
            Go to My data-1
          </Button>
          <Button
            onClick={() => navigate("/app/client-data-two")}
            variant="contained"
            color="secondary"
          >
            Go to My data-2
          </Button>
        </div>
      </div>
    </Layout>
  );
};
