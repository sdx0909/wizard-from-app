import { useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nextButton = () => {
    // console.log("onNext > ", event);

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

  // for every type character in input-fields
  const handleChange = (event) => {
    // console.log("handleChange() called..!");
    const { name, value } = event.target;
    switch (name) {
      case "email":
        // console.log(`email > ${email}`);
        setEmail(value);
        break;
      case "username":
        // console.log(`username > ${username}`);
        setUsername(value);
        break;
      case "password":
        // console.log(`password > ${password}`);
        setPassword(value);
        break;
    }
  };

  // for form-submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // validations for all-fields are mendatory
    if (!email || !username || !password) {
      return alert("all fields are mendatory");
    }
    alert(
      `Your Registration Details:\nEmail: ${email}\nUsername: ${username}\nPassword: ${password}`
    );
    // reset the entire-form
    setCurrentStep(1);
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <h1>React Wizard Form</h1>
      <p>Step {currentStep}</p>

      <form onSubmit={handleSubmit}>
        <Step1
          currentStep={currentStep}
          handleChange={handleChange}
          email={email}
        />
        <Step2
          currentStep={currentStep}
          handleChange={handleChange}
          username={username}
        />
        <Step3
          currentStep={currentStep}
          handleChange={handleChange}
          password={password}
        />
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
        value={props.email}
        onChange={props.handleChange}
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
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <div className="form-wrapper">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-submit f-right">Sign up</button>
    </>
  );
}

export default App;
