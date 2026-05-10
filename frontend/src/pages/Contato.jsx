import BannerFaleConosco from '../assets/images/bannerFaleConosco.png'
import EmailSimbol from '../assets/images/o-email (2) 1.png'
import TelefoneSimbol from '../assets/images/telefone (2) 1.png'
import CheckIcon from '../assets/images/CheckIcon.png'

export default function Contato() {
  return (
    <section className="w-full min-h-screen bg-gray-50">
      
      {/* Banner Simples no Topo */}
      <div className="w-full h-32 relative">
        <img
          src={BannerFaleConosco}
          alt="Fundo Fale Conosco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-white">Fale Conosco</h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-base text-center text-gray-700 mb-8">
          Tem alguma sugestão ou problema? Entre em contato com a gente.
        </p>

        <div className="grid md:grid-cols-2 gap-16">

          {/* COLUNA ESQUERDA: FORMULÁRIO */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-green-900">Envie uma mensagem</h2>
            
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-gray-800">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-green-600 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-gray-800">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-green-600 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-gray-800">Mensagem</label>
              <textarea
                placeholder="Escreva sua mensagem"
                className="w-full border border-gray-300 rounded-lg p-2 h-24 outline-none resize-none focus:border-green-600 text-sm"
              />
            </div>

            <button className="bg-green-900 hover:bg-green-800 text-white px-5 py-2 rounded-full text-xs font-semibold mt-1 w-full sm:w-auto uppercase tracking-wide">
              Enviar mensagem
            </button>
          </div>

          {/* COLUNA DIREITA: INFORMAÇÕES */}
          <div className="flex flex-col gap-6 md:pl-12 border-l border-gray-100">
            <h2 className="text-xl font-bold text-green-900">Contato Direto</h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img src={EmailSimbol} alt="E-mail" className="w-5 h-5" />
                <a href="mailto:contato@ecodenuncia.com" className="text-sm text-gray-800 hover:text-green-600">
                  contato@ecodenuncia.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <img src={TelefoneSimbol} alt="Telefone" className="w-5 h-5" />
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 hover:text-green-600">
                  (12) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <img src={CheckIcon} alt="Check" className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">Análise cuidadosa das informações</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={CheckIcon} alt="Check" className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">Encaminhamento aos órgãos responsáveis</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={CheckIcon} alt="Check" className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">Acompanhamento quando necessário</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}
