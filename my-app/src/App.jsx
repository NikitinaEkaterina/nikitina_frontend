import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserPage from './pages/UserPage/UserPage';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import AuthModal from './components/AuthModal/AuthModal';
import AddNewsModal from './components/AddNewsModal/AddNewsModal';

function App() {
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const isNewsModalOpen = useSelector((state) => state.news.isNewsModalOpen);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
      {isModalOpen && <AuthModal />}
      {isNewsModalOpen && <AddNewsModal />}
    </BrowserRouter>
  );
}

export default App;
