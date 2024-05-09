import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import{Routes, Route, useLocation} from 'react-router-dom'; 
import SendMessagePage from './pages/Send/SendMessagePage';
import SendResult from './pages/Result/SendResult';
import CreditPage from './pages/Credit/CreditPage';
import TemplatePage from './pages/Template/TemplatePage';
import NumberPage from './pages/Number/NumberPage';
import AddressPage from './pages/Address/AddressPage';
import UserPage from './pages/MyPage/UserPage';
import BusinessProfilePage from './pages/MyPage/BusinessProfilePage';
import JoinPage from './pages/Auth/JoinPage';
import LogInPage from './pages/Auth/LogInPage';
import FindEmail from './pages/Auth/FindEmail';


function App() {
  const location = useLocation()
  const footerHide = location.pathname==='/login' || location.pathname==='/findEmail'
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<HomePage/>} exact/>
        <Route path='/send' element={<SendMessagePage/>}/>
        <Route path='/result' element={<SendResult/>}/>
        <Route path='/credit' element={<CreditPage/>} />
        <Route path='/template' element={<TemplatePage/>} />
        <Route path='/number' element={<NumberPage/>} />
        <Route path='/address' element={<AddressPage/>} />
        <Route path='/userpage' element={<UserPage/>} />
        <Route path='/business' element={<BusinessProfilePage/>}/>
        <Route path='/join' element={<JoinPage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/findEmail' element={<FindEmail/>}/>
           
      </Routes>


      {!footerHide && <Footer />}

    </div>
  );
}

export default App;
