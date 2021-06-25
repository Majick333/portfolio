import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignInPage from './pages/signin';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        {/* <Route path='/admin' component={AdminPage} exact /> */}
        {/* <Route path='/blog' component={BlogPage} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
