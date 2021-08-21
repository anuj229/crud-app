import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import Create from './components/Create'
import View from './components/View'
import Edit from './components/Edit'
import Delete from './components/Delete'
import { AppProvider } from './Context';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/view/:id" exact component={View} />
          <Route path="/edit/:id" exact component={Edit} />
          <Route path="/delete/:id" exact component={Delete} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
