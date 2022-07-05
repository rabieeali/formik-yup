const CheckBoxInput = ({ checkboxUtil, name, formik }) => {
  return (
    <>
      <label
        style={{ fontSize: "1.1rem" }}
        className="mt-2 text-dark form-label"
      >
        Experties
      </label>
      <div className="container">
        <div className="form-label row">
          {checkboxUtil.map((c) => (
            <div key={c.value} className="col-md-2 form-check mt-2">
              <input
                id={c.value}
                className="form-check-input"
                type="checkbox"
                name={name}
                value={c.value}
                onChange={formik.handleChange}
                checked={formik.values[name].includes(c.value)}
              />
              <label htmlFor={c.value} className="form-check-label me-4">
                {c.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="fs-10 text-capitalize text-red">
          {formik.errors[name]}
        </div>
      )}
    </>
  );
};

export default CheckBoxInput;
