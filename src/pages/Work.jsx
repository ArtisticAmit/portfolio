import React from 'react'
import Hero from '../components/Hero'
import ProjectSection from '../components/ProjectSection'
import DesignSystemSection from '../components/DesignSystemSection'
import UXWritingSection from '../components/UXWritingSection'

const Work = () => {
    return (
        <div className="home-page fade-in">
            <Hero />
            <DesignSystemSection />
            <ProjectSection />
            <UXWritingSection />
        </div>
    )
}

export default Work
