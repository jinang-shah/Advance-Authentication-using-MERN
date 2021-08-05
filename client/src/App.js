import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/routings/PrivateRoute";

import PrivateScreen from './Components/screens/PrivateScreen'
import LoginScreen from './Components/screens/LoginScreen'
import RegisterScreen from './Components/screens/RegisterScreen'
import ForgotPasswordScreen from './Components/screens/ForgotPasswordScreen'
import ResetPasswordScreen from './Components/screens/ResetPasswordScreen'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
