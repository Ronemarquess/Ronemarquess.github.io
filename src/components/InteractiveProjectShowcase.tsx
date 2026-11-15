import { useState } from 'react'
import { ArrowUpRight, Bot, Code2, Database } from 'lucide-react'

const categories = ['Todos', 'Web', 'Automação', 'Backend'] as const
type Category = (typeof categories)[number]

const solutions: Array<{
  title: string
  category: Exclude<Category, 'Todos'>
  description: string
  technologies: string[]
  icon: typeof Code2
}> = [
  {
    title: 'Plataformas web',
    category: 'Web',
    description:
      'Aplicações modernas e responsivas para organizar serviços, apresentar produtos e simplificar tarefas do dia a dia.',
    technologies: ['React', 'TypeScript', 'Vite'],
    icon: Code2,
  },
  {
    title: 'Automação inteligente',
    category: 'Automação',
    description:
      'Fluxos que conectam ferramentas e reduzem trabalho repetitivo com automações e recursos de inteligência artificial.',
    technologies: ['n8n', 'APIs', 'Agentes de IA'],
    icon: Bot,
  },
  {
    title: 'APIs & dados',
    category: 'Backend',
    description:
      'Serviços e integrações para conectar sistemas com segurança e manter os dados acessíveis e organizados.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL'],
    icon: Database,
  },
]

export function InteractiveProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos')
  const visibleSolutions =
    activeCategory === 'Todos'
      ? solutions
      : solutions.filter((solution) => solution.category === activeCategory)

  return (
    <section id="projetos" className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 font-mono text-sm text-blue-400">O que eu construo</p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Projetos & soluções</h2>
        </div>
        <a
          href="https://github.com/Ronemarquess?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
          Ver GitHub
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>

      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar soluções por categoria">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              activeCategory === category
                ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {visibleSolutions.map((solution) => {
          const Icon = solution.icon

          return (
            <article
              key={solution.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 text-blue-300">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="mb-2 font-mono text-xs text-emerald-400">{solution.category}</p>
              <h3 className="mb-3 text-lg font-semibold text-white">{solution.title}</h3>
              <p className="mb-6 min-h-20 text-sm leading-relaxed text-zinc-400">
                {solution.description}
              </p>
              <ul className="flex flex-wrap gap-2" aria-label={`Tecnologias: ${solution.technologies.join(', ')}`}>
                {solution.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
