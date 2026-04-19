import { useState } from "react"

export default function Denunciar() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    localizacao: "",
    tipoResiduo: "",
    descricao: "",
    fotos: [],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, fotos: e.target.files }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Denúncia enviada:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="space-y-3 text-center mb-16">
          <h1 className="text-5xl font-bold text-white">Denunciar</h1>
          <p className="text-slate-300 text-lg">Ajude a comunidade a criar transparência</p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl bg-white shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[600px]">
            {/* Formulário */}
            <div className="p-10 lg:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Faça uma denúncia</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </div>

                {/* Localização */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Local da denúncia
                  </label>
                  <input
                    type="text"
                    name="localizacao"
                    value={formData.localizacao}
                    onChange={handleInputChange}
                    required
                    placeholder="Rua, bairro, cidade"
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </div>

                {/* Tipo de Resíduo */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tipo de resíduo
                  </label>
                  <select
                    name="tipoResiduo"
                    value={formData.tipoResiduo}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  >
                    <option value="">Selecione um tipo</option>
                    <option value="lixo-domestico">Lixo Doméstico</option>
                    <option value="lixo-eletronico">Lixo Eletrônico</option>
                    <option value="lixo-hospitalar">Lixo Hospitalar</option>
                    <option value="lixo-industrial">Lixo Industrial</option>
                    <option value="entulho">Entulho</option>
                    <option value="oleo-usado">Óleo Usado</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                {/* Descrição */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Descreva o problema
                  </label>
                  <textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleInputChange}
                    required
                    placeholder="Descreva em detalhes o descarte irregular..."
                    rows="3"
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200 resize-none"
                  />
                </div>

                {/* Botões */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <label className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      multiple
                      className="hidden"
                    />
                    <span className="flex items-center justify-center rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-100 transition">
                      📎 Anexar fotos
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition"
                  >
                    Enviar denúncia
                  </button>
                </div>
              </form>
            </div>

            {/* Mapa */}
            <div className="relative bg-gradient-to-br from-green-100 to-green-200 hidden lg:flex items-center justify-center p-10">
              <div className="rounded-2xl bg-white/80 backdrop-blur w-full h-80 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-5xl mb-2">📍</div>
                  <p className="text-slate-600 font-semibold">Clique no mapa para</p>
                  <p className="text-slate-600 font-semibold">marcar a localização</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-white">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="font-semibold text-lg mb-2">Sua comunidade</h3>
            <p className="text-slate-200 text-sm">
              Ajude a manter sua comunidade limpa e saudável.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-white">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Ação rápida</h3>
            <p className="text-slate-200 text-sm">
              As autoridades recebem sua denúncia e agem rapidamente.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-white">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-lg mb-2">Anônimo</h3>
            <p className="text-slate-200 text-sm">
              Você pode denunciar anonimamente com segurança.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}