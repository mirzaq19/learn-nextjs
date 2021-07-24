import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="logo" width={49} height={50} />
      </div>
      <div className="navlink">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
}
