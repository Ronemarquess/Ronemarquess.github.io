import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MapPin,
  Server,
  Sparkles,
} from 'lucide-react'
import { InteractiveProjectShowcase } from './components/InteractiveProjectShowcase'

const currentYear = new Date().getFullYear()
const profileImage = '/images/rone-marques-perfil.jpeg'

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

const journey = [
  {
    title: 'Gestão pública em Lagarto-SE',
    description:
      'Experiência como Diretor do Mercado Municipal, aproximando a tecnologia dos desafios reais de gestão e operação.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Sistemas de Informação',
    description:
      'Formação acadêmica na Estácio e aprendizado contínuo em desenvolvimento de software e arquitetura de sistemas.',
    icon: GraduationCap,
  },
  {
    title: 'Tecnologia com propósito',
    description:
      'Soluções digitais, automações e produtos construídos por meio da INOVEI TEC e da roneAIsolutions.',
    icon: Code2,
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
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:pt-24">
          <div>
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
                href="https://wa.me/5579981254140"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-3 font-medium text-zinc-200 transition-colors hover:bg-zinc-800"
              >
                Fale comigo
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-sm">
            <div aria-hidden="true" className="absolute -inset-5 rounded-[2rem] bg-emerald-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/50 bg-zinc-900/90 p-5 shadow-[0_0_50px_rgba(16,185,129,0.12)]">
              <div className="mb-4 flex items-center justify-between font-mono text-xs text-zinc-500">
                <span>PROFILE.SYSTEM</span>
                <span className="flex items-center gap-2 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ONLINE
                </span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/20 via-blue-500/10 to-zinc-950">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Foto de perfil de Rone Marques"
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  <div
                    className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-4"
                    role="img"
                    aria-label="Espaço reservado para a foto de perfil de Rone Marques"
                  >
                    <span className="flex h-28 w-28 items-center justify-center rounded-full border border-emerald-400/50 bg-zinc-950/70 font-mono text-4xl font-bold text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                      RM
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-emerald-200/70">
                      RETRATO A ADICIONAR
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <p className="text-xl font-semibold text-white">Rone Marques</p>
                <p className="mt-1 font-mono text-sm text-emerald-300">Software Developer</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin aria-hidden="true" className="h-4 w-4 text-blue-400" />
                  Lagarto, Sergipe · Brasil
                </p>
              </div>
            </div>
          </aside>
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

        <section id="sobre" className="border-t border-zinc-800/80 bg-zinc-900/20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/15 via-emerald-500/10 to-zinc-950 p-6 sm:p-8">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {journey.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <article
                      key={item.title}
                      className={`rounded-2xl border border-zinc-700/70 bg-zinc-950/75 p-5 backdrop-blur ${
                        index === 0 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <Icon aria-hidden="true" className="mb-4 h-5 w-5 text-emerald-300" />
                      <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                    </article>
                  )
                })}
              </div>
              <div className="relative mt-4 grid grid-cols-2 gap-4">
                <figure className="overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-950/75">
                  <img
                    src="/images/rone-marques-jornada-pei.jpeg"
                    alt="Rone Marques apresentando trabalho acadêmico na Jornada PEI Conexões"
                    className="h-52 w-full object-cover object-[35%_center] sm:h-64"
                    loading="lazy"
                  />
                  <figcaption className="p-3 text-xs text-zinc-400">Pesquisa e segurança em tecnologia</figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-950/75">
                  <img
                    src="/images/rone-marques-trajetoria.jpeg"
                    alt="Rone Marques em um momento de estudo e desenvolvimento"
                    className="h-52 w-full object-cover object-[center_35%] sm:h-64"
                    loading="lazy"
                  />
                  <figcaption className="p-3 text-xs text-zinc-400">Estudo e desenvolvimento contínuos</figcaption>
                </figure>
              </div>
              <p className="relative mt-5 font-mono text-xs text-zinc-500">
                HISTÓRIA · VIVÊNCIA · FORMAÇÃO
              </p>
            </div>

            <div>
              <p className="mb-3 font-mono text-sm text-emerald-400">Minha trajetória</p>
              <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                Minha História, Vivência &amp; Formação
              </h2>
              <p className="leading-relaxed text-zinc-400">
                Minha trajetória conecta a gestão pública ao desenvolvimento de tecnologia. Como
                Diretor do Mercado Municipal de Lagarto-SE, vivencio de perto desafios de
                operação e atendimento. Na formação em Sistemas de Informação e no trabalho com a{' '}
                <span className="font-medium text-zinc-200">INOVEI TEC</span> e a{' '}
                <span className="font-medium text-zinc-200">roneAIsolutions</span>, transformo
                necessidades reais em soluções digitais úteis e sustentáveis.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-400">
                A pesquisa acadêmica em segurança de aplicativos móveis complementa essa vivência,
                aproximando investigação técnica, gestão e desenvolvimento de produtos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-zinc-800/80 bg-zinc-950/50 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-zinc-400 sm:flex-row">
          <p>© {currentYear} Rone Marques • INOVEI TEC &amp; roneAIsolutions</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://wa.me/5579981254140"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              WhatsApp
            </a>
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
