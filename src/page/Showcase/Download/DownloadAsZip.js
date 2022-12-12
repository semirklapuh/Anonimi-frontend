import JSZip from "jszip";
import { saveAs } from "file-saver";

var zip = JSZip();

const download = () => {
  zip.generateAsync({ type: "blob" }).then(function (blob) {
    saveAs(blob, "test_archive.zip");
  });
};

export const generateZip = (arr) => {
  if (arr.length) {
    for (const element of arr) {
      zip.file(`images/image_${element.id}.png`, element.file, {
        binary: true,
      });
    }

    download();
  }
};
