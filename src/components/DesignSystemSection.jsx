import { useNavigate } from 'react-router-dom'
import './ProjectSection.css'
import liveMcqIcon from '../assets/work/project_icon/live_mcq.png'
import ezwageIcon from '../assets/work/project_icon/ezwage.png'

const designSystems = [
    {
        title: 'Live Design Kit',
        description: 'Rebuilding a fragmented Flutter app into one accessible, scalable design language',
        icon: liveMcqIcon,
        slug: 'live-design-kit'
    },
    {
        title: 'Coin Design Vault',
        description: 'Creating a design system from the ground up for a personal finance management service',
        // TODO: replace with a dedicated Coin Design Vault icon
        icon: ezwageIcon,
        slug: 'coin-design-vault'
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
