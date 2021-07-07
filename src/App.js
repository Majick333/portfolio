import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages';
import ContactPage from './pages/contact';
import AdminDashBoardPage from './pages/adminDashboard';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={ContactPage} exact/>
        <Route path='/admin' component={AdminDashBoardPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
