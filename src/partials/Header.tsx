import { NavLink, useLocation } from "react-router-dom";
import routes from '../routes';
import '../tailwind/glitch-fx.css';

export default function Header() {

  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <header className="flex flex-row w-full justify-between p-4 items-baseline">
      <h1 className="glitch-text text-6xl text-shadow-lg/85" data-text="Mikael Renberg">Mikael Renberg</h1>

      <nav className=''>
        {routes
          .filter(route => route.menuLabel)
          .map((route, i) => (
            <NavLink className="text-landing-nav pl-2 pr-2 text-lg self-baseline hover:bg-nav-hover p-1 rounded-lg active:text-red-500" key={i} to={route.path}>{route.menuLabel}</NavLink>
          ))
        }
      </nav>
    </header>
  );
}