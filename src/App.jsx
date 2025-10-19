import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Bikes from './pages/Bikes.jsx';
import Cars from './pages/Cars.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  useEffect(() => {
    function isDownloadLink(a) {
      if (!a) return false
      // attribute-based
      if (a.hasAttribute('download')) return true
      const href = (a.getAttribute('href') || '').trim()
      // extension-based
      if (/\.(pdf|docx?|xlsx?|zip)$/i.test(href)) return true
      // text-based heuristic
      const text = (a.textContent || '').toLowerCase()
      if (text.includes('download')) return true
      if (text.includes('pdf')) return true
      return false
    }

    const handler = (e) => {
      const target = e.target
      const anchor = target.closest ? target.closest('a') : null
      if (!anchor) return
      if (isDownloadLink(anchor)) {
        e.preventDefault()
        alert('Download failed. Please try again later.')
      }
    }

    // capture phase to ensure we intercept early
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
