import Banner from '../assets/images/banner.png'
import SimboloTriangulo from '../assets/images/reciclar-simbolo-triangular-de-rotacao-de-tres-setas 1.png'
import SimboloAgua from '../assets/images/reutilizar-agua 1.png'
import SimboloLixo from '../assets/images/saco-de-lixo 1.png'
import Engrenagem from '../assets/images/engrenagem 1.png'
import Nota from '../assets/images/nota 1.png'
import PesquisaLupa from '../assets/images/pesquisa-de-lupa 1.png'
import MapaIlustrativo from '../assets/images/imagem mapinha.png'
import PesquisaIcone from '../assets/images/pesquisa-de-lupa 1.png'
import PlantinhaIcone from '../assets/images/plantar.png'
import ImagemCard1 from '../assets/images/imagemCrard1.png'
import ImagemCard2 from '../assets/images/imagemCard2.png'
import ImagemCard3 from '../assets/images/imagemCard3.png'
import BannerDenunciarAgora from '../assets/images/fundoDenunciarAgora.png'

import { NavLink } from 'react-router'

export default function Home() {

  return (
    <main className="w-full">

      <section className="w-full relative">
        {/* h-[450px] mobile, h-[550px] desktop. Meio termo entre 500px e o h-auto gigante */}
        <img src={Banner} alt="Banner" className="w-full h-[450px] md:h-[820px] object-cover object-center" />

        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-6xl px-6 ml-10 md:ml-20 text-white">
            {/* Aumentei h1: text-4xl -> text-5xl e md:text-5xl -> md:text-6xl */}
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
              Combate ao <br /> descarte irregular de lixo
            </h1>

            {/* Aumentei p: text-lg -> text-xl md:text-2xl */}
            <p className="text-xl md:text-2xl mb-8 text-white">
              Denuncie práticas ilegais e ajude a preservar o meio ambiente
            </p>

            <div className="flex items-center gap-4">
              {/* Aumentei padding e text dos botões */}
              

              <NavLink to="/denunciar" className="bg-green-500 hover:bg-green-800 px-7 py-3 rounded-full font-semibold text-lg">
                Denunciar
              </NavLink>

              <div className="w-px h-7 bg-gray-100"></div>

              <NavLink to="/noticias" className="bg-white hover:bg-gray-200 hover:text-black text-green-500 px-7 py-3 rounded-full font-semibold text-lg">
                Saiba mais
              </NavLink>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-16">
        <div className="w-full px-6 text-center">
          <div className="bg-gray-100 p-10 rounded-xl">

            {/* Aumentei o título da seção */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">
              Conheça os 3 Rs do{" "}
              <span className="text-green-500">descarte consciente</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 - fontes maiores */}
              <div className="bg-gray-100 p-8 border border-green-600 rounded-xl shadow hover:shadow-md hover:bg-white hover:-translate-y-1 transition text-center">
                <div className="flex justify-center mb-5">
                  {/* Ícone maior também pra acompanhar */}
                  <img src={SimboloLixo} alt="Reduzir" className="w-14 h-14 object-contain" />
                </div>
                {/* h3: text-lg -> text-xl */}
                <h3 className="font-semibold text-xl mb-3">Reduzir</h3>
                {/* p: text-sm -> text-lg */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  Diminua o consumo no dia a dia. Evite desperdícios e escolha apenas o necessário.
                </p>
              </div>

              {/* Card 2 - fontes maiores */}
              <div className="bg-gray-100 p-8 border border-green-600 rounded-xl shadow hover:shadow-md hover:bg-white hover:-translate-y-1 transition text-center">
                <div className="flex justify-center mb-5">
                  <img src={SimboloAgua} alt="Agua" className="w-14 h-14 object-contain" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Reutilizar</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Dê uma nova vida aos materiais. Reaproveite antes de descartar.
                </p>
              </div>

              {/* Card 3 - fontes maiores */}
              <div className="bg-gray-100 border border-green-600 p-8 rounded-xl shadow hover:shadow-md hover:bg-white hover:-translate-y-1 transition text-center">
                <div className="flex justify-center mb-5">
                  <img src={SimboloTriangulo} alt="Triangulo" className="w-14 h-14 object-contain" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Reciclar</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Separe corretamente os resíduos e ajude a transformar lixo em novos recursos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-950 text-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-5xl font-semibold py-15 text-center mb-12">
            Como funciona?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LADO ESQUERDO (PASSOS) */}
            <div className="space-y-6">

              {/* Passo 1 */}
              <div className="bg-white text-black p-5 rounded-xl flex gap-4 items-start shadow">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={Nota} alt="Simbolo de anotar" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold">Faça sua denúncia</h3>
                  <p className="text-sm text-black">
                    Descreva o problema ambiental, informe o local e, se possível, envie uma foto.
                  </p>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="bg-white text-black p-5 rounded-xl flex gap-4 items-start shadow">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={PesquisaLupa} alt="Lupa de Pesquisa" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold">Análise da equipe</h3>
                  <p className="text-sm text-black">
                    Nossa equipe analisa todas as denúncias com responsabilidade.
                  </p>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="bg-white text-black p-5 rounded-xl flex gap-4 items-start shadow">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={Engrenagem} alt="Engrenagem Simbolo" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold">Encaminhamento</h3>
                  <p className="text-sm text-black">
                    A denúncia é enviada aos órgãos responsáveis.
                  </p>
                </div>
              </div>

            </div>


            {/* LADO DIREITO (IMAGEM) */}
            <div className="relative">
              <img src={MapaIlustrativo} alt="Imagem de um mapa ilustrativo" />
              <p className="text-sm mt-3 text-center">
                Sua participação é essencial para proteger o meio ambiente
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-green-950 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-5xl font-semibold text-center mb-12 flex items-center justify-center gap-2">
            <img
              src={PlantinhaIcone}
              alt="Simbolo de uma planta"
              className="w-15 h-15"
            />
            Últimas notícias
          </h2>


          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white text-black rounded-xl overflow-hidden shadow hover:-translate-y-2 transition">
              <img src={ImagemCard1} alt='imagem do card 1' className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Impacto do descarte ilegal na natureza
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Entenda os impactos ambientais e sociais causados pelo descarte incorreto.
                </p>
                <span className="text-green-600 font-semibold text-sm cursor-pointer">
                  Ler mais
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-black rounded-xl overflow-hidden shadow hover:-translate-y-2 transition">
              <img src={ImagemCard2} alt='imagem do card 2' className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  5 ações do cotidiano para reciclar corretamente
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Dicas simples que ajudam na separação e destino dos resíduos.
                </p>
                <span className="text-green-600 font-semibold text-sm cursor-pointer">
                  Ler mais
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-black rounded-xl overflow-hidden shadow hover:-translate-y-2 transition">
              <img src={ImagemCard3} alt='imagem do card 3' className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Comunidades que se uniram pela limpeza
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Conheça iniciativas que fazem a diferença no meio ambiente.
                </p>
                <a href='' className="text-green-600 font-semibold text-sm cursor-pointer">
                  Ler mais
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative w-full h-[300px] flex items-center justify-center">

        {/* IMAGEM DE FUNDO */}
        <img
          src={BannerDenunciarAgora}
          alt="Banner Denunciar agora"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTEÚDO */}
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Faça parte da mudança!
          </h2>

          <NavLink to="/denunciar" className="bg-green-900 hover:bg-green-800 px-7 py-3 rounded-full font-semibold text-lg">
                Denunciar agora
              </NavLink>
        </div>

      </section>


    </main>
  );
}