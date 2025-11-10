import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const link = (to, label) => (
    <Link to={to} className={`text-sm hover:text-slate-700 ${pathname===to ? 'text-petroleum font-semibold' : 'text-slate-600'}`}>{label}</Link>
  )

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="container-lg py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-lg flex items-center gap-2">
          <span className="text-petroleum">Culture</span> <span className="text-slate-500">Remote</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {link('/', 'Início')}
          <a href="/#manifesto" className="text-sm text-slate-600 hover:text-slate-700">Manifesto</a>
          {link('/basebook', 'Basebook')}
          <a href="/#comunidade" className="text-sm text-slate-600 hover:text-slate-700">Comunidade</a>
        </nav>
        <Link to="/basebook" className="btn btn-primary">Ler Basebook</Link>
      </div>
    </header>
  )
}
