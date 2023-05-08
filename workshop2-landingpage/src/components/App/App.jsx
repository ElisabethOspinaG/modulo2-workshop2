import React from 'react';
import Header from '../Header/Header';
import GlobalStyles from './StylesApp';
import Main from '../Main/Main';
import Galery from '../Secciongalery/Galery';
import TitleGalery from '../Secciongalery/TitleGalery';
import Footer from '../Footer/Footer';
import GaleryButton from '../Secciongalery/GaleryButton';
import GaleryMobile from '../Secciongalery/GaleryMobile';


const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Main/>
      <TitleGalery/>
      <Galery/>
      <GaleryMobile/>
      <GaleryButton/>
      <Footer/>
    </>
  )
}

export default App