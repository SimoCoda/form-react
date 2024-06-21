export const UiInput = ({ id, label, value, onChange }) => {
  return (
    <div className="section-form">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
