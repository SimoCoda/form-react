import { useEffect, useState } from "react";
import { UiCheckbox } from "./UiCheckbox";

export const UiGroupCheckbox = ({ values, onChange, title }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const handleChange = (event) => {
    const target = event.target;
    const val = target.value;
    const checked = target.checked;
    const name = target.name;
    const parseVale = parseInt(val, 0);

    if (!checked) {
      setSelected([...selected.filter((el) => el !== parseVale)]);
    } else {
      setSelected([...selected, parseInt(parseVale, 0)]);
    }
  };

  return (
    <div className="checkbox-group">
      <fieldset>
        {/* <pre>
        <code>{JSON.stringify(selected, undefined, 2)}</code>
      </pre> */}
        <legend>{title}</legend>
        {values.map((val, idx) => {
          return (
            <UiCheckbox
              key={idx}
              id={val.id}
              name={val.name}
              label={val.label}
              type={val.type}
              value={val.value}
              description={val.description}
              onChange={handleChange}
            />
          );
        })}
        {/* <UiCheckbox
        id="comments"
        label="Comments"
        description="Get notified when someones posts a comment on a posting."
        value="1"
        onChange={handleChange}
      />
      <UiCheckbox
        id="candidates"
        label="Candidates"
        description="Get notified when a candidate applies for a job."
        value="2"
        onChange={handleChange}
      />
      <UiCheckbox
        id="offers"
        label="Offers"
        description="Get notified when a candidate accepts or rejects an offer."
        value="3"
        onChange={handleChange}
      /> */}
      </fieldset>
    </div>
  );
};
