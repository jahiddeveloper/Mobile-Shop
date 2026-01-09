import { Suspense } from "react";
import "./App.css";
import AvailableMobile from "./Componenet/AvailableMobile/AvailableMobile";
import Hero from "./Componenet/Hero/Hero";
import Navbar from "./Componenet/Navbar/Navbar";
import Login from "./Componenet/LoginForm/Login";
import Footer from "./Componenet/Footer/Footer";

let fetchMobile = fetch("/Mobile.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h3>Just a sec...</h3>}>
        <AvailableMobile fetchMobile={fetchMobile}></AvailableMobile>
      </Suspense>
      <Login></Login>
      <Footer></Footer>
    </>
  );
}

export default App;
