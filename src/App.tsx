import React from 'react';
import Footer from './componentes/Footer/footer';
import Header from './componentes/Header/header';
import AboutBody from './componentes/Body/About/about';

function App() {
  return (
    <div className="App">
      <Header text='Sobre'/>
      <AboutBody/>
      <Footer/>
    </div>
  );
}

export default App;
