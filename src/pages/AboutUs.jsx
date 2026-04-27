import Banner from '../assets/images/bannerSobreNos.png'
import Banner2 from '../assets/images/banner2SobreNos.png'
import ImgQuemSomos from '../assets/images/QuemSomos.png'
import MissaoIcon from '../assets/images/Missao.png'
import VisaoIcon from '../assets/images/Visao.png'
import ValoresIcon from '../assets/images/Valores.png'

import Ana from '../assets/images/Ana.png'
import Sabrina from '../assets/images/Sabrina.png'
import Yasmin from '../assets/images/Yasmin.png'

import Email from '../assets/images/o-email (2) 1.png'
import Telefone from '../assets/images/telefone (2) 1.png'

export default function AboutUs() {
  return (
    <div className="w-full">

      <div className="relative h-[50vh] min-h-75">
        <img src={Banner} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold py-4">Sobre Nós</h1>
          <p className="mt-2 text-2xl py-2 max-w-xl">
            Nosso objetivo é combater o descarte irregular de lixo e promover um ambiente mais sustentável para todos.
          </p>
        </div>
      </div>

      
      <div className="bg-gray-100 py-24 px-6 flex justify-center">
        <div className="max-w-6xl w-full bg-white rounded-4xl shadow-2xl p-30 flex flex-col md:flex-row items-center gap-6">

          <div className="flex-1">
            <p className="bg-green-900 text-white px-4 py-1 rounded-2xl text-3xl">
              Quem Somos?
            </p>

            <h2 className="mt-4 font-bold text-2xl pb-10">
              Somos uma plataforma dedicada a facilitar <br/>a denúncia de descarte irregular de resíduos.
            </h2>

            <p className="text-black mt-2 text-ls">
              Conectamos cidadãos, empresas e órgãos responsáveis para <br/>agir juntos por cidades mais limpas e sustentáveis.
            </p>
          </div>

          <img
            src={ImgQuemSomos}
            className="w-90 rounded-xl shadow-2xl"
          />
        </div>
      </div>

     
      <div className="bg-gray-100 pb-16 px-6 flex justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-3 gap-6">

         <div className="bg-white rounded-xl p-6 shadow-lg shadow-green-950/40 border-4 border-green-700 text-center">
            <img src={MissaoIcon} className="w-20 mx-auto mb-4" />
            <h3 className="font-bold text-green-900 text-2xl">Missão</h3>
            <p className="text-lg text-black mt-2">
              Promover o descarte correto de resíduos por meio da conscientização e da tecnologia.
            </p>
          </div>

         <div className="bg-white rounded-xl p-6 shadow-lg shadow-green-950/40 border-4 border-green-700 text-center">
            <img src={VisaoIcon} className="w-20 mx-auto mb-4" />
            <h3 className="font-bold text-green-900 text-2xl">Visão</h3>
            <p className="text-lg text-black mt-2">
              Ser referência em soluções digitais para sustentabilidade.
            </p>
          </div>

         <div className="bg-white rounded-xl p-6 shadow-lg shadow-green-950/40 border-4 border-green-700 text-center">
            <img src={ValoresIcon} className="w-20 mx-auto mb-4" />
            <h3 className="font-bold text-green-900 text-2xl">Valores</h3>
            <ul className="text-lg text-black mt-2 space-y-1">
              <li>• Colaboração</li>
              <li>• Responsabilidade</li>
              <li>• Consciência ambiental</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="relative py-16 text-white bg-green-950">
        <div className="absolute inset-z bg-green-900/80"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold">Nossa Equipe</h2>
          <p className="text-2xl py-5 mb-10">Conheça as pessoas por trás do EcoDenúncia</p>

          <div className="flex flex-col md:flex-row justify-center gap-6 px-4">

            {[Ana, Sabrina, Yasmin].map((img, i) => (
              <div key={i} className="bg-white text-gray-800 rounded-xl p-6 w-87.5 mx-auto shadow">
                <img src={img} className="w-20 h-20 rounded-full mx-auto mb-5" />
                <h4 className="font-semibold text-lg">Nome da Pessoa</h4>
                <p className="text-ls text-gray-500">Desenvolvedor / Designer</p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* 🔥 CTA */}
      <div className="relative h-50 flex items-center justify-center text-white text-center">
        <img src={Banner2} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold">Faça parte da mudança!</h2>
          <button className="mt-4 bg-green-800 text-lg px-6 py-2 rounded-full hover:bg-green-700">
            Denunciar agora
          </button>
        </div>
      </div>

    </div>
  )
}