import { Button, ButtonGroup } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import "./style.css";
import Switch from "react-switch";

import faceOrg1 from "../images/faceOrg1.jpg";
import faceBlur1 from "../images/faceBlur1.jpg";
import facePix1 from "../images/facePix1.jpg";
import faceDN1 from "../images/faceDN1.jpg";

import faceOrg2 from "../images/faceOrg2.jpg";
import faceBlur2 from "../images/faceBlur2.jpg";
import facePix2 from "../images/facePix2.jpg";
import faceDN2 from "../images/faceDN2.jpg";

import faceOrg3 from "../images/faceOrg3.jpg";
import faceBlur3 from "../images/faceBlur3.jpg";
import facePix3 from "../images/facePix3.jpg";
import faceDN3 from "../images/faceDN3.jpg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  activeButton: {
    background: "grey",
    color: "white",
  },
}));

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [switchChecked, setSwitchChecked] = React.useState(false);

  const [blur, setBlur] = useState(false);
  const [pixelated, setPixelated] = useState(false);
  const [deepNatural, setDeepNatural] = useState(false);

  const [active, setActive] = useState("");

  const handleBlur = (e) => {
    setBlur(true);
    setDeepNatural(false);
    setPixelated(false);

    setActive("first");
  };
  const handlePixelated = (e) => {
    setBlur(false);
    setDeepNatural(false);
    setPixelated(true);

    setActive("second");
  };
  const handleDeepNatural = (e) => {
    setBlur(false);
    setDeepNatural(true);
    setPixelated(false);

    setActive("third");
  };

  const handleChangeChecked = (switchChecked) => {
    setSwitchChecked(switchChecked);
    setBlur(false);
    setDeepNatural(false);
    setPixelated(false);
  };

  const checkNext = () => {
    const labels = document.querySelectorAll("#slider label");
    const nextIndex =
      selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
    //console.log(selectedIndex)
  };

  const check = (index) => setSelectedIndex(index);

  const classes = useStyles();

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
              {switchChecked && blur && !pixelated && !deepNatural ? (
                <img
                  className="fea"
                  src={faceBlur1}
                  height="100%"
                  width="100%"
                  alt="f"
                />
              ) : (
                <>
                  {switchChecked && !blur && !pixelated && deepNatural ? (
                    <img
                      className="fea"
                      src={faceDN1}
                      height="100%"
                      width="100%"
                      alt="f"
                    />
                  ) : (
                    <>
                      {switchChecked && !blur && pixelated && !deepNatural ? (
                        <img
                          className="fea"
                          src={facePix1}
                          height="100%"
                          width="100%"
                          alt="f"
                        />
                      ) : (
                        <img
                          className="fea"
                          src={faceOrg1}
                          height="100%"
                          width="100%"
                          alt="f"
                        />
                      )}
                    </>
                  )}
                </>
              )}
            </label>
            <label htmlFor="s2" id="slide2">
              {switchChecked && blur && !pixelated && !deepNatural ? (
                <img
                  className="fea"
                  src={faceBlur2}
                  height="100%"
                  width="100%"
                  alt="f"
                />
              ) : (
                <>
                  {switchChecked && !blur && !pixelated && deepNatural ? (
                    <img
                      className="fea"
                      src={faceDN2}
                      height="100%"
                      width="100%"
                      alt="f"
                    />
                  ) : (
                    <>
                      {switchChecked && !blur && pixelated && !deepNatural ? (
                        <img
                          className="fea"
                          src={facePix2}
                          height="100%"
                          width="100%"
                          alt="f"
                        />
                      ) : (
                        <img
                          className="fea"
                          src={faceOrg2}
                          height="100%"
                          width="100%"
                          alt="f"
                        />
                      )}
                    </>
                  )}
                </>
              )}
            </label>
            <label htmlFor="s3" id="slide3">
              {switchChecked && blur && !pixelated && !deepNatural ? (
                <img
                  className="fea"
                  src={faceBlur3}
                  height="100%"
                  width="100%"
                  alt="f"
                />
              ) : (
                <>
                  {switchChecked && !blur && !pixelated && deepNatural ? (
                    <img
                      className="fea"
                      src={faceDN3}
                      height="100%"
                      width="100%"
                      alt="f"
                    />
                  ) : (
                    <>
                      {switchChecked && !blur && pixelated && !deepNatural ? (
                        <img
                          className="fea"
                          src={facePix3}
                          height="100%"
                          width="100%"
                          alt="f"
                        />
                      ) : (
                        <img
                          className="fea"
                          src={faceOrg3}
                          height="100%"
                          width="100%"
                          alt="f"
                        />
                      )}
                    </>
                  )}
                </>
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
        <div className={ switchChecked? "showcase__button__group" : "showcase__button__group__disabled"}>
          {/* <Button
            onClick={handleBlur}
            id="first"
            name="first"
            className={active === "first" ? `${classes.activeButton}` : ""}
          >
            Blur
          </Button>
          <Button
            name="second"
            // className={active === "second" ? `${classes.activeButton}` : ""}
            color="inherit"
            ba
            onClick={handlePixelated}
            id="second"
          >
            Pixelated
          </Button>

          <Button
            className={active === "third" ? `${classes.activeButton}` : ""}
            name="third"
            onClick={handleDeepNatural}
            id="third"
          >
            Deep natural
          </Button> */}
          <button className={blur && switchChecked ? "showcase__button__active": "showcase__button"} onClick={handleBlur} ><span className="showcase__button__span">Blur</span></button>
          <button className={pixelated && switchChecked ? "showcase__button__active": "showcase__button"} onClick={handlePixelated}><span className="showcase__button__span">Pixelated</span></button>
          <button className={deepNatural && switchChecked ? "showcase__button__active": "showcase__button"} onClick={handleDeepNatural}><span className="showcase__button__span">Deep natural</span></button>
        </div>
      </div>
      <div className="switch-box">
        <label className="switch-label">Reveal</label>
        <Switch 
        handleDiameter={14}
        width={36}
        height={18}
        offColor="#D9DEE2"
        onColor="#C6F985"
        onHandleColor="#184952"
        offHandleColor="#184952"
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={handleChangeChecked} 
        checked={switchChecked} />
        <label className="switch-label" style={{color:"#C6F985"}}>Anonymize</label>
      </div>
    </div>
  );
};

export default Slider;
