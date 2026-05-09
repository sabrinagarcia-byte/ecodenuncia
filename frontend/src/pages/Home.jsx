import { NavLink } from 'react-router'

import Banner from '../assets/images/banner.png'
import SimboloTriangulo from '../assets/images/reciclar-simbolo-triangular-de-rotacao-de-tres-setas 1.png'
import SimboloAgua from '../assets/images/reutilizar-agua 1.png'
import SimboloLixo from '../assets/images/saco-de-lixo 1.png'
import Engrenagem from '../assets/images/engrenagem 1.png'
import Nota from '../assets/images/nota 1.png'
import PesquisaLupa from '../assets/images/pesquisa-de-lupa 1.png'
import MapaIlustrativo from '../assets/images/imagem mapinha.png'
import PlantinhaIcone from '../assets/images/plantar.png'
import img1 from '../assets/images/imagemCard1.png'
import img2 from '../assets/images/imagemCard2.png'
import img3 from '../assets/images/imagemCard3.png'
import BannerDenunciarAgora from '../assets/images/fundoDenunciarAgora.png'

export default function Home() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[505px]">
        <img src={Banner} alt="Banner" className="w-full h-full object-cover object-center" />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          <div className="max-w-5xl w-full mx-auto px- text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-normal tracking-wider drop-shadow-lg">
              Combate ao <br className="hidden md:block" /> descarte irregular de lixo
            </h1>

            <p className="text-base md:text-lg mb-10 max-w-2xl tracking-wider drop-shadow-md mx-auto md:mx-0">
              Denuncie práticas ilegais e ajude a preservar o meio ambiente para as futuras gerações.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <NavLink to="/denunciar" className="bg-green-600 hover:bg-green-500 px-7 py-2 rounded-full font-bold text-lg transition-colors w-full sm:w-auto text-center shadow-lg">
                Denunciar
              </NavLink>

              <NavLink to="/noticias" className="bg-white text-green-700 hover:bg-gray-100 px-7 py-2 rounded-full font-bold text-lg transition-colors w-full sm:w-auto text-center shadow-lg">
                Saiba mais
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* OS 3 Rs */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Conheça os 3 Rs do{" "}
            <span className="text-green-600">descarte consciente</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-3 border-t-4 border-green-600 rounded-2xl shadow-md hover:-translate-y-1 transition-transform flex flex-col items-center">
              <img src={SimboloLixo} alt="Reduzir" className="w-16 h-16 object-contain mb-6" />
              <h3 className="font-bold text-xl text-green-950 mb-3">Reduzir</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Diminua o consumo no dia a dia. Evite desperdícios e escolha apenas o necessário.
              </p>
            </div>

            <div className="bg-white p-3 border-t-4 border-green-600 rounded-2xl shadow-md hover:-translate-y-1 transition-transform flex flex-col items-center">
              <img src={SimboloAgua} alt="Reutilizar" className="w-16 h-16 object-contain mb-6" />
              <h3 className="font-bold text-xl text-green-950 mb-3">Reutilizar</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Dê uma nova vida aos materiais. Reaproveite antes de descartar para o lixo comum.
              </p>
            </div>

            <div className="bg-white p-3 border-t-4 border-green-600 rounded-2xl shadow-md hover:-translate-y-1 transition-transform flex flex-col items-center">
              <img src={SimboloTriangulo} alt="Reciclar" className="w-16 h-16 object-contain mb-6" />
              <h3 className="font-bold text-xl text-green-950 mb-3">Reciclar</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Separe corretamente os resíduos e ajude a transformar lixo em novos recursos.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-green-950 text-white py-16 relative">
        <div className="absolute inset-0 bg-green-900/40"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Como funciona?
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">

            {/* LADO ESQUERDO (PASSOS) */}
            <div className="flex-1 space-y-4 w-full">

              <div className="bg-white text-gray-800 p-5 rounded-2xl flex items-center gap-4 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <img src={Nota} alt="Anotar" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-green-950">Faça sua denúncia</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Descreva o problema ambiental, informe o local e envie uma foto se tiver.
                  </p>
                </div>
              </div>

              <div className="bg-white text-gray-800 p-5 rounded-2xl flex items-center gap-4 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <img src={PesquisaLupa} alt="Lupa" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-green-950">Análise da equipe</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Nossa equipe avalia todas as informações da denúncia com responsabilidade.
                  </p>
                </div>
              </div>

              <div className="bg-white text-gray-800 p-5 rounded-2xl flex items-center gap-4 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <img src={Engrenagem} alt="Engrenagem" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-green-950">Encaminhamento</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    A denúncia é encaminhada para os órgãos públicos e ambientais responsáveis.
                  </p>
                </div>
              </div>

            </div>

            {/* LADO DIREITO (IMAGEM) */}
            <div className="flex-1 flex flex-col items-center">
              <img src={MapaIlustrativo} alt="Mapa ilustrativo" className="w-full max-w-md drop-shadow-xl mb-4" />
              <p className="text-green-100 text-sm text-center font-medium">
                Sua participação é essencial para proteger a cidade.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ÚLTIMAS NOTÍCIAS */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 flex flex-col md:flex-row items-center justify-center gap-3 text-green-950">
            <img src={PlantinhaIcone} alt="Planta" className="w-10 h-10" />
            Últimas Notícias
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 flex flex-col h-full hover:-translate-y-1 transition-transform">
              <img src={img1} className="rounded-xl mb-3 w-full h-32 object-cover" alt="Impacto do descarte ilegal" />
              <p className="text-xs text-gray-500 mb-1">12 Mar 2026</p>
              <h3 className="font-bold text-green-900 text-lg mb-2">
                Impacto do descarte ilegal
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-snug">
                Veja como o descarte irregular do lixo afeta o meio ambiente e a saúde da população.
              </p>
              <p className="mt-auto text-green-700 text-sm font-bold cursor-pointer hover:underline">
                Ler mais
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 flex flex-col h-full hover:-translate-y-1 transition-transform">
              <img src={img2} className="rounded-xl mb-3 w-full h-32 object-cover" alt="Como reciclar corretamente" />
              <p className="text-xs text-gray-500 mb-1">20 Mar 2026</p>
              <h3 className="font-bold text-green-900 text-lg mb-2">
                Como reciclar corretamente
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-snug">
                Dicas simples e práticas para começar a separar o seu lixo de forma adequada hoje mesmo.
              </p>
              <p className="mt-auto text-green-700 text-sm font-bold cursor-pointer hover:underline">
                Ler mais
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 flex flex-col h-full hover:-translate-y-1 transition-transform">
              <img src={img3} className="rounded-xl mb-3 w-full h-32 object-cover" alt="Iniciativas locais" />
              <p className="text-xs text-gray-500 mb-1">15 Fev 2026</p>
              <h3 className="font-bold text-green-900 text-lg mb-2">
                Iniciativas ambientais locais
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-snug">
                Conheça os projetos comunitários que estão fazendo a diferença em nossa região.
              </p>
              <p className="mt-auto text-green-700 text-sm font-bold cursor-pointer hover:underline">
                Ler mais
              </p>
            </div>
          
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-56 flex items-center justify-center text-white text-center">
        <img src={BannerDenunciarAgora} className="absolute inset-0 w-full h-full object-cover" alt="Banner CTA" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h2 className="text-3xl font-bold mb-6">Faça parte da mudança!</h2>
          <NavLink to="/denunciar" className="inline-block bg-green-600 text-lg px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-500 transition-colors">
            Denunciar agora
          </NavLink>
        </div>
      </section>

    </main>
  );
}