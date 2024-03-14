import img from "../assets/bg.webp";

function Hero() {
  return (
    <section className="bg-red w-full grid auto-rows-[172px]">
      <div className="row-span-2 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden gap-10 justify-end p-6  md:col-span-4 md:items-end md:flex-row  md:p-10">
        <img
          src={img}
          alt=""
          className="absolute w-full h-full object-cover left-0 top-0 opacity-45"
        />

        <div className="w-full flex flex-col z-[2] absolute left-0 bottom-0 leading-4 p-5">
          <span className="text-5xl font-bold leading-7">Mario Gomariz</span>
          <span className="text-2xl font-medium leading-9">
            Desarrollador Front-end
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
