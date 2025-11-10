import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
        alt="Pessoas conectadas trabalhando remotamente"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="container-lg py-20 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="badge">Distância física, conexão cultural</span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Cultura forte, <span className="underline decoration-coral decoration-4 underline-offset-4">mesmo à distância</span>.
          </h1>
          <p className="text-lg text-slate-600 max-w-prose">
            O movimento <strong>Culture Remote</strong> ensina empresas a construir culturas claras, humanas e produtivas em ambientes 100% remotos — com comunicação intencional, documentação viva e confiança radical.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#manifesto" className="btn btn-primary">Ler Manifesto</a>
            <Link to="/basebook" className="btn btn-secondary">Abrir Basebook</Link>
          </div>
          <p className="text-sm text-slate-500">
            Inspirado por práticas de empresas 100% remotas como GitLab, Automattic e Basecamp.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl border bg-white p-6 shadow-soft grid place-items-center">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Equipe remota em videoconferência"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
