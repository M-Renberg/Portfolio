/*
    <nav className='header-nav'>
      {routes
        .filter(route => {
          if (!route.menuLabel) return false;
          if (user && route.path === '/login') return false;
          if (!user && route.path === '/profile') return false;
          return true;
        })
        .map((route, i) => (
          <NavLink className="nav-btn" key={i} to={route.path}>{route.menuLabel}</NavLink>
        ))
      }

      {user && (
        <button className="nav-btn" onClick={handleLogout}>Logga ut ({user.firstname})</button>
      )}
    </nav>
*/


export default function Header() {

    return (
        <header id="main-header">
            <div className="logo">Mikael Renberg</div>
            {/* <select id="menu-toggle" onchange="location = this.value;">
                <option value="" selected disabled>☰</option>
                <option value="#start">Start</option>
                <option value="#my-projects">My Projects</option>
                <option value="#aboutme">About Me</option>
                <option value="#contact">Contact</option>
            </select> */}
            <nav id="navLinks">
                <a href="#start">Start</a>
                <a href="#my-projects">My Projects</a>
                <a href="#aboutme">About Me</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}