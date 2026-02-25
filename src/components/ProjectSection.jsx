import { useNavigate } from 'react-router-dom'
import './ProjectSection.css'
import liveMcqIcon from '../assets/work/project_icon/live_mcq.png'
import ezwageIcon from '../assets/work/project_icon/ezwage.png'
import dragonParadiseIcon from '../assets/work/project_icon/dragon_paradise_city.png'

const projects = [
    {
        title: 'Live MCQ Building Blocks',
        description: 'Design system for cross platform development',
        icon: liveMcqIcon,
        slug: 'live-mcq'
    },
    {
        title: 'EzWage Communication Tone',
        description: 'Crafted UX writings for localization',
        icon: ezwageIcon,
        slug: 'ezwage'
    },
    {
        title: 'Rise of Dragon Paradise City',
        description: 'Designing a fantasy user interface and characters',
        icon: dragonParadiseIcon,
        slug: 'dragon-paradise-city'
    }
]

const ProjectSection = () => {
    const navigate = useNavigate()

    return (
        <section className="projects">
            <h3 className="section-title">Projects</h3>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => navigate(`/project/${project.slug}`)}
                    >
                        <div className="project-icon">
                            <img src={project.icon} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h4 className="project-item-title">{project.title}</h4>
                            <p className="project-item-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection
