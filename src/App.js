import React, { Component } from 'react';
import { render } from "react-dom";
import FlexiOutput from "./component/flexiOutput";
import Flexi from "./component/flexi";

const flexiConfig = {
  items: [
    {
      "name": "person_name",
      "label": "Person's Name",
      "type": 'TextField',
    },
    {
      "name": "states",
      "label": "Person's state",
      "type": "DropDown",
      "values": [
        "Maharashtra",
        "Kerala",
        "Tamil Nadu"
      ]
    }
  ]
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      place: '',
    };
  }

  onFlexSubmit = (val) => {
    this.setState({ name: val.name, place: val.dd });
  }

  render() {
    return (
      <div className='container'>
        <Flexi onSubmitFn={this.onFlexSubmit} config={flexiConfig.items} />
        {this.state.name && this.state.place &&
          <FlexiOutput name={this.state.name} place={this.state.place} />
        }
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));
