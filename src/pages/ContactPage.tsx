import { Icon } from "../util/Icons";

export default function Contact() {

    return (
        <article className="grid grid-cols-2 gap-7 items-stretch mt-20 pt-10 pb-40 pl-2 pr-2">
            <div className="flex flex-col gap-5 p-4 m-0 border-2 border-border-one rounded-lg box-border text-center shadow-glow">
                <section className="contacttext">
                    <h2 className="text-center mb-8 mt-4">Let's Connect</h2>
                    <p>Feel free to connect with me on Github or LinkedIn</p>
                    <p>I'm always open to be apart of a project, and I would love to help you out.</p>
                </section>
                <div className="border-2 border-black rounded-lg m-0 content-center p-2">
                    <Icon name="linkedin" />
                    <a className="p-5" href="https://www.linkedin.com/in/mikael-renberg-98b062178/">LinkedIn</a>
                </div>
                <div className="border-2 border-black rounded-lg m-0 content-center p-2">
                    <Icon name="email" />
                    <a className="p-5" href="mailto:mikael.k.renberg@hotmail.com" data-icon="email">E-post</a>
                </div>
                <div className="border-2 border-black rounded-lg m-0 content-center p-2">
                    <Icon name="github" />
                    <a className="p-5" href="https://github.com/M-Renberg" data-icon="github">GitHub</a>
                </div>
            </div>
            <div className="p-10 m-0 border-2 border-border-one rounded-lg box-border text-center shadow-glow">
                <form className="flex flex-col gap-6">
                    <div className="form-group">
                        <label id="name">Name:
                            <input className="w-full p-3 border border-gray-700 rounded-sm box-border" type="text" id="name" name="name" required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label id="email">Email:
                            <input className="w-full p-3 border border-gray-700 rounded-sm box-border" type="email" id="email" name="email" required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label id="message">Message;
                            <textarea className="w-full p-3 border border-gray-700 rounded-sm box-border" id="message" name="message" required></textarea>
                        </label>
                    </div>
                    <button className="p-3.5 border-2 border-gray-800 cursor-pointer rounded-lg " type="submit" id="send-effects">Send</button>
                </form>
                <div id="form-status"></div>
            </div>
        </article >
    );
}