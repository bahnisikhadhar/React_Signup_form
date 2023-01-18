import { useState } from "react";
import "./App.css";
import FormInput from "./FormInput"

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Bahnisikha",
      label: "Enter Your Name*",
      required: true,
      autoComplete : "off"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "abc@mail.com",
      errorMessage: "Enter a valid email address!",
      label: "Enter Your Email*",
      required: true,
      autoComplete : "off"
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "1234567890",
      label: "Enter Phone Number",
      autoComplete : "off"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password must be of minimum 8 characters and must include at least 1 letter, 1 number and 1 special character!",
      label: "Enter Password*",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Wrong Password",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues( {username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""});
    // setFocused(false);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>SignUp Form</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
