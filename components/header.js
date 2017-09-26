var React = require("react");
var Router = require('react-router')
var Link = Router.Link

class Header extends React.Component {
  render() {
      return (
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/new">New</a></li>
            </ul>
             
        );}
}


module.exports = Header;