import { NavLink } from 'react-router'
import Logo from '../assets/images/logo.png'

function linkClass({ isActive }) {
  return isActive
    ? "text-green-500"
    : "text-white hover:text-green-400 transition-colors"
}

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-green-700 pt-10">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center mb-7">
              <NavLink to="/">
                <img src={Logo} alt="Logo" className="h-20 w-auto" />
              </NavLink>
            </div>

            <p className="text-green-100 text-lg leading-relaxed max-w-xs">
              Cuidando do meio ambiente <br className="hidden md:block" />
              através do descarte consciente.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl font-semibold mb-4 text-white">Links</h1>

            <nav className="flex flex-col gap-3 text-lg items-center md:items-start">
              <NavLink to="/" className={linkClass}>Início</NavLink>
              <NavLink to="/denunciar" className={linkClass}>Denunciar</NavLink>
              <NavLink to="/noticias" className={linkClass}>Notícias</NavLink>
              <NavLink to="/aboutus" className={linkClass}>Sobre</NavLink>
              <NavLink to="/faleconosco" className={linkClass}>Contato</NavLink>



            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl font-semibold mb-4 text-white">Contato</h1>

            <div className="flex flex-col gap-3 text-sm items-center md:items-start">
              <a href="mailto:contato@ecodenuncia.com" className="flex items-center text-lg gap-2 hover:text-green-400 transition-colors">
                contato@ecodenuncia.com
              </a>

              <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg gap-2 hover:text-green-400 transition-colors">
                (12) 99999-9999
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-green-700 text-center text-lg text-gray-200">
          &copy; 2026 Eco Denúncia <br className="md:hidden" /> Todos os direitos reservados
        </div>

      </div>
    </footer>
  )
}