import React from 'react';
import Footer from './componentes/Footer/footer';
import Header from './componentes/Header/header';
import BodyArtists from './componentes/Body/Artists/artists';

function App() {
  return (
    <div className="App">
      <Header text='Artistas'/>
      <BodyArtists/>
      <Footer/>
    </div>
  );
}

export default App;
