import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'

const projectData = {
    'insparofaith-games': {
        title: 'Insparofaith Games',
        role: 'UI/UX Designer',
        description: 'Creating immersive and intuitive experiences for mobile games using Figma and Unreal Engine 5.',
        details: [
            'Developed wireframes, prototypes, and high-fidelity mockups for various game titles.',
            'Collaborated with cross-functional teams to shape user journeys and optimize gameplay mechanics.',
            'Designed visually stunning UI elements, characters, and environments.',
        ]
    },
    'ez-wage': {
        title: 'EZ Wage Ltd.',
        role: 'UI/UX Designer',
        description: 'Refining fintech product interfaces for better efficiency and user satisfaction.',
        details: [
            'Conducted user research and usability testing to identify pain points in current financial tools.',
            'Collaborated with developers and product managers to align designs with business objectives.',
            'Designed intuitive dashboards and transaction flows for mobile and web apps.',
        ]
    },
    'yoyoso-bangladesh': {
        title: 'Yoyoso Bangladesh',
        role: 'Creative Visualizer',
        description: 'Curation of graphics, animations, and illustrations for social media and marketing.',
        details: [
            'Designed digital and print publications including brochures, flyers, and posters.',
            'Conceptualized event branding materials including banners and signage.',
            'Managed visual identity across multiple social media platforms.',
        ]
    },
    'fakir-apparels': {
        title: 'Fakir Apparels Ltd.',
        role: 'Visualizer',
        description: 'Providing visualization and design services on a contract basis.',
        details: [
            'Created marketing materials and internal brand visualizations.',
            'Worked closely with the communication department for event branding.',
        ]
    },
    'undp': {
        title: 'UNDP',
        role: 'Graphic Designer',
        description: 'Professional graphic design services for organizational initiatives.',
        details: [
            'Developed visual assets for social campaigns and official reports.',
            'Maintained brand consistency across global organizational standards.',
        ]
    }
}

const ProjectDetail = () => {
    const { slug } = useParams()
    const project = projectData[slug]

    if (!project) {
        return (
            <div className="project-detail-error fade-in">
                <h1>Project not found</h1>
                <Link to="/" className="back-link">Back to Work</Link>
            </div>
        )
    }

    return (
        <div className="project-detail-page fade-in">
            <Link to="/" className="back-link">← Back to Work</Link>
            <header className="project-detail-header">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-role">{project.role}</p>
            </header>

            <section className="project-content">
                <p className="project-intro">{project.description}</p>
                <div className="project-highlights">
                    <h3 className="section-subtitle">Key Contributions</h3>
                    <ul className="details-list">
                        {project.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="placeholder-image">
                <div className="image-box">Project Screenshot Placeholder</div>
            </div>
        </div>
    )
}

export default ProjectDetail
