import React from "react";
import "./contact.css";
import { IMAGES } from "../../Images";
import { ICONS } from "../../Icons";

export const Contact = () => {
  return (
    <div>
      <div className="contact-header">
        <h1 className="contact-header-txt">Our Contact</h1>

        <text>
          Lorem ipsum dolor sit amet, ad vix tantas incorrupte eloquentiam,
          nihil delicata definitiones eu est. At nam graece virtute, idque
          congue tation iisque facilisi mel ea. Et cum deleniti quaerendum,
          deleniti incorrupte id his, ei
        </text>
      </div>

      <div className="contact-middle-section">
        <img className="map" src={IMAGES.map} />
        <div className="contact-adress-div">
          <h1>149 OceanThemes St, Broughton Rd London, England</h1>
          <text> info.consultax@gmail.com</text>
          <text>+911 0113 0114</text>
          <h2>How can we help</h2>
        </div>
        <div className="all-input-boxes">
          <input placeholder="Email" />
          <div style={{ display: "flex" }}>
            <input placeholder="Password" />
            <input placeholder="Phone number" />
          </div>
          <div style={{ display: "flex" }}>
            <input placeholder="Company" />
            <input placeholder="Address" />
          </div>
          <textarea className="messenger-textarea" placeholder="Messenger" />

          <div className="contactnow-btn"> CONTACT NOW</div>
        </div>
      </div>
    </div>
  );
};
