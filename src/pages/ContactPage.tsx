import { Icon } from "../util/Icons";

export default function Contact() {

    return (
        <article className="grid grid-cols-1 md:grid-cols-2 gap-7 items-stretch mt-10 pt-10 sm:mt-20 sm:pt-10 pb-20 sm:pb-40 px-4">
            <div className="flex flex-col gap-5 p-6 sm:p-8 m-0 border-2 border-border-one rounded-lg box-border text-center shadow-glow">
                <section className="contacttext">
                    <h2 className="text-center mb-8 mt-4 text-3xl sm:text-4xl text-shadow-lg/35">Let's Connect</h2>
                    <p className='mb-3 text-lg sm:text-xl'>Feel free to connect with me on GitHub or LinkedIn</p>
                    <p className='mb-3 text-lg sm:text-xl'>I'm always open to be part of a project, and I would love to help you out.</p>
                </section>
                <div className="border-2 border-black rounded-lg m-0 content-center p-2 text-third-bg">
                    <Icon name="linkedin" />
                    <a className="p-5" href="https://www.linkedin.com/in/mikael-renberg-98b062178/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="border-2 border-black rounded-lg m-0 content-center p-2 text-third-bg">
                    <Icon name="email" />
                    <a className="p-5" href="mailto:mikael.k.renberg@hotmail.com" data-icon="email">E-post</a>
                </div>
                <div className="border-2 border-black rounded-lg m-0 content-center p-2 text-third-bg">
                    <Icon name="github" />
                    <a className="p-5" href="https://github.com/M-Renberg" target="_blank" rel="noopener noreferrer" data-icon="github">GitHub</a>
                </div>
            </div>
            <div className="p-6 sm:p-10 m-0 border-2 border-border-one rounded-lg box-border text-center shadow-glow">
                <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Tack för ditt meddelande! Detta är ett demoformulär."); }}>
                    <div className="form-group text-left">
                        <label htmlFor="name-input" className="text-xl block">Name:
                            <input className="w-full p-3 mt-3 border border-gray-700 rounded-sm box-border bg-third-bg" type="text" id="name-input" name="name" required />
                        </label>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="email-input" className="text-xl block">Email:
                            <input className="w-full p-3 mt-3 border border-gray-700 rounded-sm box-border bg-third-bg" type="email" id="email-input" name="email" required />
                        </label>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="message-input" className="text-xl block">Message:
                            <textarea className="w-full p-3 mt-3 border border-gray-700 rounded-sm box-border bg-third-bg" id="message-input" name="message" rows={4} required></textarea>
                        </label>
                    </div>
                    <button className="p-3.5 border-2 border-gray-800 cursor-pointer rounded-lg bg-third-bg hover:opacity-90 transition-opacity" type="submit" id="send-effects">Send</button>
                </form>
                <div id="form-status"></div>
            </div>
        </article>
    );
}