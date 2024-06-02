import React from 'react';
import './LandingPage.css';
import TypingAnimation from './TypingAnimation';

const LandingPage = () => {
    return (
        <section id="home" className="landing-page">
            <TypingAnimation text="Hi, I'm Taarik Ashenafi." />
            <div className="info-section">
                <div className="info-box green">
                    <h2>who</h2>
                    <p>Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.</p>
                    <button>Learn more about me</button>
                </div>
                <div className="info-box black">
                    <h2>where</h2>
                    <p>Use this space to promote the business, its products or its services.</p>
                    <button>Get in touch</button>
                </div>
                <div className="info-box black">
                    <h2>what</h2>
                    <p>Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.</p>
                    <button>Discover my work</button>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;