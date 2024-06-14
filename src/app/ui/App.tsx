import style from './App.module.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../widgets/Header';
import Main from '../../pages/Main';
import Footer from '../../widgets/Footer';
export function App() {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
