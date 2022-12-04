import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import "./style.css";

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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
              <img
                className="fea"
                src="https://picsum.photos/600/400"
                height="100%"
                width="100%"
                alt="f"
              />
            </label>
            <label htmlFor="s2" id="slide2">
              <img
                className="fea"
                src="https://picsum.photos/600/500"
                height="100%"
                width="100%"
                alt="f"
              />
            </label>
            <label htmlFor="s3" id="slide3">
              <img
                className="fea"
                src="https://picsum.photos/400/700"
                height="100%"
                width="100%"
                alt="f"
              />
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
    </div>
  );
};

export default Slider;
