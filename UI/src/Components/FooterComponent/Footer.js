import React from "react";
import "./Footer.css";
import "./responsive.css";
function Footer() {
  return (
    <>
      {/* footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="map_text">
                <a href="#">
                  <img
                    src="assets/images/map-icon.png"
                    className="image_main"
                  />
                  <span className="padding_left_10">
                    Lane No.04 Behind Girls College,Pune (MH.)
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="map_text">
                <a href="#">
                  <img
                    src="assets/images/call-icon.png"
                    className="image_main"
                  />
                  <span className="padding_left_10">(+91 88888 02201)</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="map_text">
                <a href="#">
                  <img
                    src="assets/images/mail-icon.png"
                    className="image_main"
                  />
                  <span className="padding_left_10">
                    sonawaneshivtej12@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer section end */}
    </>
  );
}

export default Footer;
