import React, { Component } from "react";

import { FormProvider } from "react-advanced-form";
import rules from "./validation-rules";
import messages from "./validation-messages";
import RegistrationForm from "./RegistrationForm";

export default class RegBox extends Component {
  state = {
    serialized: null,
  };

  handleSubmitStart = ({ serialized }) => {
    this.setState({ serialized });
  };

  render() {
    return (
      <FormProvider rules={rules} messages={messages}>
        <div>
          <RegistrationForm onSubmitStart={this.handleSubmitStart} />
        </div>
      </FormProvider>
    );
  }
}
