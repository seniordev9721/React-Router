/** @jsx React.DOM */
var React = require('react');
var CSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var Link = Router.Link;


var Image = React.createClass({
  render: function() {
    var src = "http://place"+this.props.params.service+".com/400/400";
    return (
      <div className="Image">
        <img src={src}/>
      </div>
    );
  }
});

var routes = (
  <Routes>
    <Route handler={App}>
      <Route name="image" path=":service" handler={Image} addHandlerKey={true} />
    </Route>
  </Routes>
);

React.renderComponent(routes, document.getElementById('example'));
