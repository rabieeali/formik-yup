const Input = ({formik,label,name,placeHolders,type="text"}) => {
  return (
    <div>
      <div className="my-2">
        <label className="form-label text-dark">{label}</label>
        <input
        autoComplete="on"
          {...formik.getFieldProps(name)}
          className="form-control"
          type={type}
          name={name}
          placeholder={placeHolders[name]}
        />
        {formik.errors[name] && formik.touched[name] && (
          <span className="fs-10 text-capitalize text-red">
            {formik.errors[name]}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
