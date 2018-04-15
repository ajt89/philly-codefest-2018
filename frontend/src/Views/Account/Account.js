import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Form from "react-jsonschema-form";

import config from '../../config.js';
import {getOptions, postOptions} from '../../Fetch';

const accountInfo = {
  firstName: 'Garry',
  lastName: 'Sapporeti',
  location: '19104',
  bio: 'Hockey fan',
  contactInfo: 'dont'
};

const schema = (accountInfo) => {
  return {
    title: "",
    type: "object",
    properties: {
      firstName: {type: "string", title: "First Name", default: accountInfo.firstName},
      lastName: {type: "string", title: "Last Name", default: accountInfo.lastName},
      location: {type: "string", title: "Location", default: accountInfo.location},
      bio: {type: "string", title: "Bio", default: accountInfo.bio},
      contactInfo: {type: "string", title: "Contact Info", default: accountInfo.contactInfo},
    }
  }
};

const postAccount = (formData) => {
  const body = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    location: formData.location,
    bio: formData.bio,
    contactInfo: formData.contactInfo,
  };
  fetch(config.ACCOUNT_ENDPOINT, postOptions(body))
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

const AccountCard = (accountInfo) => (
  <Card>
    <CardMedia>
    </CardMedia>
    <CardTitle title="Account" />
    <CardText>
    <Form schema={schema(accountInfo)}
          onSubmit={(data) => postAccount(data.formData)}
          />
    </CardText>
    <CardActions>
    </CardActions>
  </Card>
);

const getAccountDetails = (username) => {
  fetch(config.LOGIN_ENDPOINT, getOptions())
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

class Account extends React.Component {
  render() {
    const card = AccountCard(accountInfo);
    return (
      <div>
        {card}
      </div>
    )
  }
}

export default Account;
