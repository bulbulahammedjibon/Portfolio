import "./App.css";
import HeroSection from "./Component/HeroSection";
import MyProjectSection from "./Component/My Project Section/MyProjectSection";
import Navbar from "./Component/Navbar";
import SkillLogo from "./Component/SkillLogo/SkillLogo";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <SkillLogo />

      <MyProjectSection />
      <Footer />
    </>
  );
}

export default App;
