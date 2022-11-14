import React from "react";
import "./style.css";
import { Form, Field } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";

export default class RegistrationForm extends React.Component {
  registerUser = ({ serialized, fields, form }) => {
    return fetch("https://backend.io", {
      body: JSON.stringify(serialized),
    });
  };

  render() {
    return (
      <>
        <Form
          className="reg-form"
          action={this.registerUser}
          onSubmitStart={this.props.onSubmitStart}
        >
          <Field.Group name="primaryInfo">
            <Input
              className="fn"
              name="firstName"
              label="First name"
              required={({ get }) => {
                return !!get(["primaryInfo", "lastName", "value"]);
              }}
            />
            <Input
              name="lastName"
              label="Last name"
              required={({ get }) => {
                return !!get(["primaryInfo", "firstName", "value"]);
              }}
            />
          </Field.Group>
          <Field.Group name="primaryInfo">
            <Input name="userEmail" type="email" label="E-mail" required />
          </Field.Group>

          <Input
            name="userPassword"
            type="password"
            label="Password"
            required
          />
          <Input
            name="confirmPassword"
            type="password"
            label="Confirm password"
            required
            skip
          />

          <div className="register-btn-div">
            <Button primary className="register-btn">
              Create account
            </Button>
          </div>
        </Form>
      </>
    );
  }
}
