import NavBar from './components/common/Nav'
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from './components/views/Inicio';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Foot from './components/common/Foot';
import "bootstrap/dist/css/bootstrap.min.css";
import Equipos from './components/home/equipos/Equipos';

function App() {
  return (
    <section >
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/ordenes" element={<Equipos></Equipos>}></Route>
      </Routes>
      </BrowserRouter>
      <Foot></Foot>
    </section>
  );
}

export default App;
