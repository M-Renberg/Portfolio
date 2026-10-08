import { NavLink, useLocation } from "react-router-dom";
import routes from '../routes';
import '../tailwind/glitch-fx.css';

export default function Header() {

  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <header className="flex flex-col sm:flex-row w-full justify-between p-4 items-center sm:items-baseline gap-4 sm:gap-0">
      <NavLink to="/">
        <h1 className="glitch-text text-3xl sm:text-5xl md:text-6xl text-shadow-lg/85 text-center sm:text-left" data-text="Mikael Renberg">Mikael Renberg</h1>
      </NavLink>

      <nav className="flex flex-wrap justify-center gap-1 sm:gap-2">
        {routes
          .filter(route => route.menuLabel)
          .map((route, i) => (
            <NavLink
              key={i}
              to={route.path}
              className={({ isActive }) =>
                `text-landing-nav px-2 text-base sm:text-lg self-baseline hover:bg-nav-hover p-1 rounded-lg transition-colors ${
                  isActive ? "text-primary-font font-semibold underline underline-offset-4" : ""
                }`
              }
            >
              {route.menuLabel}
            </NavLink>
          ))
        }
      </nav>
    </header>
  );
}