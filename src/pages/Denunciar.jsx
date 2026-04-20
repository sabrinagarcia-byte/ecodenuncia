import BannerDenunciar from '../assets/images/bannerDenunciar.png'
import ClipeSimbol from '../assets/images/anexos 1.png'
import Mapa from '../assets/images/foto de mapa.png'


export default function Denunciar() {
  return (
    <section className="w-full min-h-screen relative flex items-center justify-center">

      {/* IMAGEM DE FUNDO */}
      <img
        src={BannerDenunciar}
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-10 text-white text-center">

        {/* TÍTULO */}
        <h1 className="text-4xl font-bold mb-2">Denunciar</h1>
        <p className="mb-8 text-gray-200">
          Ajude a proteger o meio ambiente
        </p>

        {/* CARD FORM */}
        <div className="bg-white text-black rounded-2xl p-8 shadow-lg text-left">

          <h2 className="text-2xl font-semibold mb-2 text-center">
            Faça uma denúncia
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Sua denúncia será tratada com seriedade, sigilo e responsabilidade.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {/* ESQUERDA */}
            <div className="space-y-4">

              {/* Tipo */}
              <div>
                <label className="text-sm"><h1 className='font-bold'>Tipo de denúncia</h1></label>
                <select className="w-full border rounded-lg p-2 mt-1">
                  <option>Tipo de denúncia</option>
                  <option>Descarte irregular de lixo doméstico</option>
                  <option>Descarte de entulho (construção)</option>
                  <option>Lixo em via pública</option>
                  <option>Descarte em área verde / mata</option>
                  <option>Poluição de rios / água</option>
                  <option>Queima de lixo</option>
                  <option>Descarte de resíduos perigosos</option>
                  <option>Outro</option>
                </select>
              </div>

              {/* Problema */}
              <div>
                <textarea
                  placeholder="Descreva o problema"
                  className="w-full border rounded-lg p-2 h-24"
                />
              </div>

              {/* Local */}
              <div>
                <label className="text-sm"><h1 className='font-bold'>Local da ocorrência</h1></label>
                <input
                  type="text"
                  placeholder="Ex: Rua, bairro ou ponto de referência"
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              {/* Nome */}
              <div>
                <label className="text-sm"><h1 className='font-bold'>Nome (opcional)</h1></label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

              {/* Anônimo */}
              <div>
                <p className="text-sm mb-1"><h1 className='font-bold'>Deseja ser anônimo?</h1></p>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="anonimo" /> Sim
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="anonimo" /> Não
                  </label>
                </div>

              </div>

            </div>

            {/* DIREITA */}
            <div className="space-y-4">

              {/* MAPA (fake por enquanto) */}
              <div className="w-full h-30 py-25 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                <img src={Mapa} alt="Mapa do Denunciar" className='w-100 h-50' />
              </div>

              {/* Upload */}
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <button className="bg-green-900 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto">

                  <img
                    src={ClipeSimbol}
                    alt="Simbolo para anexar"
                    className="w-4 h-4 object-contain"
                  />

                  Anexar provas

                </button>

                <p className="text-xs text-gray-500 mt-2">
                  Envie fotos ou vídeos que ajudem na investigação
                </p>
              </div>


              {/* Email */}
              <div>
                <label className="text-sm"><h1 className='font-bold'>Email (opcional)</h1></label>
                <input
                  type="email"
                  placeholder="Digite seu email"
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>

            </div>

          </div>

          {/* BOTÃO */}
          <div className="flex justify-center mt-8">
            <button className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold">
              Enviar denúncia
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}