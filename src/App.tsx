import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./scenes/navbar/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/home";
import About from "./scenes/about/about";
import FailForwardWeek from "./scenes/ffw/ffw";
import FearOfFailure from "./scenes/fof/fof";
import GrowthAndFixed from "./scenes/growthandfixed/growthandfixed";
import MessageUs from "./scenes/messageus/messageus";
import Resilience from "./scenes/resilience/resilience";
import Footer from "./scenes/footer/footer";
import NewPage from "./scenes/newpage/newpage";

const Main = ({ setSelectedPage }: { setSelectedPage: (value: SelectedPage) => void }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSelectedPage]);

  return (
    <>
      <div className="bg-bcg">
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <FailForwardWeek setSelectedPage={setSelectedPage} />
      <FearOfFailure setSelectedPage={setSelectedPage} />
      <GrowthAndFixed setSelectedPage={setSelectedPage} />
      <Resilience setSelectedPage={setSelectedPage} />
      <MessageUs setSelectedPage={setSelectedPage} />
      <Footer />
      </div>
    </>
  );
};

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const showNavbar = location.pathname !== "/newpage";

  return (
    <div className="app bg-cover bg-bcg">
      {showNavbar && (
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <Routes>
        <Route path="/" element={<Main setSelectedPage={setSelectedPage} />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;