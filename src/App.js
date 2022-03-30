import HeaderBar from "./HeaderBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./registerForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <HeaderBar />
        <Switch>
          <Route exact path='/' >
            <LoginForm />
          </Route>
          <Route exact path='/registerForm'>
            <RegisterForm />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
