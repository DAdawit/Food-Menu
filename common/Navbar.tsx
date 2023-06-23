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
      <div className=" bg-bgPrimary px-5 py-5  border-y-2 border-bgButton 0">
        <div className="flex justify-between">
          <Link href="#" className="text-white">
            Home
          </Link>
          <Link href="#" className="text-white">
            Home
          </Link>
          <div>
            {/* <Image
              src="/delici.png"
              alt="spector"
              width={100}
              height={200}
              className="text-center"
            /> */}
          </div>
          <div>
            <Link href="#" className="text-white">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
