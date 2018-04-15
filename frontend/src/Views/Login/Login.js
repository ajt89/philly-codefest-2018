import React from 'react';
import Form from "react-jsonschema-form";

import config from '../../config.js';
import {getOptions, postOptions} from '../../Fetch';

const schema = {
  title: "Login",
  type: "object",
  required: ["username", "password"],
  properties: {
    username: {type: "string", title: "Username"},
    password: {type: "string", title: "Password"}
  }
};

const uiSchema = {
  "username": {
    "ui:autofocus": true,
  },
  "password": {
    "ui:widget": "password",
  }
};

const postLogin = (formData) => {
  const body = {
    username: formData.username,
    password: formData.password
  };
  fetch(config.LOGIN_ENDPOINT, postOptions(body))
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

class Login extends React.Component {
  render() {
    return (
      <div style={{width: "50vw", margin: "auto"}}>
        <Form schema={schema}
              uiSchema={uiSchema}
              onSubmit={(data) => postLogin(data.formData)}
              />
      </div>
    )
  }
}

export default Login;
