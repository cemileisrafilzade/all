import React from "react";
import "./blog.css";
import { IMAGES } from "../../Images";
import { ICONS } from "../../Icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export const Blog = () => {
  return (
    <div>
      <div className="contact-header">
        <h1 className="contact-header-txt">Blog</h1>
        <text>
          Lorem ipsum dolor sit amet, ad vix tantas incorrupte eloquentiam,
          nihil delicata definitiones eu est. At nam graece virtute, idque
          congue tation iisque facilisi mel ea. Et cum deleniti quaerendum,
          deleniti
        </text>
      </div>

      <div className="contact-middle-section">
        <div style={{ display: "flex" }}>
          <div className="blog-left-div">
            <div className="blog-img-div">
              <img className="blog-imgs" src={IMAGES.clothes} />
              <img className="blog-img-icons1" src={ICONS.share} />
              <img className="blog-img-icons2" src={ICONS.wishlist} />
            </div>
            <text className="red-txt">OCTOBER 3, 2018 IN GRAPHIC DESIGN</text>
            <h1 className="blog-h1">
              EGESTAS VOLUTE NEMO THE IPSAM SODALES THE TURPIS
            </h1>

            <text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </text>
            <div className="contactnow-btn">
              <text>READ MORE</text>
            </div>

            <div className="blog-img-div">
              <img className="blog-imgs" src={IMAGES.hat} />
              <img className="blog-img-icons1" src={ICONS.share} />
              <img className="blog-img-icons2" src={ICONS.wishlist} />
            </div>
            <text className="red-txt">OCTOBER 3, 2018 IN GRAPHIC DESIGN</text>
            <h1 className="blog-h1">
              EGESTAS VOLUTE NEMO THE IPSAM SODALES THE TURPIS
            </h1>

            <text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </text>
            <div className="contactnow-btn">
              <text>READ MORE</text>
            </div>
          </div>

          <div className="blog-right-div">
            <div className="border-div">
              <input className="blog-search" placeholder="Search" />
              <h2 className="red-txt">NEWS</h2>

              <ul className="blog-ul">
                <li>→ Fabric opening</li>

                <li>→ Applied DNA Sciences</li>

                <li>→ HanesBrands Awarded Ninth</li>

                <li>→ Fruit Of The Loom </li>

                <li>→ Honored For Energy Efforts</li>

                <li>→ ITMA 2019 Floor Space Sells </li>
                <li>→ RECENT COMMENT</li>
              </ul>
            </div>
            <div className="border-div">
              <h2 className="red-txt">RECENT POST</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img className="left-part-imgs" src={IMAGES.masc} />
                <text className="left-txts">
                  Lorem Ipsum is simply been the industry's standard dummy text
                  ever since the 1500s
                </text>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img className="left-part-imgs" src={IMAGES.hand} />
                <text className="left-txts">
                  Lorem Ipsum is simply been the industry's standard dummy text
                  ever since the 1500s
                </text>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img className="left-part-imgs" src={IMAGES.custom} />
                <text className="left-txts">
                  Lorem Ipsum is simply been the industry's standard dummy text
                  ever since the 1500s
                </text>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img className="left-part-imgs" src={IMAGES.clothes} />
                <text className="left-txts">
                  Lorem Ipsum is simply been the industry's standard dummy text
                  ever since the 1500s
                </text>
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div className="pages-div">
          <text>Prev</text>
          <text style={{ color: "#0754ae" }}>1</text>
          <text>2</text>
          <text>3</text>
          <text>Next></text>
        </div>
      </div>
    </div>
  );
};
