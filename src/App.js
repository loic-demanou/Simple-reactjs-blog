// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  // on ecrit la logique du js a cet emplacement
  // const title = "Welcome my first variable";
  // const user = { name: "Demanou", age:10}
  // var URL = "https://google.com"

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contenu">
          <Switch>
            <Route exact path={'/'}>
              <Home />
            </Route>
            <Route exact path={'/create'}>
              <Create />
            </Route>
          </Switch>
        </div>      
      </div>
    </Router>
  );
}

export default App;
