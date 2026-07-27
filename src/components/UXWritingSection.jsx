import { useNavigate } from 'react-router-dom'
import './ProjectSection.css'
import ezwageIcon from '../assets/work/project_icon/ezwage.png'

const uxWritingProjects = [
    {
        title: 'EzWage',
        description: 'Crafted UX writings for localization',
        icon: ezwageIcon,
        slug: 'ezwage'
    }
]

const UXWritingSection = () => {
    const navigate = useNavigate()

    return (
        <section className="projects" style={{ marginTop: '2rem' }}>
            <h3 className="section-title">UX Writing</h3>
            <div className="project-list">
                {uxWritingProjects.map((item, index) => (
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

export default UXWritingSection
