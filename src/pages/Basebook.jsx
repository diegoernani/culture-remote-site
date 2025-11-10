import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Basebook() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <Navbar />
      <main className="container-lg py-12">
        <a href="/" className="btn btn-secondary mb-8">← Voltar ao início</a>

        <div className="space-y-6 leading-relaxed">
          <h1 className="text-3xl font-bold text-coral mb-6">🌍 Culture Remote Basebook — Volume 0.1</h1>
          <p><strong>Movimento:</strong> Culture Remote</p>
          <p><strong>Data:</strong> Novembro de 2025</p>
          <p><strong>Versão:</strong> v0.1 — Documento-base para revisão e expansão</p>

          <section>
            <h2 className="text-2xl font-semibold text-coral mt-10 mb-3">🎯 Propósito do Basebook</h2>
            <p>O <strong>Culture Remote Basebook</strong> define a base teórica, conceitual e prática do movimento <strong>Culture Remote</strong>, fundamentando o trabalho remoto como uma competência organizacional e cultural — não como uma tendência de mercado.</p>
            <p>Seu propósito é oferecer <strong>fundamentos documentados e aplicáveis</strong> para:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Compreender a cultura organizacional sob a ótica remota;</li>
              <li>Estruturar modelos de confiança, clareza e documentação;</li>
              <li>Implementar práticas de gestão e governança cultural;</li>
              <li>Fornecer argumentos sólidos e métricas para líderes e gestores.</li>
            </ul>
            <blockquote className="border-l-4 border-coral pl-4 italic text-slate-700 mt-4">“A cultura não é o que está escrito na parede da empresa. É o que acontece quando ninguém está sendo supervisionado.” — Edgar Schein (1985)</blockquote>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-coral mt-10 mb-3">🧩 1. Fundamentos Teóricos</h2>
            <h3 className="text-xl font-semibold mt-6 mb-2">1.1 Edgar Schein — Organizational Culture and Leadership</h3>
            <p>“Cultura organizacional é o conjunto de pressupostos básicos que um grupo inventou, descobriu ou desenvolveu ao aprender a lidar com seus problemas de adaptação externa e integração interna.”</p>
            <ul className="list-decimal ml-6 space-y-1">
              <li><strong>Artefatos:</strong> práticas visíveis, linguagem, ferramentas.</li>
              <li><strong>Valores declarados:</strong> missão, propósito, código de conduta.</li>
              <li><strong>Pressupostos inconscientes:</strong> crenças que guiam decisões.</li>
            </ul>
            <p><strong>Aplicação no remoto:</strong> No trabalho distribuído, os artefatos são digitais — documentos, canais e rituais online. A cultura precisa ser intencionalmente codificada, não observada por convivência.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">1.2 Peter Drucker — The Practice of Management</h3>
            <p>“Culture eats strategy for breakfast.”</p>
            <p><strong>Aplicação:</strong> A cultura é o sistema operacional humano da empresa. Em equipes remotas, ela precisa ser tangível, mensurável e reproduzível.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">1.3 Nonaka & Takeuchi — The Knowledge-Creating Company</h3>
            <p>“A empresa que aprende cria conhecimento ao transformar o tácito em explícito.”</p>
            <p><strong>Aplicação:</strong> O princípio handbook-first traduz essa teoria: “Se não está documentado, não existe.” Transformar conhecimento tácito em processos escritos é vital para times distribuídos.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">1.4 Daniel Pink — Drive</h3>
            <p>“Autonomia, maestria e propósito são os motores da motivação.”</p>
            <p><strong>Aplicação:</strong> No remoto, a autonomia é estrutura, não benefício. Líderes não controlam — conectam e confiam. A clareza de propósito é o elo invisível que mantém o time unido.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">1.5 Amy Edmondson — The Fearless Organization</h3>
            <p>“A segurança psicológica é o solo onde a inovação cresce.”</p>
            <p><strong>Aplicação:</strong> Em times remotos, o silêncio é invisibilidade. Ambientes saudáveis precisam garantir voz, empatia e segurança para cada membro.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">1.6 GitLab — All-Remote Handbook</h3>
            <p>“O trabalho remoto é uma competência, não uma circunstância.”</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Handbook-first (documentação antes da ação);</li>
              <li>Comunicação assíncrona como padrão;</li>
              <li>Transparência radical;</li>
              <li>Liderança documentada;</li>
              <li>Rituais digitais e pertencimento intencional.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-coral mt-10 mb-3">⚙️ 2. Framework 5C — Modelo Culture Remote</h2>
            <p>O <strong>5C Model</strong> estrutura os pilares da cultura remota intencional:</p>
            <div className="overflow-x-auto">
              <table className="w-full border border-slate-200 text-sm mt-4">
                <thead className="bg-slate-100 text-slate-800">
                  <tr><th className="p-2 text-left">Pilar</th><th className="p-2 text-left">Conceito</th><th className="p-2 text-left">Aplicação</th><th className="p-2 text-left">Métrica</th></tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 font-medium">Clarity</td><td>Objetivos e papéis claros</td><td>Playbooks e handbooks</td><td>% de funções documentadas</td></tr>
                  <tr><td className="p-2 font-medium">Consistency</td><td>Processos replicáveis</td><td>Rituais fixos e revisões</td><td>SLA cultural</td></tr>
                  <tr><td className="p-2 font-medium">Confidence</td><td>Autonomia com accountability</td><td>KPIs de entrega</td><td>Índice de autonomia</td></tr>
                  <tr><td className="p-2 font-medium">Connection</td><td>Pertencimento e empatia</td><td>Rituais digitais</td><td>NPS interno</td></tr>
                  <tr><td className="p-2 font-medium">Contribution</td><td>Cultura viva</td><td>Feedback contínuo</td><td>Taxa de contribuição</td></tr>
                </tbody>
              </table>
            </div>
            <p className="italic mt-3">💡 O modelo 5C é cumulativo: clareza gera consistência, que fortalece a confiança, cria conexão e culmina em contribuição.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-coral mt-10 mb-3">🏛️ 3. Governança Cultural</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Culture OKRs: alinhar metas de negócio a valores culturais.</li>
              <li>Auditoria Cultural: análise de comunicação e engajamento.</li>
              <li>Cultural Health Index: indicador de engajamento e segurança.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-coral mt-10 mb-3">🧠 4. Bases Metodológicas</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Teoria dos Sistemas Sociais — Niklas Luhmann</li>
              <li>Gestão Ágil de Cultura — sprints de clima e retrospectivas</li>
              <li>Lean Communication — reduzir ruído e redundância</li>
              <li>Evidence-Based Management — Denise Rousseau</li>
              <li>Design Organizacional — Cultura como produto iterativo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-coral mt-10 mb-3">📏 5. Métricas e Indicadores</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Engagement Index — mede satisfação e propósito.</li>
              <li>Async Maturity Score — mede maturidade assíncrona.</li>
              <li>Cultural NPS — mede recomendação da cultura.</li>
              <li>Knowledge Coverage — mede % de processos documentados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-coral mt-10 mb-3">🧩 6. Rituais e Práticas Digitais</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Kickoff Monday — alinhamento semanal</li>
              <li>Demo Day Friday — compartilhamento de resultados</li>
              <li>Culture Retro — retrospectiva cultural mensal</li>
              <li>Open Docs — contribuição aberta de documentos</li>
              <li>Moment of Gratitude — agradecimento coletivo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-coral mt-10 mb-3">🧭 7. Conclusão</h2>
            <p>O <strong>Culture Remote</strong> é mais que uma filosofia — é uma <strong>ciência aplicada da cultura organizacional distribuída</strong>. Baseia-se em clareza, consistência e confiança como eixos centrais da maturidade cultural.</p>
            <blockquote className="border-l-4 border-coral pl-4 italic text-slate-700">“A distância física é irrelevante quando há clareza de propósito.” — Culture Remote Manifesto</blockquote>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-coral mt-10 mb-3">📚 Referências Bibliográficas</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Schein, E. (1985). Organizational Culture and Leadership.</li>
              <li>Drucker, P. (1954). The Practice of Management.</li>
              <li>Nonaka, I., & Takeuchi, H. (1995). The Knowledge-Creating Company.</li>
              <li>Pink, D. (2009). Drive.</li>
              <li>Edmondson, A. (2018). The Fearless Organization.</li>
              <li>GitLab. (2024). All-Remote Handbook.</li>
              <li>Mullenweg, M. (2019). Distributed Work Principles.</li>
              <li>Basecamp. (2020). Remote: Office Not Required.</li>
            </ul>
          </section>

          <footer className="border-t pt-6 mt-10 text-sm text-slate-500">
            © 2025 Culture Remote Movement — Todos os direitos reservados.<br />
            <strong>Culture Remote Council</strong> — movimento coletivo e colaborativo.
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  )
}
