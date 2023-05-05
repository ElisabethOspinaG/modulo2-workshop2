import React from 'react';
import Header from '../Header/Header';
import GlobalStyles from './StylesApp';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Galery from '../Secciongalery/Galery';
import TitleGalery from '../Secciongalery/TitleGalery';


const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Main/>
      <Footer/>
      <TitleGalery/>
      <Galery/>
    </>
  )
}

export default App