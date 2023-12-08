import ChooseUs from "./Components/ChooseUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LandingImages from "./Components/LandingImages";
import Products from "./Components/Products";
import Services from "./Components/Services";
import WorkedWith from "./Components/WorkedWith";


function App() {
  return (
    <div>
      {/* <Header /> */}
      <LandingImages />
      <Services />
      <ChooseUs/>
      <Products />
      <WorkedWith />
      <Footer />
    </div>
  );
}

export default App;
