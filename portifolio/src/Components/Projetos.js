import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Projetos.css'; // Crie este arquivo de estilo conforme necessário

const Projetos = () => {
  return (
    <div className="projetos-container">
      <h2>Projetos</h2>
      <Carousel showThumbs={true}>
        <div className="projeto-item">
          <p>EM BREVE</p>
        </div>
        <div className="projeto-item">
          <p>EM BREVE</p>
        </div>
        <div className="projeto-item">
          <p>EM BREVE</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Projetos;
