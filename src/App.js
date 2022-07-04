import SignUpForm from "./components/SignUpForm";
const App = () => {
  return (
    <div className="vh-100 bg-info">
    <div className="container">
      <h1 className="text-secondary text-center display-3 py-4">Formik & Yup </h1>
      <SignUpForm />
    </div>
    </div>
  );
};

export default App;
