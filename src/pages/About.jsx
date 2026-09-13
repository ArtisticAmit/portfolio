import React from 'react'
import './About.css'

// Company Logos
import cracktechLogo from '../assets/about/company/cracktech.png'
import ezwageLogo from '../assets/about/company/ezwage.png'
import fakirLogo from '../assets/about/company/fakir_apparels.png'
import insparofaithLogo from '../assets/about/company/insparofaith_games.png'
import mitroLogo from '../assets/about/company/mitro.png'
import undpLogo from '../assets/about/company/undp.png'
import duLogo from '../assets/about/company/university_of_dhaka.svg'
import ygenLogo from '../assets/about/company/ygen_engineering.png'
import yoyosoLogo from '../assets/about/company/yoyoso.png'

const About = () => {
    return (
        <div className="about-page fade-in">
            <section className="about-header">
                <div className="header-info-container">
                    <div className="header-info">
                        <h1 className="header-name">Amit Rohan</h1>
                        <p className="header-subtitle">Product Designer</p>
                    </div>
                    <div className="button-row">
                        <button className="btn-filled" onClick={() => window.location.href = 'mailto:contact@amitrohan.studio'}>Contact</button>
                        <button
                            className="btn-outlined"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/resume.pdf';
                                link.download = 'Amit_Rohan_Resume.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            Resume
                        </button>
                    </div>
                </div>
            </section>

            <section className="about-bio">
                <p>
                    I am a UI/UX designer who integrates a formal background in fine arts with digital product design to solve complex visual and functional problems. With a Master's degree in Drawing and Painting, I apply principles of composition and color theory to create intuitive interfaces across the ed-tech, fintech, and mobile gaming sectors. By combining user research with iterative design, I translate intricate requirements into scalable systems that enhance user engagement and simplify the digital experience.
                </p>

            </section>

            <hr />

            <section className="experience-section">
                <h3 className="section-title">Experience</h3>
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">Cracktech Ltd.</span>
                            <span className="exp-role">Product Designer</span>
                        </div>
                        <span className="exp-date">Sep 2026 — Present</span>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">Cracktech Ltd.</span>
                            <span className="exp-role">UI/UX Designer</span>
                        </div>
                        <span className="exp-date">Nov 2024 — Aug 2026</span>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">Insparofaith Games</span>
                            <span className="exp-role">UI/UX Designer</span>
                        </div>
                        <span className="exp-date">Mar 2018 — Oct 2024</span>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">EZ Wage Software Ltd.</span>
                            <span className="exp-role">UI/UX Designer</span>
                        </div>
                        <span className="exp-date">Oct 2022 — Apr 2023</span>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">Yoyoso Bangladesh</span>
                            <span className="exp-role">Creative Visualizer (Contract)</span>
                        </div>
                        <span className="exp-date">Apr 2023 — Mar 2024</span>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">Fakir Apparels</span>
                            <span className="exp-role">Visualizer (Contract)</span>
                        </div>
                        <span className="exp-date">Apr 2023 — Mar 2024</span>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">University of Dhaka</span>
                            <span className="exp-role">Design Consultant (Contract)</span>
                        </div>
                        <span className="exp-date">Jul 2020 — Jun 2022</span>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">YGEN Engineering Ltd.</span>
                            <span className="exp-role">Design Consultant (Contract)</span>
                        </div>
                        <span className="exp-date">Feb 2020 — Present</span>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">UNDP in Bangladesh</span>
                            <span className="exp-role">Graphic Designer (Contract)</span>
                        </div>
                        <span className="exp-date">Jul 2019 — Jun 2020</span>
                    </div>
                </div>
            </section>

            <hr />

            <section className="experience-section">
                <h3 className="section-title">Education</h3>
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">University of Dhaka</span>
                            <span className="exp-role">Master of Fine Arts (MFA)</span>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">University of Dhaka</span>
                            <span className="exp-role">Bachelor of Fine Arts (BFA)</span>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section className="experience-section">
                <h3 className="section-title">Certifications</h3>
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">Google UX Design</span>
                            <span className="exp-role"> Professional Certificate, Google</span>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">Professional UI/UX Design</span>
                            <span className="exp-role">Professional Certificate, Creative IT Institute</span>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section className="experience-section">
                <h3 className="section-title">Interest</h3>
                <div className="experience-list">

                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">Chess</span>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="exp-main">
                            <span className="exp-company">Drawing</span>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section className="companies-section">
                <h3 className="section-title">Worked with</h3>
                <div className="companies-grid">
                    <div className="company-logo"><img src={cracktechLogo} alt="Cracktech" /></div>
                    <div className="company-logo"><img src={ezwageLogo} alt="EZ Wage" /></div>
                    <div className="company-logo"><img src={yoyosoLogo} alt="Yoyoso" /></div>
                    <div className="company-logo"><img src={undpLogo} alt="UNDP" /></div>
                    <div className="company-logo"><img src={fakirLogo} alt="Fakir Apparels" /></div>
                    <div className="company-logo"><img src={duLogo} alt="University of Dhaka" /></div>
                    <div className="company-logo"><img src={insparofaithLogo} alt="Insparofaith Games" /></div>
                    <div className="company-logo"><img src={mitroLogo} alt="Mitro" /></div>
                    <div className="company-logo"><img src={ygenLogo} alt="Ygen Engineering" /></div>
                </div>
            </section>

            <hr />

            <section className="testimonials-section">
                <h3 className="section-title">People I've worked with</h3>
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        <p className="testimonial-text">
                            "I've had the pleasure of working with Amit on many projects over many
                            years now. He brings a magical touch to every design he works on and all
                            our shared users benefit."
                        </p>
                    </div>
                    <div className="testimonial-author">

                        <div className="author-info">
                            <span className="author-name">Liam Gladdy</span>
                            <span className="author-role">Senior Developer at WP Engine</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
