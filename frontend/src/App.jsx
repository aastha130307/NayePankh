import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CancellationRefund from "./pages/CancellationRefund";
import Events from "./pages/Events";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />  
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/events" element={<Events />} />
      <Route path="/terms" element={<TermsConditions />}/>
       <Route path="/privacy" element={<PrivacyPolicy />} />
       <Route path="/cancelRefund" element={<CancellationRefund />} />
      </Routes>
  
  );
}

export default App;