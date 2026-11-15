import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Server,
  Sparkles,
} from 'lucide-react'
import { InteractiveProjectShowcase } from './components/InteractiveProjectShowcase'

const currentYear = new Date().getFullYear()

const stackGroups = [
  {
    title: 'Frontend & UI',
    icon: <Code2 aria-hidden="true" className="h-5 w-5 text-blue-400" />,
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML5 / CSS3'],
  },
  {
    title: 'Backend, dados & sistemas',
    icon: <Server aria-hidden="true" className="h-5 w-5 text-emerald-400" />,
    items: ['Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'IA, automação & DevOps',
    icon: <Sparkles aria-hidden="true" className="h-5 w-5 text-purple-400" />,
    items: ['n8n', 'Agentes de IA', 'Git & GitHub', 'Vercel', 'CI/CD'],
  },
]

export function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-white"
            aria-label="Rone Marques, início"
          >
            <span className="text-blue-500">&lt;</span>
            RoneMarques
            <span className="text-emerald-400">/&gt;</span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#projetos" className="transition-colors hover:text-white">Projetos</a>
            <a href="#stack" className="transition-colors hover:text-white">Stack</a>
            <a href="#sobre" className="transition-colors hover:text-white">Sobre</a>
            <a href="#contato" className="transition-colors hover:text-white">Contato</a>
          </nav>

          <a
            href="https://github.com/Ronemarquess"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs text-emerald-400">
            <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Disponível para projetos, sistemas sob medida & consultoria
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Desenvolvedor de Software &amp;{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Solucionador de Problemas Tecnológicos.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Sou <strong className="text-zinc-200">Rone Marques</strong> — fundador da{' '}
            <strong className="text-zinc-200">INOVEI TEC</strong> e{' '}
            <strong className="text-zinc-200">roneAIsolutions</strong>, graduando em Sistemas de
            Informação e Gestor Público em Lagarto-SE. Construo plataformas web, automações
            inteligentes e arquiteturas orientadas a resultado.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Ronemarquess?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
            >
              <span>Explorar meus repositórios</span>
              <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/devronem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-3 font-medium text-zinc-200 transition-colors hover:bg-zinc-800"
            >
              <span>@devronem</span>
            </a>
          </div>
        </section>

        <InteractiveProjectShowcase />

        <section id="stack" className="mx-auto max-w-7xl border-t border-zinc-800/80 px-6 py-20">
          <h2 className="mb-10 text-2xl font-bold text-white md:text-3xl">Stack tecnológica</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stackGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  {group.icon}
                  <h3 className="font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 font-mono text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl border-t border-zinc-800/80 px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Sobre mim</h2>
            <p className="leading-relaxed text-zinc-400">
              Unindo experiência prática em gestão pública (Diretor do Mercado Municipal de
              Lagarto-SE) com formação acadêmica em Sistemas de Informação (Estácio) e
              desenvolvimento de software, atuo diretamente na ponte entre problemas reais de
              operação e soluções tecnológicas escaláveis por meio da{' '}
              <span className="font-medium text-zinc-200">INOVEI TEC</span> e da{' '}
              <span className="font-medium text-zinc-200">roneAIsolutions</span>.
            </p>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-zinc-800/80 bg-zinc-950/50 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-zinc-400 sm:flex-row">
          <p>© {currentYear} Rone Marques • INOVEI TEC &amp; roneAIsolutions</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Ronemarquess"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/devronem"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              @devronem
            </a>
            <a
              href="https://instagram.com/inoveitecnologias"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              @inoveitecnologias
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
