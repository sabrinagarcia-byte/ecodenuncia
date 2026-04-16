import Banner from '../assets/images/banner.png'
import SimboloTriangulo from '../assets/images/reciclar-simbolo-triangular-de-rotacao-de-tres-setas 1.png'
import SimboloAgua from '../assets/images/reutilizar-agua 1.png'
import SimboloLixo from '../assets/images/saco-de-lixo 1.png'

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
              <button className="bg-green-500 hover:bg-green-800 px-7 py-3 rounded-full font-semibold text-lg">
                Denunciar
              </button>

              <div className="w-px h-7 bg-gray-100"></div>

              <button className="bg-white hover:bg-gray-200 hover:text-black text-green-500 px-7 py-3 rounded-full font-semibold text-lg">
                Saiba mais
              </button>
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

    </main>
  );
}