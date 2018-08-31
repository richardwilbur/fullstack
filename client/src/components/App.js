import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Initially used dummy components for roughing out routes
// const Header = () => <h2>Header</h2>;

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    //className="container" is for Materialize CSS
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          {/*JSX trick, exact is same as exact={true}*/}
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
