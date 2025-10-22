import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { FaCar, FaTools, FaShieldAlt, FaTachometerAlt, FaHandshake, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('bikes');
  
  const slides = [
    {
      image: '/images/cars/carhead.webp',
      title: 'Premium Motorcycles for the Discerning Rider',
      description: 'Experience the thrill of the ride with our exclusive collection of high-performance motorcycles',
      cta: { text: 'View Bikes', link: '/bikes' }
    },
    {
      image: '/images/cars/carhead2.webp',
      title: 'Luxury Cars That Define Excellence',
      description: 'Discover our curated selection of premium vehicles that combine performance, comfort, and style',
      cta: { text: 'View Cars', link: '/cars' }
    },
    {
      image: '/images/cars/carhead3.webp',
      title: 'Unmatched Quality & Performance',
      description: 'Your journey to automotive excellence starts here at Polardrive Tech AS',
      cta: { text: 'Explore Collection', link: '/bikes' }
    },
    {
      image: '/images/cars/carhead4.webp',
      title: 'Drive Your Dreams',
      description: 'Premium vehicles curated for the most discerning clients in Norway',
      cta: { text: 'Contact Us', link: '/contact' }
    }
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <>
      <SEO
        title="Polardrive Tech AS | Premium Bikes & Luxury Cars in Norway"
        description="Discover our exclusive collection of high-performance motorcycles and luxury vehicles. Your journey to excellence starts here at Polardrive Tech AS in Oslo, Norway."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CarDealer",
              "@id": "https://polardrivetechas.com",
              "name": "Polardrive Tech AS",
              "url": "https://polardrivetechas.com",
              "logo": "https://polardrivetechas.com/logo.png",
              "email": "info@polardrivetechas.com",
              "telephone": "+4712345678",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Storgata 1",
                "addressLocality": "Oslo",
                "postalCode": "0155",
                "addressCountry": "NO"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ]
            },
            {
              "@type": "WebSite",
              "name": "Polardrive Tech AS",
              "url": "https://polardrivetechas.com"
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
              <div className="container">
                <div className="hero-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className="hero-buttons">
                    <Link to={slide.cta.link} className="btn btn-primary">{slide.cta.text}</Link>
                    <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="hero-prev" onClick={prevSlide} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <button className="hero-next" onClick={nextSlide} aria-label="Next slide">
          <FaChevronRight />
        </button>
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="featured-vehicles">
        <div className="container">
          <div className="section-header">
            <h2>Featured Vehicles</h2>
            <p>Discover our handpicked selection of premium motorcycles and luxury cars</p>
          </div>
          
          <div className="vehicle-tabs">
            <button 
              className={`tab-btn ${activeTab === 'bikes' ? 'active' : ''}`}
              onClick={() => setActiveTab('bikes')}
            >
              Motorcycles
            </button>
            <button 
              className={`tab-btn ${activeTab === 'cars' ? 'active' : ''}`}
              onClick={() => setActiveTab('cars')}
            >
              Luxury Cars
            </button>
          </div>
          
          <div className="vehicle-grid">
            {/* Bike 1 */}
            <div className="vehicle-card" data-type="bikes" style={{ display: activeTab === 'bikes' ? 'block' : 'none' }}>
              <div className="vehicle-badge">New Arrival</div>
              <div className="vehicle-image">
                <img src="/images/bikes/sport-bike.jpg" alt="Ducati Panigale V4 R" />
                <div className="vehicle-overlay">
                  <button className="btn btn-quick-view">Quick View</button>
                </div>
              </div>
              <div className="vehicle-details">
                <h3>Ducati Panigale V4 R</h3>
                <div className="vehicle-specs">
                  <span><FaTachometerAlt /> 1,103 cc</span>
                  <span>221 HP</span>
                  <span>Sport</span>
                </div>
                <div className="vehicle-price">
                  <span className="price">NOK 349,900</span>
                  <span className="original-price">NOK 369,900</span>
                </div>
                <div className="vehicle-actions">
                  <Link to="/bikes" className="btn btn-outline">View Details</Link>
                  <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
                </div>
              </div>
            </div>
            
            {/* Bike 2 */}
            <div className="vehicle-card" data-type="bikes" style={{ display: activeTab === 'bikes' ? 'block' : 'none' }}>
              <div className="vehicle-badge">Best Seller</div>
              <div className="vehicle-image">
                <img src="/images/bikes/cruiser-bike.jpg" alt="BMW R 1250 GS Adventure" />
                <div className="vehicle-overlay">
                  <button className="btn btn-quick-view">Quick View</button>
                </div>
              </div>
              <div className="vehicle-details">
                <h3>BMW R 1250 GS Adventure</h3>
                <div className="vehicle-specs">
                  <span><FaTachometerAlt /> 1,254 cc</span>
                  <span>136 HP</span>
                  <span>Adventure</span>
                </div>
                <div className="vehicle-price">
                  <span className="price">NOK 249,900</span>
                </div>
                <div className="vehicle-actions">
                  <Link to="/bikes" className="btn btn-outline">View Details</Link>
                  <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
                </div>
              </div>
            </div>
            
            {/* Car 1 */}
            <div className="vehicle-card" data-type="cars" style={{ display: activeTab === 'cars' ? 'block' : 'none' }}>
              <div className="vehicle-badge">Limited Edition</div>
              <div className="vehicle-image">
                <img src="/images/cars/carhead5.webp" alt="Porsche 911 Turbo S" />
                <div className="vehicle-overlay">
                  <button className="btn btn-quick-view">Quick View</button>
                </div>
              </div>
              <div className="vehicle-details">
                <h3>Porsche 911 Turbo S</h3>
                <div className="vehicle-specs">
                  <span>3,745 cc</span>
                  <span>650 HP</span>
                  <span>Automatic</span>
                </div>
                <div className="vehicle-price">
                  <span className="price">NOK 2,499,000</span>
                </div>
                <div className="vehicle-actions">
                  <Link to="/cars" className="btn btn-primary">View Details</Link>
                  <Link to="/contact" className="btn btn-outline">Enquire Now</Link>
                </div>
              </div>
            </div>
            
            {/* Car 2 */}
            <div className="vehicle-card" data-type="cars" style={{ display: activeTab === 'cars' ? 'block' : 'none' }}>
              <div className="vehicle-badge">Pre-Owned</div>
              <div className="vehicle-image">
                <img src="/images/cars/carhead4.webp" alt="Mercedes-Benz G-Class" />
                <div className="vehicle-overlay">
                  <button className="btn btn-quick-view">Quick View</button>
                </div>
              </div>
              <div className="vehicle-details">
                <h3>Mercedes-Benz G 63 AMG</h3>
                <div className="vehicle-specs">
                  <span>4.0L V8</span>
                  <span>585 HP</span>
                  <span>Automatic</span>
                </div>
                <div className="vehicle-price">
                  <span className="price">NOK 2,199,000</span>
                  <span className="original-price">NOK 2,450,000</span>
                </div>
                <div className="vehicle-actions">
                  <Link to="/cars" className="btn btn-outline">View Details</Link>
                  <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Polardrive Tech AS</h2>
            <p>Experience the difference with Norway's premier destination for luxury vehicles</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Certified Pre-Owned</h3>
              <p>Every pre-owned vehicle undergoes a rigorous 200-point inspection and comes with an extended warranty.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaTools />
              </div>
              <h3>Expert Service</h3>
              <p>Our certified technicians use only genuine parts and the latest diagnostic equipment to keep your vehicle in peak condition.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaHandshake />
              </div>
              <h3>Personalized Service</h3>
              <p>Dedicated relationship managers ensure a seamless buying and ownership experience tailored to your needs.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaCar />
              </div>
              <h3>Flexible Financing</h3>
              <p>Competitive financing options and lease programs designed to make luxury ownership more accessible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          
          <div className="testimonial-slider">
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <div className="testimonial-author">
                  <img src="/images/anders-johansen.jpg" alt="Anders Johansen" />
                  <div className="testimonial-author-info">
                    <h4>Anders Johansen</h4>
                    <span>Ducati Panigale V4 Owner</span>
                  </div>
                </div>
                <p className="testimonial-quote">"Exceptional service from start to finish! The team at Polardrive Tech helped me find my dream bike and made the entire process smooth and enjoyable."</p>
              </div>
            </div>
            
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <div className="testimonial-author">
                  <img src="/images/elin-berg.jpg" alt="Elin Berg" />
                  <div className="testimonial-author-info">
                    <h4>Elin Berg</h4>
                    <span>Mercedes G63 Owner</span>
                  </div>
                </div>
                <p className="testimonial-quote">"Trading in my old car for a new Mercedes G63 was a breeze. The team was professional, transparent, and truly cared about finding me the perfect vehicle."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Difference?</h2>
            <p>Visit our showroom in Oslo or contact us today to learn more about our premium vehicles.</p>
            <div className="cta-buttons">
              <a href="tel:+4712345678" className="btn btn-light">Call Us Now</a>
              <Link to="/contact" className="btn btn-outline-light">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
