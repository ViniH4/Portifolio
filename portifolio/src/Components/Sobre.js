import react, {useEffect, useState} from 'react';
import "../Styles/Sobre.css"
import foto from "../images/logo.webp"

function Sobre() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adicione um observador de interseção para verificar quando o elemento se torna visível na tela
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Define a porcentagem de visibilidade necessária para ativar a animação
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Interrompe a observação após a ativação
        }
      });
    }, options);

    // Inicie a observação no elemento desejado (no seu caso, o container do conteúdo)
    const habilidadesContainer = document.querySelector(".sobreStyle");
    if (habilidadesContainer) {
      observer.observe(habilidadesContainer);
    }

    return () => {
      // Limpe o observador quando o componente for desmontado
      observer.disconnect();
    };
  }, []);

  

    return (
<div id="sobre" className={`sobreStyle ${isVisible ? "animated" : "hidden"}`}>
      <img src={foto} alt="Minha Foto" className="minhaFoto"/>
        <div>
          <h3>Sobre mim</h3>
          <p className="textoStyle">
            Tenho <span className='idade'>17 anos</span> e sou apaixonado pelo mundo da programação. Há cerca de um ano e meio, comecei a minha jornada na área de desenvolvimento de software, com o objetivo de me tornar um desenvolvedor Full-Stack. Estou constantemente explorando linguagens de programação, frameworks e ferramentas para criar soluções criativas e funcionais. Minha paixão pela programação e minha sede de conhecimento me impulsionam a enfrentar desafios e contribuir para projetos empolgantes. Além disso, sou dedicado, focado, adoro trabalho em equipe e transformar ideias em realidade. Estou entusiasmado para conquistar grandes feitos neste campo dinâmico e emocionante. Se você procura um desenvolvedor comprometido e entusiasta, estou pronto para colaborar e criar algo incrível junto com você.
            </p>

            <a className='curriculo'>Curriculo</a>
        </div>
      </div>  
       
    )
}

export default Sobre;