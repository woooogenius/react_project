import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import{Routes, Route} from 'react-router-dom'; 
import SendMessagePage from './pages/SendMessagePage';
import SendResult from './pages/SendResult';
import CreditPage from './pages/CreditPage';
import TemplatePage from './pages/TemplatePage';


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<HomePage/>} exact/>
        <Route path='/send' element={<SendMessagePage/>}/>
        <Route path='/result' element={<SendResult/>}/>
        <Route path='/credit' element={<CreditPage/>} />
        <Route path='/template' element={<TemplatePage/>} />
           
      </Routes>


      <Footer/>

    </div>
  );
}

export default App;
