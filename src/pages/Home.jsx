import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import HeroSection from '../components/HeroSection.jsx'
import ManifestSection from '../components/ManifestSection.jsx'
import PillarsSection from '../components/PillarsSection.jsx'
import HandbookCTA from '../components/HandbookCTA.jsx'
import CommunitySection from '../components/CommunitySection.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <Navbar />
      <HeroSection />
      <ManifestSection />
      <PillarsSection />
      <HandbookCTA />
      <CommunitySection />
      <Footer />
    </div>
  )
}
