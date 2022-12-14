import React, { useState, useEffect, useRef } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import upload from "../../../assets/upload.png";
import apiClient from "../../../http/http-common";
import LoaderSpinner from "../Loader/LoaderSpinner";
import Base64Downloader from "react-base64-downloader";

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
  const [dataURL, setDataURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(false);
  const [file, setFile] = useState();
  const [fileUploaded, setFileUploaded] = useState(false);

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
      faces: faces,
      plates: plates,
      watermark: "False",
      mode: typeMode,
    };

    await apiClient
      .post("/image/upload-image", JSON.stringify(imageData))
      .then((res) => {
        console.log(res.data);
        setDataURL(res.data.image);
        setLoading(false);
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
        <div className="preview-container">
          <div className="preview">
            <div className="preview-box">
              <div className="image-box">
                <img
                  src={`data:image/jpeg;base64,${imageUrl}`}
                  alt="dd"
                  className="preview-image"
                />
                <p className="image-text">BEFORE</p>
              </div>
              <br></br>
              <div>
                <img
                  src={`data:image/jpeg;base64,${dataURL}`}
                  alt="dd"
                  className="preview-image"
                />
                <p className="image-text">AFTER</p>
              </div>
            </div>
            <Base64Downloader
              base64={`data:image/jpeg;base64,${dataURL}`}
              downloadName="anonymized"
              Tag="a"
              extraAttributes={{ href: "#" }}
              className="btn btn-primary"
              style={{ color: "orange" }}
              onDownloadSuccess={() => console.log("File download initiated")}
              onDownloadError={() => console.warn("Download failed to start")}
            >
              Click to download
            </Base64Downloader>
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
            className={over ? "upload-container over" : "upload-container"}
          >
            {fileUploaded ? (
              <div>
                {files && (
                  <div>
                    <img src={file} alt="preview" width="400" height="auto" />
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div>
                  <img src={upload} alt="upload" className="upload-icon" />
                </div>
                <h2 className="title">Upload files here!</h2>
                <p>Click to browse or drag and drop</p>
                <p className="text-type-image">
                  Supported formats: jpeg, jpg, png, avi, mkv... 20MB, 5
                  images/1 video per session{" "}
                </p>
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
                  <Dropdown.Item eventKey="plates">
                    Licence plates
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                className="d-inline mx-2"
                autoClose="inside"
                onSelect={handleSelectTypeMode}
              >
                <Dropdown.Toggle id="dropdown-autoclose-inside">
                  Mode
                </Dropdown.Toggle>

                <Dropdown.Menu title="Mode">
                  <Dropdown.Item eventKey="blur" as="button">
                    <div
                      onClick={(e) => this.changeValue(e.target.textContent)}
                    >
                      Blur
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="pixelated">Pixelated</Dropdown.Item>
                  <Dropdown.Item eventKey="deepNatural">
                    Deep natural
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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

export { Upload };
