import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Category from './components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AutoTranslate from './components/test';
import Login from './pages/Login';
import UserSignUp from './pages/sign-up';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from "./context/AuthContext";
import SchemeApplicationForm from './pages/SchemeApplicationForm';
function App() {
  return (
    <div className="App">
      
{/*       
      <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Category" element={<Category />} />
                <Route path="/signup" element={<UserSignUp />} />
                <Route path="/translate" element={<AutoTranslate/>}/>
            </Routes>
        </BrowserRouter> */}
        <AuthProvider>
        <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Category" element={<Category />} />
                <Route path="/signup" element={<UserSignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/translate" element={<AutoTranslate/>}/>
                <Route path="/schemeform" element={<SchemeApplicationForm/>}/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
    </AuthProvider>
    </div>
  );
}

export default App;
