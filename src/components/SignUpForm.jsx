import { useFormik } from "formik";
import * as Yup from "yup";

console.clear();

const SignUpForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
  };

  //   const validate = (values) => {
  //     let errors = {};
  //     if (!values.name) {
  //       errors.name = "You Should Write a Name";
  //     }
  //     if (!values.email) {
  //       errors.email = "You Should Write an Email";
  //     }
  //     if (!values.password) {
  //       errors.password = "You Should Write a Password";
  //     }
  //     return errors;
  //   };

  const placeHolders = {
    name: "ali",
    email: "example@something.com",
    password: "aBc1234$",
    confirm: "Password Confirmation",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must Be 3 Charachters Or More")
      .required("You Should Have a Name"),
    email: Yup.string().email("email Must Be Valid").required("You Should Have an Email"),
    password: Yup.string()
      .required("You Should Have a Password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm: Yup.string()
      .required("You Should Have a Password Confirmation")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div
      style={{ borderRadius: "1rem" }}
      className="col-lg-4 m-auto bg-warning p-3"
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="my-2">
          <label className="form-label text-dark">Name</label>
          <input
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            {...formik.getFieldProps("name")}
            className="form-control"
            type="text"
            name="name"
            placeholder={placeHolders.name}
          />
          {formik.errors.name && formik.touched.name && (
            <span className="fs-10 text-capitalize text-red">
              {formik.errors.name}
            </span>
          )}
        </div>
        <div className="my-2">
          <label className="form-label text-dark">Email</label>
          <input
            {...formik.getFieldProps("email")}
            className="form-control"
            type="text"
            name="email"
            placeholder={placeHolders.email}
          />
          {formik.errors.email && formik.touched.email && (
            <span className="fs-10 text-capitalize text-red">
              {formik.errors.email}
            </span>
          )}
        </div>
        <div className="my-2">
          <label className="form-label text-dark">Password</label>
          <input
            {...formik.getFieldProps("password")}
            className="form-control"
            type="text"
            name="password"
            placeholder={placeHolders.password}
          />
          {formik.errors.password && formik.touched.password && (
            <span className="fs-10 text-capitalize text-red">
              {formik.errors.password}
            </span>
          )}
        </div>
        <div className="my-2">
          <label className="form-label text-dark">Confirm Password</label>
          <input
            {...formik.getFieldProps("confirm")}
            className="form-control"
            type="text"
            name="confirm"
            placeholder={placeHolders.confirm}
          />
          {formik.errors.confirm && formik.touched.confirm && (
            <span className="fs-10 text-capitalize text-red">
              {formik.errors.confirm}
            </span>
          )}
        </div>
        <button
          className="btn btn-success mt-4 w-100"
          type="submit"
          disabled={!formik.isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
