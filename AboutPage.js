import React from 'react';
import './AboutPage.css';
import TypingAnimation from './TypingAnimation';

const AboutPage = () => {
    return (
        <section id="about" className="about-page">
            <TypingAnimation text="Get to know me" />
            <div className="about-content">
                <img src="profile.jpg" alt="Taarik Ashenafi" />
                <p>This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
            </div>
        </section>
    );
};

export default AboutPage;