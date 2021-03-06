// import Login from "./Components/Login"
import Navbar from "./Components/Navbar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
