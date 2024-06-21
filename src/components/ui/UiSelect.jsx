export const UiSelect = ({ id, label, values, onChange, defaultValue }) => {
  // const defaultValue = values.find((el) => el.default)
  //   ? values.find((el) => el.default).id
  //   : 1;

  return (
    <div className="single-column">
      <label htmlFor={id}>{label} *</label>
      <div>
        <select
          name={id}
          id={id}
          onChange={(e) => onChange(e)}
          defaultValue={defaultValue}
        >
          {values.map((val, idx) => {
            return (
              <option key={idx} value={val.id}>
                {val.name}
              </option>
            );
          })}
          {/* <option value="1">Italia</option>
          <option value="2">Francia</option>
          <option value="3">Spagna</option> */}
        </select>
      </div>
    </div>
  );
};
