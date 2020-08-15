import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Homepage/Home";
import { ICONS } from "./Icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AboutUs } from "./components/AboutUs/About";
import { Contact } from "./components/Contact/ContactUs";
import { Blog } from "./components/Blog/Blog";
import { Shop } from "./components/Shop/Shop";

// npm install react-router-dom
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div className="header-div">
            <text className="link-texts right-border">Language</text>
            <text className="link-texts">USD</text>
            <input className="search-input" placeholder="search"></input>
            <img className="icons" src={ICONS.search} />
            <text className="header-txt">WISHLIST</text>
            <img className="icons" src={ICONS.wishlist} />
            <text className="header-txt">CART</text>
            <img className="icons" src={ICONS.cart} />
          </div>
          <div>
            <div className="fortune">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                  alignItems: "center",
                }}
              >
                <h1 className="logo-txt">Fortune</h1>
                <div>
                  <Link className="link-lists  right-border" to="/">
                    Home
                  </Link>
                  <Link className="link-lists right-border" to="/about">
                    About Us
                  </Link>
                  <Link className="link-lists right-border" to="/shop">
                    Shop
                  </Link>
                  <Link className="link-lists right-border" to="/blog">
                    Blog
                  </Link>
                  <Link className="link-lists" to="/contact">
                    Contact
                  </Link>
                </div>
                <div className="sosial-media-div">
                  <img src={ICONS.instagram} />
                  <img src={ICONS.facebook} />
                  <img src={ICONS.pinterest} />
                </div>
              </div>

              <Switch>
                <Route path="/about">
                  <AboutUs />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/shop">
                  <Shop />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <footer>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <h2 className="footerh2"> COMPANY</h2>

              <ul className="uls">
                <li>Profile</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Adress </li>
              </ul>
            </div>
            <div>
              <h2 className="footerh2">COMMUNITY</h2>

              <ul className="uls">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>InstagramLinke</li>
                <li>din</li>
              </ul>
            </div>
            <div>
              <h2 className="footerh2">RETURNS</h2>

              <ul className="uls">
                <li>FAQs</li>
                <li>Size Guide</li>
                <li>Contact Us</li>
                <li>Sell with us </li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div>
              <h1 className="footer-adress">Fortune</h1>
              <div style={{ width: "180px" }}>
                <text>
                  Street addresses:445 Mount Eden Road,Mount Eden,
                  Aucklan-Postcodes:5022
                </text>
              </div>
              <br />
              <div className="footer-sosial-media">
                <img src={ICONS.instagram} />
                <img src={ICONS.facebook} />
                <img src={ICONS.pinterest} />
              </div>
            </div>
            <div></div>
          </div>
          <hr className="footer-hr" />

          <div className="copyright-txts">
            <text>Status </text>
            <text>Contact Us</text>

            <text className="copyright">CopyRight © 2019,Template</text>
          </div>
          <hr style={{ marginBottom: "40px" }} />
        </footer>
      </Router>
    </div>
  );
}

export default App;
