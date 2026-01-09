import { Suspense, useState } from "react";
import "./App.css";
import AvailableMobile from "./Componenet/AvailableMobile/AvailableMobile";
import Hero from "./Componenet/Hero/Hero";
import Navbar from "./Componenet/Navbar/Navbar";
import Login from "./Componenet/LoginForm/Login";
import Footer from "./Componenet/Footer/Footer";

let fetchMobile = fetch("/Mobile.json").then((res) => res.json());

function App() {
  let [toggle, setToggle] = useState(true);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <div className="container mx-auto mt-10 flex justify-between items-center">
        <h2 className="font-bold text-2xl">
          {toggle === true ? "Available Mobile" : "Selected Mobile"}
        </h2>

        <div>
          <button
            onClick={() => setToggle(true)}
            className={`px-5 py-3 ${toggle === true ? "bg-red-500" : ""} ${toggle === true ? "text-white" : ""} ${toggle === true ? "font-bold" : ""} rounded-l-xl cursor-pointer`}
          >
            Availabale
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`px-5 py-3 ${toggle === false ? "bg-red-500" : ""} ${toggle === false ? "text-white" : ""} ${toggle === false ? "font-bold" : ""} rounded-r-xl cursor-pointer`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      <Suspense fallback={<h3>Just a sec...</h3>}>
        <AvailableMobile fetchMobile={fetchMobile}></AvailableMobile>
      </Suspense>
      <Login></Login>
      <Footer></Footer>
    </>
  );
}

export default App;
