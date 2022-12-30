import React, { useState, useEffect, useRef } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import upload from "../../../../assets/upload.png";
import apiClient from "../../../../http/http-common";
import LoaderSpinner from "../../../Showcase/Loader/LoaderSpinner";
import "./style.css";

function removeItems(arr, item) {
  for (var i = 0; i < item; i++) {
    arr.pop();
  }
}

function UploadCar({ onDrop, maxFiles = 1 }) {
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
  const [dataURL, setDataURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(false);
  const [file, setFile] = useState();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [modeDropDownValue, setModeDropDownValue] = useState("Mode");
  const [objectDropDownValue, setObjectDropDownValue] = useState("Object");

  const changeModeValue = (text) => {
    setModeDropDownValue(text);
  };

  const changeObjectValue = (text) => {
    setObjectDropDownValue(text);
  };

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

      selectTypeMode("blurred");
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
      faces: "False",
      plates: "True",
      watermark: "False",
      mode: typeMode,
    };

    await apiClient
      .post("/image/upload-image", JSON.stringify(imageData))
      .then((res) => {
        console.log(res.data);
        setDataURL(res.data.image);
        setPreviewImage(true);
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

  const handleFileInputChange = (e) => {
    setFileUploaded(true);
    setLoading(true);
    const files = e.target.files;
    const file = files[0];
    getBase64(file);

    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const onLoad = (fileString) => {
    console.log(fileString);

    var base64 = fileString.split(",")[1];
    setImageUrl(base64);
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  return (
    <>
      {previewImage ? (
        <div className="preview-container-ai">
          <div className="preview">
            <div className="preview-box-ai">
              <div className="image-box">
                <img
                  src={`data:image/jpeg;base64,${imageUrl}`}
                  alt="dd"
                  className="preview-image-ai"
                />
                <p className="image-text paragraf-ai">BEFORE</p>
              </div>
              <br></br>
              <div>
                <img
                  src={`data:image/jpeg;base64,${dataURL}`}
                  alt="dd"
                  className="preview-image-ai"
                />
                <p className="image-text paragraf-ai">AFTER</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
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
            className={
              over ? "upload-container-ai over" : "upload-container-ai"
            }
          >
            {fileUploaded ? (
              <div>
                {files && (
                  <div>
                    <img src={file} alt="preview" height="300" />

                    <p className="paragraf-1">
                      Your file has been successfully uploaded and waiting for
                      processing. <br></br>
                      Please select the type of object and type of anonymization
                      you want..
                    </p>
                    <p className="paragraf">
                      The image is being processed, please wait a few moments
                    </p>
                    <LoaderSpinner />
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div>
                  <img src={upload} alt="upload" className="upload-icon" />
                </div>
                <h2 className="title paragraf">Upload files here!</h2>
                <p className="paragraf">
                  Click to browse. Supported formats: jpeg, jpg, png.
                </p>
                =
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/*"
                  ref={$input}
                  onChange={handleFileInputChange}
                />
              </div>
            )}
          </div>

          <div>
            <div className="dropdowns">
              <div className="btn-div">
                <Button onClick={submitAnonymize}>Anonymize</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div>
        {files && (
          <div>
            <img src={file} alt="preview" width="400" height="auto" />
          </div>
        )}
      </div> */}
    </>
  );
}

export { UploadCar };
