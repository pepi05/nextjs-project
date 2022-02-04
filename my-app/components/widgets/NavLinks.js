import { Link } from "@material-ui/core";
import NextLink from "next/link";

const NavLikns = () => {
  return (
    <nav>
      <NextLink href="/favourite" passHref>
        <Link>Favourite</Link>
      </NextLink>
      <NextLink href="/about" passHref>
        <Link href="/about">About </Link>
      </NextLink>
    </nav>
  );
};

export default NavLikns;
