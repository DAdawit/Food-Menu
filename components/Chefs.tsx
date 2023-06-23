import Image from "next/image";
import React from "react";

const Chefs = () => {
  return (
    <div>
      <div className="bg-bgThird mt-15">
        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <h1 className=" text-primary font-sans text-sm font-medium ">
            EXPERIENCED TEAM
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className=""
          />
          <h1 className=" text-secondary text-4xl font-serif">Meet Our Chef</h1>
        </div>
        <div className="grid sm:flex sm:flex-row justify-evenly mt-5">
          <div className="p-3 grid items-center  w-96">
            <Image
              src="/chefs/chef1.jpg"
              height={300}
              width={200}
              alt="breakfast"
              className="w-full rounded-lg object-contain h-96"
            />
            <div className="px-7 flex flex-col gap-2">
              <h1 className="text-secondary  tracking-wider font-sans mt-5 text-2xl">
                Willium Joe
              </h1>
              <h1 className="text-primary text-sm  font-sans">MASTER CHEF</h1>
              <p className="text-sm text-gray-300 text-start font-serif tracking-wide">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </p>
            </div>
          </div>
          <div className="p-3 grid items-center w-96">
            <Image
              src="/chefs/chef2.jpg"
              height={300}
              width={200}
              alt="appetizers"
              className="w-full rounded-lg object-contain h-96"
            />
            <div className="px-7 flex flex-col gap-2">
              <h1 className="text-secondary  tracking-wider font-sans mt-5 text-2xl">
                Steave Den
              </h1>
              <h1 className="text-primary text-sm  font-sans">MASTER CHEF</h1>
              <p className="text-sm text-gray-300 text-start font-serif tracking-wide">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </p>
            </div>
          </div>
          <div className="p-3 grid items-center w-96">
            <Image
              src="/chefs/chef3.jpg"
              height={300}
              width={200}
              alt="drinks"
              className=" rounded-lg object-contain w-96 h-96"
            />
            <div className="px-7 flex flex-col gap-2">
              <h1 className="text-secondary  tracking-wider font-sans mt-5 text-3xl">
                Lily Sopy
              </h1>
              <h1 className="text-primary text-sm  font-sans">MASTER CHEF</h1>
              <p className="text-sm text-gray-300 text-start font-serif tracking-wide">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
