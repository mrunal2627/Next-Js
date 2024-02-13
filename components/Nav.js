import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/"> <a>Home Page </a></Link>
    <Link href="/about"> <a> About Page </a></Link>
    {/* <Link href="/"> <a>Home Page </a></Link>
    <Link href="/"> <a>Home Page </a></Link> */}
  </div>
);
export default Nav;