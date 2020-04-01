import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form inline>
          <h3>Input Your Birthday:</h3>
          <FormControl type="date">
          </FormControl>
          {' '}
          <Button>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
