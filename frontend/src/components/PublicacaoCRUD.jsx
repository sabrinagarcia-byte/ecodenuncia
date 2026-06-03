import { useState, useEffect } from 'react';

export default function PublicacaoCRUD({ isLoggedIn }) {
  const [publicacoes, setPublicacoes] = useState([]);
  const [form, setForm] = useState({ titulo: '', conteudo: '', imagem: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (isLoggedIn) fetchPublicacoes();
  }, [isLoggedIn]);

  const fetchPublicacoes = async () => {
    const res = await fetch('http://localhost:3000/publicacao');
    const data = await res.json();
    setPublicacoes(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingId 
      ? `http://localhost:3000/publicacao/${editingId}` 
      : 'http://localhost:3000/publicacao';
    
    await fetch(url, {
      method: editingId ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    setForm({ titulo: '', conteudo: '', imagem: '' });
    setEditingId(null);
    fetchPublicacoes();
  };

  const handleLike = async (id) => {
    await fetch(`http://localhost:3000/publicacao/${id}/like`, { method: 'POST' });
    fetchPublicacoes();
  };

  const handleEdit = (pub) => {
    setEditingId(pub.id);
    setForm({ titulo: pub.titulo, conteudo: pub.conteudo, imagem: pub.imagem || '' });
  };

  const handleDelete = async (id) => {
    if (confirm('Deletar publicação?')) {
      await fetch(`http://localhost:3000/publicacao/${id}`, { method: 'DELETE' });
      fetchPublicacoes();
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className="mb-8">
      {/* Formulário de Nova Publicação - Aparece só logado */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 mb-8">
        <h3 className="font-bold text-xl mb-4">Criar nova publicação</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Título" value={form.titulo} onChange={e => setForm({...form, titulo: e.target.value})} className="w-full p-3 border rounded-xl mb-3" required />
          <textarea placeholder="O que você quer compartilhar?" value={form.conteudo} onChange={e => setForm({...form, conteudo: e.target.value})} className="w-full p-3 border rounded-xl mb-3 h-24" required />
          <input type="text" placeholder="URL da imagem (opcional)" value={form.imagem} onChange={e => setForm({...form, imagem: e.target.value})} className="w-full p-3 border rounded-xl mb-3" />
          <button type="submit" className="bg-green-700 text-white px-8 py-3 rounded-2xl font-bold">
            {editingId ? 'Atualizar' : 'Publicar'}
          </button>
        </form>
      </div>

      {/* Publicações Dinâmicas (substituirá ou complementará o estático) */}
      <div className="space-y-6">
        {publicacoes.map(pub => (
          <article key={pub.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {pub.imagem && <img src={pub.imagem} className="w-full h-80 object-cover" />}
            <div className="p-6">
              <h4 className="font-bold text-lg">{pub.titulo}</h4>
              <p className="mt-2 text-gray-700">{pub.conteudo}</p>
              <div className="flex justify-between mt-6 pt-4 border-t">
                <button onClick={() => handleLike(pub.id)} className="flex items-center gap-2 text-pink-500">
                  ❤️ {pub.likes}
                </button>
                <button onClick={() => handleEdit(pub)} className="text-blue-600">Editar</button>
                <button onClick={() => handleDelete(pub.id)} className="text-red-600">Deletar</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}