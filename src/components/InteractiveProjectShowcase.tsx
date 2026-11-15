import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  Code2,
  Database,
  Shield,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

const categories = ['Todos', 'Web', 'Automação', 'Backend'] as const
type Category = (typeof categories)[number]
type PreviewMode = 'ambos' | 'visual' | 'codigo'

const solutions = [
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
] satisfies Array<{
  title: string
  category: Exclude<Category, 'Todos'>
  description: string
  technologies: string[]
  icon: LucideIcon
}>

const pillars: Array<{
  id: string
  title: string
  eyebrow: string
  description: string
  technologies: string[]
  icon: LucideIcon
  code: string
  image?: string
  imageAlt?: string
  imageCaption?: string
}> = [
  {
    id: 'frontend',
    title: 'Frontend & experiências web',
    eyebrow: '01 / INTERFACES',
    description:
      'Interfaces acessíveis e responsivas que transformam fluxos complexos em experiências simples para quem usa.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: Code2,
    code: `type ProjectCardProps = {
  title: string
  description: string
}

export function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 p-6">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}`,
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    eyebrow: '02 / INTEGRAÇÕES',
    description:
      'APIs e serviços organizados para integrar produtos, proteger dados e manter as aplicações confiáveis.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL'],
    icon: Database,
    code: `from fastapi import FastAPI

app = FastAPI()

@app.get("/api/health")
async def health_check():
    return {
        "status": "ok",
        "service": "inovei-api",
    }`,
  },
  {
    id: 'automation',
    title: 'Automações & IA',
    eyebrow: '03 / FLUXOS INTELIGENTES',
    description:
      'Workflows com n8n e integrações de IA que conectam sistemas e diminuem tarefas manuais repetitivas.',
    technologies: ['n8n', 'Webhooks', 'Agentes de IA'],
    icon: Workflow,
    code: `{
  "name": "Atendimento inteligente",
  "nodes": [
    { "type": "n8n-nodes-base.webhook" },
    { "type": "n8n-nodes-base.openAi" },
    { "type": "n8n-nodes-base.respondToWebhook" }
  ],
  "active": true
}`,
  },
  {
    id: 'security',
    title: 'C & segurança',
    eyebrow: '04 / PESQUISA APLICADA',
    description:
      'Estudo de segurança em aplicativos móveis e fundamentos de baixo nível para compreender e reduzir riscos.',
    technologies: ['Linguagem C', 'OWASP MAS', 'Segurança mobile'],
    icon: Shield,
    code: `#include <stddef.h>

int copy_input(char *dest, size_t capacity,
               const char *input, size_t length) {
    if (dest == NULL || input == NULL ||
        length >= capacity) {
        return -1;
    }

    for (size_t i = 0; i < length; i++) {
        dest[i] = input[i];
    }
    dest[length] = '\\0';
    return 0;
}`,
    image: '/images/rone-marques-jornada-pei.jpeg',
    imageAlt: 'Rone Marques ao lado de um pôster acadêmico sobre segurança em aplicativos móveis',
    imageCaption: 'Jornada PEI Conexões · pesquisa sobre segurança mobile',
  },
]

function ModeButton({
  mode,
  activeMode,
  onSelect,
  children,
}: {
  mode: PreviewMode
  activeMode: PreviewMode
  onSelect: (mode: PreviewMode) => void
  children: string
}) {
  return (
    <button
      type="button"
      aria-pressed={activeMode === mode}
      onClick={() => onSelect(mode)}
      className={`rounded-md px-2.5 py-1.5 text-xs transition-colors ${
        activeMode === mode
          ? 'bg-zinc-700 text-white'
          : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}

export function InteractiveProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos')
  const [activePillar, setActivePillar] = useState(pillars[0])
  const [previewMode, setPreviewMode] = useState<PreviewMode>('ambos')
  const reduceMotion = useReducedMotion()
  const visibleSolutions =
    activeCategory === 'Todos'
      ? solutions
      : solutions.filter((solution) => solution.category === activeCategory)
  const ActiveIcon = activePillar.icon

  return (
    <section id="projetos" className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-12 flex flex-col justify-between gap-6 border-t border-zinc-800/80 pt-16 sm:flex-row sm:items-end">
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
          Ver meus repositórios
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

      <div className="mb-8 mt-24">
        <p className="mb-2 font-mono text-sm text-emerald-400">Por dentro da solução</p>
        <h2 className="text-2xl font-bold text-white md:text-3xl">Pilares técnicos</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
          Role pelos módulos: o painel acompanha o pilar ativo e apresenta a amostra técnica e,
          quando disponível, uma imagem relacionada.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon

            return (
              <motion.article
                key={pillar.id}
                onViewportEnter={() => setActivePillar(pillar)}
                viewport={{ amount: 0.4, margin: '-10% 0px -25% 0px' }}
                className={`min-h-[55vh] rounded-2xl border p-6 transition-colors sm:p-8 ${
                  activePillar.id === pillar.id
                    ? 'border-emerald-500/40 bg-zinc-900/80'
                    : 'border-zinc-800 bg-zinc-900/30'
                }`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-wider text-emerald-400">
                    {pillar.eyebrow}
                  </span>
                  <Icon aria-hidden="true" className="h-5 w-5 text-zinc-400" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white sm:text-2xl">{pillar.title}</h3>
                <p className="max-w-lg leading-relaxed text-zinc-400">{pillar.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {pillar.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 font-mono text-xs text-zinc-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="mt-12 flex items-center gap-3 text-xs text-zinc-500">
                  <span className="h-px w-8 bg-zinc-700" />
                  ROLE PARA EXPLORAR
                </div>
              </motion.article>
            )
          })}
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0c0c0e] shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs text-zinc-500">SYSTEM.SHOWCASE</span>
            </div>

            <div className="flex items-center justify-between gap-3 border-b border-zinc-800/80 px-4 py-3">
              <div className="flex min-w-0 items-center gap-2">
                <ActiveIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-emerald-300" />
                <span className="truncate text-sm font-medium text-zinc-200">{activePillar.title}</span>
              </div>
              <div className="flex shrink-0 gap-1 rounded-lg bg-zinc-900 p-1" role="group" aria-label="Modo de visualização">
                <ModeButton mode="ambos" activeMode={previewMode} onSelect={setPreviewMode}>Ambos</ModeButton>
                <ModeButton mode="visual" activeMode={previewMode} onSelect={setPreviewMode}>Visual</ModeButton>
                <ModeButton mode="codigo" activeMode={previewMode} onSelect={setPreviewMode}>Código</ModeButton>
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activePillar.id}-${previewMode}`}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
                className="space-y-4 p-4"
              >
                {previewMode !== 'codigo' && (
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    {activePillar.image ? (
                      <figure>
                        <img
                          src={activePillar.image}
                          alt={activePillar.imageAlt ?? ''}
                          className="max-h-64 w-full object-cover object-[35%_center]"
                          loading="lazy"
                        />
                        {activePillar.imageCaption && (
                          <figcaption className="border-t border-zinc-800 px-3 py-2 text-xs text-zinc-400">
                            {activePillar.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    ) : (
                      <div className="flex min-h-40 flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_65%)] px-6 text-center">
                        <ActiveIcon aria-hidden="true" className="h-8 w-8 text-emerald-300/80" />
                        <p className="font-mono text-xs text-zinc-500">
                          VISUALIZAÇÃO · {activePillar.eyebrow}
                        </p>
                        <p className="max-w-xs text-sm text-zinc-400">
                          Sem screenshot deste módulo; a amostra de código está disponível abaixo.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {previewMode !== 'visual' && (
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
                      <span className="font-mono text-xs text-zinc-400">
                        {activePillar.id === 'backend' || activePillar.id === 'automation'
                          ? 'integration.sample'
                          : activePillar.id === 'security'
                            ? 'safe_copy.c'
                            : 'ProjectCard.tsx'}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-500">CODE</span>
                    </div>
                    <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-emerald-100/85 sm:text-[13px]">
                      <code>{activePillar.code}</code>
                    </pre>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </aside>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-zinc-800/80 pt-8 text-sm text-zinc-400">
        <a href="https://wa.me/5579981254140" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
          WhatsApp
        </a>
        <a href="https://github.com/Ronemarquess" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
          GitHub
        </a>
        <a href="https://instagram.com/devronem" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
          @devronem
        </a>
        <a href="https://instagram.com/inoveitecnologias" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
          @inoveitecnologias
        </a>
      </div>
    </section>
  )
}
