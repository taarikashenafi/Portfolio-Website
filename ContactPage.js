import React from 'react';
import './ContactPage.css';
import TypingAnimation from './TypingAnimation';

const ContactPage = () => {
    return (
        <section id="contact" className="contact-page">
            <TypingAnimation text="Contact Me" />
            <form>
                <input type="text" name="firstName" placeholder="First name" required />
                <input type="text" name="lastName" placeholder="Last name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="company" placeholder="Company / Organization" />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            <div className="social-links">
                <a href="https://www.linkedin.com">LinkedIn</a>
                <a href="https://www.github.com">GitHub</a>
                <a href="/resume.pdf">Resume</a>
            </div>
        </section>
    );
};

export default ContactPage;