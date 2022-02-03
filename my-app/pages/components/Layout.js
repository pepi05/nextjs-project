import { Typography, AppBar, Container, Toolbar } from "@material-ui/core";
import Head from "next/head";

import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>First next app</title>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography>next app</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}
