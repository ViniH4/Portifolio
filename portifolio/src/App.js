import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Habilidades from "./Components/Habilidades.js";
import Contato from "./Components/Contato.js";
import Projetos from "./Components/Projetos.js";
import Sobre from "./Components/Sobre.js"
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <content>
        <Home className="componentes"/>
        <Sobre  className="componentes"/>
        <Habilidades className="componentes"/>
      </content>
    </div>
  );
}

export default App;
