import React from 'react';
import Footer from '../componentes/Footer/footer';
import Header from '../componentes/Header/header';
import GalleryBody from '../componentes/Body/Gallery/gallery';

function Gallery() {
  return (
    <div className="App">
      <Header text='Artistas'/>
      <GalleryBody/>
      <Footer/>
    </div>
  );
}

export default Gallery;