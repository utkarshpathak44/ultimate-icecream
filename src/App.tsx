import "./App.css";
import NavBar from "./test/Navbar";
import Menu from "./Menu";
import About from "./About";
import { IceCreamProvider } from "./IceCreamContext";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const pageTitleUpdater=()=>{
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname];
  }, [location]);

  return null;
}

function App() {
  
  return (
    <BrowserRouter>
      <div className="bg-pink-500 h-screen px-5 sm:px-20 md:px-90 overflow-scroll">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <IceCreamProvider>
                <Menu />
              </IceCreamProvider>
            }
          />
          <Route path="/about" element={<About />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
