// import "./App.css";
// import { useState } from "react";

function App() {
  // const [currentStep, setCurrentStep] = useState("");
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h1>React Wizard Form</h1>
      <p>Step </p>

      <form>
        <Step1 />
        <Step2 />
        <Step3 />
      </form>
    </div>
  );
}

function Step1() {
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
function Step2() {
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
function Step3() {
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
