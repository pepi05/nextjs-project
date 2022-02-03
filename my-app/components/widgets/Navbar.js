import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";

const Navbar = ({ classes }) => {
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Link href="/">
          <Typography>Petar app</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
