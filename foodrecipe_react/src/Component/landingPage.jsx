import React from "react";
import { Link } from "react-router-dom";
import landing from "../assets/landingpage.module.css";
import {ReactComponent as User} from "../assets/image/Userpanel.svg";

const LandingPage = () => {
  return (
    <div className={landing.body}>
      <header className={landing.customHeader}>
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top top-navbar">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className={`nav-item ${landing.customNav}`}>
                  <Link
                    className={`nav-link active ${landing.aList} ${landing.activeCustom}`}
                    aria-current="page"
                    to=""
                  >
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${landing.customNav}`}>
                  <Link className={`nav-link active ${landing.aList}`} to="/add">
                    Add Recipe
                  </Link>
                </li>
                <li className={`nav-item ${landing.customNav}`}>
                  <Link className={`nav-link active ${landing.aList}`} to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="btn">
                <Link to="/login">
                  <User/>
                </Link>
              </button>
            </div>
          </div>
        </nav>
        <section className={landing.customSectionHead}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-start d-flex flex-column justify-content-center">
                <h1 className={landing.h1}>Discover Recipe & Delicious Food</h1>
                <div
                  className={`position-relative w-100 ${landing.customButtonHeader}`}
                >
                  <div className={landing.customIconSearch}>
                    <i
                      className={`fa fa-search ${landing.searchCustom}`}
                      aria-hidden="true"
                    ></i>
                    {/* <img
                      src={require("../assets/image/search.svg")}
                      className=
                      alt="icon search"
                    /> */}
                  </div>
                  <input
                    type="search"
                    placeholder="Search restaurant,food"
                    className={landing.inputSearchCustom}
                  />
                </div>
              </div>
              <div className={`col-md-6 ${landing.imgWrapper}`}>
                <div className={landing.imgHeader}>
                  <img
                    src={require("../assets/image/makanan1.png")}
                    className="img-fluid"
                    alt="img icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="container py-5">
          <div className={landing.customRectangle}>
            <h3 className={landing.h3}>Popular For You</h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className={landing.imgMainPopular}>
                <img
                  src={require("../assets/image/makanan2.png")}
                  className="img-fluid"
                  alt="image2"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center flex-column p-5">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <hr className="w-25" />
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <div>
                <button type="button" className={`btn ${landing.btnCustom}`}>
                  <Link className={landing.aBtn} to="/detail">
                    Learn more
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <div className={`mb-5 ${landing.customRectangle}`}>
            <h3 className={landing.h3}>New Recipe</h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className={landing.imgMainNewRecipe}>
                <img
                  src={require("../assets/image/makanan9.png")}
                  className="img-fluid"
                  alt="image3"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center flex-column p-5">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <hr className="w-25" />
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <div>
                <button type="button" className={`btn ${landing.btnCustom}`}>
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className={`mb-5 ${landing.customRectangle}`}>
            <h3 className={landing.h3}>Popular Recipe</h3>
          </div>
          <div className={`${landing.grid12} ${landing.gapMedium}`}>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan3.png")}
                className="img-fluid"
                alt="makanan3"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Chicken Kare
              </span>
            </div>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan4.png")}
                className="img-fluid"
                alt="makan4"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Bomb Chicken
              </span>
            </div>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan5.png")}
                className="img-fluid"
                alt="makan5"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Banana Smooth
              </span>
            </div>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan6.png")}
                className="img-fluid"
                alt="makan6"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Coffe Lava Cake
              </span>
            </div>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan7.png")}
                className="img-fluid"
                alt="makan7"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Sugar Salmon
              </span>
            </div>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan8.png")}
                className="img-fluid"
                alt="makan8"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Indian Salad
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className={`container-fluid mt-5 ${landing.customFooter}`}>
        <div className="text-center m-5">
          <h4 className={landing.h4}>Eat, Cook, Repeat</h4>
          <p className="text-muted">Share your best recipe by uploading here !</p>
        </div>
        <nav className=" d-flex justify-content-center">
          <div className={`container ${landing.customInnerFooter}`}>
            <div className={`${landing.footerLinks}`}>
              <ul className="navbar-nav d-flex flex-row">
                <li className={landing.customListFooter}>
                  <Link className={landing.aList} to="">
                    Product
                  </Link>
                </li>
                <li className={landing.customListFooter}>
                  <Link className={landing.aList} to="">
                    Company
                  </Link>
                </li>
                <li className={landing.customListFooter}>
                  <Link className={landing.aList} to="">
                    Learn More
                  </Link>
                </li>
                <li className={landing.customListFooter}>
                  <Link className={landing.aList} to="">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
            <div className={landing.customArcademy}>
              <p>© Arcademy</p>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};
export default LandingPage;
