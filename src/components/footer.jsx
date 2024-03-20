const Footer = () => {
  return (
    <footer className="p-6 text-white bg-black font-Alata">
      <section className="md:w-[90%] mx-auto md:flex items-center justify-between">
        <div className="my-10 md:m-0">
          <span className="block mx-auto md:mx-0 md:my-5 w-fit">
            <img className="w-[150px] h-[25px]" src="./images/logo.svg" alt="logo" />
          </span>
          <ul className="gap-5 mx-auto text-center w-fit md:flex md:m-0">
            <li className="my-5 md:m-0">About</li>
            <li className="my-5 md:m-0">Careers</li>
            <li className="my-5 md:m-0">Events</li>
            <li className="my-5 md:m-0">Products</li>
            <li className="my-5 md:m-0">Support</li>
          </ul>
        </div>

        <div className="my-10 md:m-0">
          <ul className="flex items-center gap-4 mx-auto my-5 md:w-full md:justify-end md:mx-0 w-fit">
            <li>
              <img
                className="w-[24px] h-[24px]"
                src="./images/icon-facebook.svg"
                alt="facebook"
              />
            </li>
            <li>
              <img
                className="w-[24px] h-[24px]"
                src="./images/icon-twitter.svg"
                alt="twitter"
              />
            </li>
            <li>
              <img
                className="w-[24px] h-[24px]"
                src="./images/icon-pinterest.svg"
                alt="pinterest"
              />
            </li>
            <li>
              <img
                className="w-[24px] h-[24px]"
                src="./images/icon-instagram.svg"
                alt="instagram"
              />
            </li>
          </ul>

          <p className="text-center text-DarkGray">
            &copy; 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
