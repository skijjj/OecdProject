import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/home";
import About from "./scenes/about/about"
import FailForwardWeek from "./scenes/ffw/ffw";
import FearOfFailure from "./scenes/fof/fof";
import GrowthAndFixed from "./scenes/growthandfixed/growthandfixed";
import MessageUs from "./scenes/messageus/messageus";
import Resilience from "./scenes/resilience/resilience";
import Footer from "./scenes/footer/footer";

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
    <div className= "app bg-cover bg-bcg " >
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <div className="bg-bcg">
      <About setSelectedPage={setSelectedPage} />
      <FailForwardWeek setSelectedPage={setSelectedPage} />
      <FearOfFailure setSelectedPage={setSelectedPage} />
      <GrowthAndFixed setSelectedPage={setSelectedPage} />
      <Resilience setSelectedPage={setSelectedPage} />
      <MessageUs setSelectedPage={setSelectedPage} />
      <Footer />
      </div>
    </div>
  )
}

export default App;