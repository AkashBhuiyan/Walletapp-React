import './App.css';
import Header from './components/shared/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import CreateWallet from './components/dashboard/CreateWallet';


function App() {
  return (
    <Router>
        <Route path="/" component={Header}></Route>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/createwallet" component={CreateWallet}/>
                
          </Switch>
    </Router>
  );
}

export default App;
