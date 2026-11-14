import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'
import {
    Fragments, Languages, Decision, Pipeline, ColorTuning, PaletteEvolution, FontEval,
    TypeSystem, Buttons, Icons, Spacing, TestLoop
} from '../components/infographics/LiveDesignKitInfographics'

// Coded infographics a case study can reference by name: { type: 'infographic', name }.
const infographics = {
    fragments: Fragments,
    languages: Languages,
    decision: Decision,
    pipeline: Pipeline,
    'color-tuning': ColorTuning,
    'palette-evolution': PaletteEvolution,
    'font-eval': FontEval,
    'type-system': TypeSystem,
    buttons: Buttons,
    icons: Icons,
    spacing: Spacing,
    'test-loop': TestLoop
}

// Images that haven't been supplied yet show an intentional "coming soon"
// banner instead of broken alt text; dropping the file in swaps it for the
// real image with no code change.
const MediaSlot = ({ src, alt, caption, className = '' }) => {
    const [missing, setMissing] = useState(false)

    if (missing) {
        return (
            <figure className={`case-study-figure ${className}`}>
                <div className="case-study-banner" role="note">
                    <span className="case-study-banner-icon" aria-hidden="true">◐</span>
                    <div>
                        <p className="case-study-banner-label">Visual coming soon</p>
                        <p className="case-study-banner-text">{alt}</p>
                    </div>
                </div>
                {caption && <figcaption className="image-caption">{caption}</figcaption>}
            </figure>
        )
    }

    return (
        <figure className={`case-study-figure ${className}`}>
            <img src={src} alt={alt} loading="lazy" className="case-study-image" onError={() => setMissing(true)} />
            {caption && <figcaption className="image-caption">{caption}</figcaption>}
        </figure>
    )
}

// Public-folder path (not a static import) so dropping a real file in later
// requires no code change, and a missing placeholder never breaks the build.
// Per-project assetDir overrides this default (see project entries below).
const DEFAULT_ASSET_DIR = '/case-studies/live-mcq'

// Lets case-study copy use **bold** and *italic* the same way it was authored, without a markdown dependency.
const renderRichText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g)
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
        if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>
        return <React.Fragment key={index}>{part}</React.Fragment>
    })
}

const projectData = {
    'live-mcq': {
        title: 'Live MCQ Design System',
        eyebrow: 'UI/UX Design · Case Study',
        thesis: 'From Fragmented Screens to a Scalable Learning System - Building a Design System for an EdTech App',
        role: 'As UI/UX Designer',
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
        eyebrow: 'Design System · A story in five chapters',
        thesis: 'Live MCQ had grown into an app that felt like several apps. This is how it learned to speak one language again — told through the five stages of design thinking.',
        // TODO: confirm exact role title
        role: 'Design System Owner · UI/UX & Product Designer',
        meta: [
            { label: 'Platform', value: 'Flutter (Mobile & Web)' },
            { label: 'Foundation', value: 'Material Design (customized)' },
            { label: 'Tools', value: 'Figma · Material Theme Builder' }
            // TODO: add a Timeline entry here if you want one, e.g. { label: 'Timeline', value: '...' }
        ],
        // Renders a "coming soon" banner until public/case-studies/live-mcq/cover.png exists.
        cover: { id: 'cover', alt: 'Cover shot of the Live Design Kit — the hero image for this story.' },
        story: true,
        sections: [
            {
                type: 'intro',
                stageLabel: 'Prologue',
                content: [
                    'Tap through a few screens of the old Live MCQ and nothing looked broken. But something felt off. A button was a pill on one screen and a hard-edged rectangle on the next. Headlines switched typefaces. Icons looked like they came from different apps — because they did. Switch to dark mode, and some of the text simply faded into the background.',
                    'Nobody set out to build it that way. It happened one feature at a time. This is the story of how we noticed, why it kept happening, and how one design kit gave the whole team a single language to speak.'
                ]
            },
            {
                type: 'section',
                stageLabel: 'Chapter 1 · Empathize',
                title: 'Two sides of the same frustration',
                content: [
                    'I didn’t start in Figma. I started by listening — to the students using the app, and to the designers and developers building it. They described very different pain. But when I lined their words up side by side, they were describing the same thing.'
                ]
            },
            {
                type: 'quotes',
                quotes: [
                    { label: 'Students using the app', quote: 'Every screen looks a little different — is this even the same app? And in dark mode it’s hard to read.' },
                    { label: 'Designers & developers building it', quote: 'We rebuild the same button from scratch every feature, and we don’t even call things by the same names.' }
                ]
            },
            {
                type: 'text',
                content: [
                    'Behind those quotes was a pattern. Every new feature got new components — designed from scratch by a designer, then rebuilt from scratch by a developer. With no style guide and no shared vocabulary, each person made their own reasonable choices. The app had become the sum of everyone’s reasonable choices.',
                    'So I audited it. Screen by screen, component by component, I collected every version of everything.'
                ]
            },
            {
                type: 'infographic',
                name: 'fragments',
                caption: 'Reconstructed from the audit to show the pattern. Every “Start exam” was somebody’s reasonable choice.'
            },
            {
                type: 'text',
                content: [
                    'The quietest finding was the most serious. Accessibility had fallen through the cracks: color contrast didn’t meet standards, and dark mode had been assembled from colors that were never meant for it.'
                ]
            },
            {
                type: 'section',
                stageLabel: 'Chapter 2 · Define',
                title: 'The problem wasn’t a screen. It was the missing system.',
                content: [
                    'With the audit laid out, the scattered complaints collapsed into one diagnosis. Fixing screens one at a time would never hold — the next feature would simply bring the mess back.',
                    'Technically, a basic design system already existed. But it was never updated, never consistently followed, and never came with implementation guidelines for developers. So designers invented patterns on demand, several developers worked without a shared standard, and everyone shipped their own version of everything.',
                    'Then I found the deeper cause, hiding in the stack itself.'
                ]
            },
            {
                type: 'infographic',
                name: 'languages',
                caption: 'Flutter’s widgets are grounded in Material. Our screens were borrowing from three design languages at once.'
            },
            {
                type: 'text',
                content: [
                    'Some screens felt like SwiftUI, others like shadcn/ui, others like Material. Each of those systems carries its own grammar. Mixing them made everything slower to build and impossible to keep consistent. The problem wasn’t any one screen — it was the absence of a system.'
                ]
            },
            {
                type: 'callout',
                text: '**How might we** give every screen one consistent, accessible visual language — without slowing down the way our teams already ship?'
            },
            {
                type: 'section',
                stageLabel: 'Chapter 3 · Ideate',
                title: 'Three roads out',
                content: [
                    'There was more than one way out, and each looked appealing from a distance. But a system is only as good as its ability to survive real teams and real deadlines. So I put every road through the same three questions: how flexible is it, how fast can we stand it up, and will it still be standing in a few years?'
                ]
            },
            {
                type: 'infographic',
                name: 'decision',
                caption: 'Each road, scored against the same three questions.'
            },
            {
                type: 'text',
                content: [
                    'Material didn’t win because it was the easiest road. It won because it was the one we could own. It was already native to Flutter, mature enough to trust, and customizable enough to become ours — **a foundation to extend, not a template to accept.**'
                ]
            },
            {
                type: 'section',
                stageLabel: 'Chapter 4 · Prototype',
                title: 'Making Material sound like us',
                content: [
                    'I generated a base theme with Material Theme Builder. That was the easy part. The real work was bending it, piece by piece, until it sounded like Live MCQ — and then proving it inside a real app.'
                ]
            },
            {
                type: 'infographic',
                name: 'pipeline',
                caption: 'From Material’s defaults to a kit that’s ours. Most of the story happens in step three.'
            },
            {
                type: 'subsection',
                title: 'Color: between too quiet and too loud',
                content: [
                    'Material’s default tones felt muted — safe, but characterless. Our brand colors sat at the opposite extreme: highly saturated, perfect on a logo, exhausting across a whole screen. I re-tuned the tonal values to land between the two, keeping the personality and losing the glare — while staying accessible in both light and dark.',
                    'Before any of this, color was a set of brand swatches scattered across four Figma frames, each a slightly different copy, and the app used a handful of them at random. My first draft gathered them into named tokens but kept the brand colors almost as-is — a 3333FF blue and an FF6600 orange — across twenty tokens. It looked bold in Figma and fell apart in components: nothing told you which color sat on which, and there was no way to express elevation. Feeding 3333FF into Material Theme Builder gave us a complete system, but a muted, lavender one: exactly the “too quiet” end. So the next pass rebuilt the draft’s own colors on Material’s roles, so every color finally came with the partners it needs, but the containers didn’t change between light and dark, and the orange sank to a brown. The final tune fixed both: a deeper 1441CC primary, a clear blue secondary, orange back as a vivid tertiary, and containers tuned separately for each mode.'
                ]
            },
            {
                type: 'infographic',
                name: 'color-tuning'
            },
            {
                type: 'infographic',
                name: 'palette-evolution',
                caption: 'Five stages of the palette: scattered Figma swatches, a first draft of tokens, Material’s default, our colors on Material roles, and the final tune. Switch stages and modes to compare.'
            },
            {
                type: 'subsection',
                title: 'Type: a family that speaks both languages',
                content: [
                    'Live MCQ is bilingual, so type wasn’t decoration — it was infrastructure. We had been pairing Kalpurush for Bangla with Inter for English, but Kalpurush lacked multilingual and symbol support: a structural weakness for a product that lives in two scripts. I put three candidates in front of real content — **Balooda**, **Anek Bangla**, and **Noto Sans**.'
                ]
            },
            {
                type: 'infographic',
                name: 'font-eval',
                caption: 'The font trial: same exam copy, three candidates.'
            },
            {
                type: 'text',
                content: [
                    'Noto won on stability and language support, and that decision shaped the whole type system: Noto Sans for headings and UI, Noto Serif for long-form reading, on a type scale reworked from Material’s defaults to match our identity.'
                ]
            },
            {
                type: 'infographic',
                name: 'type-system'
            },
            {
                type: 'subsection',
                title: 'Components, icons, and the space between',
                content: [
                    'With color and type settled, the rest of the kit followed: standardized, reusable components that are designed once and used everywhere. The button family was the first proof — four improvised buttons became one family with four clear roles.'
                ]
            },
            {
                type: 'infographic',
                name: 'buttons',
                caption: 'Rendered in code to show the structure; production colors come from the tuned palette.'
            },
            {
                type: 'text',
                content: [
                    'For icons, one library instead of several: Material Symbols. It comes in three styles, so I set Outlined, Rounded and Sharp side by side on the same glyphs. Outlined’s squared terminals felt plain and Sharp’s hard corners felt too technical for a study app. Rounded’s soft terminals matched our style. Then I tuned the weight and settled on 300, light enough to sit quietly next to Noto without disappearing.'
                ]
            },
            {
                type: 'infographic',
                name: 'icons'
            },
            {
                type: 'text',
                content: [
                    'And underneath everything, a consistent spacing system built on a 4px base — so layouts stop being negotiated screen by screen.'
                ]
            },
            {
                type: 'infographic',
                name: 'spacing'
            },
            {
                type: 'section',
                stageLabel: 'Chapter 5 · Test',
                title: 'If it only works in Figma, it doesn’t work',
                content: [
                    'A design system that lives only in a design file isn’t a system yet. So I built a demo Flutter app and implemented the kit inside it. Components had to hold up in context, next to each other, in real code — not just look right in isolation.',
                    'This is where design thinking stops being a line and becomes a loop. Whenever a component failed a usability or visual check because of color, I went back to the palette, re-tuned the tonal values, and ran it again — in light and in dark — until every component passed.'
                ]
            },
            {
                type: 'infographic',
                name: 'test-loop',
                caption: 'The loop every component went through before it entered the kit.'
            },
            {
                // Renders a "coming soon" banner until test-demo-app.png exists.
                type: 'image',
                id: 'test-demo-app',
                alt: 'Screens from the demo Flutter app built with the new design system, in light and dark.',
                caption: 'The system, proven in a real build.'
            },
            {
                type: 'section',
                title: 'What changed',
                content: [
                    'The biggest shift wasn’t visual. It was that design and engineering finally meant the same thing when they said the same word.'
                ]
            },
            {
                type: 'compare',
                rows: [
                    { before: 'The same button was rebuilt for every feature — once in Figma, again in code.', after: 'Standardized, reusable components that both sides pick up instead of reinventing.' },
                    { before: 'The same color or component could carry two different names.', after: 'Shared tokens, naming, and documentation — one name, understood on both sides of the handoff.' },
                    { before: 'Contrast fell below standards; dark mode was an afterthought.', after: 'Contrast meets accessibility standards, and dark mode is coherent by design.' },
                    { before: 'A basic system that nobody updated or followed.', after: 'A living kit with a clear process to identify, discuss, and resolve issues as they surface.' }
                ]
            },
            {
                type: 'stats',
                stats: [
                    { value: '1', label: 'Unified system replacing many improvised ones' },
                    { value: '3', label: 'Typefaces trialled for multilingual support' },
                    { value: '2', label: 'Themes — light & dark, both accessible' },
                    { value: '1', label: 'Shared vocabulary across design & dev' }
                ]
            },
            {
                type: 'section',
                stageLabel: 'Epilogue · Iterate',
                title: 'The loop keeps turning',
                content: [
                    'The kit isn’t finished, and that’s the point. It keeps evolving as new needs surface. Here’s what I carried out of it.'
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
    'tasker': {
        title: 'Tasker',
        eyebrow: 'Product Design · Case Study',
        thesis: 'A task management service that helps a team plan, assign and track its work in one place.',
        // TODO: confirm exact role title
        role: 'Product Designer',
        // TODO: add real details/contributions for this project
        details: [
            'TODO: add key contributions for Tasker.',
        ]
    },
    'fordo': {
        title: 'Fordo',
        eyebrow: 'Product Design · Case Study',
        thesis: 'A doctor’s appointment booking service that helps patients find a doctor and book a visit.',
        // TODO: confirm exact role title
        role: 'Product Designer',
        // TODO: add real details/contributions for this project
        details: [
            'TODO: add key contributions for Fordo.',
        ]
    },
    'live-mcq-redesign': {
        title: 'Live MCQ',
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
    'kormokhali': {
        title: 'কর্মখালি (kormokhali)',
        eyebrow: 'Product Design · A story told through design thinking',
        thesis: 'How a single HTML file turned into Bangladesh’s editor-checked guide to government jobs in six weeks. It began as one question: **what would it take for a job seeker to trust one place, in their own language, to tell them what matters today?**',
        heroStats: [
            { value: '6 wks', label: 'From a single HTML file to a live product' },
            { value: '202', label: 'Commits, each shipped live to real visitors' },
            { value: '251 → 50 KB', label: 'Home page size after the performance pass' },
            { value: '5', label: 'Versions of the feed before the rule got simple' }
        ],
        meta: [
            { label: 'Product', value: 'kormokhali.net: government job circulars, exam notices and results, Bangla only' },
            { label: 'Role', value: 'Product designer, developer and first editor' },
            { label: 'Timeline', value: '3 Oct – 14 Nov 2026 (6 weeks, 202 commits)' },
            { label: 'Platform', value: 'Mobile-first web app: Astro on Cloudflare Workers, Supabase, an AI intake pipeline (Claude Cowork)' },
            { label: 'Users', value: 'Government job seekers in Bangladesh, and the editors who keep the site accurate' }
        ],
        assetDir: '/case-studies/kormokhali',
        // Renders a "coming soon" banner until public/case-studies/kormokhali/cover.png exists.
        cover: { id: 'cover', alt: 'Cover: the kormokhali feed and a recruitment timeline on a phone.' },
        story: true,
        sections: [
            {
                type: 'intro',
                stageLabel: 'Prologue',
                content: [
                    'Picture a graduate in a district town. They want a government job, and they’re not the only one: for many Bangladeshi graduates a government post is *the* goal. Hundreds of ministries, directorates, banks, boards, forces and public universities publish openings.',
                    'To keep up, they have to watch dozens of websites. Many notices come out as scanned PDFs, often several megabytes, which have to be downloaded over mobile data to read a deadline. A newspaper might reprint a circular as a photo. The job portals that collect these notices are crowded with ads, copied text and posts that never say whether the information is official.',
                    'Missing one notice can cost a year. A recruitment is never a single event either: a circular is followed by an admit card, a preliminary exam, a written exam, a viva, results and a gazette, sometimes over more than a year. Every stage has its own notice and its own date, and every date can be missed.'
                ]
            },
            {
                type: 'steps',
                title: 'The loop this story follows',
                items: ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test', 'back to Define']
            },
            {
                type: 'text',
                content: [
                    'The project didn’t run through the five stages once in order. It went round the loop several times, and every test fed back into a sharper definition of the problem. The biggest turn came on day six, when a test sent the project back to Define and the data model was rebuilt around a new understanding of what a “job” is.'
                ]
            },
            {
                type: 'section',
                stageLabel: 'Chapter 1 · Empathize',
                title: 'Two people with the same problem',
                content: [
                    'The project serves two people, and both had to be understood: the job seeker reading the site, and the editor keeping it accurate.'
                ]
            },
            {
                type: 'compare',
                columns: ['What the job seeker experiences', 'What it means for the design'],
                rows: [
                    { before: 'They read and search in **Bangla**, but often type in English or Banglish (shikkhok for শিক্ষক, “teacher”; kustia for Kushtia).', after: 'Bangla-only interface; search has to match however people spell.' },
                    { before: 'They’re almost always on a **phone**, often on metered data.', after: 'Light pages, no heavy PDFs by default, one-column layouts.' },
                    { before: 'A **missed deadline loses the job**, while a missed result can still be read tomorrow.', after: 'Urgency, not recency, should decide what comes first.' },
                    { before: 'They follow a recruitment **through many stages over months**.', after: 'A job isn’t a notice; it’s a journey with a timeline.' },
                    { before: 'They’ve been burned by **unofficial, copied information**.', after: 'Every claim needs a path back to the official source.' },
                    { before: 'They hear about jobs **through Facebook and messaging apps**.', after: 'Sharing and social channels are part of the product, not an add-on.' }
                ]
            },
            {
                type: 'subsection',
                title: 'The editor',
                content: [
                    'The second person was the editor, at first just me. An editor’s day means finding a notice, opening a PDF, typing up post names, grades, pay scales, age limits, fees and deadlines, checking them, and publishing. It’s slow, repetitive and easy to get wrong, and one wrong deadline breaks the site’s promise.'
                ]
            },
            {
                type: 'callout',
                text: '**Empathy insight:** the site can only be as trustworthy and timely as the editor’s workflow allows. Designing for the editor *is* designing for the job seeker.'
            },
            {
                // TODO(content): direct observations, conversations with job seekers, or analytics
                type: 'pending',
                label: 'Awaiting evidence',
                text: 'Direct observations, conversations with job seekers, or analytics that informed these points (e.g. share of mobile visitors, most-searched words).'
            },
            {
                type: 'section',
                stageLabel: 'Chapter 2 · Define',
                title: 'Framing the problem (twice)',
                content: [
                    'The first definition (3–7 October) was simple: job seekers need **a clean, searchable list of government job notices** so they can find openings without visiting many sites. It produced a working product within days: a feed of notices, search, filters, saved jobs, and an admin for adding notices.',
                    'Once real notices were going in, that framing started to break. An admit card wasn’t a new job; it was the next chapter of one the visitor already cared about. Notices and “tracks” (series of related notices) lived in separate tables, and the editor kept having to connect them by hand.',
                    'A written spec reframed the whole product: a **নিয়োগ (recruitment)** is the one thing the admin creates. Everything that happens to it is a **ধাপ (step)** on it: circular, admit card, exam, result.'
                ]
            },
            {
                type: 'callout',
                text: 'A government job seeker needs to **follow each recruitment from circular to final result**, because every stage has a date they can’t afford to miss, and the information is scattered across official PDFs they can’t easily read or trust.'
            },
            {
                type: 'section',
                title: 'How might we…',
                list: [
                    '…show **what matters today** instead of what was posted last?',
                    '…make an official notice **readable on a phone** without downloading a heavy PDF?',
                    '…keep every fact **traceable to its official source**?',
                    '…let **one editor** keep pace with every government recruitment in the country?',
                    '…reach people **where they already are**, on Facebook and Instagram?'
                ]
            },
            {
                type: 'section',
                stageLabel: 'Chapter 3 · Ideate',
                title: 'Principles before features',
                content: [
                    'Rather than a list of features, ideation produced a few principles that settled many later decisions.'
                ]
            },
            {
                type: 'cards',
                cards: [
                    { title: 'Bangla only', body: 'The site was briefly bilingual and dropped English on day three. One language, done well.' },
                    { title: 'Every update has its own URL', body: 'Each stage is a real, server-rendered page with its own title and description, so search engines and shared links lead straight to the right stage.' },
                    { title: 'Point to the source', body: 'Link to the organisation’s own file and show a light preview of its first page. Never host the PDF.' },
                    { title: 'Urgency decides the order', body: 'The feed is sorted by what a job seeker could lose today.' },
                    { title: 'Machines draft, people publish', body: 'AI can read the PDFs; an editor checks every field before anything goes live.' }
                ]
            },
            {
                type: 'compare',
                title: 'Ideas that were tried and dropped',
                columns: ['Idea', 'Why it went'],
                rows: [
                    { before: 'Notification settings and “Notify me”', after: 'Replaced with “Add to calendar” for upcoming circulars: simpler, and it works without accounts.' },
                    { before: '**News (খবর)** as its own kind of step', after: 'Newspaper reports became *sources* of official steps, flagged as unofficial, so news couldn’t pass as an official notice.' },
                    { before: 'Hosting PDFs and rendering them with pdf.js', after: 'Replaced by an ~50 KB WebP preview and a link to the original: faster, lighter, and clearly pointing to the official copy.' },
                    { before: 'An “edited by an editor” line on each page', after: 'Folded into one disclaimer reminding people to check the official notice.' },
                    { before: 'A rotating “hourly pick” and “unopened first” in the feed', after: 'Tested, then dropped for a simpler rule (see Test).' }
                ]
            },
            {
                type: 'section',
                stageLabel: 'Chapter 4 · Prototype',
                title: 'Six acts of building',
                content: [
                    'The product was built live: every push to main deploys to kormokhali.net, so each prototype was the real thing, in front of real visitors.'
                ]
            },
            {
                type: 'subsection',
                title: 'Act I · From one file to a real website (3–7 Oct)',
                content: [
                    'It started as **Jobnest**, a single HTML file exported from a prototyping tool, with images inlined as base64. On day one it was split into a proper project. By day three it had moved to **Astro, server-rendered on Cloudflare Workers**, so every notice had a real URL, a sitemap and HTML that search engines could index, while the same code ran in the browser for instant search and filters.',
                    'On day four the data moved into **Supabase**: 16 real notices and 3 BCS tracks, with access rules so visitors could read published rows and report mistakes, and nothing else. On day five came the **admin**, where editors sign in to add, edit and publish notices and handle reports.'
                ]
            },
            {
                type: 'subsection',
                title: 'Act II · The reframe (8–10 Oct)',
                content: [
                    'After the redefinition, the data model was rebuilt in two days around recruitments and the steps that carry their own posts. Each step got a **ধরন and উপ-ধরন** (type and subtype), such as পরীক্ষা · লিখিত (exam · written), which decides its name, its fields and its URL ending, so editors no longer type names that could vary.',
                    '10 October saw 35 commits, the busiest day of the project, as the site and admin were reshaped around the new model:'
                ],
                list: [
                    '**Job cards** got their label from the recruitment’s *latest* step, and a circular whose application had closed turned grey everywhere.',
                    '**The timeline** split the application into two dated steps, আবেদন শুরু (opens) and আবেদন শেষ (closes).',
                    '**Official notices** became a preview picture of the first page on an A4 card that opens the original file.',
                    '**The admin** got its own dropdowns and calendar, a grade that fills in its pay scale, fee and age limits, and guide text tucked behind info buttons.'
                ]
            },
            {
                type: 'image',
                id: 'recruitment-timeline',
                alt: 'A recruitment page showing its steps on one timeline, from circular to result.',
                caption: 'One recruitment, many steps: the model the whole product was rebuilt around.'
            },
            {
                type: 'subsection',
                title: 'Act III · Easing the editor’s burden (10–17 Oct)',
                content: [
                    'The editor’s empathy insight became a system. A written **skill for Claude Cowork** teaches an AI assistant to read a notice PDF and write a structured step file plus a WebP preview, which the admin imports as a **draft**. Nothing goes live without an editor’s check, and the skill’s first rule is *never guess*.',
                    'Real notices kept exposing edge cases, and each one became a rule:'
                ],
                list: [
                    'An application closes at **the circular’s own hour** on its last day, not at midnight.',
                    'Some organisations use **their own pay grades**, so the skill writes the circular’s pay scale and keeps the organisation’s grade as a note.',
                    '**Fees** come in many shapes, so the skill takes the highest stated amount and adds the parts up when no total is given.',
                    '**Age relaxations** for particular groups get their own note under the age limit.',
                    'An **internship** notice’s title says ইন্টার্নশিপ (internship) instead of নিয়োগ (recruitment).'
                ]
            },
            {
                type: 'subsection',
                title: 'Act IV · Becoming kormokhali, and learning to travel (19–20 Oct)',
                content: [
                    'On 19 October Jobnest became **কর্মখালি (kormokhali)**, a familiar Bangla word for job vacancies, on its own domain, with the old addresses redirecting. The same day the product learned to travel:'
                ],
                list: [
                    '**A share picture**: a 1024 × 1024 image of the page’s header with the logo and address, which the phone’s share sheet can send with the text.',
                    '**A PDF loader**: a tap shows progress while the official file downloads through the site’s own proxy, and opens only once it has fully arrived. Going back returns to the exact page it came from.',
                    '**Facebook and Instagram auto-posting**: every newly published step is posted with its share picture, and a circular is posted again on the morning its application opens and on its last day: আজ আবেদনের শেষ দিন (“Today is the last day to apply”).'
                ]
            },
            {
                type: 'image',
                id: 'share-picture',
                alt: 'A kormokhali share picture as it appears on Facebook and Instagram.',
                caption: 'Every step travels as a picture, made for the feeds where job seekers already are.'
            },
            {
                type: 'subsection',
                title: 'Act V · Running it every day (22–31 Oct)',
                content: [
                    'With the product live, the work turned to operations:'
                ],
                list: [
                    '**Scheduling**: editors can set a step to go live later. Every five minutes the Worker publishes what’s due and posts it to social media.',
                    '**A dashboard** answers “what needs doing today?”: planned steps whose expected date has arrived, scheduled posts, applications closing this week, and open reports.',
                    '**Reels**: the admin’s browser animates the share card piece by piece into a 1080 × 1920 MP4 for each post, because Facebook and Instagram reward video and a server can’t easily make one.',
                    '**Update mode for Cowork**: the editor says আপডেট দাও (“give me updates”), and the assistant scans a notice aggregator, keeps only government notices, fetches each one’s official file from the organisation’s own website, and processes it.',
                    '**An inbox**: Cowork sends each finished step with a write-only key. Drafts appear in the admin on their own, and the AI never holds an editor’s login.'
                ]
            },
            {
                type: 'callout',
                text: 'The editor’s job moved from **typing** to **reviewing**.'
            },
            {
                type: 'subsection',
                title: 'Act VI · Refining the everyday experience (6–14 Nov)',
                content: [
                    'The last stretch went to the two screens job seekers use most, the **feed** and the **card**, covered in detail under Test below.'
                ]
            },
            {
                type: 'section',
                stageLabel: 'Chapter 5 · Test',
                title: 'Learning in public',
                content: [
                    'There was no separate usability lab. Every change went live, and the site, its data and its own behaviour were the test. Each problem below was found by watching the product in use, and each fix went back through Define and Ideate.'
                ]
            },
            {
                type: 'compare',
                title: 'Story 1 · What should come first? Five versions of the feed',
                columns: ['Rule', 'What testing showed'],
                rows: [
                    { before: '**v0 (3 Oct)** · “Newest first” or “Closing soonest” sort', after: 'The visitor had to choose, and neither choice matched what they needed.' },
                    { before: '**v1 (8 Oct)** · Grouped by urgency: today’s notices → key dates in 7 days → open applications → later → closed', after: 'Better, but a notice published today stayed on top all day, *above an application closing tonight*.' },
                    { before: '**v2 (6 Nov)** · Closing today or tomorrow first; one open recruitment takes an hourly turn at the top; unopened before opened', after: 'Cards **jumped around**: opening a card and coming back moved it down, and the hourly pick changed mid-visit.' },
                    { before: '**v2.1 (6 Nov)** · Freeze the order for the length of a visit', after: 'Stable, but new notices still sank: a one-day-old result sat at **#127**.' },
                    { before: '**v3 (14 Nov)** · A recruitment rises for the 3 days around each key date; on the same day: closing, exam, opening, new', after: 'A simpler rule that rotates by itself day to day. The hourly pick and unopened-first were dropped.' }
                ]
            },
            {
                type: 'callout',
                text: '**Lesson:** cleverness lost to a single rule anyone could explain: *things near their important date come first.*'
            },
            {
                type: 'subsection',
                title: 'Story 2 · Five words that matter',
                content: [
                    'On 13 November, 14 commits went into one line of text on each card: how to say when an application is open.'
                ]
            },
            {
                type: 'steps',
                items: [
                    'আবেদন চলমান (label above the title)',
                    'আবেদন চলছে: ১৯ নভেম্বর পর্যন্ত',
                    'আবেদন শেষ: ১৯ নভেম্বর',
                    'শেষ তারিখ: ৩০ নভেম্বর'
                ]
            },
            {
                type: 'text',
                content: [
                    'The problem: আবেদন শেষ means both “closes” and “closed”, so an open application and a finished one read almost the same. The closed one became **আবেদন গ্রহণ শেষ** (“no longer accepting applications”), and every other stage got the same *what: when* pattern, such as মৌখিক পরীক্ষা: ২৫ নভেম্বর (viva: 25 November). Where a result card’s date was really the next exam, the line says so. The label above the title was dropped.'
                ]
            },
            {
                type: 'callout',
                text: '**Lesson:** in a product about deadlines, ambiguous wording does real harm.'
            },
            {
                type: 'subsection',
                title: 'Story 3 · A filter that hid most of what it promised',
                content: [
                    'The “New circulars” filter listed only circulars whose applications hadn’t opened yet. A check found **5 listed while 28 circulars from the past week were missing**: most circulars open the day they’re published. The filter now also includes any circular from the last 7 days that’s taking applications, counted from the circular itself so an extended deadline doesn’t make an old circular “new” again. It was renamed **নতুন নিয়োগ** (“new recruitments”).'
                ]
            },
            {
                type: 'subsection',
                title: 'Story 4 · The site that hung for a minute',
                content: [
                    'The home page sometimes took over a minute to load while other pages answered at once. Every visitor on a server instance waited on one shared database call, and on Cloudflare Workers that call belongs to the visitor who started it. If they left, everyone else waited forever. Each request now fetches for itself, with an 8-second limit and the last good copy as a fallback.'
                ]
            },
            {
                type: 'subsection',
                title: 'Story 5 · Lighter on the phone',
                content: [
                    'The home page was sending **137 cards and 251 KB of HTML** at once, and phones had to lay out the whole feed before the first screen settled. The feed now draws 20 cards and loads more as the visitor scrolls. The home page dropped to **about 50 KB**, and coming back from a job returns to the same card.'
                ]
            },
            {
                type: 'subsection',
                title: 'Story 6 · Search in the language people actually type',
                content: [
                    'Searching shikkhok or porjoton found nothing; a 15-word alias list was the only bridge. Search now reduces every word to a **sound key** that folds together the spellings Banglish allows and lets Bangla’s unwritten vowel come or go, so শিক্ষক, shikkhok and sikkhok all match. English words go through a dictionary of government-job terms, small typos are forgiven, and when nothing matches every word, the closest results appear with a note instead of an empty page.'
                ]
            },
            {
                type: 'subsection',
                title: 'Story 7 · One picture doesn’t fit every platform',
                content: [
                    'Instagram’s profile grid began cropping posts to 3:4, cutting off the square share picture. The pictures split: Facebook stays square and says (বিস্তারিত কমেন্টে) (“details in the comments”), because its link sits in the first comment; Instagram gets 4:5 and (লিংক বায়োতে) (“link in bio”).'
                ]
            },
            {
                type: 'subsection',
                title: 'Story 8 · Layout that fits Bangla',
                content: [
                    'A three-column grid made long Bangla titles wrap awkwardly and the feed hard to scan. The default became **one card per row** in a narrower column, with a list/grid switch for people who prefer the old layout. The choice is saved and applied before the page draws, so nothing jumps.'
                ]
            },
            {
                type: 'image',
                id: 'feed-card',
                alt: 'The one-column kormokhali feed on a phone, with the rewritten date line on each card.',
                caption: 'The feed and the card, after five orderings and fourteen commits on one line of text.'
            },
            {
                type: 'section',
                title: 'Where it stands',
                content: [
                    'On 14 November 2026, kormokhali is a live product that:'
                ],
                list: [
                    'follows government recruitments from **circular to gazette** as one timeline, with a page for every stage;',
                    'puts **what a job seeker could lose today** at the top of the feed;',
                    'shows official notices as **light previews linked to the original**, never as copies;',
                    'finds notices **however people spell them**, in Bangla, English or Banglish;',
                    'posts every update to **Facebook and Instagram as pictures and Reels**, with reminders on opening and closing days;',
                    'runs on an **AI-drafted, editor-approved** pipeline in which the assistant finds, reads and drafts notices and a person checks and publishes.'
                ]
            },
            {
                type: 'stats',
                stats: [
                    { value: '18', label: 'Database migrations' },
                    { value: '137', label: 'Recruitments in the feed (31 Oct)' },
                    { value: '4 × 8', label: 'Step types × up to 8 subtypes each' },
                    { value: '~50 KB', label: 'Home page, down from 251 KB' }
                ]
            },
            {
                // TODO(content): outcome metrics
                type: 'pending',
                label: 'Awaiting results',
                text: 'Visitors, searches, Facebook/Instagram reach, time saved per notice for the editor, mistake reports received, and any feedback from job seekers.'
            },
            {
                type: 'section',
                stageLabel: 'Epilogue · Reflect',
                title: 'What I carried out of it'
            },
            {
                type: 'cards',
                cards: [
                    { title: 'A redefinition beat any feature', body: 'Seeing a job as a *recruitment with steps*, not a pile of notices, changed the data model, the URLs, the timeline, the cards, the social posts and the AI pipeline. It happened on day six, early enough to be cheap.' },
                    { title: 'Design for the editor', body: 'Accuracy and speed for job seekers depended on how fast one editor could work without errors. Moving the editor from typing to reviewing made the whole product possible.' },
                    { title: 'Simple rules outlive clever ones', body: 'The feed went through hourly rotations and personal ordering before settling on one sentence: things near their important date come first.' },
                    { title: 'Words are interface', body: 'A whole day on one line of card text was worth it. In Bangla, “closes” and “closed” can be the same two words.' },
                    { title: 'Shipping live is research, with a cost', body: 'Problems surfaced fast, and so did their effects. Small, reasoned commits that each explain *why* made it possible to move fast and still trace every decision.' }
                ]
            },
            {
                type: 'section',
                title: 'What’s next',
                list: [
                    '**Finish the clean-up**: remove the old notice and track tables now that recruitments and steps have replaced them.',
                    '**Measure what the feed is for**: track whether visitors open recruitments near their deadlines, to test the 3-day rule with data rather than inspection.',
                    '**Talk to job seekers directly**: short interviews or a feedback prompt, to check the assumptions in the Empathize stage.',
                    '**Reminders a visitor chooses**: calendar export exists; per-recruitment reminders for followed exams are the natural next step.'
                ]
            },
            {
                type: 'callout',
                text: 'Things near their important date come first. Everything else is about making that true, in Bangla, on a phone, from an official source.'
            }
        ]
    },
    'dhaka-city-branding': {
        title: 'Dhaka City Branding',
        eyebrow: 'Brand Design · Case Study',
        thesis: 'Reimagining the Civic Identity, Wayfinding, and Public Transit System of Dhaka',
        role: 'As Principal Brand Designer',
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
    'ezwage': {
        title: 'EZ Wage',
        eyebrow: 'UI/UX Design · Case Study',
        thesis: 'Financial wellness platform allowing employees to access earned wages on demand.',
        role: 'UI/UX Designer',
        details: [
            'Designed intuitive onboarding flows for diverse user demographics.',
            'Created distinct interfaces for employee app and employer dashboard.',
            'Established a consistent design system for the brand.',
        ]
    },
    'insparofaith-games': {
        title: 'Insparofaith Games',
        eyebrow: 'UI/UX Design · Case Study',
        thesis: 'Creating immersive and intuitive experiences for mobile games using Figma and Unreal Engine 5.',
        role: 'UI/UX Designer',
        details: [
            'Developed wireframes, prototypes, and high-fidelity mockups for various game titles.',
            'Collaborated with cross-functional teams to shape user journeys and optimize gameplay mechanics.',
            'Designed visually stunning UI elements, characters, and environments.',
        ]
    },
    'ez-wage': {
        title: 'EZ Wage Ltd.',
        eyebrow: 'UI/UX Design · Case Study',
        thesis: 'Refining fintech product interfaces for better efficiency and user satisfaction.',
        role: 'UI/UX Designer',
        details: [
            'Conducted user research and usability testing to identify pain points in current financial tools.',
            'Collaborated with developers and product managers to align designs with business objectives.',
            'Designed intuitive dashboards and transaction flows for mobile and web apps.',
        ]
    },
    'yoyoso-bangladesh': {
        title: 'Yoyoso Bangladesh',
        eyebrow: 'Visual Design · Case Study',
        thesis: 'Curation of graphics, animations, and illustrations for social media and marketing.',
        role: 'Creative Visualizer',
        details: [
            'Designed digital and print publications including brochures, flyers, and posters.',
            'Conceptualized event branding materials including banners and signage.',
            'Managed visual identity across multiple social media platforms.',
        ]
    },
    'fakir-apparels': {
        title: 'Fakir Apparels Ltd.',
        eyebrow: 'Visual Design · Case Study',
        thesis: 'Providing visualization and design services on a contract basis.',
        role: 'Visualizer',
        details: [
            'Created marketing materials and internal brand visualizations.',
            'Worked closely with the communication department for event branding.',
        ]
    },
    'undp': {
        title: 'UNDP',
        eyebrow: 'Graphic Design · Case Study',
        thesis: 'Professional graphic design services for organizational initiatives.',
        role: 'Graphic Designer',
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
            <header className="project-detail-header">
                {project.eyebrow && <p className="project-eyebrow">{project.eyebrow}</p>}
                <div className="project-title-row">
                    <Link to="/" className="back-link" aria-label="Back to Work">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                    </Link>
                    <h1 className="project-title">{project.title}</h1>
                </div>
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
                <MediaSlot
                    key={`${slug}-cover`}
                    className="case-study-figure--cover"
                    src={`${project.assetDir || DEFAULT_ASSET_DIR}/${project.cover.id}.png`}
                    alt={project.cover.alt}
                />
            )}

            {project.sections ? (
                <div className={`project-case-study${project.story ? ' is-story' : ''}`}>
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
                                            <th scope="col">{section.columns?.[0] || 'Before'}</th>
                                            <th scope="col">{section.columns?.[1] || 'After'}</th>
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

                            {section.type === 'infographic' && infographics[section.name] && (
                                <figure className="case-study-figure case-study-infographic">
                                    {React.createElement(infographics[section.name])}
                                    {section.caption && <figcaption className="image-caption">{section.caption}</figcaption>}
                                </figure>
                            )}

                            {section.type === 'image' && (
                                section.id ? (
                                    <MediaSlot
                                        key={`${slug}-${section.id}`}
                                        src={`${project.assetDir || DEFAULT_ASSET_DIR}/${section.id}.png`}
                                        alt={section.alt}
                                        caption={section.caption}
                                    />
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
