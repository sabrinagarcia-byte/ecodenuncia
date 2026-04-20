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

      {/* 🔥 HERO */}
      <div className="relative h-[50vh] min-h-[300px]">
        <img src={Banner} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold">Sobre Nós</h1>
          <p className="mt-2 max-w-xl">
            Nosso objetivo é combater o descarte irregular de lixo e promover um ambiente mais sustentável para todos.
          </p>
        </div>
      </div>

      
      <div className="bg-gray-100 py-12 px-6 flex justify-center">
        <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-15 flex flex-col md:flex-row items-center gap-6">

          <div className="flex-1">
            <span className="bg-green-900 text-white px-4 py-1 rounded-full text-2xl">
              Quem Somos
            </span>

            <h2 className="mt-4 font-bold text-lg">
              Somos uma plataforma dedicada a facilitar <br/>a denúncia de descarte irregular de resíduos.
            </h2>

            <p className="text-black mt-2 text-ls">
              Conectamos cidadãos, empresas e órgãos responsáveis para <br/>agir juntos por cidades mais limpas e sustentáveis.
            </p>
          </div>

          <img
            src={ImgQuemSomos}
            className="w-[250px] rounded-xl shadow-2xl"
          />
        </div>
      </div>

     
      <div className="bg-gray-100 pb-16 px-6 flex justify-center">
        <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl p-6 shadow border-2 border-green-800 text-center">
            <img src={MissaoIcon} className="w-15 mx-auto mb-3" />
            <h3 className="font-bold text-lg">Missão</h3>
            <p className="text-sm text-black mt-2">
              Promover o descarte correto de resíduos por meio da conscientização e da tecnologia.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border-2 border-green-800 text-center">
            <img src={VisaoIcon} className="w-15 mx-auto mb-3" />
            <h3 className="font-bold text-lg">Visão</h3>
            <p className="text-sm text-black mt-2">
              Ser referência em soluções digitais para sustentabilidade.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border-2 border-green-800 text-center">
            <img src={ValoresIcon} className="w-15 mx-auto mb-3" />
            <h3 className="font-bold text-lg">Valores</h3>
            <ul className="text-sm text-black mt-2 space-y-1">
              <li>• Responsabilidade</li>
              <li>• Consciência ambiental</li>
              <li>• Colaboração</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="relative py-16 text-white bg-green-950">
        <div className="absolute inset-z bg-green-900/80"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold">Nossa Equipe</h2>
          <p className="text-lg py-5 mb-10">Conheça as pessoas por trás do EcoDenúncia</p>

          <div className="flex flex-col md:flex-row justify-center gap-6 px-4">

            {[Ana, Sabrina, Yasmin].map((img, i) => (
              <div key={i} className="bg-white text-gray-800 rounded-xl p-6 w-[350px] mx-auto shadow">
                <img src={img} className="w-20 h-20 rounded-full mx-auto mb-5" />
                <h4 className="font-semibold text-lg">Nome da Pessoa</h4>
                <p className="text-ls text-gray-500">Desenvolvedor / Designer</p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* 🔥 CTA */}
      <div className="relative h-[200px] flex items-center justify-center text-white text-center">
        <img src={Banner2} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h2 className="text-2xl font-bold">Faça parte da mudança!</h2>
          <button className="mt-4 bg-green-800 px-6 py-2 rounded-full hover:bg-green-700">
            Denunciar agora
          </button>
        </div>
      </div>

    </div>
  )
}