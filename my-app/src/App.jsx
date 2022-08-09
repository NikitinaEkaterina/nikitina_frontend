import React from 'react';
import { useSelector } from 'react-redux';

import MainPage from './pages/MainPage';
import Header from './components/Header/Header';
import AuthModal from './components/AuthModal/AuthModal';

function App() {
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  return (
    <div>
      <Header />
      <MainPage />
      {isModalOpen && <AuthModal />}
    </div>
  );
}

export default App;
