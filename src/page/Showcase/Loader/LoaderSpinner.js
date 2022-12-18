import React from "react";
import { TailSpin } from "react-loader-spinner";

const LoaderSpinner = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div className="flex justify-center items-center ">
        <TailSpin
          height="50"
          width="50"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoaderSpinner;
