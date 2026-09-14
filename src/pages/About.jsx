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
                    I am a product designer who integrates a formal background in fine arts with digital product design to solve complex visual and functional problems. With a Master's degree in Drawing and Painting, I apply principles of composition and color theory to create intuitive interfaces across the ed-tech, fintech, and mobile gaming sectors. By combining user research with iterative design, I translate intricate requirements into scalable systems that enhance user engagement and simplify the digital experience.
                </p>

                <div className="about-stats">
                    <div className="about-stat">
                        <p className="about-stat-value">6+</p>
                        <p className="about-stat-label">Years</p>
                    </div>
                    <div className="about-stat">
                        <p className="about-stat-value">10</p>
                        <p className="about-stat-label">Products</p>
                    </div>
                    <div className="about-stat">
                        <p className="about-stat-value">56+</p>
                        <p className="about-stat-label">Projects</p>
                    </div>
                    <div className="about-stat">
                        <p className="about-stat-value">∞</p>
                        <p className="about-stat-label">Learnings</p>
                    </div>
                </div>
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
                <h3 className="section-title">Companies I've worked with</h3>
                <div className="companies-grid">
                    <a className="company-logo" href="https://cracktech.com.bd/" target="_blank" rel="noopener noreferrer"><img src={cracktechLogo} alt="Cracktech" /></a>
                    <a className="company-logo" href="https://ezwage.com/bangladesh/" target="_blank" rel="noopener noreferrer"><img src={ezwageLogo} alt="EZ Wage" /></a>
                    <a className="company-logo" href="https://www.yoyosobangladesh.com/" target="_blank" rel="noopener noreferrer"><img src={yoyosoLogo} alt="Yoyoso" /></a>
                    <a className="company-logo" href="https://www.undp.org/bangladesh" target="_blank" rel="noopener noreferrer"><img src={undpLogo} alt="UNDP" /></a>
                    <a className="company-logo" href="https://fakirapparels.com/" target="_blank" rel="noopener noreferrer"><img src={fakirLogo} alt="Fakir Apparels" /></a>
                    <a className="company-logo" href="https://www.du.ac.bd/" target="_blank" rel="noopener noreferrer"><img src={duLogo} alt="University of Dhaka" /></a>
                    <a className="company-logo" href="https://play.google.com/store/apps/developer?id=Insparofaith+Games&hl=en" target="_blank" rel="noopener noreferrer"><img src={insparofaithLogo} alt="Insparofaith Games" /></a>
                    <a className="company-logo" href="https://www.linkedin.com/company/mitroapp/?originalSubdomain=bd" target="_blank" rel="noopener noreferrer"><img src={mitroLogo} alt="Mitro" /></a>
                    <a className="company-logo" href="http://www.ygenbd.com/" target="_blank" rel="noopener noreferrer"><img src={ygenLogo} alt="Ygen Engineering" /></a>
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
