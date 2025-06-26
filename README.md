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
  const [currentStep, setCurrentStep] = useState(1);
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
* In the next chapter, we’re going to see how to perform conditional rendering in React so that we can display only one step component at a time.

### CREATING WIZARD FORM MECHANISM

* In this chapter, we’re going to implement the Wizard Form mechanism using React.
* To do so, we need to know how to `conditionally render` components first.
* This is  `doable` by specifying a condition when you want to render a component.
* `doable` means that a task, project, or feature can be successfully completed within the given constraints of time.

## React Conditional Rendering

* You can **control what output is being rendered by a component** by implementing a **conditional rendering** in your JSX.
* For example, let’s say you want to switch between rendering the `login` and `logout` buttons, depending on the availability of the `user` state:

```js
function App(props){
  const { user } = props;
  if(user){
    return <button>Logout</button>
  }
  return <button>Login</button>
}
```

* In the example above, React will render the `logout` button when the `user` value is `truthy`, and the `login` button when `user` is `falsy`.*

## Partial rendering with a regular variable

* When developing with React, there will be cases where you want to render a part of your *UI dynamically* in a component.
* In the example below, the JSX element is stored in a variable called `button`, and that variable is used again in the return  statement:
  
```js
function App(props){
  const { user } = props;

  let button = <button>Login</button>;

  if(user){
    button = <button>Logout</button>;
  }

  return(
    <>
      Hello there!
      {button}
    </>
  )
}
```

* Instead of writing two return statements, you store the `dynamic UI` element inside a variable and use that variable in the `return` statement.
* This way, you can have a component that has `static` and `dynamic` elements.

## Inline rendering with `&&` operator

* It’s possible to render a component only ***if a certain condition is met and render null otherwise***.
* For example, let’s say you want to render a dynamic message for `users` when they have *new emails* in their inbox:

```js
function App(){
  const newEmails = 2;

  return(
    <>
      <h1>Hello There..!</h1>
      { newEmails > 0 && 
          <h2>
            it has {newEmails} emails
          </h2>
      }
    </>
  )
}
```

* In this example, the `<h2>` element only gets rendered when the `newEmails` count is greater than `0`.
  
## Inline rendering with conditional (ternary) operator

* It’s also possible to use a `ternary operator` in order to render the UI dynamically.
* Take a look at the following example:
  
```js
function App(props){
  const { user } = props;

  return (
    <>
      <h1>hello there</h1>
      { user ? <button>Logout</button> : <button>Login</button> }
    </>
  )
}
```

## Hide Inactive Form Steps

* back to our `wizard-form-app` we need to pass the `currentSteps` prop into the child-components.
* and use the prop value to determine whether we want to show the component on the screen.
* Next, go into the `Step1()` function and check the `currentSteps` value with an `if` statement.
* If the value is anything other than `1`, we don’t need to render the `form` input.

```js
function App() {
  const [currentStep, setCurrentStep] = useState("1");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h1>React Wizard Form</h1>
      <p>Step {currentStep}</p>

      <form>
        <Step1 currentStep={currentStep} />
        <Step2 currentStep={currentStep} />
        <Step3 currentStep={currentStep} />
      </form>
    </div>
  );
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  // ...
}
```

* You need to do the same for `Step2()` and `Step3()` as follows:
  
```js
function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    // ...
  );
}

function Step3(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    // ...
  );
}
```

* Once you save the changes, you should only see the `first step` on the screen.
* Now you need to `add buttons` so that the **user can move from one step to the other**.

## Adding the Next Button

* To allow the user to move to the next step, you need to create a `button`.
* and when that button is clicked, **increment the `currentStep` value by `1`**.
* To do so, you can create the button in the `<form>` element as follows:
  
```js
<form>
  <Step1 currentStep={currentStep} />
  <Step2 currentStep={currentStep} />
  <Step3 currentStep={currentStep} />
  <button
    className="btn btn-next f-right"
    type="button"
    onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
  >
    Next
  </button>
</form>
```

* When the *button is clicked*, we’re going to *call* the `setCurrentStep()` function.
* In React, the `setSomething()` function **always receive the previous state value when called**.
* To increment the `currentStep` state value, we make use of the previous state, which we name `prevStep`, and increment it by `1`.
* You can try the button on the browser, but notice that if you click `Next` after the `third-step`, the form will be empty.
* Because we only have `three-steps`, we need to prevent the user from clicking the `Next` button when the third form is active.
* We can do so by adding a condition when rendering the `Next` button.
* Right below the `useState` calls in your `App()` function, create a function called `nextButton()` with the following content:

```js
function App(){
  // useStates

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
}
```

* Here, we render the `Next` button only when the `currentStep` value is *less than* `3`.
* Now we need to **call** the `nextButton()` function in place of the `button` we created below the form steps:
  
```js
<form>
    <Step1 currentStep={currentStep} />
    <Step2 currentStep={currentStep} />
    <Step3 currentStep={currentStep} />
    {nextButton()} {/* render the nextButton */}
</form>
```

* *So far so good*. The next step is to add the `Previous` button so the user can go back to the `previous step`.

## Adding the Previous Button

* To create the `Previous` button, you can copy the `nextButton()` function and *tweak it a little*:

```js
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
```

* In the code above, the `previousButton()` function checks if the value of `currentStep` is greater than `1` before rendering the button.
* When the button is clicked, we *decrement the state* value by *one*.
* Now call this function in the `App` component, just below the `nextButton()` call.

```js
<form>
    <Step1 currentStep={currentStep} />
    <Step2 currentStep={currentStep} />
    <Step3 currentStep={currentStep} />
    {nextButton()} {/* render the nextButton */}
    {previousButton()}
</form>
```

* And that’s it. If you test the application now, you can move between the form steps, and the button is rendered only when the condition is right.
* The last thing we need to do is to add style to the buttons using CSS.
* Right now, they look pretty bad.
* Add the following styles to the `index.css` file:
  
```css
.f-right{
    /* set to right-side */
    float: right !important;
}

.btn {
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid transparent;
}

.btn-next {
    border-color: #007bff;
    background-color: #007bff;
}

.btn-previous {
    border-color: #6c757d;
    background-color: #6c757d;
}
```

### Summary

* In this chapter, you’ve seen how you can conditionally render components based on the state values.
* By creating a state and passing it to the child components, you can determine whether the component should render something to the screen.
* This is one of the reasons developers love using React.
* You write code in a declarative way, specifying the conditions for change in your application.
* By just changing a state value, the entire application would notice and respond accordingly based on the code you’ve written.

## HANDLING EVENTS IN REACT

* React has an internal event handler that connects to the native DOM event.
* we can add the `onClick` prop to buttons in the previous chapters, which gets executed in response to a click event.
* When you call a function in response to events, the `event` object will be passed to the `callback` function as follows:

```js
function App(){
  const handleClick = (event) => {
    console.log(event);
  }

  return(
    <button onClick={handleClick}>
      Click me
    </button>
  )
}
```
  
* When you click on the button above, the `event` variable will be logged as a `SyntheticBaseEvent` object in your console:  
* `output:`

```js
> SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
```

* Whenever a `DOM event` is triggered, that `synthetic event` will be handled by React so that you can decide what to do with that event.
* The use case for this `Synthetic event` is the same as the native DOM event.
* You can respond to user interactions like `clicking, hovering, focusing` or `typing` on a form input, submitting form, and so on.
* Now we will see how to respond to user inputs and form submissions.
  
## Storing Form Input With `onChange` Event Handler

* Back to the `wizard-form-app`, we need to handle the data the user typed into our form inputs using React state.
* This is why we have `email`, `username`, and `password` states in the first place.
* Before we pass the states to our child components, let’s create a function named `handleChange()` that will be called each time a user types into the inputs.
* The function will receive the `event` parameter, and *will update the right state based on the input’s `name` attribute*.

```js
function App(){
  // ...useStates

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };
}
```

* There are only a limited number of states you need to change, so using a `switch` statement is perfect for managing state changes.
* Instead of sending `setEmail` to `Step1` and `setUsername` to `Step2`, you can just send the `handleChange` function to all child components.
* Let’s do that now:

```js
<form>
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
    {previousButton}
    {nextButton}
</form>
```

* Next, go to each *child components* and use the given `props` on these components.
* You only need to add the `value` and `onChange` props to the `<input>` elements.
* See the comment below:

```js
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
        value={props.email} // set the value as the email state
        onChange={props.handleChange} // the handleChange()
      />
    </div>
  );
}
```

* You need to add the same props to `Step2` and `Step3`.
* Whenever you *type or delete* a character from the input, the `onChange` event will be triggered.
* The `handleChange()` function will then update the state based on the `name` attribute of the `<input>` element as shown above.
* Now all child component inputs are connected to the state value.
* The last step is to handle the data submission.
  
## Wizard Form Submission

* To handle form submission, you need to create a `handleSubmit()` function that receives an `event` object.
* Based on the demo, we only need to call the `alert()` function to show the user inputs.
* Add this function below the `handleChange()` function:

```js
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
};
```

* Next, we need to pass this function to the `<form>` element as follows:

```js
<form onSubmit={handleSubmit}>
</form>
```

* We have the submit process ready, but notice that we didn’t have a button to run the process.
* We only want the user to be able to submit the form in the `third step` of the form, so let’s add a submit button to `Step3` as follows:

```js
function Step3(props) {
  // ...
  return (
    <>
      <div className="form-wrapper">
        {/* label and input */}
      </div>
      <button className="btn btn-submit f-right">Sign up</button>
    </>
  );
}
```

* Here, the submit button is added below the `<div>` element.
* We also add the wrapper `<> .. </>` so that only one element is returned by the component.
* Now the form is finished. You can test the application in the browser.
* But notice that the form inputs are still there after you submit the data.
* To `reset` the form, let’s add several function calls to reset the state as follows:

```js
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
```

### Summary

* ***Congratulations!!!*** on finishing your first React project!
* The `wizard-form-app` helps you see how to build a web application using React.
* Although a Wizard Form looks complex, it’s actually pretty easy when you have the steps mechanism implemented in React.
* By building this project, you’ve seen how an application can be built step-by-step and gradually becomes more complex.
* **Always begin a project by finding out what the result looks like**,and **then make your way step by step**, ***adding code one block at a time***.
