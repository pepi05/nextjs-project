import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";
import NavLikns from "./NavLinks";
import NextLink from "next/link";

const Navbar = ({ classes }) => {
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link href="/">
            <Typography>Petar app</Typography>
          </Link>
        </NextLink>
        <NavLikns />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
