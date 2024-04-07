import React from "react";
import "./Bannar.css";
import "./responsive.css";
import { useState, useEffect } from "react";

function Bannar() {
  const [BannerContent, setBannerContent] = useState();

  useEffect(() => {
    setInterval(() => {
      if (
        localStorage.getItem("role") == "admin" ||
        localStorage.getItem("role") == "user"
      ) {
        setBannerContent();
      } else {
        setBannerContent(
          <div className="banner_section layout_padding">
            <div
              id="main_slider"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <h1 className="banner_taital">
                      We
                      <br />
                      Make Your
                      <br />
                      Dream Home
                    </h1>
                    <div className="btn_main">
                      <div className="more_bt">
                        <a href="#">Contact us</a>
                      </div>
                      <div className="contact_bt active">
                        <a href="#">get a quote Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <h1 className="banner_taital">
                      We Design It
                      <br />
                      .We Build It.
                      <br />
                      You Love It
                    </h1>
                    <div className="btn_main">
                      <div className="more_bt">
                        <a href="#">Contact us</a>
                      </div>
                      <div className="contact_bt active">
                        <a href="#">get a quote Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <h1 className="banner_taital">
                      We help plan, budget, and build impressive facilities for
                      the private and public sectors.
                    </h1>
                    <div className="btn_main">
                      <div className="more_bt">
                        <a href="#">Contact us</a>
                      </div>
                      <div className="contact_bt active">
                        <a href="#">get a quote Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#main_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-left">
                  <img src="assets/images/left-icon.png" />
                </i>
              </a>
              <a
                className="carousel-control-next"
                href="#main_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-right">
                  <img src="assets/images/right-icon.png" />
                </i>
              </a>
            </div>
          </div>
        );
      }
    }, 1000);
  }, []);

  return <>{BannerContent}</>;
}

export default Bannar;
