import './App.css';
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import Auth from './components/auth'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Auth />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
