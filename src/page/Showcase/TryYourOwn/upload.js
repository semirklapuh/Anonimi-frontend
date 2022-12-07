import React, { useState, useEffect, useRef } from "react";
import upload from "../../../assets/upload.png";
function removeItems(arr, item) {
  for (var i = 0; i < item; i++) {
    arr.pop();
  }
}

function useFiles({ initialState = [], maxFiles }) {
  const [state, setstate] = useState(initialState);
  function withBlobs(files) {
    const destructured = [...files];
    if (destructured.length > maxFiles) {
      const difference = destructured.length - maxFiles;
      removeItems(destructured, difference);
    }
    const blobs = destructured
      .map((file) => {
        if (file.type.includes("image")) {
          console.log("ok");
          console.log("image");
          file.preview = URL.createObjectURL(file);
          const base64 = convertToBase64(file);
          console.log(base64);
          return file;
        }
        console.log("not image");
        return null;
      })
      .filter((elem) => elem !== null);

    setstate(blobs);
  }
  return [state, withBlobs];
}

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

function Upload({ onDrop, maxFiles = 1 }) {
  const [over, setover] = useState(false);
  const [files, setfiles] = useFiles({ maxFiles });
  const $input = useRef(null);

  useEffect(() => {
    if (onDrop) {
      onDrop(files);
    }
  }, [files, onDrop]);

  return (
    <>
      <div
        onClick={() => {
          $input.current.click();
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.persist();
          setfiles(e.dataTransfer.files);
          setover(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setover(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setover(false);
        }}
        className={over ? "upload-container over" : "upload-container"}
      >
        <div>
          <img src={upload} alt="upload" className="upload-icon" />
        </div>
        <h2 className="title">Upload files here!</h2>
        <p>Click to browse or drag and drop</p>
        <p className="text-type-image">
          Supported formats: jpeg, jpg, png, avi, mkv... 20MB, 5 images/1 video
          per session{" "}
        </p>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          ref={$input}
          onChange={(e) => {
            setfiles(e.target.files);
          }}
        />
      </div>
      {/* <div className="blob-container">
        <h2>File Previews</h2>
        {files.map((file) => (
          <img key={file.name + "file"} src={file.preview} alt="your file" />
        ))}
      </div> */}
    </>
  );
}

export { Upload };
