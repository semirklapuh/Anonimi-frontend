import React, { useState, useEffect, useRef } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
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
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(false);
  const [file, setFile] = useState();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [modeDropDownValue, setModeDropDownValue] = useState("Mode");
  const [objectDropDownValue, setObjectDropDownValue] = useState("Object");

  const[loader, setLoader]=useState(false)

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
    setLoader(true)
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
        setPreviewImage(true);
        setLoader(false)
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
                <p className="image-text paragraf">BEFORE</p>
              </div>
              <br></br>
              <div>
                <img
                  src={`data:image/jpeg;base64,${dataURL}`}
                  alt="dd"
                  className="preview-image"
                />
                <p className="image-text paragraf">AFTER</p>
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
              Download
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
                    <img src={file} alt="preview" height="300" />

                    <p className="paragraf-1">
                      Your file has been successfully uploaded and waiting for
                      processing. <br></br>
                      Please select the type of object and type of anonymization
                      you want..
                    </p>
                    {/* <p className="paragraf">
                      The image is being processed, please wait a few moments
                    </p>
                     <LoaderSpinner />  */
                     
                     loader?<LoaderSpinner/>:<p></p>}
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
                <p className="text-type-image paragraf">
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
            <div className="dropdowns__tryYourOwn">
              <DropdownButton
                id="dropdown-item-button"
                title={objectDropDownValue}
                // className="format"
                className="d-inline mx-2"
                autoClose="inside"
                onSelect={handleSelectObject}
              >
                <Dropdown.Item eventKey="faces" as="button">
                  <div onClick={(e) => changeObjectValue(e.target.textContent)}>
                    Faces
                  </div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="plates" as="button">
                  <div onClick={(e) => changeObjectValue(e.target.textContent)}>
                    Plates
                  </div>
                </Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                id="dropdown-item-button"
                title={modeDropDownValue}
                // className="format"
                className="d-inline mx-2"
                autoClose="inside"
                onSelect={handleSelectTypeMode}
              >
                <Dropdown.Item eventKey="blur" as="button">
                  <div onClick={(e) => changeModeValue(e.target.textContent)}>
                    Blur
                  </div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="pixelated" as="button">
                  <div onClick={(e) => changeModeValue(e.target.textContent)}>
                    Pixelated
                  </div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="deepNatural" as="button">
                  <div onClick={(e) => changeModeValue(e.target.textContent)}>
                    Deep natural
                  </div>
                </Dropdown.Item>
              </DropdownButton>
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
