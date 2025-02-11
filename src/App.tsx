import "./App.css";
import NavBar from "./test/Navbar";
import Menu from "./Menu";
import About from "./About";
import { IceCreamProvider } from "./IceCreamContext";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import { useSearchParams } from 'react-router-dom';
import SearchIceCreams from "./SearchIceCreams";
import { ParticularIceCream } from "./ParticularIceCream";

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const pageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname];
  }, [location]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-stone-500 h-screen px-5 md:px-0 overflow-scroll">
        <NavBar />
        <Routes>
          <IceCreamProvider>
            <Route path="/" element={<Menu />} />
            <Route path="/ice-cream/:id" element={<ParticularIceCream />} />
          </IceCreamProvider>
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchIceCreams />} />

          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
