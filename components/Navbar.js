import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar shadow">
      <div className="container">
        <h2>Navbar</h2>
        <div>
          <ul className="d-flex justify-content-around align-item-center">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/post/blog">
                <a>Post</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
