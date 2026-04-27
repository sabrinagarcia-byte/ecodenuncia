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




export default function Noticias() {
  return (
    <div className="font-nunito">

      {/* BANNER */}
      <section
        className="h-65 flex items-center justify-center text-white bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="text-6xl font-bold z-10">Notícias</h1>
      </section>

      {/* CONTEÚDO */}
      <div className="bg-green-950 py-14 px-6">

        {/* TÍTULO + BUSCA */}
<div className="text-center mb-16">

  <h2 className="text-white text-3xl font-bold mb-8 flex items-center justify-center gap-3">
    <img 
      src={Planta} 
      alt="simbolo plantar" 
      className="w-10 h-10"
    />
    Últimas notícias da semana
  </h2>

  <div className="flex justify-center mb-12">
    
    <div className="relative w-105">
      
      <img
        src={Lupa}
        alt="Lupa"
        className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
      />

      <input
        type="text"
        placeholder="Buscar notícias..."
        className="w-full bg-gray-200 p-4 pl-12 rounded-xl shadow outline-none"
      />

    </div>

  </div>

</div>


        {/* GRID */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">

          {[
            { img: img1, data: "12 Mar 2026", titulo: "Impacto do descarte ilegal", desc: "Veja como o descarte irregular do lixo afeta o meio ambiente." },
            { img: img2, data: "20 Mar 2026", titulo: "Como reciclar corretamente", desc: "Dicas práticas para separar seu lixo de forma adequada." },
            { img: img3, data: "15 Fev 2026", titulo: "Iniciativas ambientais locais", desc: "Projetos que estão fazendo a diferença na comunidade." },
            { img: img4, data: "1 Abril 2026", titulo: "Uso consciente da água", desc: "Dicas simples para economizar água no dia a dia e preservar esse recurso essencial." },
            { img: img5, data: "05 Jan 2026", titulo: "Áreas verdes nas cidades", desc: "A importância de parques e árvores para melhorar a qualidade de vida urbana." },
            { img: img6, data: "25 Mar 2026", titulo: "Poluição urbana em crescimento", desc: "Entenda os desafios enfrentados pelas grandes cidades." },
            { img: img7, data: "25 Fev 2026", titulo: "Começar a educação ambiental nas escolas", desc: "Conscientizando as crianças desde cedo é o melhor caminho a ser seguido." },
            { img: img8, data: "31 Mar 2026", titulo: "Como participar e ajudar o meio ambiente", desc: "Dicas para se engajar na proteção da natureza." },
            { img: img9, data: "07 Fev 2026", titulo: "Descarte correto de eletrônicos", desc: "Saiba como descartar celulares e computadores sem prejudicar o meio ambiente." },
            { img: img10, data: "08 Fev 2026", titulo: "A importância da coleta seletiva", desc: "Dicas práticas para separar seu lixo de forma adequada." },
            { img: img11, data: "20 Mar 2026", titulo: "Praias limpas: ações voluntárias", desc: "Grupos se unem para limpar praias e preservar a vida marinha." },
            { img: img12, data: "12 Fev 2026", titulo: "Desperdício de alimentos", desc: "Veja como o desperdício impacta a natureza e o que você pode fazer para evitar." }
          ].map((card, index) => (

            <div key={index} className="bg-white rounded-xl p-4 shadow flex flex-col h-full">

              <img src={card.img} className="rounded-lg mb-4" />

              <p className="text-[15px] text-gray-400">{card.data}</p>

              <h3 className="font-bold text-green-900 text-lg">
                {card.titulo}
              </h3>

              <p className="text-sm text-black py-2">
                {card.desc}
              </p>

              <p className="mt-auto text-green-800 text-lg font-bold cursor-pointer hover:underline hover:text-green-900">
                Ler mais
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}