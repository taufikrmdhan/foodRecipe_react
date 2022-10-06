import React from "react";
import { Link } from "react-router-dom";
import landing from "../assets/landingpage.module.css";
import {ReactComponent as User} from "../assets/image/Userpanel.svg";

const LandingPage = () => {
  return (
    <div className={landing.body}>
      <header class={landing.customHeader}>
        <nav class="navbar navbar-expand-lg bg-transparent fixed-top top-navbar">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class={`nav-item ${landing.customNav}`}>
                  <Link
                    class={`nav-link active ${landing.aList} ${landing.activeCustom}`}
                    aria-current="page"
                    to=""
                  >
                    Home
                  </Link>
                </li>
                <li class={`nav-item ${landing.customNav}`}>
                  <Link class={`nav-link active ${landing.aList}`} to="/add">
                    Add Recipe
                  </Link>
                </li>
                <li class={`nav-item ${landing.customNav}`}>
                  <Link class={`nav-link active ${landing.aList}`} to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" class="btn">
                <Link to="/login">
                  <User/>
                </Link>
              </button>
            </div>
          </div>
        </nav>
        <section class={landing.customSectionHead}>
          <div class="container">
            <div class="row">
              <div class="col-md-6 d-flex align-items-start d-flex flex-column justify-content-center">
                <h1 class={landing.h1}>Discover Recipe & Delicious Food</h1>
                <div
                  class={`position-relative w-100 ${landing.customButtonHeader}`}
                >
                  <div class={landing.customIconSearch}>
                    <i
                      class={`fa fa-search ${landing.searchCustom}`}
                      aria-hidden="true"
                    ></i>
                    {/* <img
                      src={require("../assets/image/search.svg")}
                      class=
                      alt="icon search"
                    /> */}
                  </div>
                  <input
                    type="search"
                    placeholder="Search restaurant,food"
                    class={landing.inputSearchCustom}
                  />
                </div>
              </div>
              <div class={`col-md-6 ${landing.imgWrapper}`}>
                <div class={landing.imgHeader}>
                  <img
                    src={require("../assets/image/makanan1.png")}
                    class="img-fluid"
                    alt="img icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section class="container py-5">
          <div class={landing.customRectangle}>
            <h3 className={landing.h3}>Popular For You</h3>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class={landing.imgMainPopular}>
                <img
                  src={require("../assets/image/makanan2.png")}
                  class="img-fluid"
                  alt="image2"
                />
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center flex-column p-5">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <hr class="w-25" />
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <div>
                <button type="button" class={`btn ${landing.btnCustom}`}>
                  <Link class={landing.aBtn} to="/detail">
                    Learn more
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="container py-5">
          <div class={`mb-5 ${landing.customRectangle}`}>
            <h3 className={landing.h3}>New Recipe</h3>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class={landing.imgMainNewRecipe}>
                <img
                  src={require("../assets/image/makanan9.png")}
                  class="img-fluid"
                  alt="image3"
                />
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center flex-column p-5">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <hr class="w-25" />
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <div>
                <button type="button" class={`btn ${landing.btnCustom}`}>
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="container">
          <div class={`mb-5 ${landing.customRectangle}`}>
            <h3 className={landing.h3}>Popular Recipe</h3>
          </div>
          <div class={`${landing.grid12} ${landing.gapMedium}`}>
            <div class={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan3.png")}
                class="img-fluid"
                alt="makanan3"
              />
              <span class={`position-absolute ${landing.titleImage}`}>
                Chicken Kare
              </span>
            </div>
            <div class={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan4.png")}
                class="img-fluid"
                alt="makan4"
              />
              <span class={`position-absolute ${landing.titleImage}`}>
                Bomb Chicken
              </span>
            </div>
            <div class={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan5.png")}
                class="img-fluid"
                alt="makan5"
              />
              <span class={`position-absolute ${landing.titleImage}`}>
                Banana Smooth
              </span>
            </div>
            <div class={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan6.png")}
                class="img-fluid"
                alt="makan6"
              />
              <span class={`position-absolute ${landing.titleImage}`}>
                Coffe Lava Cake
              </span>
            </div>
            <div class={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan7.png")}
                class="img-fluid"
                alt="makan7"
              />
              <span class={`position-absolute ${landing.titleImage}`}>
                Sugar Salmon
              </span>
            </div>
            <div class={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan8.png")}
                class="img-fluid"
                alt="makan8"
              />
              <span class={`position-absolute ${landing.titleImage}`}>
                Indian Salad
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer class={`container-fluid mt-5 ${landing.customFooter}`}>
        <div class="text-center m-5">
          <h4 class={landing.h4}>Eat, Cook, Repeat</h4>
          <p class="text-muted">Share your best recipe by uploading here !</p>
        </div>
        <nav class=" d-flex justify-content-center">
          <div class={`container ${landing.customInnerFooter}`}>
            <div class={`${landing.footerLinks}`}>
              <ul class="navbar-nav d-flex flex-row">
                <li class={landing.customListFooter}>
                  <Link class={landing.aList} to="">
                    Product
                  </Link>
                </li>
                <li class={landing.customListFooter}>
                  <Link class={landing.aList} to="">
                    Company
                  </Link>
                </li>
                <li class={landing.customListFooter}>
                  <Link class={landing.aList} to="">
                    Learn More
                  </Link>
                </li>
                <li class={landing.customListFooter}>
                  <Link class={landing.aList} to="">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
            <div class={landing.customArcademy}>
              <p>© Arcademy</p>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};
export default LandingPage;
