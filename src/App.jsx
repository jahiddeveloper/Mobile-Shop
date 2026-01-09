import "./App.css";
import AvailableMobile from "./Componenet/AvailableMobile/AvailableMobile";
import Hero from "./Componenet/Hero/Hero";
import Navbar from "./Componenet/Navbar/Navbar";

let fetchMobile = fetch("/Mobile.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AvailableMobile fetchMobile={fetchMobile}></AvailableMobile>
    </>
  );
}

export default App;
