const VR = () => {
  return (
    <article className="p-6 my-6 ">
      <section className="relative mx-auto md:w-[90%] md:flex">
        <span className="w-full">
          <img
            className="block md:hidden"
            src="./images/mobile/image-interactive.jpg"
            alt="interactive"
          />
          <img
            className="hidden md:block  h-auto w-[70%]"
            src="./images/desktop/image-interactive.jpg"
            alt="interactive"
          />
        </span>
        <div className="relative min-h-[180px] max-w-[500px]  mx-auto md:w-[420px] md:p-8 md:bottom-[-10%] md:h-1/2 md:text-start md:right-[15%] md:flex justify-center flex-col md:m-0  my-5 text-center bg-white font-JosefinSans md:absolute">
          <h2 className="my-5 text-3xl md:text-4xl max-w-[400px] mx-auto ">
            THE LEADER IN INTERACTIVE VR
          </h2>
          <p className=" font-Alata text-DarkGray text-base md:text-xs !leading-[1.8]">
            Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand.
          </p>
        </div>
      </section>
    </article>
  );
};

export default VR;
