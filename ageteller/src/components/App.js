import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../styles/App.css';
import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1980-04-04',
      showStats: false
    }
  }

  changeBirthday() {
    this.setState({
      birthday: this.state.newDate,
      showStats: true
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
        {
          this.state.showStats ?
            <div className="fade age-stats">
              <AgeStats date={this.state.birthday} />
            </div>
          :
            <div></div>
        }

      </div>
    );
  }
}

export default App;
