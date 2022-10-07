import React, { useState, useRef } from 'react';
import recipestyle from "../assets/addrecipe.module.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Footers from "../Component/footer";
import Navbar from "../Component/navbar";


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
        <Navbar />
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
      <Footers />
    </div>
  );
};
export default AddRecipe;
