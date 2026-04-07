// import { useState } from "react";
import useFetchJson from "../hooks/useFetchJson";
import type { ProjectInterface } from "../util/projectInterface";
import { Icon } from "../util/Icons";
import { Badge } from "../util/Badges";

export default function MyProjects() {

    const myPrivetProjects = useFetchJson<ProjectInterface[]>('/data/myprojects.json');
    const mySchoolProjects = useFetchJson<ProjectInterface[]>('/data/schoolprojects.json');

    return myPrivetProjects && (
        <article className="grid grid-cols-2 gap-7 items-stretch p-20">
            {/* Intro msg */}
            <section className="col-span-full mt-2 border-2 border-border-one rounded-lg p-8 box-border text-center shadow-glow">
                <h1 className="text-4xl mb-4">My projects</h1>
                <p>Here you can find all the project that I've worked on.</p>
                <p>Some of them are school projects and some of the are personal ones.</p>
                <p>Every title of a project is a link to the projects repo.</p>
            </section>
            <section className="col-span-full text-center">
                <h2 className="text-3xl mt-5 mb-4 text-primary-font">My personal projects:</h2>
            </section>
            {/* Looping my project */}
            <section className="col-span-full grid grid-cols-2 gap-5 mb-12">
                {myPrivetProjects ? myPrivetProjects.map((mProject) => (
                    <div className="p-6 border-2 border-border-two rounded-lg bg-third-bg shadow-glow flex flex-col h-full" key={mProject.id}>
                        <a className="font-semibold" href={mProject.link}>
                            <Icon name="github" />{mProject.title}</a>
                        <p className="mt-3 mb-2">{mProject.subtitle}</p>
                        <p>{mProject.description}</p>
                        <ul className="flex flex-row flex-wrap gap-1 mt-auto pt-5">
                            {mProject.badges.map(badge => (<Badge key={badge} tech={badge} />))}
                        </ul>
                    </div>
                )) : <p>loading content</p>}
            </section>
            {/* Looping my school project */}
            <section className="col-span-full text-center">
                <h2 className="text-3xl mt-5 mb-4 text-primary-font">My school projects:</h2>
            </section>
            <section className="col-span-full grid grid-cols-2 gap-5 mb-12">
                {mySchoolProjects ? mySchoolProjects.map((sProjects) => (
                    <div className="p-6 border-2 border-border-two rounded-lg bg-third-bg shadow-glow flex flex-col h-full">
                        <a className="font-semibold" href={sProjects.link}>
                            <Icon name="github" />{sProjects.title}</a>
                        <p className="mt-3 mb-2">{sProjects.subtitle}</p>
                        <p>{sProjects.description}</p>
                        <ul className="flex flex-row flex-wrap gap-1 mt-auto pt-5">
                            {sProjects.badges.map(badge => (<Badge key={badge} tech={badge} />))}
                        </ul>
                    </div>
                )) : <p>loading content</p>}
            </section>
        </article >
    );
}