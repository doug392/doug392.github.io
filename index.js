'use strict';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1>React Component</h1>
    );
  }
}

const domContainer = document.querySelector('#react');
ReactDOM.render(Component, domContainer);