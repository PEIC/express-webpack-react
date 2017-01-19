import React, { Component } from 'react';
import css from './style.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: '11111',
    }
  }
  componentDidMount() {
    fetch('info').then(data => data.json())
      .then(data => {
        this.setState({
          info: JSON.stringify(data),
        });
      });
  }
  render() {
    return (<div>
      <p className="helloWorld">
        Hello World
        </p>
      <pre>{`
          ${this.state.info}
        `}</pre>
    </div>)
  }
}

export default App;