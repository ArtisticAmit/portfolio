import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <h1 className="hero-greeting">
                Hi, I'm Amit!
            </h1>
            <div className="hero-content">
                <p className="hero-title">
                    Designing products across <span className="hero-hand">ed-tech</span>, <span className="hero-hand">mobile game</span> and building <span className="hero-hand">human design</span> systems.
                </p>
            </div>
        </section>
    )
}

export default Hero
