import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Searchbar extends Component {

    state = {
      value: '',
      redirect: false,
    };

    handleChange = (event) => {
      const value = event.target.value;
      console.log(value);
      this.setState({value});
      console.log(this.state.value);
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({redirect: true});
    };

    render = () => {
      const {value, redirect} = this.state;
      if(redirect){
      return <Redirect to={`/search/${value}`} />;
      }
      return (
      <Form inline onSubmit={this.handleSubmit}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange}/>
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      )

    }

}


export default Searchbar