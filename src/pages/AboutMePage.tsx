import pfp from '../Images/pfp.webp';

export default function AboutMe() {

    return (
        <article className='grid grid-cols-2 gap-7 items-center mt-20 pt-20'>
            <img className="block m-0 w-full max-w-2xs h-auto border border-black rounded-lg" src={pfp}
                alt="Selfie of myself. Blonde male with tattoos" />
            <section className="m-o p-8 border border-black h-full box-border">
                <h3 className='text-center mb-8'>About Me:</h3>
                <p>Hey, I'm Mikael, and I a software development student from Sweden</p>
                <p>I'm currently studying at NBI-Handelsakademin where I'm majoring in AI development</p>
                <p>I'm right now in my first year of studying and alot of the thing I upload here on Github is school
                    projects and side
                    projects that I'm working on.</p>
            </section>
            <div className="col-span-full mt-8 mb-8 p-8 rounded-lg box-border">
                <section className="grid col-span-full">
                    <h2 className='text-center mb-8'>Tech Stack:</h2>
                </section>
                <section className="grid col-span-full grid-cols-4 gap-7 mb-8">
                    <div className="flex flex-col items-start">
                        <h3 className='mb-4'>Core languages & logic:</h3>
                        <ul className='list-disc pl-5 m-0'>
                            <li>C#</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>SQL</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="list-disc pl-5 m-0">
                        <h3 className='mb-4'>Frontend & Web:</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>XML</li>
                        </ul>
                    </div>
                    <div className="list-disc pl-5 m-0">
                        <h3 className='mb-4'>Frameworks:</h3>
                        <ul>
                            <li>.NET / .MAUI</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="list-disc pl-5 m-0">
                        <h3 className='mb-4'>Tools & Enviornment:</h3>
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