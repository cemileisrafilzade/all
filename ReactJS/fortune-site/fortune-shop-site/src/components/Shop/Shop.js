import React from "react";
import "./shop.css";
import { IMAGES } from "../../Images";
import { ICONS } from "../../Icons";

export const Shop = () => {
  return (
    <div>
      <div className="contact-header">
        <h1 className="header-shops">The Latest At The Moment</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "-100px" }}>
            <text>SPECIAL PRICE</text>
            <h1 className="percentageh1">30% </h1>
            <h2 style={{ color: "white" }}>OFF</h2>
          </div>
          <h2 className="shop-now-link">Shop Now</h2>
        </div>
      </div>

      <div className="contact-middle-section">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>PRODUCT</h1>
          <text style={{ cursor: "pointer" }}>
            Home > Product > Page 1 of 1
          </text>
        </div>
        <div style={{ display: "flex" }}>
          <div className="blue-filter-box">Filter</div>
          <div className="grey-box">
            <div className="featured-btn">Featured</div>
          </div>
        </div>
        <div></div>

        <div style={{ display: "flex" }}>
          <div className="filter-box">
            <h3>BRAND</h3>
            <ul>
              <li>
                <div className="checkbox" />
                Chanel
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                Gap
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                Levis
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                Cardinal
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                Wrangler
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                Converse
              </li>
            </ul>
            <hr style={{ marginLeft: "15px", marginRight: "15px" }} />

            <h3>SIZE</h3>
            <ul>
              <li>
                <div className="checkbox" />
                XS
              </li>
              <li>
                {" "}
                <div className="checkbox" />S
              </li>
              <li>
                {" "}
                <div className="checkbox" />M
              </li>
              <li>
                {" "}
                <div className="checkbox" />L
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                XL
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                XXL
              </li>
            </ul>
            <hr style={{ marginLeft: "15px", marginRight: "15px" }} />
            <h3>COLOR</h3>
            <div className="colors">
              <div>
                <div style={{ backgroundColor: "red" }}></div>
                <div style={{ backgroundColor: "blue" }}></div>
                <div style={{ backgroundColor: "black" }}></div>
              </div>
              <div>
                <div style={{ backgroundColor: "orange" }}></div>
                <div style={{ backgroundColor: "green" }}></div>
                <div style={{ backgroundColor: "yellow" }}></div>
              </div>
              <div>
                <div style={{ backgroundColor: "lightblue" }}></div>
                <div style={{ backgroundColor: "pink" }}></div>
                <div style={{ backgroundColor: "lightgreen" }}></div>
              </div>
            </div>
            <hr style={{ marginLeft: "15px", marginRight: "15px" }} />

            <h3>PRICE</h3>
            <ul>
              <li>
                <div className="checkbox" />
                0-100$
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                100$-350$
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                350$-600$
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                600$-1000$
              </li>
              <li>
                {" "}
                <div className="checkbox" />
                more 600$
              </li>
            </ul>
          </div>
          <div></div>

          <div>
            <div style={{ alignItems: "center" }}>
              <div style={{ display: "flex" }}>
                <nav className="each-product-shop">
                  <img
                    src={IMAGES.product1}
                    className="shop-sample-product-img"
                  />
                  <div className="trending-boxes">
                    <div className="stars">
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.emptyStar} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <text>Sample Product</text>
                      <img src={ICONS.wishlist} />
                    </div>
                    <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                    <text className="product-txts">
                      Lorem ipsum dolor sit amet, consectetaur adipisircitation
                      ullamco{" "}
                    </text>
                    <h2>200$</h2>
                  </div>
                </nav>
                <nav className="each-product-shop">
                  <img
                    src={IMAGES.shoppr2}
                    className="shop-sample-product-img"
                  />
                  <div className="trending-boxes">
                    <div className="stars">
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.emptyStar} />
                      <img src={IMAGES.emptyStar} />
                      <img src={IMAGES.emptyStar} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <text>Sample Product</text>
                      <img src={ICONS.wishlist} />
                    </div>
                    <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                    <text className="product-txts">
                      Lorem ipsum dolor sit amet, consectetaur adicitation
                      ullamco{" "}
                    </text>
                    <h2>120$</h2>
                  </div>
                </nav>
              </div>
              <div style={{ display: "flex" }}>
                <nav className="each-product-shop">
                  <img
                    src={IMAGES.shoppr3}
                    className="shop-sample-product-img"
                  />
                  <div className="trending-boxes">
                    <div className="stars">
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.emptyStar} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <text>Sample Product</text>
                      <img src={ICONS.wishlist} />
                    </div>
                    <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                    <text className="product-txts">
                      Lorem ipsum dolor sit amet, consectetaur adipisicind
                      exercitation ullamco{" "}
                    </text>
                    <h2>300$</h2>
                  </div>
                </nav>
                <nav className="each-product-shop">
                  <img
                    src={IMAGES.shoppr4}
                    className="shop-sample-product-img"
                  />
                  <div className="trending-boxes">
                    <div className="stars">
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <text>Sample Product</text>
                      <img src={ICONS.wishlist} />
                    </div>
                    <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                    <text className="product-txts">
                      Lorem ipsum dolor sit amet, consectetaur adipision ullamco{" "}
                    </text>
                    <h2>500$</h2>
                  </div>
                </nav>
              </div>
              <div style={{ display: "flex" }}>
                <nav className="each-product-shop">
                  <img
                    src={IMAGES.shoppr5}
                    className="shop-sample-product-img"
                  />
                  <div className="trending-boxes">
                    <div className="stars">
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <text>Sample Product</text>
                      <img src={ICONS.wishlist} />
                    </div>
                    <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                    <text className="product-txts">
                      Lorem ipsum dolor sit amet, consectetaur adipisicitation
                      ullamco{" "}
                    </text>
                    <h2>50$</h2>
                  </div>
                </nav>
                <nav className="each-product-shop">
                  <img
                    src={IMAGES.shoppr6}
                    className="shop-sample-product-img"
                  />
                  <div className="trending-boxes">
                    <div className="stars">
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.star} />
                      <img src={IMAGES.emptyStar} />
                      <img src={IMAGES.emptyStar} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "shop-space-between",
                      }}
                    >
                      <text>Sample Product</text>
                      <img src={ICONS.wishlist} />
                    </div>
                    <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                    <text className="product-txts">
                      Lorem ipsum dolor sit amet, consectetaur adipisicing ation
                      ullamco{" "}
                    </text>
                    <h2>70$</h2>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
