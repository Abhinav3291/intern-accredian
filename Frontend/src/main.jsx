import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Herosection from './components/Herosection.jsx'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import ReferralLinks from './components/ReferralLinks.jsx'
import ReferralProgram from './components/ReferralProgram.jsx'
import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <ReferralLinks />
    <Herosection />
    <ReferralProgram />
    <Footer />
  </StrictMode>,
)
