import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-lg py-8 grid md:grid-cols-2 gap-6 items-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Culture Remote Movement — Todos os direitos reservados.
        </p>
        <nav className="flex justify-start md:justify-end gap-6 text-sm">
          <a href="/#manifesto" className="hover:text-slate-700">Manifesto</a>
          <a href="/#pilares" className="hover:text-slate-700">Pilares</a>
          <a href="/basebook" className="hover:text-slate-700">Basebook</a>
          <a href="/#comunidade" className="hover:text-slate-700">Comunidade</a>
        </nav>
      </div>
    </footer>
  )
}
