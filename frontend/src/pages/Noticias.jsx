import banner from "../assets/images/bannerDenunciar.png"
import img1 from "../assets/images/imagemCard1.png"
import img2 from "../assets/images/imagemCard2.png"
import img3 from "../assets/images/imagemCard3.png"
import img4 from "../assets/images/imagemCard4.png"
import img5 from "../assets/images/imagemCard5.png"
import img6 from "../assets/images/imagemCard6.png"
import img7 from "../assets/images/imagemCard7.png"
import img8 from "../assets/images/imagemCard8.png"
import img9 from "../assets/images/imagemCard9.png"
import img10 from "../assets/images/imagemCard10.png"
import img11 from "../assets/images/imagemCard11.png"
import img12 from "../assets/images/imagemCard12.png"

export default function Noticias() {
  return (
    <div className="font-nunito">

      {/* BANNER */}
      <section
        className="h-[260px] flex items-center justify-center text-white bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-4xl font-bold z-10">Notícias</h1>
      </section>

      {/* CONTEÚDO */}
      <div className="bg-green-900 py-14 px-6">

        {/* TÍTULO + BUSCA */}
        <div className="text-center mb-16">

          <h2 className="text-white text-3xl font-bold mb-8">
            🌱 Últimas notícias da semana
          </h2>

          <div className="flex justify-center mb-12">
            <input
              type="text"
              placeholder="🔍 Buscar notícias..."
              className="w-[420px] bg-gray-200 p-4 rounded-xl shadow outline-none"
            />
          </div>

        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img1} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">15/07/2025</p>
            <h3 className="font-bold text-sm">Impacto do descarte ilegal</h3>
            <p className="text-xs text-gray-500">Veja como o lixo afeta o meio ambiente.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img2} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">10/07/2025</p>
            <h3 className="font-bold text-sm">Como reciclar corretamente</h3>
            <p className="text-xs text-gray-500">Dicas práticas para separar seu lixo de forma adequada.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img3} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">05/07/2025</p>
            <h3 className="font-bold text-sm">Iniciativas ambientais locais</h3>
            <p className="text-xs text-gray-500">Projetos que estão fazendo a diferença na comunidade.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img4} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">01/07/2025</p>
            <h3 className="font-bold text-sm">Uso da água</h3>
            <p className="text-xs text-gray-500">Evite desperdícios.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 5 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img5} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">28/06/2025</p>
            <h3 className="font-bold text-sm">Áreas verdes</h3>
            <p className="text-xs text-gray-500">Importância nas cidades.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 6 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img6} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">25/06/2025</p>
            <h3 className="font-bold text-sm">Lixo eletrônico</h3>
            <p className="text-xs text-gray-500">Descarte correto.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 7 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img7} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">20/06/2025</p>
            <h3 className="font-bold text-sm">Poluição do ar</h3>
            <p className="text-xs text-gray-500">Afeta a saúde.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 8 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img8} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">18/06/2025</p>
            <h3 className="font-bold text-sm">Consumo consciente</h3>
            <p className="text-xs text-gray-500">Reduza desperdícios.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 9 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img9} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">15/06/2025</p>
            <h3 className="font-bold text-sm">Preservação de rios</h3>
            <p className="text-xs text-gray-500">Água limpa é essencial.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 10 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img10} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">10/06/2025</p>
            <h3 className="font-bold text-sm">Energia sustentável</h3>
            <p className="text-xs text-gray-500">Fontes renováveis.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 11 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img11} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">05/06/2025</p>
            <h3 className="font-bold text-sm">Dia do meio ambiente</h3>
            <p className="text-xs text-gray-500">Importância global.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          {/* CARD 12 */}
          <div className="bg-white rounded-xl p-4 shadow">
            <img src={img12} className="rounded-lg mb-3" />
            <p className="text-[10px] text-gray-400">01/06/2025</p>
            <h3 className="font-bold text-sm">Sustentabilidade</h3>
            <p className="text-xs text-gray-500">Cuidando do planeta.</p>
            <p className="text-green-600 text-xs font-semibold cursor-pointer hover:underline hover:text-green-800">Ler mais</p>
          </div>

          

        </div>

      </div>

    </div>
  )
}