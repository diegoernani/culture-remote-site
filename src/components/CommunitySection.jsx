import React from 'react'

export default function CommunitySection() {
  return (
    <section id="comunidade" className="border-t bg-slate-50">
      <div className="container-lg py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-coral">Junte-se à comunidade</h2>
          <p className="text-slate-600 leading-relaxed">
            Participe do movimento, contribua com ideias e acesse materiais exclusivos. Vamos construir juntos a nova era da cultura remota.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-secondary" href="#" onClick={(e)=>e.preventDefault()}>Discord</a>
            <a className="btn btn-secondary" href="#" onClick={(e)=>e.preventDefault()}>LinkedIn</a>
            <a className="btn btn-secondary" href="#" onClick={(e)=>e.preventDefault()}>GitHub</a>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="text-base font-semibold mb-4 text-coral">Código de Conduta</h3>
          <ul className="space-y-3 text-slate-700">
            <li>✔ Ambiente acolhedor e respeitoso.</li>
            <li>✔ Debates com dados e empatia.</li>
            <li>✔ Transparência e crédito às fontes.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
