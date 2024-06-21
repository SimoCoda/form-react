import { useEffect, useState } from "react";
import { UiListFiles } from "./UiListFiles";
import { UiSelectFile } from "./UiSelectFile";
import { FcAddImage } from "react-icons/fc";

export const UiFile = ({ id, label, onAddFile }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    onAddFile(files);
  }, [files]);

  const handleFile = (e) => {
    const fileList = e.target.files;
    setFiles([...files, ...Array.from(fileList)]);
  };

  const handleRemoveFile = (name) => {
    const newFiles = files.filter((file) => file.name !== name);
    setFiles(newFiles);
  };

  if (files.length == 0) {
    return (
      <div>
        <div className="file-label">
          <label htmlFor="cover-photo">{label}</label>
        </div>
        <div className="add-photo">
          <FcAddImage className="icona" />
          <div className="section-file">
            <UiSelectFile id={id} handleFile={handleFile} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="file-label">
          <label htmlFor="cover-photo">{label}</label>
        </div>
        <div className="add-photo">
          <FcAddImage className="icona" />
          <div className="section-file">
            <UiListFiles files={files} handleRemoveFile={handleRemoveFile} />
          </div>
        </div>
      </div>
    );
  }
};
