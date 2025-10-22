import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FaTachometerAlt, FaCog, FaRoad, FaMountain, FaFire } from 'react-icons/fa';

export default function Bikes() {
  const bikeCategories = [
    {
      id: 'sport',
      name: 'Sport Bikes',
      description: 'High-performance machines built for speed and agility',
      icon: <FaFire />,
      image: '/images/bikes/sport-bike.jpg',
      count: 15
    },
    {
      id: 'cruiser',
      name: 'Cruisers',
      description: 'Classic style meets modern comfort for the open road',
      icon: <FaRoad />,
      image: '/images/bikes/cruiser-bike.jpg',
      count: 12
    },
    {
      id: 'adventure',
      name: 'Adventure',
      description: 'Versatile touring bikes for any terrain',
      icon: <FaMountain />,
      image: '/images/bikes/adventure-bike.jpg',
      count: 10
    },
    {
      id: 'custom',
      name: 'Custom Builds',
      description: 'Unique, handcrafted motorcycles tailored to your vision',
      icon: <FaCog />,
      image: '/images/bikes/custom-bike.jpg',
      count: 8
    }
  ];

  const featuredBikes = [
    {
      id: 1,
      name: 'Ducati Panigale V4 R',
      category: 'Sport',
      price: 349900,
      originalPrice: 369900,
      engine: '1,103 cc',
      power: '221 HP',
      torque: '112 Nm',
      weight: '193 kg',
      year: 2024,
      image: '/images/bikes/ducati-sport.jpg',
      badge: 'New Arrival',
      features: ['Racing ABS', 'Traction Control', 'Quick Shifter', 'LED Lights']
    },
    {
      id: 2,
      name: 'BMW R 1250 GS Adventure',
      category: 'Adventure',
      price: 249900,
      engine: '1,254 cc',
      power: '136 HP',
      torque: '143 Nm',
      weight: '249 kg',
      year: 2024,
      image: '/images/bikes/adventure-bike.jpg',
      badge: 'Best Seller',
      features: ['Dynamic ESA', 'Riding Modes Pro', 'Keyless Ride', 'TFT Display']
    },
    {
      id: 3,
      name: 'Harley-Davidson Street Glide',
      category: 'Cruiser',
      price: 299900,
      engine: '1,868 cc',
      power: '93 HP',
      torque: '155 Nm',
      weight: '362 kg',
      year: 2023,
      image: '/images/bikes/cruiser-bike.jpg',
      badge: 'Popular',
      features: ['BOOM! Audio', 'ABS', 'Cruise Control', 'LED Lighting']
    },
    {
      id: 4,
      name: 'Kawasaki Ninja H2',
      category: 'Sport',
      price: 429900,
      engine: '998 cc',
      power: '231 HP',
      torque: '141 Nm',
      weight: '238 kg',
      year: 2024,
      image: '/images/bikes/kawasaki-h2.jpg',
      badge: 'Supercharged',
      features: ['Supercharger', 'Cornering ABS', 'Launch Control', 'TFT Display']
    },
    {
      id: 5,
      name: 'Triumph Tiger 900 Rally Pro',
      category: 'Adventure',
      price: 189900,
      engine: '888 cc',
      power: '95 HP',
      torque: '87 Nm',
      weight: '201 kg',
      year: 2024,
      image: '/images/bikes/triumph-tiger.jpg',
      badge: 'Off-Road Ready',
      features: ['Off-Road Modes', 'Showa Suspension', 'Brembo Brakes', 'LED Cornering Lights']
    },
    {
      id: 6,
      name: 'Indian Chief Dark Horse',
      category: 'Cruiser',
      price: 269900,
      engine: '1,890 cc',
      power: '94 HP',
      torque: '162 Nm',
      weight: '305 kg',
      year: 2024,
      image: '/images/bikes/indian-chief-new.jpg',
      badge: 'Premium',
      features: ['Thunderstroke Engine', 'Ride Command', 'ABS', 'USB Charging']
    },
    {
      id: 7,
      name: 'Yamaha MT-09',
      category: 'Sport',
      price: 139900,
      engine: '889 cc',
      power: '119 HP',
      torque: '93 Nm',
      weight: '189 kg',
      year: 2024,
      image: '/images/bikes/yamaha-mt09.jpg',
      badge: 'Value Pick',
      features: ['CP3 Engine', 'TFT Display', 'Quick Shifter', 'Traction Control']
    },
    {
      id: 8,
      name: 'Custom Bobber "Thunder',
      category: 'Custom',
      price: 319900,
      engine: '1,200 cc',
      power: '85 HP',
      torque: '120 Nm',
      weight: '220 kg',
      year: 2024,
      image: '/images/bikes/bobber-thunder.jpg',
      badge: 'One of a Kind',
      features: ['Hand-Built', 'Custom Paint', 'Chrome Details', 'Leather Seat']
    }
  ];

  return (
    <>
      <SEO
        title="Motorcycles | Polardrive Tech AS"
        description="Explore our premium collection of sport bikes, cruisers, and adventure motorcycles. Find your perfect ride at Polardrive Tech AS in Oslo, Norway."
        path="/bikes"
      />

      {/* Hero Section */}
      <section className="page-hero bikes-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Premium Motorcycles</h1>
            <p>Experience the perfect blend of power, performance, and style</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">45+</span>
                <span className="stat-label">Bikes in Stock</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Brands</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Riders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bike-categories">
        <div className="container">
          <div className="section-header">
            <h2>Browse by Category</h2>
            <p>Find the perfect motorcycle for your riding style</p>
          </div>

          <div className="categories-grid">
            {bikeCategories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="featured-bikes">
        <div className="container">
          <div className="section-header">
            <h2>Featured Motorcycles</h2>
            <p>Handpicked selections from our premium inventory</p>
          </div>

          <div className="bikes-grid">
            {featuredBikes.map(bike => (
              <div key={bike.id} className="bike-card">
                {bike.badge && <div className="bike-badge">{bike.badge}</div>}
                <div className="bike-image">
                  <img src={bike.image} alt={bike.name} />
                  <div className="bike-overlay">
                    <Link to="/contact" className="btn btn-primary">View Details</Link>
                  </div>
                </div>
                <div className="bike-content">
                  <div className="bike-header">
                    <h3>{bike.name}</h3>
                    <span className="bike-category">{bike.category}</span>
                  </div>
                  <div className="bike-specs">
                    <div className="spec-item">
                      <FaTachometerAlt />
                      <span>{bike.engine}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Power:</span>
                      <span>{bike.power}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Torque:</span>
                      <span>{bike.torque}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Weight:</span>
                      <span>{bike.weight}</span>
                    </div>
                  </div>
                  <div className="bike-features">
                    {bike.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="bike-footer">
                    <div className="bike-price">
                      <span className="price">NOK {bike.price.toLocaleString('no-NO')}</span>
                      {bike.originalPrice && (
                        <span className="original-price">NOK {bike.originalPrice.toLocaleString('no-NO')}</span>
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
              Looking for a specific motorcycle not listed here?
            </p>
            <Link to="/contact" className="btn btn-lg btn-primary">Enquire About Unlisted Products</Link>
          </div>
        </div>
      </section>

      {/* Finance Options */}
      <section className="finance-section">
        <div className="container">
          <div className="finance-content">
            <div className="finance-text">
              <h2>Flexible Financing Options</h2>
              <p>Make your dream bike a reality with our competitive financing plans. We work with leading banks and financial institutions to offer you the best rates.</p>
              <ul className="finance-benefits">
                <li>✓ Low interest rates from 3.5%</li>
                <li>✓ Flexible payment terms up to 60 months</li>
                <li>✓ Trade-in valuation available</li>
                <li>✓ Quick approval process</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Contact for Financing</Link>
            </div>
            <div className="finance-image">
              <img src="/images/bikes/cruiser-bike.jpg" alt="Financing Options" />
            </div>
          </div>
        </div>
      </section>

      {/* Service & Maintenance */}
      <section className="service-section">
        <div className="container">
          <div className="section-header">
            <h2>Expert Service & Maintenance</h2>
            <p>Keep your bike in peak condition with our certified technicians</p>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <h3>Regular Maintenance</h3>
              <p>Scheduled services to keep your motorcycle running smoothly</p>
            </div>
            <div className="service-card">
              <h3>Performance Upgrades</h3>
              <p>Enhance your bike's performance with quality aftermarket parts</p>
            </div>
            <div className="service-card">
              <h3>Custom Modifications</h3>
              <p>Personalize your ride with our custom modification services</p>
            </div>
            <div className="service-card">
              <h3>Warranty Services</h3>
              <p>Authorized service center for all major motorcycle brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bikes-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Ride?</h2>
            <p>Visit our showroom or contact us to learn more about our motorcycles</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
