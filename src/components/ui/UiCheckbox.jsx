export const UiCheckbox = ({
  id,
  name,
  label,
  type,
  value,
  description,
  onChange,
}) => {
  return (
    <div className="checkbox-div1">
      <div className="checkbox-div2">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="description-comment">
        <label htmlFor={id}>{label}</label>
        <p className="">{description}</p>
      </div>
    </div>
  );
};
