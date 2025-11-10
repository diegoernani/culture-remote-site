import React from 'react'
import { Link } from 'react-router-dom'

export default function HandbookCTA() {
  return (
    <section id="handbook" className="border-t bg-white">
      <div className="container-lg py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="card p-6">
          <h3 className="text-base font-semibold mb-4 text-coral">Baixe o Culture Remote Handbook — Volume 1</h3>
          <ul className="space-y-3 text-slate-700">
            <li>✔ Checklist de adoção remota em 30 dias.</li>
            <li>✔ Roteiro de onboarding e rituais semanais.</li>
            <li>✔ Templates de comunicação assíncrona.</li>
            <li>✔ Métricas de engajamento e pertencimento.</li>
            <li>✔ Casos reais inspirados em empresas 100% remotas.</li>
          </ul>
          <a className="btn btn-primary mt-6 inline-block" href="#" onClick={(e)=>e.preventDefault()}>Baixar PDF (em breve)</a>
        </div>
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            Nosso guia é inspirado por práticas abertas como o <em>handbook-first</em>, colaboração assíncrona e princípios de contribuição igualitária. Perfeito para líderes, RH e times que desejam fortalecer a cultura no modelo remoto.
          </p>
          <Link to="/basebook" className="btn btn-secondary">Ler Basebook online</Link>
        </div>
      </div>
    </section>
  )
}
