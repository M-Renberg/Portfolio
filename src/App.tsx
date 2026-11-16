import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Main from './partials/Main';
import Header from './partials/Header';
import Footer from './partials/Footer';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="app-wrapper flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Main />
      </div>
      {pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;