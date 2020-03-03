import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ContactForm extends Component {

  state = {
    email: '',
    message:'',
  };

  handleChange = (propName) => (event) => {
    const newValue = event.target.value;
    this.setState({[propName]: newValue});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(this.state.message)
  }

  render = () => {
    const {email, message} = this.state;

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange('email')} value={email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
      </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Type your message here" onChange={this.handleChange('message')} value={message}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
    </Button>
      </Form>

    )

  }
};

export default ContactForm;
