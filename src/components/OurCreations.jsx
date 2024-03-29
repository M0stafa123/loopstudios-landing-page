const OurCreations = () => {
  return (
    <article className="p-6 my-10 creations font-JosefinSans">
      <div className="items-center md:flex md:justify-between md:my-5 md:w-[90%] mx-auto">
        <h1 className="mb-5 text-4xl text-center md:m-0">OUR CREATIONS</h1>
        <button className="hidden btn md:block">SEE ALL</button>
      </div>
      <section className="grid md:grid-cols-4 gap-5 mx-auto md:w-[90%]">
        <div className="bg-earthMobile md:bg-earthDesktop gradient">
          <h1 className="w-[130px] ">DEEP EARTH</h1>
        </div>
        <div className="bg-arcadeMobile  md:bg-arcadeDesktop gradient">
          <h1 className="w-[130px] ">NIGHT ARCADE</h1>
        </div>
        <div className="bg-soccerMobile md:bg-soccerDesktop gradient">
          <h1 className="w-[130px] ">soccer team vr</h1>
        </div>

        <div className="bg-gridMobile md:bg-gridDesktop gradient">
          <h1 className="w-[100px] ">the grid</h1>
        </div>
        <div className="bg-aboveMobile md:bg-aboveDesktop gradient">
          <h1 className="w-[130px] ">from up above vr</h1>
        </div>
        <div className="bg-pocketMobile md:bg-pocketMDesktop gradient">
          <h1 className="w-[130px] ">POCKET BOREALIS</h1>
        </div>
        <div className="bg-curiosityMobile md:bg-curiosityDesktop gradient">
          <h1 className="w-[130px] ">THE CURIOSITY</h1>
        </div>
        <div className="bg-fisheyeMobile md:bg-fisheyeDesktop gradient">
          <h1 className="w-[130px] ">MAKE IT FISHEYE</h1>
        </div>
      </section>

      <button className="block mx-auto btn md:hidden">SEE ALL</button>
    </article>
  );
};

export default OurCreations;
