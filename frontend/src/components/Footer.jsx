import {Link} from "react-router-dom";
import logo from "../assets/logo.avif";
import "../App.css";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Footer = () =>{
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-brand">
                <h2>NayePankh Foundation</h2>
                <p>
              Empowering children through education, awareness, and equal opportunities.
              We believe small actions create big change.
              </p>
              <div className="socials">
                <h3>Follow us</h3>
                 <div className="social-icons">
                    <a href="https://www.instagram.com/nayepankhfoundation"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/company/nayepankh"><FaLinkedin/></a>
                    <a href="https://www.facebook.com/nayepankhfoundation"><FaFacebook/></a>
                    <a href="http://www.twitter.com/nayepankh"><FaTwitter/></a>
                    <a href="https://www.youtube.com/@nayepankhfoundation"><FaYoutube/></a>
                 </div>
              </div>
            </div>

            <div className="footer-contact">
            <h2>Get in touch</h2>
            <p><FaEnvelope/>contact@nayepankh.com</p>
            <p><FaPhone/>+91- 8318500748</p>
            <p><FaMapMarkerAlt/>104A/279, P Road, Kanpur, Uttar Pradesh, India</p>
            </div>
            <div className="footer-links">
            <h2>Policies</h2>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cancelRefund">Cancel Refund</Link>
            </div>
        </div>
        <div className="footer-bottom">
             <p>© {new Date().getFullYear()} NayePankh Foundation. All rights reserved.</p>
        </div>
        </footer>
    )
}

export default Footer;