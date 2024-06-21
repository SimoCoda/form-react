export const UiButton = ({ text, onClick, classes }) => {
  return (
    <button type="button" onClick={onClick} className={classes}>
      {text}
    </button>
  );
};
