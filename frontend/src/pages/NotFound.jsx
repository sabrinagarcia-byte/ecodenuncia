import { Link } from "react-router-dom";
import Planta from "../assets/images/plantar.png";

export default function NotFound() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 py-20 text-center">
      
      <h1 className="text-8xl md:text-9xl font-bold text-green-900">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4 text-black">
        Página não encontrada
      </h2>

      <p className="text-lg text-gray-700 mt-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        Essa página não existe... mas você ainda pode ajudar o planeta
        <img src={Planta} alt="Símbolo de Planta" className="w-8 h-8" />
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <Link
          to="/"
          className="bg-gray-200 text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors text-center w-full sm:w-auto"
        >
          Voltar ao Início
        </Link>
        
        <Link
          to="/denunciar"
          className="bg-green-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors text-center w-full sm:w-auto"
        >
          Fazer uma Denúncia
        </Link>
      </div>

    </section>
  );
}