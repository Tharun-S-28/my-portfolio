import { ThemeProvider } from "./context/ThemeContext";
import Loader from "./components/Loader/Loader";
import BackgroundFX from "./components/BackgroundFX/BackgroundFX";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Stats from "./components/Stats/Stats";
import Achievements from "./components/Achievements/Achievements";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Internships from "./components/Internships/Internships";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <Loader />
      <BackgroundFX />
      <CustomCursor />
      <ScrollProgress />

      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Achievements />
        <CodingProfiles />
        <Internships />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
