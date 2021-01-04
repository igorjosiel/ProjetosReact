import logo from './logo.svg';
import './App.css';

import NavBar from "./componentes/NavBar";
import Imagens from "./componentes/Imagens";

function App() {

  return (
    <div className="App">
      <NavBar textLink1={"Home"} textLink2={"About"} link1Page={"http://localhost:3000/"} link2Page={"https://www.google.com.br/"}></NavBar>
      <Imagens></Imagens>
      {/* <Textos titulo={"Framework React"} cor={""}></Textos> */}
    </div>
  );
}

export default App;
