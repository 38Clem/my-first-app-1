import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ContactForm extends Component {

  state = {
    email: '',
    message:'',
  };

  handleEmailChange = (event) => {
    const email = event.target.value;
    this.setState({email});
  };

  handleMessageChange = (event) => {
    const message = event.target.value;
    this.setState({message});
    console.log(message);
    
  };

  render = () => {
    const {email, message} = this.state;

    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} value={email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
      </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Type your message here" onChange={this.handleMessageChange} value={message}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
    </Button>
      </Form>

    )

  }
};

export default ContactForm;
