import { useState } from "react";
import useFetchJson from "../hooks/useFetchJson";
import type { ProjectInterface } from "../util/projectInterface";


export default function MyProjects() {

    const myPrivetProjects = useFetchJson<ProjectInterface[]>('/data/myprojects.json');
    const mySchoolProjects = useFetchJson<ProjectInterface[]>('/data/schoolprojects.json');

    return myPrivetProjects && (
        <article id="my-projects">
            {/* Intro msg */}
            <section className="mp-text">
                <h1>My projects</h1>
                <p>Here you can find all the project that I've worked on.</p>
                <p>Some of them are school projects and some of the are personal ones.</p>
                <p>Every title of a project is a link to the projects repo.</p>
            </section>
            <section className="mp-mpp">
                <h2>My personal projects:</h2>
            </section>
            {/* Looping my project */}
            <section className="mp-myprojects">
                {myPrivetProjects ? myPrivetProjects.map((mProject) => (
                    <div className="mp-myprojects-box" key={mProject.id}>
                        <a href={mProject.link}
                            data-icon="github">{mProject.title}</a>
                        <p>{mProject.subtitle}</p>
                        <p>{mProject.description}</p>
                        <ul>
                            {mProject.badges.map(badge => <li key={badge}>{badge}</li>)}
                        </ul>
                    </div>
                )) : <p>loading content</p>}
            </section>
            {/* Looping my school project */}
            <section className="mp-msp">
                <h2>My school projects:</h2>
            </section>
            <section className="mp-schoolprojects">
                {mySchoolProjects ? mySchoolProjects.map((sProjects) => (
                    <div className="mp-schoolprojects-box">
                        <a href={sProjects.link} data-icon="github">{sProjects.title}</a>
                        <p>{sProjects.subtitle}</p>
                        <p>{sProjects.description}</p>
                        <ul>
                            <li>TypeScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>React</li>
                        </ul>
                    </div>
                )) : <p>loading content</p>}
            </section>
        </article>
    );
}