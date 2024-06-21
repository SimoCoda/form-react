export const UiListFiles = ({ files, handleRemoveFile }) => {
  return (
    <div>
      {files && files.length > 0 && (
        <ul className="list-files">
          {files.map((file, i) => (
            <li key={file.name}>
              {file.name}{" "}
              <button onClick={() => handleRemoveFile(file.name)} type="button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
