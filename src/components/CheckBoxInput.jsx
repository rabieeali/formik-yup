const CheckBoxInput = ({ checkboxUtil, name, formik }) => {
  return (
    <>
      <div>
        <label className=" text-dark">Experties</label>
        <div className="form-label d-flex">
          {checkboxUtil.map((c) => (
            <div key={c.value} className="form-check mt-2">
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
