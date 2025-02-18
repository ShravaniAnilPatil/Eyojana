import './App.css';
import { useContext } from 'react';
import Home from './pages/Home';
import Category from './components/Category';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AutoTranslate from './components/test';
import Login from './pages/Login';
import UserSignUp from './pages/sign-up';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { LanguageProvider } from './context/LanguageContext';
import { AuthContext, AuthProvider } from "./context/AuthContext";
import SchemeApplicationForm from './pages/SchemeApplicationForm';
import ApplicationDocuments from './components/ApplicationDocuments';
import UserApplications from './components/UserApplications';
import Scheme from './pages/Scheme';
import SchemeDetail from './pages/SchemeDetail';
import Chat from './components/Chat';
import AdminHome from './pages/AdminHome';
import Contact from './components/Contact';
import Map from './components/Map';
import Applications from './components/Applications';
import Recommendation from './components/recommendation';

import MyUsers from './components/UserList';

import AdminNav from './components/AdminNav';

const MainApp = () => {
  const location = useLocation(); // Now this is inside Router context
  const isAdminPage = location.pathname.includes('/adminhome');
  const hideNavbarRoutes = ['/adminhome'];

  return (
    <div>
      {/* Show the appropriate Navbar depending on the route */}
      {
        isAdminPage ? <AdminNav /> : <Navbar />
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/translate" element={<AutoTranslate />} />
        <Route path="/schemeform" element={<SchemeApplicationForm />} />
        <Route path="/myapplications" element={<UserApplications />} />
        <Route path="/application-documents" element={<ApplicationDocuments />} />
        <Route path="/scheme" element={<Scheme />} />
        <Route path="/scheme-details" element={<SchemeDetail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/adminhome/chat" element={<Chat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminhome/map" element={<Map />} />
        <Route path="/adminhome/applications/:category" element={<Applications />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/adminhome/myusers" element={<MyUsers/>}/>
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
