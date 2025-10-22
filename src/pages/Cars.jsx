import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FaCar, FaShieldAlt, FaStar, FaTachometerAlt, FaCogs } from 'react-icons/fa';

export default function Cars() {
  const carCategories = [
    {
      id: 'sedan',
      name: 'Luxury Sedans',
      description: 'Elegant comfort meets refined performance',
      image: '/images/cars/carhead3.webp',
      count: 18
    },
    {
      id: 'suv',
      name: 'Premium SUVs',
      description: 'Commanding presence with versatile capability',
      image: '/images/cars/carhead4.webp',
      count: 22
    },
    {
      id: 'sports',
      name: 'Sports Cars',
      description: 'Exhilarating performance and iconic design',
      image: '/images/cars/carhead5.webp',
      count: 12
    },
    {
      id: 'electric',
      name: 'Electric Luxury',
      description: 'Sustainable luxury for the modern driver',
      image: '/images/cars/carhead3.webp',
      count: 8
    }
  ];

  const featuredCars = [
    {
      id: 1,
      name: 'Porsche 911 Turbo S',
      brand: 'Porsche',
      category: 'Sports Car',
      price: 2499000,
      year: 2024,
      mileage: 0,
      engine: '3.8L Twin-Turbo',
      power: '650 HP',
      transmission: 'PDK 8-Speed',
      fuelType: 'Petrol',
      color: 'GT Silver',
      image: '/images/cars/porsche-911.jpg',
      badge: 'New',
      features: ['Sport Chrono', 'PASM', 'Active Aero', 'Premium Audio']
    },
    {
      id: 2,
      name: 'Mercedes-Benz G 63 AMG',
      brand: 'Mercedes-Benz',
      category: 'SUV',
      price: 2199000,
      originalPrice: 2450000,
      year: 2022,
      mileage: 12500,
      engine: '4.0L V8 BiTurbo',
      power: '585 HP',
      transmission: '9G-TRONIC',
      fuelType: 'Petrol',
      color: 'Obsidian Black',
      image: '/images/cars/mercedes-g-class.jpg',
      badge: 'Certified Pre-Owned',
      features: ['AMG Performance', 'Off-Road Pack', 'Burmester Audio', 'Panoramic Roof']
    },
    {
      id: 3,
      name: 'BMW M5 Competition',
      brand: 'BMW',
      category: 'Sedan',
      price: 1799000,
      year: 2024,
      mileage: 0,
      engine: '4.4L V8 TwinPower',
      power: '625 HP',
      transmission: 'M Steptronic 8-Speed',
      fuelType: 'Petrol',
      color: 'Frozen Marina Bay Blue',
      image: '/images/cars/bmw-m5.jpg',
      badge: 'Performance',
      features: ['M xDrive', 'Carbon Ceramic Brakes', 'M Sport Exhaust', 'Laser Lights']
    },
    {
      id: 4,
      name: 'Audi e-tron GT',
      brand: 'Audi',
      category: 'Electric',
      price: 1299000,
      year: 2024,
      mileage: 0,
      engine: 'Dual Motor Electric',
      power: '530 HP',
      transmission: '2-Speed Automatic',
      fuelType: 'Electric',
      color: 'Tactical Green',
      image: '/images/cars/audi-etron.jpg',
      badge: 'Sustainable',
      features: ['472 km Range', 'Adaptive Air Suspension', 'Matrix LED', 'Bang & Olufsen']
    },
    {
      id: 5,
      name: 'Range Rover Autobiography',
      brand: 'Land Rover',
      category: 'SUV',
      price: 1899000,
      year: 2024,
      mileage: 0,
      engine: '3.0L Turbocharged',
      power: '400 HP',
      transmission: '8-Speed Automatic',
      fuelType: 'Hybrid',
      color: 'Santorini Black',
      image: '/images/cars/range-rover.jpg',
      badge: 'Luxury',
      features: ['Air Suspension', 'Meridian Audio', 'Executive Seating', 'Terrain Response']
    },
    {
      id: 6,
      name: 'Maserati MC20',
      brand: 'Maserati',
      category: 'Sports Car',
      price: 3299000,
      year: 2024,
      mileage: 0,
      engine: '3.0L V6 Twin-Turbo',
      power: '630 HP',
      transmission: '8-Speed DCT',
      fuelType: 'Petrol',
      color: 'Bianco Audace',
      image: '/images/cars/maserati-mc20.jpg',
      badge: 'Exotic',
      features: ['Carbon Fiber', 'Butterfly Doors', 'Track Telemetry', 'Sonus Faber Audio']
    }
  ];

  const premiumServices = [
    {
      icon: <FaShieldAlt />,
      title: 'Certified Pre-Owned',
      description: '200-point inspection and comprehensive warranty coverage',
      image: '/images/cars/carhead3.webp'
    },
    {
      icon: <FaStar />,
      title: 'Concierge Service',
      description: 'White-glove delivery and personalized assistance',
      image: '/images/cars/carhead6.webp'
    },
    {
      icon: <FaCogs />,
      title: 'Expert Maintenance',
      description: 'Factory-trained technicians and genuine parts',
      image: '/images/cars/carhead4.webp'
    },
    {
      icon: <FaCar />,
      title: 'Trade-In Program',
      description: 'Competitive valuations for your current vehicle',
      image: '/images/cars/carhead2.webp'
    }
  ];

  return (
    <>
      <SEO
        title="Luxury Cars | Polardrive Tech AS"
        description="Explore our exclusive collection of premium sedans, SUVs, and sports cars. Experience automotive excellence at Polardrive Tech AS in Oslo, Norway."
        path="/cars"
      />

      {/* Hero Section */}
      <section className="page-hero cars-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Luxury Automotive Excellence</h1>
            <p>Where performance meets sophistication</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">60+</span>
                <span className="stat-label">Premium Vehicles</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Luxury Brands</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Satisfied Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dealership */}
      <section className="dealership-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>Welcome to Polardrive Tech AS</h2>
              <p className="lead">Norway's premier destination for luxury automotive excellence</p>
              <p>
                At Polardrive Tech AS, we pride ourselves on offering an unparalleled selection of 
                the world's finest automobiles. Our showroom in the heart of Oslo showcases carefully 
                curated vehicles from prestigious manufacturers, each representing the pinnacle of 
                engineering, design, and performance.
              </p>
              <p>
                Our team of passionate automotive specialists is dedicated to providing a bespoke 
                purchasing experience, ensuring that every client finds not just a vehicle, but the 
                perfect expression of their lifestyle and aspirations.
              </p>
              <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
            </div>
            <div className="intro-image">
              <img src="/images/showroom.jpg" alt="Polardrive Tech Showroom" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="car-categories">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Collection</h2>
            <p>Discover luxury across every segment</p>
          </div>

          <div className="categories-grid">
            {carCategories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="featured-cars">
        <div className="container">
          <div className="section-header">
            <h2>Featured Vehicles</h2>
            <p>Exceptional automobiles deserving of your attention</p>
          </div>

          <div className="cars-grid">
            {featuredCars.map(car => (
              <div key={car.id} className="car-card">
                {car.badge && <div className="car-badge">{car.badge}</div>}
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                  <div className="car-overlay">
                    <Link to="/contact" className="btn btn-primary">View Details</Link>
                  </div>
                </div>
                <div className="car-content">
                  <div className="car-header">
                    <div>
                      <span className="car-brand">{car.brand}</span>
                      <h3>{car.name}</h3>
                    </div>
                    <span className="car-year">{car.year}</span>
                  </div>
                  <div className="car-specs">
                    <div className="spec-row">
                      <span className="spec-label">Engine:</span>
                      <span className="spec-value">{car.engine}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Power:</span>
                      <span className="spec-value">{car.power}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Transmission:</span>
                      <span className="spec-value">{car.transmission}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Mileage:</span>
                      <span className="spec-value">{car.mileage.toLocaleString('no-NO')} km</span>
                    </div>
                  </div>
                  <div className="car-features">
                    {car.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="car-footer">
                    <div className="car-price">
                      <span className="price">NOK {car.price.toLocaleString('no-NO')}</span>
                      {car.originalPrice && (
                        <span className="original-price">NOK {car.originalPrice.toLocaleString('no-NO')}</span>
                      )}
                    </div>
                    <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
              Looking for a specific luxury car not listed here?
            </p>
            <Link to="/contact" className="btn btn-lg btn-primary">Enquire About Unlisted Products</Link>
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="premium-services">
        <div className="container">
          <div className="section-header">
            <h2>The Polardrive Experience</h2>
            <p>Exceptional service at every touchpoint</p>
          </div>
          <div className="services-grid">
            {premiumServices.map((service, idx) => (
              <div key={idx} className="service-card">
                {service.image && (
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                )}
                <div className="service-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="financing-section">
        <div className="container">
          <div className="financing-content">
            <div className="financing-image">
              <img src="/images/luxury-lifestyle.jpg" alt="Luxury Lifestyle" />
            </div>
            <div className="financing-text">
              <h2>Bespoke Financing Solutions</h2>
              <p>
                We understand that acquiring a luxury vehicle is a significant investment. 
                Our financial specialists work with Norway's leading banks and private wealth 
                managers to create tailored financing packages that complement your financial strategy.
              </p>
              <ul className="financing-benefits">
                <li>✓ Competitive interest rates from 2.9%</li>
                <li>✓ Flexible terms from 12 to 84 months</li>
                <li>✓ Leasing options available</li>
                <li>✓ Trade-in appraisals</li>
                <li>✓ Fast approval process</li>
              </ul>
              <div className="financing-buttons">
                <Link to="/contact" className="btn btn-primary">Contact for Financing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>Hear from our distinguished clientele</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "An exceptional experience from start to finish. The team at Polardrive Tech 
                understood exactly what I was looking for and made the entire process seamless."
              </p>
              <div className="testimonial-author">
                <h4>Henrik Andersen</h4>
                <span>Porsche 911 Turbo Owner</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Professional, knowledgeable, and genuinely passionate about cars. They helped 
                me find the perfect vehicle and provided outstanding after-sales service."
              </p>
              <div className="testimonial-author">
                <h4>Kristine Olsen</h4>
                <span>Range Rover Owner</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The level of attention and expertise at Polardrive is unmatched. I've purchased 
                three vehicles from them and will continue to be a loyal customer."
              </p>
              <div className="testimonial-author">
                <h4>Lars Pedersen</h4>
                <span>Mercedes G-Class Owner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cars-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Visit Our Showroom</h2>
            <p>Experience luxury firsthand at our Oslo location</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Book an Appointment</Link>
              <a href="tel:+4712345678" className="btn btn-outline-light btn-lg">Call Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
