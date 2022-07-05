import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import CheckBoxInput from "./CheckBoxInput";
import Input from "./Input";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";

console.clear();

const selectInputUtil = [
  { label: "Select Your Nationality ...", value: "" },
  { label: "Iran", value: "IR" },
  { label: "Germany", value: "GER" },
  { label: "USA", value: "US" },
];

const checkboxUtil = [
  { label: "React.Js", value: "react" },
  { label: "Vue.Js", value: "vue" },
  { label: "Angular.Js", value: "angular" },
];

const savedData = {
  name: "alirbi",
  email: "alirabiei1375@gmail.com",
  password: "#Ali1234!",
  confirm: "#Ali1234!",
  gender: "0",
  nationality: "US",
  experties: ["react"],
  terms: true,
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm: "",
  gender: "",
  nationality: "",
  experties: [],
  terms: false,
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
  email: Yup.string()
    .email("email Must Be Valid")
    .required("You Should Have an Email"),
  password: Yup.string()
    .required("You Should Have a Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirm: Yup.string()
    .required("You Should Have a Password Confirmation")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  gender: Yup.string().required("please select one"),
  nationality: Yup.string().required("select your nationality"),
  experties: Yup.array().min(1).required("please select one"),
  terms: Yup.boolean()
    .oneOf([true], "Must Accept Terms and Conditions")
   
});

const SignUpForm = () => {
  const [initialData, setInitialData] = useState(null);

  const formik = useFormik({
    initialValues: initialData || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });


  return (
    <div
      style={{ borderRadius: "1rem" }}
      className="col-lg-4 m-auto bg-warning p-3 position-relative"
    >
      <form onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          name="name"
          label="Name"
          placeHolders={placeHolders}
        />
        <Input
          formik={formik}
          name="email"
          label="Email"
          placeHolders={placeHolders}
          type="email"
        />
        <Input
          formik={formik}
          name="password"
          label="Password"
          placeHolders={placeHolders}
          type="password"
        />
        <Input
          formik={formik}
          name="confirm"
          label="Confirm Password"
          placeHolders={placeHolders}
          type="password"
        />
        <div className="d-flex">
          <RadioInput
            formik={formik}
            label="Male"
            value="0"
            name="gender"
            id="male"
          />
          <RadioInput
            formik={formik}
            label="Female"
            value="1"
            name="gender"
            id="female"
          />
          <SelectInput
            formik={formik}
            name="nationality"
            selectInputUtil={selectInputUtil}
          />
        </div>

        <CheckBoxInput
          checkboxUtil={checkboxUtil}
          name="experties"
          formik={formik}
        />

        {/* terms */}
        <>
          <div className="mt-4">
            <input
              className="form-check-input me-2"
              id="terms"
              type="checkbox"
              value={true}
              onChange={formik.handleChange}
              checked={formik.values.terms}
              name="terms"
            />
            <label className="form-check-label" htmlFor="terms">
              I agree with terms and conditions
            </label>
          </div>

          {formik.errors.terms && formik.touched.terms && (
            <div className="fs-10 text-capitalize text-red">
              {formik.errors.terms}
            </div>
          )}
        </>
        {/* terms */}

        <button
          className="btn btn-success mt-4 w-100"
          type="submit"
          disabled={!formik.isValid}
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => setInitialData(savedData)}
        className="btn btn-outline-dark load-data "
      >
        Load Data
      </button>
    </div>
  );
};

export default SignUpForm;
