import React from "react";
import "./Home.css";
import { ICONS } from "../../Icons";
import { IMAGES } from "../../Images";
import "../../App.css";

export const Home = () => {
  return (
    <div>
      <div className="home">
        <h1 className="h1">TREND FASHION</h1>
        <text className="slogan">
          Lorem ipsum dolor sit amet, ad vix tantas incorrupte eloquentiam,
          nihil delicata definitiones eu est. At nam graece virtute, idque
          congue tation iisque facilisi mel ea. Et cum deleniti quaerendum,
          deleniti incorrupte id his, ei vim
        </text>
        <br></br>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button className="shop-now-btn">SHOPPING NOW</button>
        </div>
      </div>

      <div className="middle-part">
        <text className="trending-txt">TRENDING</text>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "3%",
            justifyContent: "center",
          }}
        >
          <img className="arrow-btns" src={ICONS.leftArrow} />

          <nav className="each-product">
            <img src={IMAGES.product1} className="sample-product-img" />
            <div className="trending-boxes">
              <div className="stars">
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.emptyStar} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <text>Sample Product</text>
                <img src={ICONS.wishlist} />
              </div>
              <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
              <text className="product-txts">
                Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed
                do eiusmod,quis nostrud exercitation ullamco{" "}
              </text>
              <h2>200$</h2>
            </div>
          </nav>
          <nav className="each-product">
            <img src={IMAGES.shoppr3} className="sample-product-img" />
            <div className="trending-boxes">
              <div className="stars">
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.emptyStar} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <text>Sample Product</text>
                <img src={ICONS.wishlist} />
              </div>
              <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
              <text className="product-txts">
                Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed
                do eiusmod,quis nostrud exercitation ullamco{" "}
              </text>
              <h2>100$</h2>
            </div>
          </nav>
          <nav className="each-product">
            <img src={IMAGES.shoppr5} className="sample-product-img" />
            <div className="trending-boxes">
              <div className="stars">
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.emptyStar} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <text>Sample Product</text>
                <img src={ICONS.wishlist} />
              </div>
              <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
              <text className="product-txts">
                {" "}
                Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed
                do eiusmod,quis nostrud exercitation ullamco{" "}
              </text>
              <h2>150$</h2>
            </div>
          </nav>

          <img className="arrow-btns" src={ICONS.rightArrow} />
        </div>
      </div>

      <div className="collection-box">
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <img className="collection-img" src={IMAGES.man} />
          <text className="collection-txt">WOMAN COLLECTION</text>
        </div>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <img className="collection-img" src={IMAGES.woman} />
          <text className="collection-txt">MAN COLLECTION</text>
        </div>
      </div>

      <div className="middle-part">
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <text className="trending-txt">NEW ARRIVALS</text>
          <ul className="categori-links">
            <li>MEN</li>
            <li>WOMEN</li>
            <li>COUPLE</li>
            <li>SALE</li>
          </ul>
        </nav>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "3%",
            justifyContent: "center",
          }}
        >
          <img className="arrow-btns" src={ICONS.leftArrow} />

          <nav className="each-product">
            <img src={IMAGES.shoppr1} className="sample-product-img" />
            <div className="trending-boxes">
              <div className="stars">
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.emptyStar} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <text>Sample Product</text>
                <img src={ICONS.wishlist} />
              </div>
              <h2>200$</h2>
            </div>
          </nav>
          <nav className="each-product">
            <img src={IMAGES.product2} className="sample-product-img" />
            <div className="trending-boxes">
              <div className="stars">
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.emptyStar} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <text>Sample Product</text>
                <img src={ICONS.wishlist} />
              </div>

              <h2>100$</h2>
            </div>
          </nav>
          <nav className="each-product">
            <img src={IMAGES.product3} className="sample-product-img" />
            <div className="trending-boxes">
              <div className="stars">
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.star} />
                <img src={IMAGES.emptyStar} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <text>Sample Product</text>
                <img src={ICONS.wishlist} />
              </div>
              <h2>150$</h2>
            </div>
          </nav>

          <img className="arrow-btns" src={ICONS.rightArrow} />
        </div>
      </div>
      <div className="footerImg">
        <h1 className="new-h1">The Latest At The Moment</h1>
        <text className="shoplink"> SHOP NOW</text>
      </div>
    </div>
  );
};
