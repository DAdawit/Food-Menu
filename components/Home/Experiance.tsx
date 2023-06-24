import Image from "next/image";

const Experiance = () => {
  const styles2 = {
    backgroundImage: `url('/banner6.jpg')`,
    backgroundSize: "cover",
  };
  return (
    <section>
      <div className="bg-fixed bg-cover bg-center pb-7" style={styles2}>
        <div className="flex flex-col justify-center items-center gap-5 pt-16 ">
          <h1 className=" text-primary font-sans text-sm font-medium text-center ">
            AMAZING EXPERIENCE
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
          <h1 className=" text-secondary text-4xl font-serif">Our Strength</h1>
        </div>
        <div className="flex justify-center pt-3">
          <Image
            src="/crown.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
        </div>
        <div className="flex flex-col justify-center mt-10">
          <h1 className="text-center text-3xl sm:text-5xl font-medium font-serif text-white tracking-wider">
            A modern restaurant with a menu that
          </h1>
          <h1 className="text-center text-3xl sm:text-5xl font-medium font-serif text-white tracking-wider">
            will make your mouth water.
          </h1>
          <h1 className="text-center text-primary font-sans mt-8 font-medium tracking-widest">
            WILLIUM JOE - MASTER CHEF
          </h1>
        </div>

        <div className="grid grid-cols-2 md:flex mt-16 gap-3 justify-evenly content-evenly items-center px-5">
          <div className="flex items-center gap-2 ">
            <h1 className="text-white text-5xl font-medium font-serif">150+</h1>
            <div className="grid items-start text-primary font-mono">
              <h4>DAILY</h4>
              <h4>ORDER</h4>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <h1 className="text-white text-5xl font-medium font-serif">82+</h1>
            <div className="grid items-start text-primary font-mono">
              <h4>SPECIAL</h4>
              <h4>DISHES</h4>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <h1 className="text-white text-5xl font-medium font-serif">10+</h1>
            <div className="grid items-start text-primary font-mono">
              <h4>EXPERT</h4>
              <h4>CHEF</h4>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <h1 className="text-white text-5xl font-medium font-serif">10+</h1>
            <div className="grid items-start text-primary font-mono">
              <h4>AWARDS</h4>
              <h4>WON</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
