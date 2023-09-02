import React from 'react';
import Footer from './componentes/Footer/footer';
import Header from './componentes/Header/header';
import BodyProfile from './componentes/Body/Profile/profile';

function App() {
  return (
    <div className="App">
      <Header text='Perfil'/>
      <BodyProfile/>
      <Footer/>
    </div>
  );
}

export default App;
