import logo from "../assets/images/logo.png";
import globe from '../assets/images/fi-rr-globe.png'
import { NavLink } from 'react-router'
import user from '../assets/images/fi-rr-user.png'
import { useParams } from 'react-router'

function linkClass({ isActive }) {
    return isActive
    ? "border-b-2 border-green-500 pb-1"
    : "text-white"
}

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-green-950">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logotipo"/>
       
      </div>

      {/* Menu */}
      <ul className="flex gap-8 text-white">
        <li><NavLink to="/" className={linkClass}>Página Inicial</NavLink></li>
        <li><NavLink to="/faleconosco" className={linkClass}>Fale Conosco</NavLink></li>
        <li><NavLink to="/noticias" className={linkClass}>Notícias</NavLink></li>
        <li><NavLink to="/denunciar" className={linkClass}>Denunciar</NavLink></li>
        <li><NavLink to="/aboutus" className={linkClass}>Sobre nós</NavLink></li>

      </ul>

      {/* Botão */}
      <div className="">
        
      <a href="#" className="bg-green-800 text-white rounded-lg flex gap-3 py-2 px-3" >
        
        <img src={globe} alt="globe" />

        <select name="Linguagem" id="idiomas" className="border-none">
            <option value="BR" id="portugues">BR</option>
            <option value="EN" id="ingles">EN</option>
            <option value="FR" id="frances">FR</option>

            </select>
            
        </a>
        </div>

    </header>
  )

}