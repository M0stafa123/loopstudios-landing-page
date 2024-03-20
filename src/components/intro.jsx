import Nav from "./nav";
const Intro = () => {
  return (
    <header className="bg-introMobile after:-z-10 z-10 md:bg-introDesktop gradient after:bg-none after:bg-[#00000078] bg-center bg-cover p-6  md:h-[700px] h-screen">
      <section className="md:w-[90%] md:mx-auto">
        <Nav />
        <p className="relative  w-[300px] md:w-[500px] mt-64 md:mt-24 text-4xl md:text-6xl p-4 border-2 border-white mx-auto md:mx-0 md:mr-auto text-white font-JosefinSans">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </p>
      </section>
    </header>
  );
};

export default Intro;
