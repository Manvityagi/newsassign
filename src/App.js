import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Liveshow from './components/liveshow/Liveshow';
import News from './components/news/News';
import { Switch ,Route, BrowserRouter} from 'react-router-dom';
import Business from './components/business/Business';

function App() {
  return (
    <BrowserRouter>
    <div style={{backgroundColor:"#F4F4F4"}}>
      <Navbar />
      <Liveshow />
      <br/>
      <br/>
      <News/>
      <br />
      <br/>
      <Business/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
