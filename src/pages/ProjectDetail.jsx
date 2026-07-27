import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'

// Public-folder path (not a static import) so dropping a real file in later
// requires no code change, and a missing placeholder never breaks the build.
const LIVE_MCQ_ASSET_DIR = '/case-studies/live-mcq'

// Lets case-study copy use **bold** the same way it was authored, without a markdown dependency.
const renderRichText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, index) =>
        part.startsWith('**') && part.endsWith('**')
            ? <strong key={index}>{part.slice(2, -2)}</strong>
            : <React.Fragment key={index}>{part}</React.Fragment>
    )
}

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
    'live-design-kit': {
        title: 'Live Design Kit',
        // TODO: confirm exact role title
        role: 'Design System Owner · UI/UX & Product Designer',
        deck: 'Rebuilding a fragmented Flutter app into one accessible, scalable design language — worked through the five stages of design thinking.',
        meta: [
            { label: 'Platform', value: 'Flutter (Mobile & Web)' },
            { label: 'Foundation', value: 'Material Design (customized)' },
            { label: 'Tools', value: 'Figma · Material Theme Builder' }
            // TODO: add a Timeline entry here if you want one, e.g. { label: 'Timeline', value: '...' }
        ],
        // TODO: replace image — cover (drop file at public/case-studies/live-mcq/cover.png)
        cover: { id: 'cover', alt: 'Live MCQ design system cover.' },
        sections: [
            {
                type: 'section',
                stageLabel: '01 · Empathize',
                eyebrow: 'Understand the people, not just the pixels',
                title: 'An app that felt like several apps',
                content: [
                    'I started by listening — to the people using the product and the people building it. Both were frustrated for the same underlying reason, even if they described it differently.'
                ]
            },
            {
                type: 'quotes',
                quotes: [
                    { label: 'End users', quote: 'Every screen looks a little different — is this even the same app? And in dark mode it’s hard to read.' },
                    { label: 'Designers & developers', quote: 'We rebuild the same button from scratch every feature, and we don’t even call things by the same names.' }
                ]
            },
            {
                type: 'text',
                content: [
                    'Designers created new components for every feature; developers re-implemented them from scratch too. With no style guide and no shared vocabulary, buttons changed shape and size screen to screen, spacing was ad-hoc, typography mixed multiple font families, and icons came from different libraries. Accessibility had been skipped: color contrast didn’t meet standards, and dark mode suffered from inconsistent, ill-suited colors. Even identical components often carried different corner radii.'
                ]
            },
            {
                // TODO: replace image — empathize-old-screens
                type: 'image',
                id: 'empathize-old-screens',
                alt: 'Old Live MCQ screens showing inconsistent styling across the app.',
                caption: 'The audit: every screen its own snowflake.'
            },
            {
                // TODO: replace image — empathize-audit (optional)
                type: 'image',
                id: 'empathize-audit',
                alt: 'Audit of inconsistent components across the app.'
            },
            {
                type: 'section',
                stageLabel: '02 · Define',
                eyebrow: 'Synthesize into one clear problem',
                title: 'Naming the root cause, not the symptoms',
                content: [
                    'Auditing the back catalogue turned scattered complaints into a single diagnosis. Fixing individual screens would never hold — the cause was structural.',
                    'There was no proper design kit; almost every element had been drawn by hand. A very basic system technically existed, but it was never updated, never consistently followed, and shipped with no implementation guidelines for developers. Because designers invented patterns on demand and several developers worked with no shared standard, each person produced their own version of everything.',
                    'The deeper cause lived in the stack. Flutter’s widgets are grounded in Material Design, yet our UI borrowed from several languages at once — some screens felt like SwiftUI, others like shadcn/ui. Each system carries its own grammar; mixing them made everything slower and impossible to keep consistent. The problem wasn’t a screen — it was the absence of a system.'
                ]
            },
            {
                type: 'callout',
                text: '**How might we** give every screen one consistent, accessible visual language — without slowing down the way our teams already ship?'
            },
            {
                type: 'section',
                stageLabel: '03 · Ideate',
                eyebrow: 'Explore the paths, then commit',
                title: 'Three ways forward, weighed honestly',
                content: [
                    'A system is only as good as its ability to survive real teams and timelines. I judged each option against flexibility, speed, and long-term sustainability.'
                ]
            },
            {
                type: 'cards',
                cards: [
                    { title: 'Build a fully custom system', body: 'Maximum flexibility with custom-coded Flutter widgets, but heavy research, long build time, and permanent maintenance.', tag: 'Too costly to sustain' },
                    { title: 'Adopt a third-party system', body: 'Fastest to stand up with an existing library, but ties us to an external service that could change or shut down anytime.', tag: 'Fragile dependency' },
                    { title: 'Build on Material Design', body: 'Mature, first-class in Flutter, and deeply customizable; a proven base to extend into our brand without reinventing or renting it.', tag: 'Practical & ownable', chosen: true }
                ]
            },
            {
                type: 'section',
                stageLabel: '04 · Prototype',
                eyebrow: 'Make the system real',
                title: 'A customized Material system, built to be used',
                content: [
                    'I generated a base theme with Material Theme Builder, then customized it extensively — treating Material as a foundation to extend, not a template to accept — and built a demo Flutter app to prototype it in a real product.'
                ]
            },
            {
                type: 'cards',
                cards: [
                    { title: 'Color — A brand-tuned palette', body: 'Material’s defaults felt too muted, so I re-tuned the tonal values. Our brand colors were highly saturated — great for a logo, hard on a UI — so I refined them to keep the personality while staying comfortable and accessible in light and dark.' },
                    { title: 'Type — Noto Sans + Noto Serif', body: 'A global family with strong multilingual support: Noto Serif for body, Noto Sans for headings and UI. I reworked Material’s type scale to match our identity.' },
                    { title: 'Foundations — Spacing, scale & components', body: 'A consistent spacing system, standardized reusable components, and Material Symbols (Rounded, weight 300), chosen because the rounded terminals matched our style.' }
                ]
            },
            {
                // TODO: replace image — prototype-color-palette
                type: 'image',
                id: 'prototype-color-palette',
                alt: 'Live MCQ color palette and tonal ramps.',
                caption: 'Brand-tuned tonal palette, accessible in light and dark.'
            },
            {
                // TODO: replace image — prototype-typography (text-style specimen, to be supplied as an image)
                type: 'image',
                id: 'prototype-typography',
                alt: 'Typography system — Noto Sans and Noto Serif text styles.',
                caption: 'The type scale and text styles.'
            },
            {
                // TODO: replace image — prototype-buttons (button designs, to be supplied as an image)
                type: 'image',
                id: 'prototype-buttons',
                alt: 'Button family — primary, tonal, outline, and text variants.',
                caption: 'One button family replacing four improvised ones.'
            },
            {
                // TODO: replace image — prototype-components (optional)
                type: 'image',
                id: 'prototype-components',
                alt: 'Before-and-after of standardized components.'
            },
            {
                // TODO: replace image — prototype-icons (optional)
                type: 'image',
                id: 'prototype-icons',
                alt: 'Material Symbols Rounded icon set.'
            },
            {
                // TODO: replace image — prototype-spacing (optional)
                type: 'image',
                id: 'prototype-spacing',
                alt: '4px-based spacing scale.'
            },
            {
                type: 'text',
                content: [
                    'We previously paired Kalpurush (Bangla) with Inter (English), but Kalpurush lacked multilingual and symbol support — a structural weakness for a bilingual product. I evaluated three candidates against real content: **Balooda**, **Anek Bangla**, and **Noto Sans**. Noto Sans won on stability and language support.'
                ]
            },
            {
                // TODO: replace image — prototype-font-eval (optional)
                type: 'image',
                id: 'prototype-font-eval',
                alt: 'Font evaluation: Balooda, Anek Bangla, Noto Sans.'
            },
            {
                type: 'section',
                stageLabel: '05 · Test',
                eyebrow: 'Validate, refine, repeat',
                title: 'Testing the system against real use',
                content: [
                    'Design thinking loops here — testing fed straight back into prototyping. I validated the system in a working product and refined it every time reality disagreed with the theory.'
                ]
            },
            {
                type: 'cards',
                cards: [
                    { title: 'Validate in a real build — A demo Flutter app', body: 'I implemented the system in a demo Flutter application to prove it survived real code, not just looked right in a design file. Components had to work in context, not in isolation.' },
                    { title: 'Refine on failure — Tune until it behaves', body: 'Whenever a component failed a usability or visual test because of color, I looped back and adjusted the palette — re-tuning tonal values until every component passed, in both light and dark.' }
                ]
            },
            {
                // TODO: replace image — test-demo-app
                type: 'image',
                id: 'test-demo-app',
                alt: 'Demo Flutter app built with the new design system, light and dark.',
                caption: 'The system, proven in a real build.'
            },
            {
                type: 'stats',
                stats: [
                    { value: '1', label: 'Unified system replacing many improvised ones' },
                    { value: '3', label: 'Typefaces evaluated for multilingual support' },
                    { value: '2', label: 'Themes: light & dark, both accessible' },
                    { value: '1', label: 'Shared vocabulary across design & dev' }
                ]
            },
            {
                type: 'text',
                list: [
                    'Design and engineering now share one language, so handoff moves faster and means the same thing on both sides.',
                    'Standardized design tokens, naming, and documentation closed the old gap where the same color or component had two names.',
                    'Color contrast now meets accessibility standards, and dark mode is coherent rather than an afterthought.',
                    'The system is sustainable and still evolving, with a clear process to identify, discuss, and resolve issues as they surface.'
                ]
            },
            {
                type: 'section',
                stageLabel: '↻ · Iterate',
                eyebrow: 'The loop keeps turning',
                title: 'What the process taught me',
                content: [
                    'Design thinking never really ends — the system keeps evolving as new needs surface. Here’s what I carried out of it.'
                ]
            },
            {
                type: 'cards',
                cards: [
                    { title: 'Flutter & Material', body: 'A deeper, practical grasp of Flutter UI and Material’s principles — enough to extend the system, not just consume it.' },
                    { title: 'Scalable systems', body: 'How to build and maintain a system that grows, and how to validate it in a real implementation.' },
                    { title: 'Typography & language', body: 'Researching multilingual fonts taught me to treat type as infrastructure, especially for a bilingual product.' },
                    { title: 'Design ↔ dev workflow', body: 'The biggest lesson — a system isn’t a component library; it’s a shared language that improves consistency, speed, and scalability.' }
                ]
            },
            {
                type: 'callout',
                text: 'A design system isn’t a set of components — it’s a shared language a whole team can speak.'
            }
        ]
    },
    'dhaka-city-branding': {
        title: 'Dhaka City Branding',
        role: 'As Principal Brand Designer',
        description: 'Reimagining the Civic Identity, Wayfinding, and Public Transit System of Dhaka',
        sections: [
            {
                type: 'intro',
                content: [
                    'Dhaka is a city of rapid growth, rich history, and vibrant culture. However, its public infrastructure, transit visual systems, and civic communication lacked a unified visual identity.',
                    'This case study explores the redesign of the Dhaka City branding, modernizing its public presence and creating an intuitive wayfinding system for millions of daily commuters.'
                ]
            },
            {
                type: 'section',
                title: 'The Core Vision: Inclusivity & Heritage',
                content: [
                    'The branding system was designed around the concept of "Shoroborno" (vibrant scripts/voices) and the iconic silhouette of key historic structures, combined with clean, modern layout standards. The key objectives were:'
                ],
                list: [
                    'Create an easily recognizable, proud civic logo',
                    'Design a highly readable wayfinding and signage system for transit systems like Metro Rail',
                    'Unify municipal announcements, waste management systems, and public utility logos'
                ]
            },
            {
                type: 'image',
                placeholder: 'Dhaka Civic Logo & Color System (Crimson & Forest Green representing Bangladesh)',
                caption: 'Dhaka Civic Logo and Color Archetypes'
            },
            {
                type: 'section',
                title: 'Public Wayfinding & Transit Icons',
                content: [
                    'We developed a bilingual (Bangla & English) signage template, optimization of typography for low-light conditions, and a custom set of civic iconography that transcends literacy barriers.'
                ]
            },
            {
                type: 'section',
                title: 'Project Outcomes',
                list: [
                    'Created a unified brand book containing visual guidelines, templates, and digital assets',
                    'Designed custom transit maps and station signage prototypes',
                    'Received widespread acclaim in local design communities and civic forums'
                ]
            }
        ]
    },
    'motoman': {
        title: 'Motoman',
        role: 'As Lead Product Designer',
        description: 'Optimizing Logistics and Navigation for On-Demand Motorcycle Delivery Services',
        sections: [
            {
                type: 'intro',
                content: [
                    'Motoman is an on-demand logistics platform designed to coordinate and optimize motorcycle courier deliveries across congested urban environments.',
                    'As Lead Product Designer, I focused on designing the mobile dispatcher application and rider navigation tools to reduce delivery errors and average transit times.'
                ]
            },
            {
                type: 'section',
                title: 'The Challenge: Congestion & Communication',
                content: [
                    'Riders operate in high-traffic urban areas, where checking their screens frequently is unsafe and inefficient. The primary areas of improvement were:'
                ],
                list: [
                    'Interface readability: Bright sunlight made standard maps hard to read',
                    'Distraction reduction: Audio-first alerts and large touch targets were needed',
                    'Real-time coordination: Seamless status tracking between riders, dispatchers, and clients'
                ]
            },
            {
                type: 'image',
                placeholder: 'Motoman App Interface - Navigation & Dispatcher Dashboard',
                caption: 'Rider navigation interface optimized for high visibility'
            },
            {
                type: 'section',
                title: 'Key Design Features',
                list: [
                    'High-contrast Map Theme: Night/day responsive templates to prevent glare',
                    'Single-Tap Quick Actions: Oversized touch targets for gloved operation',
                    'Smart Audio Cues: Voice prompts to minimize screen contact during active transit'
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
        title: 'Dino Hop',
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
                {project.deck && <p className="project-deck">{project.deck}</p>}
                <p className="project-role">{project.role}</p>
                {project.meta && project.meta.length > 0 && (
                    <ul className="project-meta">
                        {project.meta.map((item, index) => (
                            <li key={index} className="project-meta-item">
                                <span className="project-meta-label">{item.label}</span>
                                <span className="project-meta-value">{item.value}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </header>

            {project.cover && (
                <figure className="case-study-figure case-study-figure--cover">
                    <img
                        src={`${LIVE_MCQ_ASSET_DIR}/${project.cover.id}.png`}
                        alt={project.cover.alt}
                        loading="lazy"
                        className="case-study-image"
                    />
                </figure>
            )}

            {project.sections ? (
                <div className="project-case-study">
                    {project.sections.map((section, index) => (
                        <div key={index} className={`case-study-section section-${section.type}`}>
                            {section.stageLabel && <p className="case-study-stage-label">{section.stageLabel}</p>}
                            {section.eyebrow && <p className="case-study-eyebrow">{section.eyebrow}</p>}
                            {section.title && <h2 className="case-study-subtitle">{section.title}</h2>}

                            {section.content && section.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className="case-study-text">{renderRichText(paragraph)}</p>
                            ))}

                            {section.list && (
                                <ul className="case-study-list">
                                    {section.list.map((item, lIndex) => (
                                        <li key={lIndex}>{renderRichText(item)}</li>
                                    ))}
                                </ul>
                            )}

                            {section.type === 'quotes' && (
                                <div className="case-study-quote-grid">
                                    {section.quotes.map((quote, qIndex) => (
                                        <blockquote key={qIndex} className="case-study-quote">
                                            <p>{renderRichText(quote.quote)}</p>
                                            <cite>{quote.label}</cite>
                                        </blockquote>
                                    ))}
                                </div>
                            )}

                            {section.type === 'callout' && (
                                <blockquote className="case-study-callout">
                                    <p>{renderRichText(section.text)}</p>
                                </blockquote>
                            )}

                            {section.type === 'cards' && (
                                <div className="case-study-card-grid">
                                    {section.cards.map((card, cIndex) => (
                                        <div key={cIndex} className={`case-study-card${card.chosen ? ' is-chosen' : ''}`}>
                                            {card.chosen && <span className="case-study-card-badge">Chosen</span>}
                                            <h3 className="case-study-card-title">{card.title}</h3>
                                            {card.body && <p className="case-study-card-body">{renderRichText(card.body)}</p>}
                                            {card.tag && <p className="case-study-card-tag">{card.tag}</p>}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.type === 'stats' && (
                                <div className="case-study-stats">
                                    {section.stats.map((stat, sIndex) => (
                                        <div key={sIndex} className="case-study-stat">
                                            <p className="case-study-stat-value">{stat.value}</p>
                                            <p className="case-study-stat-label">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.type === 'image' && (
                                section.id ? (
                                    <figure className="case-study-figure">
                                        <img
                                            src={`${LIVE_MCQ_ASSET_DIR}/${section.id}.png`}
                                            alt={section.alt}
                                            loading="lazy"
                                            className="case-study-image"
                                        />
                                        {section.caption && <figcaption className="image-caption">{section.caption}</figcaption>}
                                    </figure>
                                ) : (
                                    <div className="placeholder-image">
                                        <div className="image-box">{section.placeholder || 'Image Placeholder'}</div>
                                        {section.caption && <p className="image-caption">{section.caption}</p>}
                                    </div>
                                )
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
