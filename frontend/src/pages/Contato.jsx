import BannerFaleConosco from '../assets/images/bannerFaleConosco.png'
import EmailSimbol from '../assets/images/o-email (2) 1.png'
import TelefoneSimbol from '../assets/images/telefone (2) 1.png'
import CheckIcon from '../assets/images/CheckIcon.png'

export default function Contato() {
  return (
    <section className="w-full min-h-screen bg-white">
      
      {/* Banner Simples no Topo */}
      <div className="w-full h-64 relative">
        <img
          src={BannerFaleConosco}
          alt="Fundo Fale Conosco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Fale Conosco</h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-xl text-center text-gray-700 mb-12">
          Tem alguma sugestão ou problema? Entre em contato com a gente.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* COLUNA ESQUERDA: FORMULÁRIO */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-green-900">Envie uma mensagem</h2>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg text-gray-800">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg text-gray-800">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg text-gray-800">Mensagem</label>
              <textarea
                placeholder="Escreva sua mensagem"
                className="w-full border border-gray-300 rounded-lg p-3 h-32 outline-none resize-none focus:border-green-600"
              />
            </div>

            <button className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full text-lg font-semibold mt-2 w-full sm:w-auto">
              Enviar mensagem
            </button>
          </div>

          {/* COLUNA DIREITA: INFORMAÇÕES */}
          <div className="flex flex-col gap-8 md:pl-10">
            <h2 className="text-2xl font-bold text-green-900">Contato Direto</h2>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img src={EmailSimbol} alt="E-mail" className="w-6 h-6" />
                <a href="mailto:contato@ecodenuncia.com" className="text-lg text-gray-800 hover:text-green-600">
                  contato@ecodenuncia.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <img src={TelefoneSimbol} alt="Telefone" className="w-6 h-6" />
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-800 hover:text-green-600">
                  (12) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <img src={CheckIcon} alt="Check" className="w-6 h-6" />
                <span className="text-lg font-medium text-gray-700">Análise cuidadosa das informações</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={CheckIcon} alt="Check" className="w-6 h-6" />
                <span className="text-lg font-medium text-gray-700">Encaminhamento aos órgãos responsáveis</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={CheckIcon} alt="Check" className="w-6 h-6" />
                <span className="text-lg font-medium text-gray-700">Acompanhamento quando necessário</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}
