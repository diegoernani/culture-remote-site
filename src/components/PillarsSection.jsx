import React from 'react'

function Pillar({ title, desc, icon }) {
  return (
    <div className="card p-5 hover:shadow transition-shadow">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-coral/10 text-coral mb-3">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-slate-600">{desc}</p>
    </div>
  )
}

export default function PillarsSection() {
  return (
    <section id="pilares" className="border-t bg-slate-50">
      <div className="container-lg py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-coral">Os 5 pilares</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          <Pillar title="Propósito claro" desc="Missão e valores traduzidos em comportamentos visíveis e exemplos reais." icon={<span>🧭</span>} />
          <Pillar title="Comunicação intencional" desc="Clareza escrita, expectativas explícitas e canais bem definidos." icon={<span>👥</span>} />
          <Pillar title="Documentação viva" desc="Wikis e handbooks atualizados; decisões registradas e pesquisáveis." icon={<span>📘</span>} />
          <Pillar title="Confiança radical" desc="Autonomia com accountability; medição por resultados, não horas." icon={<span>✅</span>} />
          <Pillar title="Rituais digitais" desc="Cadência que cria conexão e empatia: cafés, demos, celebrações e retros." icon={<span>💖</span>} />
        </div>
      </div>
    </section>
  )
}
