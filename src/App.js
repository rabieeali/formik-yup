import SignUpForm from "./components/SignUpForm";
const App = () => {
  return (
    <div className="my-4 container">
      <h1 className="text-secondary text-center display-3 pb-2">
        Formik & Yup
      </h1>
      <SignUpForm />
    </div>
  );
};

export default App;
