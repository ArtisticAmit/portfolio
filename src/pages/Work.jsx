import React from 'react'
import Hero from '../components/Hero'
import ProjectSection from '../components/ProjectSection'
import DesignSystemSection from '../components/DesignSystemSection'

const Work = () => {
    return (
        <div className="home-page fade-in">
            <Hero />
            <DesignSystemSection />
            <ProjectSection />
        </div>
    )
}

export default Work
