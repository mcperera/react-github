import "./App.css";
import { Dashboard, Login, Error } from "./pages"; //PrivateRoute, AuthWrapper
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
