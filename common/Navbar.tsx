import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const styles = {
    backgroundImage: `url('/banner8.jpg')`,
    backgroundSize: "cover",
    postion: "relative",
  };
  return (
    <>
      <div id="Nav" className="flex justify-between bg-bgPrimary py-5 px-10">
        <Link href="/">
          <Image
            src="/delici.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
        </Link>
        <div className="flex justify-evenly gap-3">
          <Link
            href="/"
            className="text-primary text-lg font-medium font-serif focus:underline active:underline"
          >
            Home
          </Link>
          {/* <Link
            href="/menu"
            className="text-primary text-lg font-medium font-serif focus:underline"
          >
            Menu
          </Link> */}
          <Link
            href="#Specials"
            className="text-primary text-lg font-medium font-serif focus:underline"
          >
            Specials
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
