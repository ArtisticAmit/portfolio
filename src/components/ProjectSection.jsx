import { useNavigate } from 'react-router-dom'
import './ProjectSection.css'
import liveMcqIcon from '../assets/work/project_icon/live_mcq.png'
import motomanIcon from '../assets/work/project_icon/motoman.png'
import cracktechIcon from '../assets/about/company/cracktech.png'
// TODO: replace with Fordo's real app icon
import fordoIcon from '../assets/work/project_icon/fordo.svg'

const projects = [
    {
        title: 'Live MCQ',
        description: 'Research, IA, and flows behind a redesign built to need no tutorial',
        icon: liveMcqIcon,
        slug: 'live-mcq-redesign'
    },
    {
        title: 'Motoman',
        description: 'On-demand motorcycle delivery and logistics platform coordination suite',
        icon: motomanIcon,
        slug: 'motoman'
    },
    {
        title: 'Tasker',
        description: 'Task management service that keeps a team’s work in one place',
        icon: cracktechIcon,
        slug: 'tasker'
    },
    {
        title: 'Fordo',
        description: 'Doctor’s appointment booking service',
        icon: fordoIcon,
        slug: 'fordo'
    }
]

const ProjectSection = () => {
    const navigate = useNavigate()

    return (
        <section className="projects">
            <h3 className="section-title">Products</h3>
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
