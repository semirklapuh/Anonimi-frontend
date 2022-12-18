import { Button, ButtonGroup } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import "./style.css";
import Switch from "react-switch";

import platesOrg1 from "../images/platesOrg1.jpg";
import platesBlur1 from "../images/platesBlur1.jpeg";
import platesOrg2 from "../images/platesOrg2.jpeg";
import platesBlur2 from "../images/platesBlur2.jpeg";
import platesOrg3 from "../images/platesOrg3.jpg";
import platesBlur3 from "../images/platesBlur3.jpeg";

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [switchChecked, setSwitchChecked] = React.useState(false);

  const [blur, setBlur] = React.useState(false);

  const handleChangeChecked = (switchChecked) => {
    setSwitchChecked(switchChecked);
  };
  const handleBlur = () => {
    setBlur(true);
  };

  const checkNext = () => {
    const labels = document.querySelectorAll("#slider label");
    const nextIndex =
      selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };

  const check = (index) => setSelectedIndex(index);

  return (
    <div>
      <div className="sliderFlex">
        <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center arrow-left">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
            <Button
              variant="outline"
              startIcon={<ArrowBackIosIcon />}
              size="large"
              onClick={checkNext}
            >
              {""}
            </Button>
          </div>
        </div>
        <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
          <section
            id="slider"
            className="w-16 h-20 inline-flex items-center justify-center  flex-shrink-0"
          >
            <input
              type="radio"
              name="slider"
              id="s1"
              checked={selectedIndex === 0}
              onClick={() => check(0)}
            />
            <input
              type="radio"
              name="slider"
              id="s2"
              checked={selectedIndex === 1}
              onClick={() => check(1)}
            />
            <input
              type="radio"
              name="slider"
              id="s3"
              checked={selectedIndex === 2}
              onClick={() => check(2)}
            />
            <label htmlFor="s1" id="slide1">
              {switchChecked && blur ? (
                <img
                  className="fea"
                  src={platesBlur1}
                  height="100%"
                  width="100%"
                  alt="f"
                />
              ) : (
                <img
                  className="fea"
                  src={platesOrg1}
                  height="100%"
                  width="100%"
                  alt="f"
                />
              )}
            </label>
            <label htmlFor="s2" id="slide2">
              {switchChecked && blur ? (
                <img
                  className="fea"
                  src={platesBlur2}
                  height="100%"
                  width="100%"
                  alt="f"
                />
              ) : (
                <img
                  className="fea"
                  src={platesOrg2}
                  height="100%"
                  width="100%"
                  alt="f"
                />
              )}
            </label>
            <label htmlFor="s3" id="slide3">
              {switchChecked && blur ? (
                <img
                  className="fea"
                  src={platesBlur3}
                  height="100%"
                  width="100%"
                  alt="f"
                />
              ) : (
                <img
                  className="fea"
                  src={platesOrg3}
                  height="100%"
                  width="100%"
                  alt="f"
                />
              )}
            </label>
          </section>
        </div>
        <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex  flex-col text-center items-center arrow-right">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
            <Button
              variant="outline"
              startIcon={<ArrowForwardIosIcon />}
              size="large"
              onClick={checkNext}
            >
              {""}
            </Button>
          </div>
        </div>
      </div>
      <div className="row-btn">
        <ButtonGroup aria-label="primary button group">
          <Button
            className="type-btn"
            onClick={handleBlur}
            id="first1"
            disabled={true}
          >
            Blur
          </Button>
          <Button className="type-btn" onClick={handleBlur} id="second1">
            Pixelated
          </Button>

          <Button className="type-btn" id="third1" disabled={true}>
            Deep natural
          </Button>
        </ButtonGroup>
      </div>
      <div className="switch-box">
        <label className="switch-label">Original</label>
        <Switch onChange={handleChangeChecked} checked={switchChecked} />
        <label className="switch-label">Anonymize</label>
      </div>
    </div>
  );
};

export default Slider;
