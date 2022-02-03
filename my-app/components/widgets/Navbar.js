import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = ({ classes }) => {
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography>Petar app</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
