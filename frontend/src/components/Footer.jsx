
import { NavLink } from 'react-router'
import Logo from '../assets/images/logo.png'


function linkClass({ isActive }) {
    return isActive
    ? "text-green-500"
    : "text-white"
}

export default function Header() {
  return (
    <footer className="bg-green-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-green-700 pt-10">
          
          <div>

            <div className="flex items-center mb-7">
              <img src={Logo} alt="Logo" className="h-20 w-auto"/>
            </div>
            
            <p className="text-green-100 text-sl leading-relaxed text-center max-w-xs">
              Cuidando do meio ambiente <br/>
              através do descarte
              consciente.
            </p>

          </div>

     
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-white">Links</h1>

            <nav className="flex flex-col gap-3 text-lg">
              <NavLink to="/" className={linkClass}>Página inicial</NavLink>
              <NavLink to="/faleconosco" className={linkClass}>Fale Conosco</NavLink>
              <NavLink to="/noticias" className={linkClass}>Noticias</NavLink>
              <NavLink to="/denunciar" className={linkClass}>Denunciar</NavLink>
              <NavLink to="/aboutus" className={linkClass}>Sobre nós</NavLink>


            </nav>

          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-4 text-white">Contato</h1>

            <div className="flex flex-col gap-3 text-sm">

              <a href="https://www.google.com/gmail/about/signup_complete.html" className="flex items-center text-lg gap-2 hover:text-green-400 transition-colors">contato@ecodenuncia.com</a>

              <a href="https://web.whatsapp.com/" className="flex items-center text-lg gap-2 hover:text-green-400 transition-colors">(12) 99999-9999</a>
            </div>
          </div>

        </div>
     
        <div className="mt-12 pt-8 border-t border-green-700 text-center text-lg text-gray-200">
          &copy; 2026 Eco Denúncia <br/> Todos os direitos reservados
        </div>

          </div>
        </footer>

        )
 }