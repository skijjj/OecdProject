import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/home";
import About from "./scenes/about/about"

function App() {

  const [ selectedPage, setSelectedPage] = useState<SelectedPage>(
  SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if( window.scrollY === 0 ){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if( window.scrollY !== 0)setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className= "app bg-cover bg-[url('src/assets/download.jpg')] bg-blacky " >
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <div className="bg-blacky">
      <About setSelectedPage={setSelectedPage} />

      </div>
    </div>
  )
}

export default App;
