import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import{Routes, Route} from 'react-router-dom'; 
import SendMessagePage from './pages/SendMessagePage';

function App() {
  return (
    <div className="App">
      <Header/>


      <Routes>
        <Route path='/' element={<HomePage/>} exact/>
        <Route path='/send' element={<SendMessagePage/>}/>
      </Routes>


      <Footer/>

    </div>
  );
}

export default App;
