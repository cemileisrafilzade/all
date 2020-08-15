import React from "react";
import "./about.css";
import { IMAGES } from "../../Images";

export const AboutUs = () => {
  return (
    <div>
      <div className="header">
        <h1 className="logo">About Us</h1>
        <text className="header-paragraph">
          Lorem ipsum dolor sit amet, ad vix tantas incorrupte eloquentiam,
          nihil delicata definitiones eu est. At nam graece virtute, idque
          congue tation iisque facilisi mel ea. Et cum deleniti quaerendum,
          deleniti incorrupte id his, ei
        </text>
      </div>

      <div className="about-middle-part">
        <div style={{ display: "flex", alignItems: "center", margin: "35px" }}>
          <img className="about-imgs" src={IMAGES.about1} />
          <div style={{ paddingLeft: "10px" }}>
            <text>LOREM IPSUM</text>
            <h1 className="about-h1">About our Model Fashion</h1>
            <text>
              Lorem ipsum dolor sit amet, ad vix tantas incorrupte eloquentiam,
              nihil cilisi mel ea. Et cum deleniti quaerendum, deleniti
              incorrupte id his, ei
            </text>
            <text className="learnmore-txt">LEARN MORE</text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "40px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "block", flex: 0 }}>
            <img className="middle-imgs" src={IMAGES.about2} />

            <img className="middle-imgs" src={IMAGES.about3} />
          </div>
          <img className="middle-bigger-img" src={IMAGES.about4} />
        </div>
      </div>

      <div className="about-footer-section">
        <div>
          <h1 className="history-header">History About Us</h1>
        </div>

        <text>
          Lorem ipsum dolor sit amet, ad vix tantas incorrupte eloquentiam,
          nihil cilisi mel ea. Et cum deleniti quaerendum, deleniti incorrupte
          id his, ei rem ipsum dolor sit amet, ad vix tantas incorrupte
          eloquentiam, nihil cilisi mel ea. Et cum deleniti quaerendum, deleniti
          incorru
        </text>
      </div>
    </div>
  );
};
