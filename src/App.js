import './App.css';
import Header from './components/shared/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import CreateWallet from './components/dashboard/CreateWallet';
import NotFound from './components/shared/NotFound';
import {Provider} from 'react-redux';
import store from './Store';
import UpdateWallet from './components/dashboard/UpdateWallet';
import Transaction from './components/transactions/Transaction';
import AddTransaction from './components/transactions/AddTransaction';
import Footer from './components/shared/Footer';


function App() {
  return (
    <Provider store={store}>
      <Router>
          <Route path="/" component={Header}></Route>
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/dashboard" exact component={Dashboard}/>
                  <Route path="/createwallet" exact component={CreateWallet}/>
                  <Route path="/updatewallet/:id" exact component={UpdateWallet}/>
                  <Route path="/transactions/:id" exact component={Transaction}/>
                  <Route path="/transaction/add/:id" exact component={AddTransaction}/>
                  <Route path="/" component={NotFound}/>
            </Switch>
            <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
