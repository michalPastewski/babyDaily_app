import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/app.css';

import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Home from './views/home/Home';
import Meal from './views/meal/Meal';
import Diaper from './views/Diaper';
import Sleep from './views/Sleep';
import SignUp from './components/Logging/SignUp';
import ForgotPassword from './components/Logging/ForgotPassword';
import UserProfile from './views/userProfile/UserProfile';

function App() {
   return (
      <Router>
         <AuthProvider>
            <div className="container">
               <header>
                  <Navigation />
               </header>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <PrivateRoute path="/meal" component={Meal} />
                  <PrivateRoute path="/diaper" component={Diaper} />
                  <PrivateRoute path="/sleep" component={Sleep} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <PrivateRoute path="/user-profile" component={UserProfile} />
               </Switch>
            </div>
         </AuthProvider>
      </Router>
   );
}

export default App;
