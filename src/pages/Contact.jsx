import { useState } from 'react';
import SEO from '../components/SEO.jsx';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarAlt, FaCar } from 'react-icons/fa';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  function onSubmit(e) {
    e.preventDefault();
    // In a real app, send this data to your backend API
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    setSubmitted(true);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <SEO
        title="Contact Us | Polardrive Tech AS"
        description="Get in touch with Norway's premier luxury vehicle dealership. Reach out to our team for personalized assistance with your purchase."
        path="/contact"
      />

      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>We're here to help you find your perfect vehicle</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Our Location</h3>
                <p>
                  Storgata 1<br />
                  0155 Oslo<br />
                  Norway
                </p>
                <a href="https://maps.google.com/?q=Storgata+1+Oslo" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                  Get Directions
                </a>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <h3>Call Us</h3>
                <p>
                  General: <a href="tel:+4712345678">+47 12 34 56 78</a>
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <h3>Email Us</h3>
                <p>
                  General: <a href="mailto:info@polardrivetechas.com">info@polardrivetechas.com</a>
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaClock />
                </div>
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 7:00 PM<br />
                  Saturday: 10:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="manager-profile">
              <div className="manager-photo">
                <img src="/images/manager-portrait.jpg" alt="Erik Nordström - Sales Manager" />
              </div>
              <div className="manager-info">
                <h3>Erik Nordström</h3>
                <p className="manager-title">Sales Manager</p>
                <p className="manager-description">
                  With over 15 years of experience in the luxury automotive industry, 
                  Erik is dedicated to helping clients find their perfect vehicle. 
                  Reach out directly for personalized assistance.
                </p>
                <div className="manager-contact">
                  <p><strong>Direct Line:</strong> <a href="tel:+4712345678">+47 12 34 56 78</a></p>
                  <p><strong>Email:</strong> <a href="mailto:info@polardrivetechas.com">info@polardrivetechas.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-intro">
              <h2>Send Us a Message</h2>
              <p>
                Have a question about our vehicles, financing, or services? Fill out the form 
                and one of our specialists will get back to you within 24 hours.
              </p>
            </div>

            <div className="form-container">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been received. We'll get back to you within 24 hours.</p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', interest: '', message: '' }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+47 xxx xx xxx"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="interest">I'm Interested In *</label>
                      <select 
                        id="interest"
                        name="interest" 
                        value={formData.interest}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="buy-bike">Buying a Motorcycle</option>
                        <option value="buy-car">Buying a Luxury Car</option>
                        <option value="financing">Financing Options</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea 
                      id="message"
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      rows="6"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.3526974954845!2d10.744094!3d59.914167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sStorgata%201%2C%200155%20Oslo%2C%20Norway!5e0!3m2!1sen!2sno!4v1697712345678!5m2!1sen!2sno" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Polardrive Tech AS Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Have Questions?</h2>
            <p>Our team is ready to assist you with your vehicle purchase</p>
            <div className="cta-buttons">
              <a href="tel:+4712345678" className="btn btn-primary btn-lg">Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
