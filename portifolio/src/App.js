import Navbar from "./Components/Navbar.js";
import Sobre from "./Components/Sobre.js";
import Habilidades from "./Components/Habilidades.js";
import Contato from "./Components/Contato.js";
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Sobre />
        <Habilidades />
        <Contato />
    </div>
  );
}

export default App;
