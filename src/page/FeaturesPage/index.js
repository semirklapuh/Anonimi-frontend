import React from "react";
import "./style.css";

import firstIcon from "../../assets/firstIcon.png";
import secondIcon from "../../assets/secondIcon.png";
import thirdIcon from "../../assets/thirdIcon.png";
import fourthIcon from "../../assets/fourthIcon.png";
import fifthIcon from "../../assets/fifthIcon.png";
import sixthIcon from "../../assets/sixthIcon.png";

const Features = () => {
  return (
    <div id="features-section" className="features-section">
      <div className="box-centered">
        <div className="column first-row">
          <div className="row">
            <div className="feature-box">
              <div className="feature-img-box">
                <img src={firstIcon} alt="feature-img" />
              </div>
              <div className="feature-info-box">
                <h5 className="feature-title">Face Anonymization</h5>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vel, tincidunt vitae, lacus, placerat pharetra, mauris.
                  Pellentesque volutpat lacinia pharetra feugiat velit
                  adipiscing sed eu. Arcu est, sed metus, semper nunc at eget.
                  Viverra magna diam eget hendrerit augue sagittis consectetur
                  ac velit. Nisi, orci, tempus id dictumst vestibulum mattis.
                </p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-img-box">
                <img src={secondIcon} alt="feature-img" />
              </div>
              <div className="feature-info-box">
                <h5 className="feature-title">API Access</h5>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vel, tincidunt vitae, lacus, placerat pharetra, mauris.
                  Pellentesque volutpat lacinia pharetra feugiat velit
                  adipiscing sed eu. Arcu est, sed metus, semper nunc at eget.
                  Viverra magna diam eget hendrerit augue sagittis consectetur
                  ac velit. Nisi, orci, tempus id dictumst vestibulum mattis.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="feature-box">
              <div className="feature-img-box">
                <img src={thirdIcon} alt="feature-img" />
              </div>
              <div className="feature-info-box">
                <h5 className="feature-title">Licence plates anonymization</h5>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vel, tincidunt vitae, lacus, placerat pharetra, mauris.
                  Pellentesque volutpat lacinia pharetra feugiat velit
                  adipiscing sed eu. Arcu est, sed metus, semper nunc at eget.
                  Viverra magna diam eget hendrerit augue sagittis consectetur
                  ac velit. Nisi, orci, tempus id dictumst vestibulum mattis.
                </p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-img-box">
                <img src={fourthIcon} alt="feature-img" />
              </div>
              <div className="feature-info-box">
                <h5 className="feature-title">
                  Fully encrypted data processing
                </h5>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vel, tincidunt vitae, lacus, placerat pharetra, mauris.
                  Pellentesque volutpat lacinia pharetra feugiat velit
                  adipiscing sed eu. Arcu est, sed metus, semper nunc at eget.
                  Viverra magna diam eget hendrerit augue sagittis consectetur
                  ac velit. Nisi, orci, tempus id dictumst vestibulum mattis.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="feature-box">
              <div className="feature-img-box">
                <img src={fifthIcon} alt="feature-img" />
              </div>
              <div className="feature-info-box">
                <h5 className="feature-title">Deep natural anonimization</h5>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vel, tincidunt vitae, lacus, placerat pharetra, mauris.
                  Pellentesque volutpat lacinia pharetra feugiat velit
                  adipiscing sed eu. Arcu est, sed metus, semper nunc at eget.
                  Viverra magna diam eget hendrerit augue sagittis consectetur
                  ac velit. Nisi, orci, tempus id dictumst vestibulum mattis.
                </p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-img-box">
                <img src={sixthIcon} alt="feature-img" />
              </div>
              <div className="feature-info-box">
                <h5 className="feature-title">Anonimi platform</h5>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vel, tincidunt vitae, lacus, placerat pharetra, mauris.
                  Pellentesque volutpat lacinia pharetra feugiat velit
                  adipiscing sed eu. Arcu est, sed metus, semper nunc at eget.
                  Viverra magna diam eget hendrerit augue sagittis consectetur
                  ac velit. Nisi, orci, tempus id dictumst vestibulum mattis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
