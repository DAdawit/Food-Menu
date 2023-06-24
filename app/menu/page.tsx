import Appetizers from "@/components/Menu/Appetizers";
import Hero from "@/components/Menu/Hero";
import MainDishes from "@/components/Menu/MainDishes";

const page = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Appetizers />
      </section>
      <section>
        <MainDishes />
      </section>
    </>
  );
};

export default page;
