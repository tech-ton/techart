import React from 'react';
import Header from './componentes/Header/header';
import Footer from './componentes/Footer/footer';
import HomeBody from './componentes/Body/Home/body';
function App() {
  return (
    <div className="App">
      <Header text='Pagina Inicial'/>
      <HomeBody/>
      <Footer/>
    </div>
  );
}

export default App;
