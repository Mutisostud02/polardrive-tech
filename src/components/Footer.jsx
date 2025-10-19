import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-brand">Polardrive <span>Tech AS</span></h4>
            <p className="footer-about">Your premier destination for luxury vehicles and high-performance motorcycles in Norway.</p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/bikes">Motorcycles</a></li>
              <li><a href="/cars">Luxury Cars</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>Contact Us</h5>
            <div className="contact-info">
              <p><FaMapMarkerAlt /> Storgata 1, 0155 Oslo, Norway</p>
              <p><FaPhone /> <a href="tel:+4712345678">+47 12 34 56 78</a></p>
              <p><FaEnvelope /> <a href="mailto:info@polardrivetechas.com">info@polardrivetechas.com</a></p>
            </div>
            <div className="business-hours">
              <h6>Business Hours</h6>
              <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
              <p>Sat: 10:00 AM - 5:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          
          <div className="footer-col">
            <h5>Newsletter</h5>
            <p>Subscribe to receive updates on new arrivals and special offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Polardrive Tech AS. All rights reserved.</p>
            <div className="legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/cookie-policy">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
