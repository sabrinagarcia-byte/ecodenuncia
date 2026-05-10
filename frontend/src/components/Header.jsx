import { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router";
import user from "../assets/images/fi-rr-user.png";

function linkClass({ isActive }) {
  return isActive
    ? "border-b-2 border-green-500 pb-1"
    : "text-white";
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return ( 
    <header className="bg-green-950 text-white">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img src={logo} alt="Logotipo" className="w-32 md:w-auto" />
          </NavLink>
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-10 lg:gap-16 text-lg">
          <li><NavLink to="/" className={linkClass}>Início</NavLink></li>
          <li><NavLink to="/denunciar" className={linkClass}>Denunciar</NavLink></li>
          <li><NavLink to="/noticias" className={linkClass}>Notícias</NavLink></li>
          <li><NavLink to="/aboutus" className={linkClass}>Sobre</NavLink></li>
          <li><NavLink to="/faleconosco" className={linkClass}>Contato</NavLink></li>
        </ul>

        {/* DIREITA (DESKTOP) */}
        <div className="hidden md:flex items-center">
          <NavLink to="/login">
            <img src={user} alt="user" className="mx-5 my-5" />
          </NavLink>
        </div>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden bg-green-900 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-lg">

          <li><NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Início</NavLink></li>
          <li><NavLink onClick={() => setOpen(false)} to="/denunciar" className={linkClass}>Denunciar</NavLink></li>
          <li><NavLink onClick={() => setOpen(false)} to="/noticias" className={linkClass}>Notícias</NavLink></li>
          <li><NavLink onClick={() => setOpen(false)} to="/aboutus" className={linkClass}>Sobre</NavLink></li>
          <li><NavLink onClick={() => setOpen(false)} to="/faleconosco" className={linkClass}>Contato</NavLink></li>

        </ul>

        {/* PARTE DE BAIXO (LOGIN) */}
        <div className="flex flex-col items-center gap-4 mt-4">

          <NavLink to="/login" onClick={() => setOpen(false)}>
            <img src={user} alt="user" />
          </NavLink>

        </div>
      </div>

    </header>
  );
}
