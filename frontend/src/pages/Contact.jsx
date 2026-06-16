import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import VolunteerCTA from "../components/VolunteerCTA";
import ContactButton from "../components/ContactButton";
import ContactModal from "../components/ContactModal";
import VolunteerModal from "../components/VolunteerModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Contact = () => {
  return (
    <>
      <Navbar/>
      <ContactHero />
      <ContactInfo />
      <VolunteerCTA />
      <VolunteerModal/>
      <ContactButton />
      <ContactModal />
      <Footer/>
    </>
  );
};

export default Contact;