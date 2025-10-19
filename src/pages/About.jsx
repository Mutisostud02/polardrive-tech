import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { FaAward, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Polardrive Tech AS"
        description="Discover the story behind Norway's premier destination for luxury vehicles and high-performance motorcycles. Excellence, passion, and service since 2015."
        path="/about"
      />

      {/* Hero Section */}
      <section className="page-hero about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Our Story</h1>
            <p>Passion for excellence, commitment to service</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>Welcome to Polardrive Tech AS</h2>
              <p className="lead">
                Since 2015, Polardrive Tech AS has been Norway's premier destination for luxury 
                automobiles and high-performance motorcycles. What started as a passion project 
                has evolved into one of Oslo's most respected dealerships.
              </p>
              <p>
                We are more than just a showroom. We are enthusiasts, experts, and partners in 
                your journey to find the perfect vehicle. Our curated collection features the 
                world's finest automotive brands, each representing the pinnacle of engineering, 
                design, and performance.
              </p>
              <p>
                Located in the heart of Oslo, our state-of-the-art facility combines a stunning 
                showroom with a certified service center, ensuring that your ownership experience 
                is exceptional from the moment you walk through our doors.
              </p>
            </div>
            <div className="intro-image">
              <img src="/images/cars/luxury-suv.jpg" alt="Polardrive Tech AS Showroom" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="our-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaAward />
              </div>
              <h3>Excellence</h3>
              <p>
                We maintain the highest standards in everything we do, from vehicle selection 
                to customer service. Every interaction reflects our commitment to quality.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Integrity</h3>
              <p>
                Transparency and honesty are the foundations of our business. We build lasting 
                relationships through trust and ethical practices.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Passion</h3>
              <p>
                Our team lives and breathes automotive culture. This genuine enthusiasm translates 
                into expert advice and unparalleled service.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaChartLine />
              </div>
              <h3>Innovation</h3>
              <p>
                We embrace new technologies and sustainable solutions, continuously evolving 
                to meet the changing needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="milestones">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our story</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>Polardrive Tech AS opens its doors in Oslo with a focus on premium motorcycles.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3>Expansion</h3>
                <p>Added luxury automotive division, expanding our showroom to 2,000 square meters.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>Service Center</h3>
                <p>Opened state-of-the-art service center with factory-certified technicians.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Recognition</h3>
                <p>Named "Best Luxury Dealership in Norway" by Automotive Excellence Awards.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Sustainability Initiative</h3>
                <p>Launched electric vehicle program and achieved carbon-neutral operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="our-commitment">
        <div className="container">
          <div className="commitment-content">
            <h2>Our Commitment to You</h2>
            <div className="commitment-grid">
              <div className="commitment-item">
                <h3>Transparent Pricing</h3>
                <p>No hidden fees, no surprises. Our pricing is clear and competitive.</p>
              </div>
              <div className="commitment-item">
                <h3>Expert Guidance</h3>
                <p>Our specialists provide honest advice to help you make informed decisions.</p>
              </div>
              <div className="commitment-item">
                <h3>Comprehensive Warranty</h3>
                <p>All pre-owned vehicles come with extensive warranty coverage for peace of mind.</p>
              </div>
              <div className="commitment-item">
                <h3>Lifetime Support</h3>
                <p>Our relationship doesn't end at purchase. We're here for you throughout ownership.</p>
              </div>
              <div className="commitment-item">
                <h3>Premium Service</h3>
                <p>Factory-trained technicians using genuine parts keep your vehicle in peak condition.</p>
              </div>
              <div className="commitment-item">
                <h3>Community</h3>
                <p>Join our exclusive community of enthusiasts with special events and experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="about-showcase">
        <div className="container">
          <div className="section-header">
            <h2>Our Collection</h2>
            <p>Premium vehicles curated for excellence</p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-item">
              <img src="/images/bikes/sport-bike.jpg" alt="Premium Motorcycles" />
              <div className="showcase-overlay">
                <h3>Motorcycles</h3>
                <p>High-performance machines</p>
              </div>
            </div>
            <div className="showcase-item">
              <img src="/images/cars/carhead5.webp" alt="Luxury Cars" />
              <div className="showcase-overlay">
                <h3>Luxury Cars</h3>
                <p>Automotive excellence</p>
              </div>
            </div>
            <div className="showcase-item">
              <img src="/images/cars/cruiser-car.jpg" alt="Cruiser Cars" />
              <div className="showcase-overlay">
                <h3>Cruiser Cars</h3>
                <p>Classic comfort</p>
              </div>
            </div>
            <div className="showcase-item">
              <img src="/images/cars/luxury-suv-2.jpg" alt="Premium SUVs" />
              <div className="showcase-overlay">
                <h3>Premium SUVs</h3>
                <p>Commanding presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Experience the Polardrive Difference</h2>
            <p>Visit our showroom and discover why we're Norway's premier luxury dealership</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <Link to="/bikes" className="btn btn-outline-light btn-lg">View Motorcycles</Link>
              <Link to="/cars" className="btn btn-outline-light btn-lg">View Luxury Cars</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
