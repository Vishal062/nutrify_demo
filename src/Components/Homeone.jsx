import { React } from "react";
import { FiArrowRight } from "react-icons/fi";
import { VscListFlat } from "react-icons/vsc";
export const Homepage = () => {
  return (
    <div>
      <div className="sty1">
        <div className="a1">Nutrify</div>
        <div className="a2">
          <VscListFlat />
        </div>
      </div>
      <div className="sty2">
        <img
          className="img1"
          alt="Logo"
          src={require("../../public/Apple_Black_1.png")}
        />
        <div className="sty3">
          <p>Introducing...</p>
          <p className="p1">Nutricon</p>
          <p>self tracking nutrition device</p>
          <div className="logo2">
            Explore <FiArrowRight />
          </div>
        </div>
      </div>

      <div>
        <p className="p2">
          Know your nutritional deficiency with a simple test
        </p>
        <button className="btn2">TAKE A TEST</button>
      </div>

      <div className="div2">
        <p className="p3">How Nutricon works?</p>
        <div className="p4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae neque,
          sed sed purus. Arcu quam nibh varius vel orci. Diam, integer leo vitae
          feugiat cursus ac. Adipiscing lectusid amet vel proin. At sit
          elementum egestas varius libero, orci. Sed adipiscing in adipiscing
          nunc. Egestas mi donec leohac mattis.
        </div>
        <div>
        <img className="img2" alt="logo2"
        src={require("../../public/nutriconWorks.png")}/>
      </div>
      <button className="btn3">
        BOOK A FREE TRAIL</button>
      </div>

      
    </div>
  );
};
