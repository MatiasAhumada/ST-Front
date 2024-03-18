import NavBar from './components/common/Nav'
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from './components/views/Inicio';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <section >
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
      </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
