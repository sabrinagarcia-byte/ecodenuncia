import PublicacaoCRUD from '../components/PublicacaoCRUD.jsx';
import { useState, useEffect } from 'react';   // se ainda não tiver

import Lupa from "../assets/images/pesquisa-de-lupa 1.png"
import Imagem from "../assets/images/image.png"
import Localizacao from "../assets/images/localizacao.png"
import Enquete from "../assets/images/enquete.png"
import Like from "../assets/images/like.png"
import Comentar from "../assets/images/comentar.png"
import Favoritar from "../assets/images/favoritar.png"
import Republicar from "../assets/images/republicar.png"
import Trespontinhos from "../assets/images/trespontinhos.png"
import Foto1 from "../assets/images/fotodeperfil1.png"
import Foto2 from "../assets/images/fotodeperfil2.png"


export default function BlogComunidade() {
    const posts = [
        {
            nome: 'VerdeVivo',
            usuario: '@verdevivo',
            tempo: '2h',
            texto:
                'Plantamos 20 mudas nativas hoje na nossa comunidade. Pequenas ações, grandes transformações.',
            imagem:
                'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop',
            curtidas: 128,
            comentarios: 12,
            compartilhamentos: 45,
            hashtag: '#Reflorestar #Natureza #Sustentabilidade',
            avatar:
                'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=300&auto=format&fit=crop',
        },
        {
            nome: 'Recicla Aí',
            usuario: '@reciclaai',
            tempo: '4h',
            texto:
                'Separar o lixo corretamente ainda é um desafio. Vamos fazer diferente? ',
            imagem:
                'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop',
            curtidas: 96,
            comentarios: 8,
            compartilhamentos: 32,
            hashtag: '#Reciclagem #ConsumoConsciente',
            avatar:
                'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=300&auto=format&fit=crop',
        },
        {
            nome: 'Planeta em Ação',
            usuario: '@planetaemacao',
            tempo: '6h',
            texto:
                'Seca extrema em várias regiões do país. Precisamos falar sobre mudanças climáticas agora! ',
            imagem:
                'https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1200&auto=format&fit=crop',
            curtidas: 153,
            comentarios: 21,
            compartilhamentos: 67,
            hashtag: '#Clima #Urgente #Planeta',
            avatar:
                'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=300&auto=format&fit=crop',
        },
    ]

    const comunidades = [
        'Meio Ambiente',
        'Reciclagem',
        'Mudas & Plantas',
        'Energia Limpa',
    ]

    const trends = [
        '#Sustentabilidade',
        '#MeioAmbiente',
        '#Reciclagem',
        '#MudançasClimáticas',
        '#ConsumoConsciente',
    ]

    const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  // Verifica se usuário está logado (ajuste conforme seu sistema de login)
  const token = localStorage.getItem('token');
  setIsLoggedIn(!!token);
}, []);

    return (
        <main className="min-h-screen bg-[#f4f6f2] text-gray-900">

            {/* LAYOUT */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 xl:grid-cols-[280px_1fr_320px] gap-6">
                {/* LEFT SIDEBAR */}
                <aside className="space-y-6">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                        <div className="w-24 h-24 rounded-full bg-linear-to-br from-green-900 to-green-700 flex items-center justify-center text-4xl mx-auto mb-4 text-white"> 
                            
                        </div>

                        <div className="text-center">
                            <h2 className="font-black text-2xl text-black">
                                EcoDenúncia
                            </h2>
                            <p className="text-gray-500">@ecodenuncia</p>
                        </div>

                        <div className="grid grid-cols-3 text-center mt-6 gap-4">
                            <div>
                                <h3 className="font-black text-xl">128</h3>
                                <p className="text-sm text-gray-500">Posts</p>
                            </div>

                            <div>
                                <h3 className="font-black text-xl">532</h3>
                                <p className="text-sm text-gray-500">Seguidores</p>
                            </div>

                            <div>
                                <h3 className="font-black text-xl">243</h3>
                                <p className="text-sm text-gray-500">Seguindo</p>
                            </div>
                        </div>

                        <button className="w-full mt-6 bg-green-800 hover:bg-green-900 transition-colors text-white py-3 rounded-2xl font-bold">
                            Nova publicação
                        </button>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-black text-lg mb-5">Comunidades</h3>

                        <div className="space-y-4">
                            {comunidades.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between hover:bg-green-50 transition-colors rounded-2xl px-3 py-3 cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            🌿
                                        </div>

                                        <div>
                                            <h4 className="font-semibold">{item}</h4>
                                            <p className="text-xs text-gray-500">8k membros</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-linear-to-br from-green-950 to-green-600 rounded-3xl p-6 text-white overflow-hidden relative">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-400/10 rounded-full"></div>

                        <h3 className="text-2xl font-black mb-3">
                            App Eco
                        </h3>

                        <p className="text-green-100 mb-6 leading-relaxed">
                            Leve a sustentabilidade com você. Compartilhe denúncias e participe da comunidade.
                        </p>

                        <button className="bg-white text-green-800 px-5 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
                            Saiba mais
                        </button>
                    </div>
                </aside>

                {/* FEED */}
                <section>
                    {/* CREATE POST */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-6">
                        <div className="flex gap-4">
                            <div className="w-14 h-14 rounded-full bg-linear-to-br from-green-700 to-green-500"></div>

                            <div className="flex-1">
                                <textarea
                                    rows="3"
                                    placeholder="No que você está pensando, EcoColega?"
                                    className="w-full bg-gray-50 rounded-2xl p-4 outline-none resize-none border border-gray-100 focus:border-green-400"
                                ></textarea>
                                <PublicacaoCRUD isLoggedIn={isLoggedIn} />

                                <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                                    <div className="flex flex-wrap gap-3 text-sm">
                                        <button className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-100 transition-colors">
                                            <img src={Imagem} alt="imagem" />
                                        </button>

                                        <button className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-100 transition-colors">
                                            <img src={Localizacao} alt="localizacao simbolo" />
                                        </button>

                                        <button className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-100 transition-colors">
                                            <img src={Enquete} alt="enquete simbolo" />
                                        </button>
                                    </div>

                                    <button className="bg-green-900 hover:bg-green-800 transition-colors text-white px-7 py-3 rounded-full font-bold shadow-md">
                                        Publicar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TABS */}
                    <div className="flex gap-6 overflow-auto mb-6 px-1">
                        {['Para você', 'Seguindo', 'Comunidades', 'Mais recentes'].map(
                            (item, index) => (
                                <button
                                    key={index}
                                    className={`pb-3 font-bold whitespace-nowrap ${index === 0
                                        ? 'text-green-700 border-b-2 border-green-700'
                                        : 'text-gray-500 hover:text-green-700'
                                        }`}
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>

                    {/* POSTS */}
                    <div className="space-y-6">
                        {posts.map((post, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex gap-4">
                                            <img
                                                src={post.avatar}
                                                alt={post.nome}
                                                className="w-14 h-14 rounded-full object-cover"
                                            />

                                            <div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="font-black text-lg">{post.nome}</h3>
                                                    <span className="text-green-700 text-sm">
                                                        {post.usuario}
                                                    </span>
                                                    <span className="text-green-700 text-sm">
                                                        | {post.tempo}
                                                    </span>
                                                </div>

                                                <p className="mt-3 text-gray-700 leading-relaxed">
                                                    {post.texto}
                                                </p>
                                            </div>
                                        </div>

                                        <button className="text-gray-400 hover:text-gray-700 text-4xl ">
                                            <img src={Trespontinhos} alt="tres pontinhos para info" />
                                        </button>
                                    </div>

                                    <div className="rounded-3xl overflow-hidden mt-5">
                                        <img
                                            src={post.imagem}
                                            alt={post.nome}
                                            className="w-full h-105 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    <p className="text-green-700 mt-4 font-medium text-sm">
                                        {post.hashtag}
                                    </p>

                                    <div className="flex items-center justify-between mt-6 text-gray-500 border-t pt-5">

                                        <button className="hover:text-green-700 transition-colors flex items-center gap-2 font-medium">
                                            <img
                                                src={Comentar}
                                                alt="comentar símbolo"
                                                className="w-5 h-5 object-contain"
                                            />
                                            <span>{post.comentarios}</span>
                                        </button>

                                        <button className="hover:text-green-700 transition-colors flex items-center gap-2 font-medium">
                                            <img
                                                src={Republicar}
                                                alt="republicar símbolo"
                                                className="w-5 h-5 object-contain"
                                            />
                                            <span>{post.compartilhamentos}</span>
                                        </button>

                                        <button className="hover:text-pink-500 transition-colors flex items-center gap-2 font-medium">
                                            <img
                                                src={Like}
                                                alt="like símbolo"
                                                className="w-5 h-5 object-contain" 
                                            />
                                            <span>{post.curtidas}</span>
                                        </button>

                                        <button className="hover:text-green-700 transition-colors flex items-center gap-2 font-medium">
                                            <img
                                                src={Favoritar}
                                                alt="favoritar símbolo"
                                                className="w-5 h-5 object-contain"
                                            />
                                            <span>Salvar</span>
                                        </button>

                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* RIGHT SIDEBAR */}
                <aside className="space-y-6">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5">
                        <div className="relative w-full max-w-md group">
                            <img src={Lupa} alt="Lupa" className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 opacity-80 group-focus-within:opacity-80 transition-opacity" />
                            <input
                                type="text"
                                placeholder="Pesquisar notícias..."
                                className="w-full bg-white text-gray-800 p-3.5 pl-11 rounded-full border-none border-green-400 shadow-sm outline-none focus:border-green-800 focus:ring-4 focus:ring-green-700/5 transition-all text-sm"
                            />
                        </div>

                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-black text-xl mb-5">
                            Tópicos em alta
                        </h3>

                        <div className="space-y-5 text-green-700">
                            {trends.map((trend, index) => (
                                <div
                                    key={index}
                                    className="hover:bg-green-50 transition-colors rounded-2xl p-3 cursor-pointer"
                                >
                                    <h4 className="font-bold text-lg">{trend}</h4>
                                    <p className="text-sm text-black">2.3 mil publicações</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-black text-xl mb-5">
                            Quem seguir
                        </h3>

                        <div className="space-y-5">
                            {['Instituto Verde', 'Mundo Sustentável', 'Eco Inspira'].map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between gap-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
                                                🌱
                                            </div>

                                            <div>
                                                <h4 className="font-bold">{item}</h4>
                                                <p className="text-sm text-gray-500">@{item.toLowerCase().replace(/ /g, '')}</p>
                                            </div>
                                        </div>

                                        <button className="bg-green-800 hover:bg-green-900 transition-colors text-white px-4 py-2 rounded-full text-sm font-bold">
                                            Seguir
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-black text-xl mb-5">
                            Eventos & Ações
                        </h3>

                        <div className="space-y-7">
                            {[
                                'Mutirão de Limpeza',
                                'Plantio de Árvores',
                                'Debate',
                            ].map((evento, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-gray-100 pb-4"
                                >
                                    <div className="bg-green-100 text-green-800 rounded-2xl px-3 py-2 text-center min-w-15.5">
                                        <h4 className="font-black text-sm">25</h4>
                                        <p className="text-xs font-bold">MAI</p>
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-bold">{evento}</h4>
                                        <p className="text-sm text-gray-500">São Paulo</p>
                                    </div>

                                    <button className="bg-green-800 hover:bg-green-900 transition-colors text-white px-4 py-2 rounded-full text-sm font-bold w-full sm:w-auto">
                                        Participar
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>

        </main>
    )
}
