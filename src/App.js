import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Books List</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
