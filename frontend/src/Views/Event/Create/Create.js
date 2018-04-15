import React from 'react';
import Form from "react-jsonschema-form";

import config from '../../../config.js';
import {getOptions, postOptions} from '../../../Fetch';

const schema = {
  title: "Create Event",
  type: "object",
  required: ["name", "description", "addressLineOne", "addressLineTwo", "city", "state", "zipcode"],
  properties: {
    name: {type: "string", title: "Name"},
    description: {type: "string", title: "Description"},
    addressLineOne: {type: "string", title: "Address Line 1"},
    addressLineTwo: {type: "string", title: "Address Line 2"},
    city: {type: "string", title: "City"},
    state: {type: "string", title: "State"},
    zipcode: {type: "string", title: "Zip Code"}
  }
};

const uiSchema = {
  "name": {
    "ui:autofocus": true,
  }
};

const postCreateEvent = (formData) => {
  const body = {
    name: formData.name,
    description: formData.description,
    addressLineOne: formData.addressLineOne,
    addressLineTwo: formData.addressLineTwo,
    city: formData.city,
    state: formData.state,
    zipcode: formData.zipcode
  };
  fetch(config.CREATE_EVENT_ENDPOINT, postOptions(body))
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

class CreateEvent extends React.Component {
  render() {
    return (
      <div style={{width: "50vw", margin: "auto"}}>
        <Form schema={schema}
              uiSchema={uiSchema}
              onSubmit={(data) => postCreateEvent(data.formData)}
              />
      </div>
    )
  }
}

export default CreateEvent;
