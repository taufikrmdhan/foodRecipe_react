import React from "react";
import { Link } from "react-router-dom";
import profilestyle from "../assets/profile.module.css";
import Footers from "../Component/footer";
import Navbar from "../Component/navbar";

const Profile = () => {
  return (
    <div className={profilestyle.customBody}>
      <header class={profilestyle.customHeader}>
        <nav class="navbar navbar-expand-lg bg-transparent fixed-top p-4">
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
                <li class="nav-item px-3">
                  <Link
                    class={`nav-link active ${profilestyle.customNav}`}
                    aria-current="page"
                    to="/landing"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item px-3">
                  <Link class={`nav-link active ${profilestyle.customNav}`} to="/add">
                    Add Recipe
                  </Link>
                </li>
                <li class="nav-item px-3">
                  <Link class={`nav-link active ${profilestyle.activeCustom} ${profilestyle.customNav}`} to="">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main class={profilestyle.customMain}>
        <section class="my-5">
          <div class="container">
            <div class={`text-center ${profilestyle.customSpace}`}>
              <img src={require("../assets/image/Ellipse 127.png")} alt="photo profile" />
              <button type="button" class={`btn ${profilestyle.btnCustom}`}>
                <a href="#updateProfile" data-bs-toggle="collapse">
                  <img src={require("../assets/image/Vector.png")} class={profilestyle.customAwesome} />
                </a>
              </button>
              <p class={profilestyle.customNameProfile}>Ranti Maria</p>
              <div
                class={`collapse multi-collapse ${profilestyle.customSpaceUpdate}`}
                id="updateProfile"
              >
                <div class={`text-center ${profilestyle.customSpace}`}>
                  <div class="d-flex flex-column">
                    <div>
                      <button type="button" class={`btn ${profilestyle.btnCustomUpdate} my-1`}>
                        Change Photo Profile
                      </button>
                    </div>
                    <div>
                      <button type="button" class={`btn ${profilestyle.btnCustomUpdate} my-1`}>
                        <Link class={profilestyle.aBtn} to="/change">
                          Change Password
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <Link
                class="btn mx-4"
                data-bs-toggle="collapse"
                to="#multiCollapseExample1"
              >
                My Recipe
              </Link>
              <Link
                class="btn mx-4"
                data-bs-toggle="collapse"
                to="#multiCollapseExample2"
              >
                Saved Recipe
              </Link>
              <Link
                class="btn mx-4"
                data-bs-toggle="collapse"
                to="#multiCollapseExample3"
              >
                Liked Recipe
              </Link>
            </p>

            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="container">
                <div class={`${profilestyle.grid12} ${profilestyle.gapMedium}`}>
                  <div class={`${profilestyle.cusGridMd3} position-relative p-0`}>
                    <img
                      src={require("../assets/image/makanan1.png")}
                      class="img-fluid"
                      alt="makanan1"
                    />
                    <span class={`position-absolute ${profilestyle.titleImage}`}>
                      Chicken Kare
                    </span>
                  </div>
                  <div class={`${profilestyle.cusGridMd3} position-relative p-0`}>
                    <img
                      src={require("../assets/image/makanan4.png")}
                      class="img-fluid"
                      alt="makan4"
                    />
                    <span class={`position-absolute ${profilestyle.titleImage}`}>
                      Bomb Chicken
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="container">
                <div class={`${profilestyle.grid12} ${profilestyle.gapMedium}`}>
                  <div class={`${profilestyle.cusGridMd3} position-relative p-0`}>
                    <img
                      src={require("../assets/image/makanan4.png")}
                      class="img-fluid"
                      alt="makanan3"
                    />
                    <span class={`position-absolute ${profilestyle.titleImage}`}>
                      Chicken Kare
                    </span>
                  </div>
                  <div class={`${profilestyle.cusGridMd3} position-relative p-0`}>
                    <img
                      src={require("../assets/image/makanan3.png")}
                      class="img-fluid"
                      alt="makan4"
                    />
                    <span class={`position-absolute ${profilestyle.titleImage}`}>
                      Bomb Chicken
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="collapse multi-collapse" id="multiCollapseExample3">
              <div class="container">
                <div class={`${profilestyle.grid12} ${profilestyle.gapMedium}`}>
                  <div class={`${profilestyle.cusGridMd3} position-relative p-0`}>
                    <img
                      src={require("../assets/image/makanan2.png")}
                      class="img-fluid"
                      alt="makanan3"
                    />
                    <span class={`position-absolute ${profilestyle.titleImage}`}>
                      Chicken Kare
                    </span>
                  </div>
                  <div class={`${profilestyle.cusGridMd3} position-relative p-0`}>
                    <img
                      src={require("../assets/image/makanan9.png")}
                      class="img-fluid"
                      alt="makan4"
                    />
                    <span class={`position-absolute ${profilestyle.titleImage}`}>
                      Bomb Chicken
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footers />
    </div>
  );
};
export default Profile;
