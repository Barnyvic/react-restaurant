import Header from "./components/Header/HeaderComp";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./container/AboutUs/AboutUs";
import Chef from "./container/Chef/Chef";
import FindUs from "./container/Findus/FindUs";
import Footer from "./container/Footer/Footer";
import { Gallery } from "./container/Gallery/Gallery";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import SpecialMenu from "./container/Menu/SpecialMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
