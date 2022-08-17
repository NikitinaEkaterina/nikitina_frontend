import {
  BrowserRouter, Routes, Route, React,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserPage from './pages/UserPage/UserPage';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import AuthModal from './components/AuthModal/AuthModal';

function App() {
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
      {isModalOpen && <AuthModal />}
    </BrowserRouter>
  );
}

export default App;
