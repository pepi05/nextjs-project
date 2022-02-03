import { Typography, AppBar, Container, Toolbar } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import useStyles from "../utils/styles";
import Footer from "./widgets/Footer";
import Navbar from "./widgets/Navbar";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>First next app</title>
      </Head>
      <Navbar classes={classes} />
      <Container className={classes.main}>{children}</Container>
      <Footer classes={classes} />
    </div>
  );
};

export default Layout;
