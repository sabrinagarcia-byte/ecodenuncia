const noticias = [
  {
    title: 'Governo anuncia nova coleta seletiva em área urbana',
    description: 'A iniciativa promete melhorar o descarte de resíduos e reduzir o impacto ambiental na cidade.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Comunidade organiza mutirão de limpeza no parque',
    description: 'Voluntários retiraram entulho e orientaram moradores sobre o descarte correto.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Escola realiza campanha de reciclagem com alunos',
    description: 'Crianças aprenderam a separar o lixo e criar projetos sustentáveis na escola.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Prefeitura instala mais pontos de coleta de lixo eletrônico',
    description: 'O novo equipamento facilita o descarte seguro de baterias e eletrônicos.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Empresas locais aderem à campanha Cidade sem Lixo',
    description: 'Estabelecimentos reforçam a separação de resíduos e a redução do plástico.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Projeto de lei propõe multas para descarte irregular',
    description: 'O documento pretende trazer mais fiscalização e proteção ao meio ambiente.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
]

function NoticiaCard({ title, description, image }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:shadow-black/30">
      <div className="h-56 overflow-hidden bg-slate-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6 md:p-7">
        <span className="inline-flex rounded-full bg-green-600/15 px-3 py-1 text-sm font-semibold text-green-200">Notícia ambiental</span>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-slate-300 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>Atualizado hoje</span>
          <a href="#" className="font-semibold text-green-300 transition hover:text-green-200">Ler mais</a>
        </div>
      </div>
    </article>
  )
}

export default function Noticias() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.8),transparent_60%),linear-gradient(180deg,#064e3b,#02372b)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <header className="space-y-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-green-300">Últimas notícias da semana</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Fique por dentro das ações ambientais</h1>
          <p className="mx-auto max-w-2xl text-slate-200/90">
            Leia as principais novidades sobre descarte consciente, mutirões de limpeza e políticas ambientais na região.
          </p>
          <div className="mx-auto max-w-xl">
            <label className="sr-only" htmlFor="noticias-busca">Buscar notícias</label>
            <div className="relative">
              <input
                id="noticias-busca"
                type="search"
                placeholder="Buscar notícia..."
                className="w-full rounded-full border border-green-300/30 bg-white/10 px-5 py-3 text-slate-100 placeholder:text-slate-300 outline-none transition focus:border-green-300 focus:bg-white/20"
              />
              <button
                type="button"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-500"
              >
                Buscar
              </button>
            </div>
          </div>
        </header>

        <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {noticias.map((item) => (
            <NoticiaCard key={item.title} title={item.title} description={item.description} image={item.image} />
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-2xl shadow-black/20">
          <h2 className="text-3xl font-semibold text-white">Faça parte da mudança</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Denuncie descarte irregular e ajude sua comunidade a viver em um ambiente mais limpo e saudável.
          </p>
          <button className="mt-8 inline-flex rounded-full bg-green-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-green-500">
            Denunciar agora
          </button>
        </section>
      </div>
    </div>
  )
}
