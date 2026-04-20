export default function Noticias() {
  return (
    <div className="font-nunito">

      {/* BANNER */}
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('assets/images/bannerDenunciar.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative z-10 text-4xl font-bold">Notícias</h1>
      </section>

      {/* CONTEÚDO */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-center text-lg mb-6 text-gray-700">
          Últimas notícias da semana
        </h2>

        {/* BUSCA */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="🔍 Buscar..."
            className="w-[320px] p-3 rounded-full border border-gray-300 outline-none"
          />
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4">
            <img src="assets/images/noticia1.jpg" className="rounded-lg mb-3"/>
            <h3 className="font-bold text-sm">Impacto do desmatamento ilegal</h3>
            <p className="text-xs text-gray-500">Saiba como isso afeta o meio ambiente...</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4">
            <img src="assets/images/noticia2.jpg" className="rounded-lg mb-3"/>
            <h3 className="font-bold text-sm">Como reciclar corretamente</h3>
            <p className="text-xs text-gray-500">Dicas simples para ajudar o planeta...</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4">
            <img src="assets/images/noticia3.jpg" className="rounded-lg mb-3"/>
            <h3 className="font-bold text-sm">Poluição nos oceanos</h3>
            <p className="text-xs text-gray-500">Entenda os impactos nos animais marinhos...</p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4">
            <img src="assets/images/noticia4.jpg" className="rounded-lg mb-3"/>
            <h3 className="font-bold text-sm">Descarte correto de lixo</h3>
            <p className="text-xs text-gray-500">Aprenda a separar resíduos corretamente...</p>
          </div>

          {/* CARD 5 */}
          <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4">
            <img src="assets/images/noticia5.jpg" className="rounded-lg mb-3"/>
            <h3 className="font-bold text-sm">Áreas verdes nas cidades</h3>
            <p className="text-xs text-gray-500">A importância dos espaços naturais urbanos...</p>
          </div>

          {/* CARD 6 */}
          <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4">
            <img src="assets/images/noticia6.jpg" className="rounded-lg mb-3"/>
            <h3 className="font-bold text-sm">Poluição sonora e saúde</h3>
            <p className="text-xs text-gray-500">Como o barulho afeta nossa qualidade de vida...</p>
          </div>

          {/* CARD 7 */}
          <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4">
            <img src="assets/images/noticia7.jpg" className="rounded-lg mb-3"/>
            <h3 className="font-bold text-sm">Educação ambiental nas escolas</h3>
            <p className="text-xs text-gray-500">Projetos que fazem a diferença...</p>
          </div>

          {/* CARD 8 */}
          <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4">
            <img src="assets/images/noticia8.jpg" className="rounded-lg mb-3"/>
            <h3 className="font-bold text-sm">Tecnologia contra poluição</h3>
            <p className="text-xs text-gray-500">Soluções inovadoras para o meio ambiente...</p>
          </div>

          {/* CARD 9 */}
          <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4">
            <img src="assets/images/noticia9.jpg" className="rounded-lg mb-3"/>
            <h3 className="font-bold text-sm">Sustentabilidade no dia a dia</h3>
            <p className="text-xs text-gray-500">Pequenas atitudes que geram impacto...</p>
          </div>

        </div>

      </div>

      {/* FINAL */}
      <section className="bg-green-900 text-white text-center py-10">
        <h2 className="text-xl mb-4">Faça parte da mudança!</h2>
        <button className="bg-green-500 px-6 py-2 rounded-full hover:bg-green-600">
          Denunciar
        </button>
      </section>

    </div>
  );
}