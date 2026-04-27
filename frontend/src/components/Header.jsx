import logo from "../assets/images/logo.png";
import globe from '../assets/images/fi-rr-globe.png'
import { NavLink } from 'react-router'
import user from '../assets/images/fi-rr-user.png'

function linkClass({ isActive }) {
  return isActive
    ? "border-b-2 border-green-500 pb-1"
    : "text-white"
}



export default function Header({ lang, setLang }) {


  return (

    <header className="flex items-center  justify-between px-10 py-4 bg-green-950">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logotipo" />

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
      <div style={{ display: 'flex' }} className="">
        <NavLink to="/login"><img src={user} alt="user" className=" mx-5 my-2" /></NavLink>
        <div>
          <div className="bg-green-800 text-white rounded-lg flex gap-3 py-2 px-3 items-center">


            <img src={globe} alt="globe" />

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-white outline-none"
            >
              <option value="pt">BR</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>


          </div>
        </div>
      </div>

    </header>
  )

}