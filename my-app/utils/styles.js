import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
    "& nav": {
      marginLeft: 60,
    },
  },
  main: {
    minHeight: "80vh",
    "& form": {
      marginTop: 40,
    },
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
});
export default useStyles;
