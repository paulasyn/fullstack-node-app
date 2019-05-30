// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Register from './components/register.component';
import CreateGroup from './components/group.component'
import Login from './components/login.component';

// const AuthRoute = ({ component: Component, ...rest}) => (
//   <Route {...rest} render={props => (
//     fakeAuth.isAuthenticated ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to ={{
//         pathname: '/login',
//         state { from: props.location }
//       }} />
//     )
//   )}/>
// )

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
               
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                  <Link to={'/register'} className="nav-link">Register</Link>
                </li>
                
                {/* <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li> */}

                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>

                <li className="nav-item">
                  <Link to={'/groups'} className="nav-link">Create Group</Link>
                </li>
              
              </ul> 
            </div>
            
          </nav> <br/>
          <h2>Welcome to REACT test!</h2> <br/>
          <Switch>
            {/* <Route path='/register' component={ Register } /> */}
            <Route exact path='/login' component={ Login } />
            <Route exact path='/create' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/groups' component={ CreateGroup } />
            <Route path='/index' component={ Index } />
            
          </Switch> 
        </div>
      </Router>
    );
  }
}

export default App;
