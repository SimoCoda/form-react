export const UiTextArea = ({ id, label, value, didascalia, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <textarea
          name={id}
          id={id}
          rows={3}
          type="text"
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
      <p className="didascalia">{didascalia}</p>
    </div>
  );
};
