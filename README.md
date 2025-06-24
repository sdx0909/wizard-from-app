# WIZARD-FORM-APPLICATION

* The application you’re going to build is a simple Wizard Form.
* A Wizard Form is a multi-step form designed to ease the filling process for a long and complex form.
* By showing only a few inputs at a time, users will feel encouraged to fill in the blank input rather than feeling overwhelmed and potentially abandoning the form.
* The Wizard Form has three steps for input:

```cmd
    1: Email-Address -> next(button)
    2: Username      <- previous(button)  -> next(button)
    3: Password      <- previous(button) -> register(button)
```

* By clicking the next button, you can jump into the other parts of the form. When you click on the submit button, an alert will be triggered and your inputs will be displayed.
* To keep things simple, the form will only have one input for each step and you don’t need to validate the data.
* Given the demo above, you basically need to break the form into one parent component and three child components.
* The parent component will show the correct form step based on user clicks.
* Let’s start building this application right away.

## Project Setup

* To start this project, you need to create a new React application using Vite commands :

```cmd
    npm create vite@latest 
```

```cmd
    Project name: wizard-form-app
    Select a framework: React
    Select a variant: JavaScript
```

* commands : for scafolding the project

```cmd
    cd wizard-form-app
    npm install
    npm run dev
```

## Building the Wizard Form Structure

* Before thinking how to put the wizard form mechanism in place, we need to create the base components for the application.
* we need ***one parent-component*** and ***three child-components***, so open the `App.jsx` file and write the following code:

```js
import { useState } from "react";
function App() {
  const [currentStep, setCurrentStep] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
}

export default App;
```

* Here, we create several states to keep track of important data in our application.
* The active step will be stored in the `currentStep` state, while the user’s **email, username**,and **password** will be stored in their respective states.
* Next, write the `return` statement for the `App` component as follows:

```js
function App() {
    // ...
    return (
    <div className="container">
      <h1>React Wizard-Form</h1>
      <p>Step {currentStep}</p>

      <form action="">
        <Step1 />
        <Step2 />
        <Step3 />
      </form>
    </div>
  );
}
```

* The component has a `<form>` element that wraps the three child components.
* Below the `App()` function, write the `Step1`, `Step2`, and `Step3` child components as shown below:

```js
function Step1() {
  return <h1>Step1 Component</h1>;
}
function Step2() {
  return <h1>Step2 Component</h1>;
}
function Step3() {
  return <h1>Step3 Component</h1>;
}
```

* Now let’s fill these step components with the form inputs:

```js
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
```

* It’s time to add some CSS to beautify this application.
* Open the `index.css` created by *Vite* and replace the style rules there with the following one:

```css
body {
    margin: 1rem;
    font-family: sans-serif;
    background-color:  #edceb0;
}
.container {
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    height: 424px;
    width: 365px;
    /* top-bottom  left-right  opacity */
    padding: 71px 93px 0;
    border-radius: 10px;
    box-shadow: 0 2px 7px 0  rgba(0, 0, 0, 0.1);
}
label {
    display: inline-block;
    margin-bottom: 0.5rem;
}
.form-wrapper {
    margin-bottom: 1rem;
}
.form-control{
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    border: 1px solid  #ced4da;
    border-radius: 0.25rem;
    box-sizing: border-box;
}
```

* The `body` style is used to add **space, font family**, and **background** to the application.
* The `.container` style is used to beautify the `div` containing the form.
* The `label`, `.form-wrapper`, and `.form` control is used to make the form look good.
* We’ve added the three components required for this application.
* ***The foundation is finished!!!***

## NOTE

* By the way, don’t forget to delete the `App.css` file and `assets/` folder because we don’t need them.
