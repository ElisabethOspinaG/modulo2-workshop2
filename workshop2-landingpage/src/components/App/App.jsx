import React from 'react';
import Header from '../Header/Header';
import GlobalStyles from './StylesApp';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App