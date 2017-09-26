var React = require('react');
var App = require('./app');

class HelloMessage extends React.Component {
  render() {
    return (<div>

        Hello {this.props.name}
        <App />

      </div>);
  }
}

module.exports = HelloMessage;