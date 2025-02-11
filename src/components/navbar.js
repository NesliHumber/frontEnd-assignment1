import Link from "next/link";
import navbarStyles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
