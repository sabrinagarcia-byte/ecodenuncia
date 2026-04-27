import { Link } from "react-router-dom";
import Planta from "../assets/images/plantar.png"

export default function NotFound() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">

      {/* 404 */}
      <h1 className="text-8xl font-bold text-green-900">
        404
      </h1>

      {/* título */}
      <h2 className="text-2xl mt-2 text-black">
        Página não encontrada
      </h2>

      {/* descrição */}
      <p className="text-black mt-2 mb-6 flex items-center justify-center gap-2 text-center">
        Essa página não existe... mas você ainda pode ajudar o planeta
        <img
          src={Planta}
          alt="simboloPlanta"
          className="w-6 h-6"
        />
      </p>


      {/* botão */}
      <Link
        to="/denunciar"
        className="bg-green-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
      >
        Voltar para denunciar
      </Link>

    </section>
  );
}