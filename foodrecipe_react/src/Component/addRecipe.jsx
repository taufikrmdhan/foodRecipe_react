import React, { useState, useRef } from 'react';
import recipestyle from "../assets/addrecipe.module.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const AddRecipe = () => {
    const hiddenFileInput = useRef(null);
    // const navigate = useNavigate();
    const [image, setImage] = useState("");

    // const [form, setForm] = useState({
    //     title: "",
    //     ingredients: "",
    //     video: "",
    // })

    // const onChangeInput = (e, field) => {
    //     setForm({
    //         ...form,
    //         [field]: e.target.value,
    //     });
    // }
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        document.getElementById("customBtn").innerHTML = fileUploaded.name;
        setImage(fileUploaded);
    }
  return (
    <div className={recipestyle.customBody}>
      <header className={recipestyle.customHeader}>
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top p-4">
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
                <li className="nav-item px-3">
                  <Link
                    className={`nav-link active ${recipestyle.customNav}`}
                    aria-current="page"
                    to="/landing"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link className={`nav-link active ${recipestyle.customNav} ${recipestyle.activeCustom}`} href="">
                    Add Recipe
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link className={`nav-link active ${recipestyle.customNav}`} to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="container mt-5">
            <form className="mx-5">
              <div className="mb-3">
                <div className={recipestyle.rectangle}>
                  <div>
                    <img
                      src={require("../assets/image/image.png")}
                      alt=""
                      className={recipestyle.imageAdd}
                      id="customBtn"
                    />
                  </div>

                  <h5 className="text-muted" id="customBtn" onClick={handleClick}>
                    Add image
                  </h5>
                </div>
                <input
                  className={recipestyle.input}
                  type="file"
                  ref={hiddenFileInput}
                  id="formFile"
                  onChange={handleChange}
                  style={{display: "none"}}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${recipestyle.input}`}
                  id="exampleInputEmail1"
                  placeholder="Title"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control ${recipestyle.textArea}`}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Ingredients"
                ></textarea>
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control ${recipestyle.textArea}`}
                  id="exampleFormControlTextarea1"
                  rows="1"
                  placeholder="Video"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className={`btn ${recipestyle.btnCustomArea}`}>
                  Post
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className={`container-fluid mt-5 ${recipestyle.customFooter}`}>
        <div className="text-center m-5">
          <h4 className={recipestyle.h4}>Eat, Cook, Repeat</h4>
          <p className="text-muted">Share your best recipe by uploading here !</p>
        </div>
        <nav className="d-flex justify-content-center">
          <div className={`container ${recipestyle.customInnerFooter}`}>
            <div className={recipestyle.footerLinks}>
              <ul className="navbar-nav d-flex flex-row">
                <li className={recipestyle.customListFooter}>
                  <a href="">Product</a>
                </li>
                <li className={recipestyle.customListFooter}>
                  <a href="">Company</a>
                </li>
                <li className={recipestyle.customListFooter}>
                  <a href="">Learn More</a>
                </li>
                <li className={recipestyle.customListFooter}>
                  <a href="">Get In Touch</a>
                </li>
              </ul>
            </div>
            <div className={recipestyle.customArcademy}>
              <p>© Arcademy</p>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};
export default AddRecipe;
