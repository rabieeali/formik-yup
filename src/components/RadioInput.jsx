import React from "react";

const RadioInput = ({ formik, label, value, name, id }) => {
  return (
    <div className="me-4">
      <input
        onChange={formik.handleChange}
        value={value}
        className="form-check-input me-1"
        name={name}
        type="radio"
        id={id}
        checked={formik.values.gender === value}
      />
      <label htmlFor={id}>{label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <div className="fs-10 text-capitalize text-red">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default RadioInput;
