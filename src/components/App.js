import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../styles/App.css';
import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1980-04-04'
    }
  }

  changeBirthday() {
    this.setState({
      birthday: this.state.newDate
    });
  }


  render() {
    return (
      <div className="App">
        <Form inline>
          <h3>Input Your Birthday:</h3>
          <FormControl type="date" onChange={ event => this.setState({ newDate: event.target.value })}>
          </FormControl>
          {' '}
          <Button onClick={ () => this.changeBirthday()}>
            Submit
          </Button>
        </Form>
        <AgeStats date={this.state.birthday} />
      </div>
    );
  }
}

export default App;
