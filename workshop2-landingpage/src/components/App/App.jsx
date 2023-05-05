import React from 'react';
import Header from '../Header/Header';
import GlobalStyles from './StylesApp';
import Galery from '../Secciongalery/Galery';
import TitleGalery from '../Secciongalery/TitleGalery';


const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <TitleGalery/>
      <Galery/>
    </>
  )
}

export default App