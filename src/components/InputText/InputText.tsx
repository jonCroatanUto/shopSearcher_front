import React from "react";
import "./inputTextStyles.css";
function InputText(props: {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
  label: string;
}) {
  return (
    <>
      <div className="field">
        <input
          className="input-field"
          type={props.type}
          name={props.id}
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
        <label className="input-label" htmlFor={props.id}>
          {props.label}
        </label>
      </div>
    </>
  );
}
export default InputText;
