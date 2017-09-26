var React = require('react');
var Header = require('./header');

class App extends React.Component {
  render() {
      return (
            <div className="header">
                  <Header />
            </div>
            
      );
    }
}

module.exports = App;