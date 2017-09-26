var React = require('react');
var App = require('./app');

class HelloMessage extends React.Component {
  render() {
    return (
        <div>
          <App />
        </div>
      );
  }
}

module.exports = HelloMessage;