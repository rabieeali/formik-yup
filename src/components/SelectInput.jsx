const SelectInput = ({ formik, selectInputUtil, name }) => {
  return (
    <div className="d-flex flex-column">
      <select
        name={name}
        {...formik.getFieldProps(name)}
        className="form-control form-select form-select-sm"
      >
        {selectInputUtil.map((util) => (
          <option key={util.value} value={util.value}>
            {util.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="fs-10 text-capitalize text-red">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
