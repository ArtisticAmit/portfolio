import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'

// Public-folder path (not a static import) so dropping a real file in later
// requires no code change, and a missing placeholder never breaks the build.
// Per-project assetDir overrides this default (see project entries below).
const DEFAULT_ASSET_DIR = '/case-studies/live-mcq'

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
    'live-mcq-redesign': {
        title: 'Rebuilding Live MCQ so no one needs a tutorial to start.',
        eyebrow: 'Product Design · Case Study',
        thesis: 'Users had struggled with the app so long that some of them filmed their own YouTube tutorials to help newcomers find their way in. That video was the clearest research finding we ever got: the product couldn’t be used without a guide, and the guide lived everywhere except inside the app.',
        heroStats: [
            { value: '10', label: 'Exam targets the new IA is built around' },
            { value: '17', label: 'Pages restructured on one data-driven system' },
            { value: '3 → 1', label: 'Size classes served by one adaptive shell' },
            { value: '2', label: 'Audiences held together: veterans + first-timers' }
        ],
        meta: [
            { label: 'Product', value: 'Live MCQ — competitive-exam prep (Flutter, mobile + web)' },
            // TODO(role): confirm/replace — inferred as "Product Designer · research → IA → flows → prototype"
            { label: 'Role', value: 'TODO(role): Product Designer · research → IA → flows → prototype — confirm/replace' },
            { label: 'Framework', value: 'Design Thinking' },
            { label: 'Surface', value: 'Bengali-first UI, responsive across screen sizes' },
            // TODO(timeline): add dates and team size
            { label: 'Timeline', value: 'TODO(timeline): add dates and team size' }
        ],
        assetDir: '/case-studies/live-mcq-redesign',
        sections: [
            {
                type: 'section',
                eyebrow: 'Context',
                title: 'What Live MCQ is, and the one job users hire it for',
                content: [
                    'Live MCQ is an ed-tech platform for people preparing for competitive government job exams in Bangladesh — BCS, NTRCA, bank recruitment, and more. Underneath every feature sits one job: sit a mock exam, and find out where you stand. Around that job are the study materials that get you ready — live and pre-recorded classes, class notes, and previous exams with a written explanation for every answer.',
                    'It works because it’s social and competitive. A user picks a goal, takes the mock tests tied to it, and after results publish, reads the answer sheet, checks the mark sheet, and sees their rank on the merit list against everyone chasing the same goal. The product was never short on content or features. It was short on a way through them.'
                ]
            },
            {
                type: 'section',
                stageLabel: '01 · Empathize',
                title: 'Listening to people who were lost inside their own app',
                content: [
                    'Before touching a single screen, the goal was to understand the lived experience of the app — not what we intended it to be, but what it actually felt like to use.'
                ]
            },
            {
                type: 'text',
                content: [
                    'The support channel told the first part of the story. New users would open the app and immediately tap Contact Support — not after getting stuck, but first, before trying anything. They needed a person to walk them through basics: how to register, how to buy a package, where preparation even begins. Support wasn’t a safety net; it had become the onboarding.'
                ]
            },
            {
                type: 'section',
                title: 'What we kept hearing and seeing',
                list: [
                    'First-time users wandered the login screen, tapping buttons just to see what they did.',
                    'After registering, people didn’t know where to start.',
                    'Users couldn’t tell how to join a class, retake a missed exam, or redo an old one.',
                    'No way to answer “am I ready?” — no read on their own preparation.',
                    'Features existed that users never discovered — they didn’t know the app could do it.',
                    'Finding a known feature meant digging; people asked friends or the Facebook page.',
                    'The home screen forced users to memorise which button led where.',
                    'Buying a package — the revenue moment — was unclear enough that many never did.'
                ]
            },
            {
                type: 'callout',
                text: 'Veteran users were posting YouTube tutorials for beginners.',
                caption: 'The community had written the manual the app was missing.'
            },
            {
                type: 'text',
                content: [
                    'That last one reframed everything. It’s easy to read heavy support volume as a staffing problem. The tutorials made it undeniable that it was a design problem: the app needed external guidance to be usable, and none of that guidance lived inside it.'
                ]
            },
            {
                type: 'chips',
                title: 'How we listened — mixed methods, not vibes',
                items: [
                    'Microsoft Clarity (session replay & heatmaps)', 'User segmentation', 'Segment interviews',
                    'Task-based observation', 'Study-pattern mapping', 'Expectation gap analysis',
                    'Competitive analysis', 'Primary + secondary research', 'Quantitative + qualitative'
                ]
            },
            {
                // TODO(img): clarity-evidence
                type: 'image',
                id: 'clarity-evidence',
                alt: 'Microsoft Clarity heatmap or rage-tap session recording showing user struggle on the old Live MCQ home or login screen.',
                caption: 'Session-replay evidence of users getting stuck before they even started.'
            },
            {
                // TODO(img): research-synthesis
                type: 'image',
                id: 'research-synthesis',
                alt: 'Affinity map and segment boards synthesizing findings from interviews and task-based sessions.',
                caption: 'Synthesizing interviews and task sessions into patterns.'
            },
            {
                type: 'section',
                stageLabel: '02 · Define',
                title: 'The real problem wasn’t missing features. It was missing structure.',
                content: [
                    'Synthesis turned a pile of symptoms into a diagnosis. The app had everything; it had no legible shape.'
                ]
            },
            {
                type: 'cards',
                title: 'What the evidence added up to',
                cards: [
                    { title: 'IA · Disorganised information architecture', body: 'A large, flat feature set with no grouping — so no feature could be predicted from where it lived.' },
                    { title: 'FLOW · Unnatural user flows', body: 'Screens that needed a call-to-action didn’t have one; journeys stalled with no obvious next step.' },
                    { title: 'LOAD · High cognitive load', body: 'Nothing had breathing room — everything crammed in tight, so the eye had nowhere to rest and nothing to prioritise.' },
                    { title: 'COST · Expensive actions', body: 'Simple tasks took too long. Dead taps were high across the app, and navigation bounced back and forth instead of moving forward.' },
                    { title: '$$ · The business tell', body: 'Lots of registrations, few conversions to paid — and early users who started, then quietly stopped.' }
                ]
            },
            {
                type: 'steps',
                title: 'What users were actually trying to do',
                items: [
                    'Set a goal (an exam target)', 'Take the mock tests tied to it',
                    'Study — classes, notes, past Q&A + explanations', 'Review results — answer sheet, mark sheet',
                    'Read their rank on the merit list'
                ]
            },
            {
                type: 'callout',
                text: '“Whether they’re brand new or long-time users, people should be able to move through Live MCQ on their own — find their goal, prepare, test themselves, and see where they stand — without asking a human for directions.”'
            },
            {
                type: 'cards',
                title: 'Two constraints that shaped every decision',
                cards: [
                    { title: 'Don’t alienate the veterans', body: 'A large base of experienced users already had muscle memory. The redesign had to feel new and clearer to first-timers without yanking the floor out from under people who’d learned the old maze.' },
                    { title: 'One experience, every screen', body: 'The product spans phone and web. It had to be genuinely adaptive — the layout reshaping to the screen size — not a phone UI stretched onto a desktop.' }
                ]
            },
            {
                type: 'section',
                stageLabel: '03 · Ideate',
                title: 'Take the app apart. Find the structure it always had.',
                content: [
                    'Instead of designing screens, we started with the content model. We dissected the entire product into individual pieces of information and asked what naturally belonged together.'
                ]
            },
            {
                type: 'text',
                content: [
                    'Two organising truths fell out. First, everything in the app is anchored to an exam target and, through it, a subject in that target’s syllabus. Second, all content is one of just two kinds: an exam (made of questions) or study material (made of classes — and a class is a video plus a class note). Once those axes were named, the sprawling feature list stopped being a list and became a place with rooms.'
                ]
            },
            {
                // TODO(img): ia-before-after — signature visual: sprawl of ~24 ungrouped feature tags vs. the nested Target → Subject → Exam/Study taxonomy
                type: 'image',
                id: 'ia-before-after',
                alt: 'Before-and-after: a flat wall of roughly two dozen ungrouped feature tags (Compass, Offline, Video, PDF, Audio, Study Group, Bookstore, Quiz Game, Smart Search, Info Panel, Topic Guru, Job Solution, Wrong & Unanswered, Central Archive, Central Favourite, Central Result, Quiz Master, Profile, Referral, Packages, Statistics, Award Mania, Settings, তথ্যকল্পদ্রুম) next to a nested taxonomy: Target → Subject → Exam (Questions) / Study (Classes: video + class note).',
                caption: 'Before: two dozen features, no hierarchy — you had to already know a feature existed to find it. After: every feature hangs off a target and a content type, matching how users already think about their prep.'
            },
            {
                type: 'chips',
                title: 'Ten targets became the backbone',
                items: [
                    'BCS', 'NTRCA', 'Primary Teacher', '9th–13th Grade', '14th–20th Grade',
                    'Bar', 'BJS', 'Nursing & Midwifery', 'BCS (Education)', 'BCS (Health)'
                ]
            },
            {
                type: 'text',
                content: [
                    'Each with its own syllabus, subjects, and exam data behind it, not just a label.'
                ]
            },
            {
                type: 'cards',
                title: 'And a place to grow into',
                cards: [
                    { title: 'Job Circular Alert', body: 'Surface new postings for the target a user is prepping for.' },
                    { title: 'Application Tracker', body: 'Follow each application through circular → exam → result.' },
                    { title: 'CV Builder', body: 'Turn preparation into an application, without leaving the app.' }
                ]
            },
            {
                type: 'section',
                stageLabel: '04 · Prototype',
                title: 'A working prototype, built to make the decisions visible',
                content: [
                    'The IA became a real, navigable prototype spanning seventeen pages — every one rendered from a single data-driven system, so the whole product stays consistent by construction.'
                ]
            },
            {
                type: 'section',
                title: 'One adaptive shell, three forms',
                content: [
                    'Compact renders a bottom bar, medium a navigation rail, expanded a navigation drawer — it changes form, not just width, by size class.'
                ]
            },
            {
                // TODO(img): adaptive-nav — triptych: compact (bottom bar), medium (navigation rail), expanded (navigation drawer)
                type: 'image',
                id: 'adaptive-nav',
                alt: 'Triptych showing the navigation shell changing form across size classes: a bottom bar in compact, a navigation rail in medium, and a navigation drawer in expanded.'
            },
            {
                type: 'cards',
                title: 'The three moves that attacked the findings directly',
                cards: [
                    { title: 'Goal-aware home', body: 'The home page personalises to the user’s chosen target, so they no longer have to memorise which button leads where. It answers “what do I do now?” on open.' },
                    { title: 'Redesigned onboarding & login', body: 'A first-run flow that sets a goal and starts users in the right place — directly targeting the wandering-the-login-screen behaviour.' },
                    { title: 'CTAs where journeys stall', body: 'Every screen now offers its obvious next action, so a path never dead-ends and dead taps have somewhere to go.' }
                ]
            },
            {
                // TODO(img): new-home
                type: 'image',
                id: 'new-home',
                alt: 'The redesigned goal-aware home screen, phone and desktop.'
            },
            {
                // TODO(img): onboarding-before-after
                type: 'image',
                id: 'onboarding-before-after',
                alt: 'The old login screen next to the new first-run onboarding flow.'
            },
            {
                type: 'section',
                stageLabel: '05 · Test',
                title: 'Validate against the exact tasks that used to fail',
                content: [
                    'The tasks people couldn’t complete in research became the pass/fail criteria for the prototype — the same task-based method, run again on the new flows.'
                ]
            },
            {
                type: 'text',
                content: [
                    'The bar was simple and unforgiving: could a first-time user, with no help and no tutorial, get through the core loop? Register, pick a goal, find and start a mock test, and get a read on their readiness — alone.'
                ]
            },
            {
                type: 'section',
                title: 'The task battery',
                list: [
                    'Register and reach a useful home unaided',
                    'Pick an exam target and understand what it changed',
                    'Find and start a mock test for that target',
                    'Locate a class / note without asking anyone',
                    'Find “where do I stand?” after a result'
                ]
            },
            {
                // TODO(content): test-findings — qualitative usability results not yet supplied
                type: 'pending',
                label: 'Awaiting findings',
                text: 'Usability results (qualitative) — completion without help, drop in support-first taps, veteran reactions. To be supplied; keep qualitative, no invented numbers.'
            },
            {
                type: 'section',
                stageLabel: '06 · Iterate',
                title: 'The system earned the right to get simpler',
                content: [
                    'A later pass shows the redesign holding up under change — and, tellingly, most of the moves removed things. Structure that fits the problem lets you take complexity away.'
                ]
            },
            {
                type: 'text',
                content: [
                    'Growing from three goals to ten would normally pile on decisions. Instead, onboarding dropped a step: the old flow asked users to tap a star to nominate a primary target after multi-selecting. Now selection order decides it — whichever target you pick first becomes primary. The star and the daily-study-hours slider were removed outright, not restyled.'
                ]
            },
            {
                type: 'compare',
                rows: [
                    { before: 'Multi-select, then tap a star to set your primary target — an extra decision per target.', after: 'Selection order sets primary automatically. First pick wins. Star removed.' },
                    { before: 'Home carried progress rings, an end-of-day countdown, and a day-timeline with prev/next/date-picker — all hand-maintained.', after: 'Plain “all exams / all results / all classes” links to the full pages that already existed. Less to keep in sync.' },
                    { before: 'Exam and result cards were separate one-off layouts that only knew attended / unattended / upcoming.', after: 'One shared card component understands live and provisional states too — used by home, exam center, and results alike.' }
                ]
            },
            {
                type: 'text',
                content: [
                    'Type and iconography got a quieter tune in the same pass — titles set lighter, body copy a touch heavier, and icon strokes thinned across the app — small moves that let the denser exam content breathe. The direction of every change was the same: match the structure to how people actually work, then remove whatever the structure made unnecessary.'
                ]
            },
            {
                type: 'section',
                title: 'Learnings',
                list: [
                    '**A product that needs a tutorial has a research finding, not a support problem.** The community’s YouTube videos were the sharpest signal in the whole project. Read heavy support volume as a symptom of design, not a cost to staff around.',
                    '**Fix the information architecture before the pixels.** The app didn’t need more features or prettier screens. It needed a structure that matched the user’s mental model — goal, then subject, then content. Everything downstream got easier once the model was right.',
                    '**The best redesign move is often removal.** Rings, timers, timeline controls, an onboarding star — all deleted. When structure fits the problem, you earn the ability to subtract, and subtraction is what lowers cognitive load.',
                    '**Adaptive is a form change, not a width change.** Serving phone and web meant the navigation reshaping itself per size class — bottom bar, rail, drawer — so each screen feels native instead of stretched.',
                    '**Redesign for two audiences at once.** Clearer for first-timers, familiar enough for veterans. Holding both was a harder constraint than either alone, and it kept the work honest.'
                ]
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
                {project.eyebrow && <p className="project-eyebrow">{project.eyebrow}</p>}
                <h1 className="project-title">{project.title}</h1>
                {project.deck && <p className="project-deck">{project.deck}</p>}
                {project.thesis && <p className="project-thesis">{renderRichText(project.thesis)}</p>}
                {project.heroStats && project.heroStats.length > 0 && (
                    <div className="case-study-stats project-hero-stats">
                        {project.heroStats.map((stat, index) => (
                            <div key={index} className="case-study-stat">
                                <p className="case-study-stat-value">{stat.value}</p>
                                <p className="case-study-stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                )}
                {project.role && <p className="project-role">{project.role}</p>}
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
                        src={`${project.assetDir || DEFAULT_ASSET_DIR}/${project.cover.id}.png`}
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
                                    {section.caption && <p className="case-study-callout-caption">{section.caption}</p>}
                                </blockquote>
                            )}

                            {section.type === 'chips' && (
                                <div className="case-study-chip-list">
                                    {section.items.map((item, chipIndex) => (
                                        <span key={chipIndex} className="case-study-chip">{item}</span>
                                    ))}
                                </div>
                            )}

                            {section.type === 'steps' && (
                                <div className="case-study-steps">
                                    {section.items.map((item, stepIndex) => (
                                        <React.Fragment key={stepIndex}>
                                            {stepIndex > 0 && <span className="case-study-steps-arrow" aria-hidden="true">→</span>}
                                            <span className="case-study-step">{item}</span>
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}

                            {section.type === 'compare' && (
                                <table className="case-study-compare">
                                    <thead>
                                        <tr>
                                            <th scope="col">Before</th>
                                            <th scope="col">After</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {section.rows.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                <td>{renderRichText(row.before)}</td>
                                                <td>{renderRichText(row.after)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}

                            {section.type === 'pending' && (
                                <div className="case-study-pending">
                                    {section.label && <p className="case-study-pending-label">{section.label}</p>}
                                    <p className="case-study-pending-text">{section.text}</p>
                                </div>
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
                                            src={`${project.assetDir || DEFAULT_ASSET_DIR}/${section.id}.png`}
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
