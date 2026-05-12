import { useEffect } from "react"
import banner from "../assets/images/bannerDenunciar.png"
import img1 from "../assets/images/imagemCard1.png"
import img2 from "../assets/images/imagemCard2.png"
import img3 from "../assets/images/imagemCard3.png"
import img4 from "../assets/images/imagemCard4.png"
import img5 from "../assets/images/imagemCard5.png"
import img6 from "../assets/images/imagemCard6.png"
import img7 from "../assets/images/imagemCard7.png"
import img8 from "../assets/images/imagemCard8.png"
import img9 from "../assets/images/imagemCard9.png"
import img10 from "../assets/images/imagemCard10.png"
import img11 from "../assets/images/imagemCard11.png"
import img12 from "../assets/images/imagemCard12.png"
import Planta from "../assets/images/plantar.png"
import Lupa from "../assets/images/pesquisa-de-lupa 1.png"

// 1. Criamos uma lista (array) com todas as notícias.
// Isso deixa o código mais organizado e fácil de ler.
const LISTA_NOTICIAS = [
  { img: img1, data: "12 Mar 2026", titulo: "Impacto do descarte ilegal", desc: "Veja como o descarte irregular do lixo afeta o meio ambiente." },
  { img: img2, data: "20 Mar 2026", titulo: "Como reciclar corretamente", desc: "Dicas práticas para separar seu lixo de forma adequada." },
  { img: img3, data: "15 Fev 2026", titulo: "Iniciativas ambientais locais", desc: "Projetos que estão fazendo a diferença na comunidade." },
  { img: img4, data: "1 Abr 2026", titulo: "Uso consciente da água", desc: "Dicas simples para economizar água no dia a dia e preservar esse recurso." },
  { img: img5, data: "05 Jan 2026", titulo: "Áreas verdes nas cidades", desc: "A importância de parques e árvores para melhorar a qualidade de vida urbana." },
  { img: img6, data: "25 Mar 2026", titulo: "Poluição urbana em crescimento", desc: "Entenda os desafios enfrentados pelas grandes cidades." },
  { img: img7, data: "25 Fev 2026", titulo: "Educação ambiental nas escolas", desc: "Conscientizar as crianças desde cedo é o melhor caminho para o futuro." },
  { img: img8, data: "31 Mar 2026", titulo: "Como ajudar o meio ambiente", desc: "Dicas essenciais para se engajar na proteção da nossa natureza." },
  { img: img9, data: "07 Fev 2026", titulo: "Descarte de eletrônicos", desc: "Saiba como descartar celulares e PCs sem poluir o solo." },
  { img: img10, data: "08 Fev 2026", titulo: "Importância da coleta seletiva", desc: "Entenda como a separação do lixo ajuda no processo de reciclagem." },
  { img: img11, data: "20 Mar 2026", titulo: "Praias limpas e voluntários", desc: "Grupos se unem para limpar praias e preservar a vida marinha." },
  { img: img12, data: "12 Fev 2026", titulo: "Desperdício de alimentos", desc: "Veja como o desperdício impacta a natureza e como evitá-lo." },
  { img: img1, data: "10 Abr 2026", titulo: "Energias Renováveis", desc: "Conheça o futuro da energia solar e eólica na nossa região." },
  { img: img2, data: "15 Abr 2026", titulo: "Hortas Comunitárias", desc: "Como criar uma horta no seu bairro e colher alimentos frescos." },
  { img: img3, data: "20 Abr 2026", titulo: "Consumo de Plástico", desc: "Estratégias para reduzir o uso de plásticos descartáveis no cotidiano." },
  { img: img4, data: "25 Abr 2026", titulo: "Fauna Urbana", desc: "A vida selvagem que habita nossas cidades e como protegê-la." },
  { img: img5, data: "02 Mai 2026", titulo: "Moda Sustentável", desc: "O impacto da indústria têxtil e como consumir de forma consciente." },
  { img: img6, data: "05 Mai 2026", titulo: "Compostagem Doméstica", desc: "Transforme seus restos de comida em adubo para suas plantas." },
  { img: img7, data: "10 Mai 2026", titulo: "Cidades Inteligentes", desc: "Tecnologias que ajudam a tornar o ambiente urbano mais eficiente." },
  { img: img8, data: "15 Mai 2026", titulo: "Arborização Urbana", desc: "O plantio planejado de árvores como solução para o calor nas cidades." },
  { img: img9, data: "20 Mai 2026", titulo: "Energia das Ondas", desc: "Novas tecnologias para captar energia limpa do movimento do mar." },
  { img: img10, data: "22 Mai 2026", titulo: "Arquitetura Bioclimática", desc: "Prédios desenhados para aproveitar o sol e o vento natural." },
  { img: img11, data: "25 Mai 2026", titulo: "Consumo de Água", desc: "Como monitorar o gasto de água em tempo real na sua residência." },
  { img: img12, data: "30 Mai 2026", titulo: "Reflorestamento Local", desc: "Projeto comunitário planta mil árvores nativas em encostas da cidade." }
];

export default function Noticias() {
  // Garantir que a página comece do topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full">

      {/* Banner Simples no Topo */}
      <div className="w-full h-32 relative">
        <img
          src={banner}
          alt="Banner Notícias"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Notícias</h1>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">

          {/* CABEÇALHO DA SEÇÃO: Texto de Introdução e Busca */}
          <div className="flex flex-col items-center text-center mb-10">
            <p className="text-base text-gray-700 mb-8 max-w-2xl">
              Fique por dentro das últimas atualizações, dicas de sustentabilidade e ações ambientais do EcoDenúncia.
            </p>

            <div className="relative w-full max-w-md group">
              <img src={Lupa} alt="Lupa" className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-80 transition-opacity" />
              <input
                type="text"
                placeholder="Pesquisar notícias..."
                className="w-full bg-white text-gray-700 p-3.5 pl-11 rounded-full border border-gray-200 shadow-sm outline-none focus:border-green-600 focus:ring-4 focus:ring-green-600/5 transition-all text-sm"
              />
            </div>
          </div>

          {/* GRID DE NOTÍCIAS (As notícias aparecem aqui) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {LISTA_NOTICIAS.map((noticia, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100"
              >
                <div className="overflow-hidden h-36">
                  <img 
                    src={noticia.img} 
                    alt={noticia.titulo} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1">
                    {noticia.data}
                  </span>
                  
                  <h3 className="font-bold text-gray-900 text-base mb-2 leading-tight">
                    {noticia.titulo}
                  </h3>
                  
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                    {noticia.desc}
                  </p>

                  <p className="mt-auto text-green-700 text-sm font-bold cursor-pointer hover:underline">
                    Ler mais
                  </p>
                </div>
              </article>
            ))}

          </div>

        </div>
      </div>

    </main>
  );
}