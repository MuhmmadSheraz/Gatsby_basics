import React, { FunctionComponent } from "react";
import Layout from "../components/Layout";
import ClientDataOne from "../components/ClientDataOne";
import ClientDataTwo from "../components/ClientDataTwo";
import { RouteComponentProps, Router } from "@reach/router";

const app = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <ClientDataOne path="/client-data-one" />
        <ClientDataTwo path="/client-data-two" />
      </Router>
    </Layout>
  );
};

export default app;
