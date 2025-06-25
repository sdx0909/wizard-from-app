// import "./App.css";
import { useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-next f-right"
          type="button"
          onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
        >
          Next
        </button>
      );
    }
    return null;
  };

  const previousButton = () => {
    if (currentStep > 1) {
      return (
        <button
          className="btn btn-previous"
          type="button"
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
        >
          Previous
        </button>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <h1>React Wizard Form</h1>
      <p>Step {currentStep}</p>

      <form>
        <Step1 currentStep={currentStep} />
        <Step2 currentStep={currentStep} />
        <Step3 currentStep={currentStep} />
        {nextButton()} {/* render the nextButton */}
        {previousButton()}
      </form>
    </div>
  );
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-wrapper">
      <label htmlFor="email">Email-Address</label>
      <input
        className="form-control"
        type="text"
        id="email"
        name="email"
        placeholder="Enter Email"
      />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-wrapper">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        type="text"
        id="username"
        name="username"
        placeholder="Enter Username"
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="form-wrapper">
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        type="password"
        id="password"
        name="password"
        placeholder="Enter Password"
        // value={props.password}
        // onChange={props.handleChange}
      />
    </div>
  );
}

export default App;
