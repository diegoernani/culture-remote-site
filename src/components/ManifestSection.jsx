import React from 'react'

export default function ManifestSection() {
  return (
    <section id="manifesto" className="border-t bg-white">
      <div className="container-lg py-16 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-coral">Manifesto</h2>
          <p className="text-slate-600 leading-relaxed">
            A cultura não mora nas paredes do escritório. Ela vive nas decisões diárias que tomamos — nos comportamentos que repetimos, na clareza com que comunicamos e na confiança com que delegamos. No remoto, tudo isso precisa ser <em>intencional</em>.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Defendemos cinco princípios: <strong>Propósito</strong>, <strong>Comunicação Intencional</strong>, <strong>Documentação Viva</strong>, <strong>Confiança Radical</strong> e <strong>Rituais Digitais</strong>. Eles formam o nosso sistema operacional cultural.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-base font-semibold mb-4 text-coral">Princípios práticos</h3>
          <ul className="space-y-3 text-slate-700">
            <li>✔ Handbook-first: o que não está escrito, não existe.</li>
            <li>✔ Assíncrono por padrão; reuniões como última opção.</li>
            <li>✔ Transparência e contribuição igualitária em todos os níveis.</li>
            <li>✔ Liderança pelo exemplo: autonomia com responsabilidade.</li>
            <li>✔ Rituais que criam pertencimento (kickoff, demo day, Friday wins).</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
