import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Searchbar extends Component {

    state = {
      value: '',
    };

    searchArticle = (event) => {
      event.preventDefault();
      console.log(event.target.value);
      const value = event.target.value;
      this.setState({value})
      console.log(this.state.value);
    }

    render = () => {
      return (
      <Form inline >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.searchArticle}/>
          <Button variant="outline-success">Search</Button>
        </Form>
      )

    }

}


export default Searchbar