import type { JSX } from 'react';
import LandingPage from './pages/LandingPage';
import Contact from './pages/ContactPage';
import AboutMe from './pages/AboutMePage';
import MyProjects from './pages/MyProjectsPage';

interface Route {
    element: JSX.Element;
    path: string;
    menuLabel?: string;
}

const routes: Route[] = [

    { element: <LandingPage />, path: '/', menuLabel: 'Main' },
    { element: <Contact />, path: '/contact', menuLabel: 'Contact' },
    { element: <AboutMe />, path: '/aboutme', menuLabel: 'About Me' },
    { element: <MyProjects />, path: '/projects', menuLabel: 'Projects' }
    //{ element: <Page-Name />, path: '/file-path', menuLabel: 'Lable-Name' }
];

export default routes;


/*

add to pages to import

import { Link } from 'react-router-dom';
*/