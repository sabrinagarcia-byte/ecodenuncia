import { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
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
        <h1 className="text-5xl py-4 font-bold mb-2">Denunciar</h1>
        <p className="mb-8 py-2 text-gray-200 text-2xl">
          Ajude a proteger o meio ambiente
        </p>

        {/* CARD FORM */}
        <div className="bg-white text-black rounded-2xl p-8 shadow-lg text-left">

          <h2 className="text-3xl font-bold mb-2 text-center">
            Faça uma denúncia
          </h2>
          <p className="text-lg text-black text-center mb-6">
            Sua denúncia será tratada com seriedade, sigilo e responsabilidade.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">

              {/* ESQUERDA */}
              <div className="space-y-4">

                {/* Tipo */}
                <div>
                  <label className="text-lg"><span className='font-bold'>Tipo de denúncia</span></label>
                  <select 
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 mt-1"
                    required
                  >
                    <option value="">Tipo de denúncia</option>
                    <option value="Descarte irregular de lixo doméstico">Descarte irregular de lixo doméstico</option>
                    <option value="Descarte de entulho (construção)">Descarte de entulho (construção)</option>
                    <option value="Lixo em via pública">Lixo em via pública</option>
                    <option value="Descarte em área verde / mata">Descarte em área verde / mata</option>
                    <option value="Poluição de rios / água">Poluição de rios / água</option>
                    <option value="Queima de lixo">Queima de lixo</option>
                    <option value="Descarte de resíduos perigosos">Descarte de resíduos perigosos</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                {/* Problema */}
                <div>
                  <textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder="Descreva o problema"
                    className="w-full border rounded-lg p-2 h-24"
                    required
                  />
                </div>

                {/* Local */}
                <div>
                  <label className="text-lg"><span className='font-bold'>Local da ocorrência</span></label>
                  <input
                    type="text"
                    name="local"
                    value={formData.local}
                    onChange={handleChange}
                    placeholder="Ex: Rua, bairro ou ponto de referência"
                    className="w-full border rounded-lg p-2 mt-1"
                    required
                  />
                </div>

                {/* Nome */}
                <div>
                  <label className="text-lg"><span className='font-bold'>Nome (opcional)</span></label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    className="w-full border rounded-lg p-2 mt-1"
                  />
                </div>

                {/* Anônimo */}
                <div>
                  <p className="text-lg mb-1"><span className='font-bold'>Deseja ser anônimo?</span></p>
                  <div className="flex gap-4 text-lg">
                    <label className="flex items-center gap-1">
                      <input 
                        type="radio" 
                        name="anonimo" 
                        value="true"
                        checked={formData.anonimo === true}
                        onChange={handleChange} 
                      /> Sim
                    </label>
                    <label className="flex items-center gap-1">
                      <input 
                        type="radio" 
                        name="anonimo" 
                        value="false"
                        checked={formData.anonimo === false}
                        onChange={handleChange} 
                      /> Não
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
                  <button type="button" className="bg-green-900 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto">

                    <img
                      src={ClipeSimbol}
                      alt="Simbolo para anexar"
                      className="w-4 h-4 object-contain"
                    />

                    Anexar provas

                  </button>

                  <p className="text-sm text-black mt-2">
                    Envie fotos ou vídeos que ajudem na investigação
                  </p>
                </div>


                {/* Email */}
                <div>
                  <label className="text-lg"><span className='font-bold'>Email (opcional)</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite seu email"
                    className="w-full border rounded-lg p-2 mt-1"
                  />
                </div>

              </div>

            </div>

            {/* BOTÃO */}
            <div className="flex justify-center text-lg mt-8">
              <button type="submit" className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold">
                Enviar denúncia
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  )
}