import Navbar from "../components/Navbar";
import About from "../components/About";
import Program from "../components/Programs";
import MissionVision from "../components/MissionVision";
import Stats from "../components/Stats";
import PresidentMessage from "../components/PresidentMessage";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <About />
      </section>

      <section id="programs">
        <Program />
      </section>

      <section id="mission">
        <MissionVision />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="message">
        <PresidentMessage />
      </section>

      <Footer />
    </>
  );
};

export default Home;