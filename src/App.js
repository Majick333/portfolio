import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages';
import ContactPage from './pages/contact';
import AdminDashBoardPage from './pages/adminDashboard';
import BlogPage from './pages/blog';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={ContactPage} exact />
        <Route path='/admin' component={AdminDashBoardPage} exact />
        <Route path='/blog' component={BlogPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
