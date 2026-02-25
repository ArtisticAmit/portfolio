import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'

const projectData = {
    'live-mcq': {
        title: 'Live MCQ Design System',
        role: 'As UI/UX Designer',
        description: 'From Fragmented Screens to a Scalable Learning System - Building a Design System for an EdTech App',
        sections: [
            {
                type: 'intro',
                content: [
                    'When I joined LearnLoop, a fast-growing ed-tech startup, the product was already live with 50,000+ students preparing for competitive exams.',
                    'The team had grown quickly. The product had grown even faster. But the design hadn’t grown with it. Each new feature felt like a patch added to an already fragile structure.'
                ]
            },
            {
                type: 'section',
                title: 'The Problem: Invisible Chaos',
                content: [
                    'At first glance, the app looked fine. Clean. Functional. But under the surface:',
                    'But under the surface:'
                ],
                list: [
                    '7 different button styles',
                    '4 inconsistent card layouts',
                    'Spacing that changed from screen to screen',
                    'Accessibility contrast issues in quizzes',
                    'No shared component library',
                    'Developers constantly asking: “Which version should we use?”'
                ]
            },
            {
                type: 'text',
                content: [
                    'New features took longer to design. QA bugs increased. UI inconsistencies confused students.',
                    'This wasn’t a UI problem. It was a systems problem.'
                ]
            },
            {
                type: 'image',
                placeholder: 'Visual showing the inconsistencies in UI (Before)',
                caption: 'Initial UI Audit showing inconsistencies'
            },
            {
                type: 'section',
                title: 'The Wake-Up Moment',
                content: [
                    'During a sprint review, we discovered something alarming:',
                    'Two teams had designed and shipped completely different progress indicators for the same exam module.',
                    'Same feature. Different UI logic.',
                    'That’s when I realized:',
                    'We didn’t lack talent. We lacked a shared language.'
                ]
            },
            {
                type: 'section',
                title: 'The Mission',
                list: [
                    'Create a scalable, accessible design system that:',
                    'Ensures visual consistency',
                    'Speeds up design workflow',
                    'Reduces development confusion',
                    'Improves accessibility for students',
                    'Supports rapid feature growth',
                    'And most importantly — Supports learners, not just screens.'
                ]
            },
            {
                type: 'section',
                title: 'Phase 1: Understanding the Real Problem',
                content: [
                    'Before designing anything, I ran a structured UI audit.',
                    'What I Did:'
                ],
                list: [
                    'Audited 150+ screens across mobile and responsive web',
                    'Mapped recurring patterns',
                    'Identified visual inconsistencies',
                    'Interviewed 3 developers and 2 designers',
                    'Reviewed accessibility contrast ratios'
                ]
            },
            {
                type: 'text',
                content: ['What I Found:'],
                list: [
                    '9 button variations',
                    '12 inconsistent spacing rules',
                    'No standardized typography scale',
                    'Accessibility failures in 30% of quiz screens',
                    'No documentation for components'
                ]
            },
            {
                type: 'text',
                content: [
                    'Designers were redesigning components. Developers were guessing implementation details.',
                    'The system didn’t exist — only screens did.'
                ]
            },
            {
                type: 'image',
                placeholder: 'Audit Results / Statistics Infographic',
                caption: 'Findings from the initial design audit'
            },
            {
                type: 'section',
                title: 'Phase 2: Building the Foundation',
                content: [
                    'I didn’t start with components. I started with rules.',
                    'Because systems aren’t built from buttons. They’re built from principles.'
                ]
            },
            {
                type: 'subsection',
                title: 'Color System',
                content: [
                    'The app served students studying long hours. Eye strain was real.',
                    'I created:'
                ],
                list: [
                    'Semantic color tokens (Success, Error, Warning, Info)',
                    'High-contrast primary palette',
                    'Accessible neutral scale',
                    'Dark mode support for night learners',
                    'WCAG AA contrast compliance'
                ]
            },
            {
                type: 'image',
                placeholder: 'Color System Palette',
                caption: 'Semantic and Accessible Color System'
            },
            {
                type: 'subsection',
                title: 'Typography System',
                content: [
                    'The previous UI used inconsistent font sizes across screens.',
                    'I introduced:'
                ],
                list: [
                    'A defined type scale',
                    'Clear hierarchy (H1–H6, Body, Caption)',
                    'Responsive adjustments',
                    'Improved line-height for readability in long study materials'
                ]
            },
            {
                type: 'subsection',
                title: 'Spacing & Grid',
                content: [
                    'I implemented an 8pt spacing system across mobile and web.',
                    'This created:',
                ],
                list: [
                    'Predictable layouts',
                    'Consistent breathing room',
                    'Faster screen composition'
                ]
            },
            {
                type: 'section',
                title: 'Phase 3: Crafting the Component Library',
                content: [
                    'Once the foundations were stable, I moved to reusable building blocks.'
                ]
            },
            {
                type: 'subsection',
                title: 'Buttons',
                content: [
                    'Previously: Different corner radii, inconsistent padding, missing disabled states.',
                    'Now:'
                ],
                list: [
                    'Primary / Secondary / Ghost variants',
                    'Full interaction states (Default, Hover, Pressed, Disabled)',
                    'Clear usage guidelines'
                ]
            },
            {
                type: 'image',
                placeholder: 'Component Library - Buttons & Controls',
                caption: 'Standardized Button Components'
            },
            {
                type: 'subsection',
                title: 'Cards',
                list: [
                    'Standardized elevation rules',
                    'Consistent padding',
                    'Image and content alignment system',
                    'Defined responsive behavior'
                ]
            },
            {
                type: 'subsection',
                title: 'Quiz Components',
                content: [
                    'This was the heart of the product. I redesigned:'
                ],
                list: [
                    'Option selection states',
                    'Correct / Incorrect feedback logic',
                    'Timer UI',
                    'Progress indicators'
                ]
            },
            {
                type: 'image',
                placeholder: 'Quiz Interface Redesign',
                caption: 'Redesigned Quiz Interface with new components'
            },
            {
                type: 'section',
                title: 'Phase 4: Making It a Shared Language',
                content: [
                    'A design system fails without adoption. So I didn’t just build it — I socialized it.',
                    'What I Did:'
                ],
                list: [
                    'Conducted a design walkthrough session',
                    'Collaborated with engineers to align naming conventions',
                    'Created documentation inside Figma',
                    'Defined component usage rules',
                    'Established version control'
                ]
            },
            {
                type: 'section',
                title: 'Accessibility: Built-In, Not Added Later',
                content: [
                    'Our users included students from diverse socioeconomic backgrounds and varying digital literacy levels.',
                    'We ensured WCAG AA compliance, implemented clear focus states, improved touch target sizes, and reduced motion for users with sensitivity.'
                ]
            },
            {
                type: 'section',
                title: 'Implementation & Launch',
                content: [
                    'We rolled out Version 1.0 internally. The first feature built entirely using the system was a new mock test module.',
                    'Results:'
                ],
                list: [
                    '40% faster design time',
                    '30% fewer UI-related dev questions',
                    'Fewer QA inconsistencies',
                    'Improved visual cohesion across app'
                ]
            },
            {
                type: 'section',
                title: 'The Impact',
                content: [
                    'Within 3 months:'
                ],
                list: [
                    'Design delivery speed improved significantly',
                    'Cross-team communication became smoother',
                    'UI bug reports decreased',
                    'Accessibility score improved',
                    'New designers onboarded faster'
                ]
            },
            {
                type: 'text',
                content: [
                    'Most importantly:',
                    'The product felt cohesive. Students experienced a calmer, more predictable interface.'
                ]
            },
            {
                type: 'section',
                title: 'What I Learned',
                list: [
                    '1. A design system is a product — not a file.',
                    '2. Governance matters as much as components.',
                    '3. Accessibility should start at the foundation level.',
                    '4. Adoption requires collaboration, not enforcement.',
                    '5. Start small — scale intentionally.'
                ]
            },
            {
                type: 'section',
                title: 'Final Reflection',
                content: [
                    'Before this project, I thought design systems were about consistency.',
                    'Now I understand:',
                    'They are about clarity. Clarity between designers and engineers. Clarity between product and user.',
                    'And clarity in experience for learners striving toward their goals.',
                    'This wasn’t just about building UI components.',
                    'It was about building structure — so learning could scale.'
                ]
            }
        ]
    },
    'ezwage': {
        title: 'EzWage',
        role: 'UI/UX Designer',
        description: 'Financial wellness platform allowing employees to access earned wages on demand.',
        details: [
            'Designed intuitive onboarding flows for diverse user demographics.',
            'Created distinct interfaces for employee app and employer dashboard.',
            'Established a consistent design system for the brand.',
        ]
    },
    'dragon-paradise-city': {
        title: 'Dragon Paradise City',
        role: 'Game UI Artist',
        description: 'A simulation game where players build and manage a city for dragons.',
        details: [
            'Created high-quality 2D assets and UI components.',
            'Designed engaging icons, menus, and HUD elements.',
            'Collaborated with developers to ensure asset optimization and integration.',
        ]
    },
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

            {project.sections ? (
                <div className="project-case-study">
                    {project.sections.map((section, index) => (
                        <div key={index} className={`case-study-section section-${section.type}`}>
                            {section.title && <h2 className="case-study-subtitle">{section.title}</h2>}

                            {section.content && section.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className="case-study-text">{paragraph}</p>
                            ))}

                            {section.list && (
                                <ul className="case-study-list">
                                    {section.list.map((item, lIndex) => (
                                        <li key={lIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.type === 'image' && (
                                <div className="placeholder-image">
                                    <div className="image-box">{section.placeholder || 'Image Placeholder'}</div>
                                    {section.caption && <p className="image-caption">{section.caption}</p>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    )
}

export default ProjectDetail
