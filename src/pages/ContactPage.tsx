

export default function Contact() {

    return (
        <article id="contact">
            <div className="contact-links">
                <section className="contacttext">
                    <h2>Let's Connect</h2>
                    <p>Feel free to connect with me on Github or LinkedIn</p>
                    <p>I'm always open to be apart of a project, and I would love to help you out.</p>
                </section>
                <div id="link-box">
                    <a href="https://www.linkedin.com/in/mikael-renberg-98b062178/" data-icon="linkedin">LinkedIn</a>
                </div>
                <div id="link-box">
                    <a href="mailto:mikael.k.renberg@hotmail.com" data-icon="email">E-post</a>
                </div>
                <div id="link-box">
                    <a href="https://github.com/M-Renberg" data-icon="github">GitHub</a>
                </div>
            </div>
            <div className="contact-container">
                <form id="contact-form" className="contact-form">
                    <div className="form-group">
                        <label id="name">Name:
                            <input type="text" id="name" name="name" required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label id="email">Email:
                            <input type="email" id="email" name="email" required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label id="message">Message;
                            <textarea id="message" name="message" required></textarea>
                        </label>
                    </div>
                    <button type="submit" id="send-effects">Send</button>
                </form>
                <div id="form-status"></div>
            </div>
        </article >
    );
}