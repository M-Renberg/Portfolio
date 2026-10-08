import type { JSX } from 'react';
import LandingPage from './pages/LandingPage';
import Contact from './pages/ContactPage';
import AboutMe from './pages/AboutMePage';
import MyProjects from './pages/MyProjectsPage';
import WorkDetailPage from './pages/WorkDetailPage';

interface Route {
    element: JSX.Element;
    path: string;
    menuLabel?: string;
}

const routes: Route[] = [
    { element: <LandingPage />, path: '/', menuLabel: 'Main' },
    { element: <Contact />, path: '/contact', menuLabel: 'Contact' },
    { element: <AboutMe />, path: '/aboutme', menuLabel: 'About Me' },
    { element: <MyProjects />, path: '/work', menuLabel: 'My Work' },
    { element: <WorkDetailPage />, path: '/work/:id' },
    { element: <MyProjects />, path: '/projects' },
    { element: <WorkDetailPage />, path: '/projects/:id' }
];

export default routes;