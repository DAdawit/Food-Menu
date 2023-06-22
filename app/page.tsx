"use client";
import Hero from "@/common/Hero";
import Menu from "@/common/Menu";
import MenuTypes from "@/common/MenuTypes";
import { url } from "inspector";
import Image from "next/image";
import { useEffect, useState } from "react";
import { foods } from "@/data/foods";
export default function Home() {
  const styles = {
    backgroundImage: `url('/banner8.jpg')`,
    backgroundSize: "cover",
    postion: "relative",
  };
  return (
    <main className="overflow-hidden">
      <div
        style={styles}
        className=" bg-bgPrimary h-screen w-screen overflow-hidden"
      >
        <div className="relative top-1/4 md:top-1/3 text-center text-white">
          <div className="grid justify-center gap-8">
            <h1 className=" text-primary font-sans text-sm font-medium tracking-wide">
              Delightfull Expriance
            </h1>
            <Image
              src="/separator.png"
              alt="spector"
              width={250}
              height={200}
              className="text-center"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl text-center font-serif mt-2 tracking-wide	">
            Flavors inspired by
          </h1>
          <h1 className="text-4xl text-center font-serif mt-2 tracking-wide	">
            the seasones
          </h1>
          <p className="font-mono mt-2 ">
            Come with family & feel the joy of mouthWatering food
          </p>
          <button className="py-4 px-6  border-2 border-primary mt-4 hover:bg-primary hover:text-black transition-all tracking-wider font-medium font-mono">
            View our menu
          </button>
        </div>
      </div>
      {/* <Hero /> */}
      <div className="bg-bgPrimary  mt-15">
        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <h1 className=" text-primary font-sans text-sm font-medium ">
            FLAVORS FOR ROYALTY
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className=""
          />
          <h1 className=" text-secondary text-4xl font-serif">
            We Offer Top Notch
          </h1>
          <p className="text-secondary font-mono text-sm  contaner mx-auto max-w-2xl px-5 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum has been the industrys standard dummy text
            ever.
          </p>
        </div>
        <div className="grid  sm:flex sm:flex-row justify-evenly">
          <div className="p-3 grid items-center">
            <Image
              src="/breakfast.jpg"
              height={300}
              width={200}
              alt="breakfast"
              className="w-full rounded-lg hover:scale-110 transition-all object-contain"
            />
            <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
              Breakfast
            </h1>
            <button className="text-primary hover:underline transition-all underline-offset-4 text-center">
              View Menu
            </button>
          </div>
          <div className=" p-3 mt-16 grid items-center">
            <Image
              src="/appetizers.jpg"
              height={300}
              width={200}
              alt="appetizers"
              className="w-full rounded-lg hover:scale-110 transition-all object-contain"
            />
            <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
              Appetizers
            </h1>
            <button className="mt-2 text-primary hover:underline transition-all underline-offset-4 text-center">
              View Menu
            </button>
          </div>
          <div className="p-3 grid items-center">
            <Image
              src="/drinks.jpg"
              height={300}
              width={200}
              alt="drinks"
              className="w-full rounded-lg hover:scale-110 transition-all object-contain"
            />
            <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
              Drinks
            </h1>
            <button className="text-primary hover:underline transition-all underline-offset-4 text-center">
              View Menu
            </button>
          </div>
        </div>
      </div>
      {/* <MenuTypes /> */}
      {/* <div className="bg-bgSecondary"> */}
      {/* <Menu /> */}
      <section className="bg-bgSecondary pt-10">
        {/* <div className="grid pt-10  px-5"> */}

        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <h1 className=" text-primary font-sans text-sm font-medium text-center ">
            SPECIAL SELECTION
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
          <h1 className=" text-secondary text-4xl font-serif">
            Delicious Menu
          </h1>
        </div>
        {/* </div> */}
        <hr />
        <div className="flex justify-evenly  text-white font-serif tracking-wider ">
          <h1>MORNING</h1>
          <h1>WEEKDAY LUNCH</h1>
          <h1>DINNER</h1>
          <h1>WINS</h1>
        </div>
        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-5">
          {foods.map((food, index) => (
            <div key={index} className="flex gap-3 shadow-md py-2">
              <div>
                <Image
                  src={`${food.image}`}
                  alt="spector"
                  width={100}
                  height={200}
                  className="text-center rounded-2xl"
                />
              </div>
              <div className="w-full">
                <h1 className="text-gray-400 text-lg font-medium capitalize">
                  {food.name}
                </h1>
                <p className="text-gray-400 text-sm font-mono">
                  {food.ingredients}
                </p>
                <h1 className="text-primary">${food.price}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* </div> */}
    </main>
  );
}
