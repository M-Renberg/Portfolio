

export default function AboutMe() {

    return (
        <article id="aboutme">
            <img className="" src="Images/Snapchat-1375536355.webp"
                alt="Selfie of myself. Blonde male with tattoos" />
            <section className="aboutme">
                <h3>About Me:</h3>
                <p>Hey, I'm Mikael, and I a software development student from Sweden</p>
                <p>I'm currently studying at NBI-Handelsakademin where I'm majoring in AI development</p>
                <p>I'm right now in my first year of studying and alot of the thing I upload here on Github is school
                    projects and side
                    projects that I'm working on.</p>
            </section>
            <div className="techstackstyling">
                <section className="techstacktitle">
                    <h2>Tech Stack:</h2>
                </section>
                <section className="techstack">
                    <div className="stack-category">
                        <h3>Core languages & logic:</h3>
                        <ul>
                            <li>C#</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>SQL</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="stack-category">
                        <h3>Frontend & Web:</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>XML</li>
                        </ul>
                    </div>
                    <div className="stack-category">
                        <h3>Frameworks:</h3>
                        <ul>
                            <li>.NET / .MAUI</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="stack-category">
                        <h3>Tools & Enviornment:</h3>
                        <ul>
                            <li>Version Control: Git & Github</li>
                            <li>IDE: Visual Studio, VS Code, Rider</li>
                        </ul>
                    </div>
                </section>
            </div>
        </article>
    );
}