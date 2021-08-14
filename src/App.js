import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Liveshow from './components/liveshow/Liveshow';
import News from './components/news/News';

function App() {
  return (
    <>
      <Navbar />
      <Liveshow />
      <News />
    </>
  );
}

export default App;
