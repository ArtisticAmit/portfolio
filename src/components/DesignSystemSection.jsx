import { useNavigate } from 'react-router-dom'
import './ProjectSection.css'
import liveDesignKitIcon from '../assets/work/project_icon/live_design_kit.png'
import dhakaCityBrandingIcon from '../assets/work/project_icon/dhaka_city_branding.png'

const designSystems = [
    {
        title: 'Live Design Kit',
        description: 'A comprehensive, scalable design system for educational and testing platforms',
        icon: liveDesignKitIcon,
        slug: 'live-design-kit'
    },
    {
        title: 'Dhaka City Branding',
        description: 'Modernizing civic identity and urban design system for Dhaka city',
        icon: dhakaCityBrandingIcon,
        slug: 'dhaka-city-branding'
    }
]

const DesignSystemSection = () => {
    const navigate = useNavigate()

    return (
        <section className="projects" style={{ marginTop: '2rem' }}>
            <h3 className="section-title">Design System</h3>
            <div className="project-list">
                {designSystems.map((item, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => navigate(`/project/${item.slug}`)}
                    >
                        <div className="project-icon">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="project-info">
                            <h4 className="project-item-title">{item.title}</h4>
                            <p className="project-item-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DesignSystemSection
