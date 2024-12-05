import moisil2 from "../../assets/moisil2.png";
import logoo from "../../assets/logoo.png";


const Footer = () => {
  return <footer className="bg-bcg2 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt='logoo' src={logoo} />
            <img className="mt-5"alt='moisil2' src={moisil2} />
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve?language=en</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Instagram: https://www.instagram.com/eduforgrowth/   @eduforgrowth</p>
          <p>educationforgrowth.com@gmail.com</p>
        </div>
    </div>

  </footer>
};

export default Footer
