/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var Link = Router.Link;

var AsyncReactComponent = {
  loadedComponent: null,

  render: function() {
    var component = this.constructor.loadedComponent;
    return component ? component(this.props) : this.preRender();
  }
};

var PreDashboard = React.createClass({
  mixins: [AsyncReactComponent],
  bundle: require('bundle?lazy!./dashboard.js'),
  preRender: function() {
    return <div>Loading dashboard...</div>
  }
});

var PreInbox = React.createClass({
  mixins: [AsyncReactComponent],
  bundle: require('bundle?lazy!./inbox.js'),
  preRender: function() {
    return <div>Loading inbox...</div>
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Partial App</h1>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
        </ul>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});

var routes = (
  <Routes>
    <Route handler={App}>
      <Route name="dashboard" path="dashboard" handler={PreDashboard}>
        <Route name="inbox" path="dashboard/inbox" handler={PreInbox}/>
      </Route>
    </Route>
  </Routes>
);

React.renderComponent(routes, document.getElementById('example'));
