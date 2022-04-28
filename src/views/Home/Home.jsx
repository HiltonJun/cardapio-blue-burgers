import "./Home.css";
import sacola from "../../assets/icons/sacola.svg";
import logo from "../../assets/logo.svg";
import PaletaLista from "../../components/PaletaLista/PaletaLista";
import Navbar from "../../components/Navbar/Navbar"

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;
