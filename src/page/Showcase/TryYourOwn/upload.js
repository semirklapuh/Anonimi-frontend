import React, { useState, useEffect, useRef } from "react";
import { Button, Dropdown } from "react-bootstrap";
import upload from "../../../assets/upload.png";
import apiClient from "../../../http/http-common";
import Dropdowns from "./Dropdowns/Dropdowns";

function removeItems(arr, item) {
  for (var i = 0; i < item; i++) {
    arr.pop();
  }
}

function Upload({ onDrop, maxFiles = 1 }) {
  const [over, setover] = useState(false);
  const [files, setfiles] = useFiles({ maxFiles });
  const $input = useRef(null);
  const [faces, setFaces] = useState("False");
  const [plates, setPlates] = useState("False");
  const [blur, setBlur] = useState("False");
  const [pixelated, setPixelated] = useState("False");
  const [deepNatural, setDeepNatural] = useState("False");
  const [typeMode, selectTypeMode] = useState("");
  const [imageUrl, setImageUrl] = useState();

  const handleSelectObject = (e) => {
    if (e === "faces") {
      setFaces("True");
      setPlates("False");
    } else {
      setFaces("False");
      setPlates("True");
    }
    console.log(e);
  };

  const handleSelectTypeMode = (e) => {
    if (e === "blur") {
      setBlur("True");
      setPixelated("False");
      setDeepNatural("False");

      selectTypeMode("blur");
    } else if (e === "pixelated") {
      setBlur("False");
      setPixelated("True");
      setDeepNatural("False");

      selectTypeMode("pixelated");
    } else {
      setBlur("False");
      setPixelated("False");
      setDeepNatural("True");

      selectTypeMode("synthetic");
    }
    console.log(e);
  };

  useEffect(() => {
    if (onDrop) {
      onDrop(files);
    }
  }, [files, onDrop]);

  const submitAnonymize = async (e) => {
    e.preventDefault();

    const imageData = {
      image: imageUrl,
      faces: faces,
      plates: plates,
      watermark: false,
      mode: typeMode,
    };

    await apiClient
      .post("/image/upload-image", JSON.stringify(imageData))
      .then((res) => {
        console.log(res.data);
      });
  };

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
            file.preview = URL.createObjectURL(file);

            const base64 = convertToBase64(file);

            setImageUrl(base64);
            console.log(imageUrl);

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
      <div>
        <div className="dropdowns">
          <Dropdown
            className="d-inline mx-2"
            autoClose="inside"
            onSelect={handleSelectObject}
          >
            <Dropdown.Toggle id="dropdown-autoclose-inside">
              Object
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="faces">Faces</Dropdown.Item>
              <Dropdown.Item eventKey="plates">Licence plates</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            className="d-inline mx-2"
            autoClose="outside"
            onSelect={handleSelectTypeMode}
          >
            <Dropdown.Toggle id="dropdown-autoclose-inside">
              Mode
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="blur">Blur</Dropdown.Item>
              <Dropdown.Item eventKey="pixelated">Pixelated</Dropdown.Item>
              <Dropdown.Item eventKey="deepNatural">Deep natural</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="btn-div">
            <Button onClick={submitAnonymize}>Anonymize</Button>
          </div>
        </div>
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
