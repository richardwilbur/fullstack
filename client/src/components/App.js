import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Initially used dummy components for roughing out routes
// const Header = () => <h2>Header</h2>;

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    // fetchUser is an action creator made available by wiring connect to App
    this.props.fetchUser();
  }

  render() {
    return (
      // className="container" is for Materialize CSS
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            {/* JSX trick, exact is same as exact={true} */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// Initial export
// export default App;

// First argument for connect is mapStateToProps, which we aren't using right now
// Second argument is all the action creators we want to wire up. They are assigned
// to the App component as props
export default connect(
  null,
  actions
)(App);
