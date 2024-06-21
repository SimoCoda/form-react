export const UiSelectFile = ({ id, handleFile }) => {
  return (
    <div className="select-file">
      <div>
        <div className="upload-file">
          <label htmlFor={id}>
            <span>Upload a file</span>
            <input type="file" id={id} name={id} onChange={handleFile} />
          </label>
        </div>
        <p className="">or drag and drop</p>
      </div>
      <p>PNG, JPG, GIF up to 10MB</p>
    </div>
  );
};
