import './App.css';
import Footer from './components/Footer';
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
import FindPasswd from './pages/Auth/FindPasswd';
import PasswdReset from './pages/Auth/PasswdReset';


function App() {
  const location = useLocation()
  const footerHidePaths = ['/login', '/findEmail', '/findPasswd', '/resetPasswd'];
  const footerHide = footerHidePaths.includes(location.pathname);
  
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
        <Route path='/findPasswd' element={<FindPasswd/>}/>
        <Route path='/resetPasswd' element={<PasswdReset/>}/>
           
      </Routes>


      {!footerHide && <Footer />}

    </div>
  );
}

export default App;
