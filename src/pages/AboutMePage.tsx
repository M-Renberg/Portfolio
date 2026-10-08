import pfp from '../Images/pfp.webp';

export default function AboutMe() {

    return (
        <article className='grid grid-cols-1 md:grid-cols-2 gap-7 items-stretch mt-10 pt-10 sm:mt-20 sm:pt-20 px-4'>
            <section className="col-span-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 m-0 p-6 sm:p-8 border-2 border-border-one rounded-lg box-border text-center md:text-left shadow-glow">
                <img className="block mx-auto w-full max-w-2xs h-auto border border-black rounded-lg shadow-2xs" src={pfp}
                    alt="Selfie of myself. Blonde male with tattoos" />
                <div>
                    <h3 className='text-center md:text-left mb-6 sm:mb-10 text-4xl sm:text-6xl text-shadow-lg/35'>About Me:</h3>
                    <div>
                        <p className='mb-3 text-lg sm:text-xl'>Hey, I'm Mikael, and I'm a software development student from Sweden</p>
                        <p className='mb-3 text-lg sm:text-xl'>I'm currently studying at NBI-Handelsakademin where I'm majoring in AI development</p>
                        <p className='mb-3 text-lg sm:text-xl'>I'm right now in my first year of studying and a lot of the things I upload here on GitHub are school
                            projects and side projects that I'm working on.</p>
                        <p className='mb-3 text-lg sm:text-xl'>My biggest passion is AI and AI integration. I think it's really fun to make AI a part of a website or an application.</p>
                    </div>
                </div>
            </section>
            <div className="col-span-full mt-4 sm:mt-8 mb-8 p-6 sm:p-8 rounded-lg box-border bg-third-bg shadow-glow">
                <section className="grid col-span-full">
                    <h2 className='text-center mb-8 text-black text-3xl sm:text-4xl'>Tech Stack:</h2>
                </section>
                <section className="grid col-span-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-8">
                    <div className="flex flex-col items-start">
                        <h3 className='mb-4 text-black text-2xl'>Core languages & logic:</h3>
                        <ul className='list-disc pl-5 m-0'>
                            <li className='font-semibold'>C#</li>
                            <li className='font-semibold'>JavaScript</li>
                            <li className='font-semibold'>TypeScript</li>
                            <li className='font-semibold'>SQL & NOSQL</li>
                            <li className='font-semibold'>Python</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className='mb-4 text-black text-2xl'>Frontend & Web:</h3>
                        <ul className='list-disc pl-5 m-0'>
                            <li className='font-semibold'>HTML5</li>
                            <li className='font-semibold'>CSS3</li>
                            <li className='font-semibold'>XML</li>
                            <li className='font-semibold'>XAML</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className='mb-4 text-black text-2xl'>Frameworks:</h3>
                        <ul className='list-disc pl-5 m-0'>
                            <li className='font-semibold'>.NET</li>
                            <li className='font-semibold'>.MAUI</li>
                            <li className='font-semibold'>React</li>
                            <li className='font-semibold'>Tailwind</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className='mb-4 text-black text-2xl'>Tools & Enviornment:</h3>
                        <ul className='list-disc pl-5 m-0'>
                            <li className='font-semibold'>Version Control: Git & GitHub</li>
                            <li className='font-semibold'>IDE: Visual Studio, VS Code, Rider</li>
                            <li className='font-semibold'>Convex</li>
                            <li className='font-semibold'>Azure</li>
                            <li className='font-semibold'>Supabase</li>
                        </ul>
                    </div>
                </section>
            </div>
        </article>
    );
}