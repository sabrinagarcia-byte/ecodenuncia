import { useState, useEffect } from 'react';
import BannerDenunciar from '../assets/images/bannerDenunciar.png'
import ClipeSimbol from '../assets/images/anexos 1.png'
import Mapa from '../assets/images/foto de mapa.png'

export default function Denunciar() {
  const [formData, setFormData] = useState({
    tipo: '',
    descricao: '',
    local: '',
    nome: '',
    email: '',
    anonimo: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value === 'true' : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/denuncia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Denúncia enviada com sucesso!');
        setFormData({
          tipo: '',
          descricao: '',
          local: '',
          nome: '',
          email: '',
          anonimo: false
        });
      } else {
        alert('Erro ao enviar denúncia.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <section className="w-full bg-[#f8fafc] pb-6">
      
      {/* Banner Idêntico ao de Contato */}
      <div className="w-full h-32 relative">
        <img
          src={BannerDenunciar}
          alt="Banner Denunciar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Denunciar</h1>
        </div>
      </div>

      {/* Conteúdo Principal (sem sobreposição) */}
      <div className="max-w-6xl mx-auto px-4 py-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-6">
          
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-10">

            {/* COLUNA ESQUERDA: FORMULÁRIO */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Dados da Denúncia</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-xs text-gray-600 ml-1">Tipo de infração</label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-green-500 text-sm bg-gray-50 transition-all cursor-pointer"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="Descarte irregular de lixo doméstico">Descarte irregular</option>
                    <option value="Descarte de entulho (construção)">Entulho</option>
                    <option value="Lixo em via pública">Lixo em via pública</option>
                    <option value="Descarte em área verde / mata">Área verde</option>
                    <option value="Poluição de rios / água">Poluição de rios</option>
                    <option value="Queima de lixo">Queima de lixo</option>
                    <option value="Descarte de resíduos perigosos">Resíduos perigosos</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-xs text-gray-600 ml-1">Descrição</label>
                  <textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder="O que está acontecendo?"
                    className="w-full border border-gray-200 rounded-xl p-3 h-24 outline-none resize-none focus:border-green-500 text-sm bg-gray-50 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-xs text-gray-600 ml-1">Local</label>
                  <input
                    type="text"
                    name="local"
                    value={formData.local}
                    onChange={handleChange}
                    placeholder="Endereço ou ponto de referência"
                    className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-green-500 text-sm bg-gray-50 transition-all"
                    required
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[11px] text-gray-500 uppercase ml-1">Seu Nome (opcional)</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Como podemos te chamar?"
                      className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-green-500 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[11px] text-gray-500 uppercase ml-1">E-mail (opcional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@exemplo.com"
                      className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-green-500 transition-all"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4 pt-1">
                    <span className="text-[11px] font-bold text-gray-500 uppercase">Anônimo?</span>
                    <div className="flex gap-3">
                      <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                        <input
                          type="radio"
                          name="anonimo"
                          value="true"
                          checked={formData.anonimo === true}
                          onChange={handleChange}
                          className="accent-green-600"
                        /> Sim
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                        <input
                          type="radio"
                          name="anonimo"
                          value="false"
                          checked={formData.anonimo === false}
                          onChange={handleChange}
                          className="accent-green-700"
                        /> Não
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA */}
            <div className="flex flex-col gap-6 lg:pl-10 lg:border-l border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Local e Anexos</h2>
              </div>

              <div className="space-y-6">
                <div className="w-full h-40 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                  <img src={Mapa} alt="Mapa" className="w-full h-full object-cover" />
                </div>

                <div className="bg-green-50/50 border border-dashed border-green-200 p-4 rounded-2xl text-center">
                  <button
                    type="button"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 mx-auto font-bold text-[11px] uppercase tracking-wider transition-all"
                  >
                    <img src={ClipeSimbol} className="w-3.5 h-3.5" alt="Anexo" />
                    Anexar provas
                  </button>
                </div>

                <div className="pt-2">
                  <h3 className="text-xs font-bold text-green-900 uppercase tracking-widest mb-4">Nosso Compromisso</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-[11px] text-gray-600 leading-relaxed">
                      <span className="text-green-600 font-bold">•</span>
                      Análise sigilosa e profissional das informações
                    </li>
                    <li className="flex gap-3 text-[11px] text-gray-600 leading-relaxed">
                      <span className="text-green-600 font-bold">•</span>
                      Encaminhamento imediato aos órgãos ambientais
                    </li>
                    <li className="flex gap-3 text-[11px] text-gray-600 leading-relaxed">
                      <span className="text-green-600 font-bold">•</span>
                      Proteção total dos seus dados e anonimato
                    </li>
                  </ul>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-8 bg-green-900 hover:bg-black text-white px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  Enviar denúncia
                </button>
              </div>
            </div>


          </form>
        </div>
      </div>

    </section>
  );
}
