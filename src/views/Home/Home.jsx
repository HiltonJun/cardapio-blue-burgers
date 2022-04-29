import "./Home.css";
import PaletaLista from "../../components/PaletaLista/PaletaLista";
import Navbar from "../../components/Navbar/Navbar"
import Overlay from "../../components/Overlay/Overlay"
import Modal from "../../components/Modal/Modal"

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <PaletaLista />
        <Overlay />
        <Modal />
      </div>
    </div>
  );
}

export default Home;
