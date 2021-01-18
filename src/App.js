import "./App.css";
import { Dashboard, Login, Error, PrivateRoute } from "./pages"; //AuthWrapper
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/login" component={Login} />
        <Route exact path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
