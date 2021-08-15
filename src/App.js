import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Businesspage from './pages/Businesspage';
import NewsPage from './pages/NewsPage';
import LiveShowPage from './pages/LiveShowPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/business' component={Businesspage}></Route>
        <Route exact path='/news' component={NewsPage}></Route>
        <Route exact path='/liveshow' component={LiveShowPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
