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
    'fiber-visual-thread': {
        title: 'Fiber Visual Thread',
        eyebrow: 'Visual Language · A story in four chapters',
        thesis: 'Fakir Apparels had one name, one logo and one brand identity, yet its posters, banners and event materials looked like they came from several different companies. This is how I grew a single visual language out of the brand it already had, so that every design now reads as coming from one source.',
        role: 'Visualizer (Contract)',
        meta: [
            { label: 'Company', value: 'Fakir Apparels Ltd.' },
            { label: 'Scope', value: 'Communication design: marketing, event and internal brand materials' },
            { label: 'Starting point', value: 'The existing brand identity, extended rather than replaced' },
            // TODO(timeline): confirm the dates for this project
            { label: 'Timeline', value: 'Apr 2023 — Mar 2024' }
        ],
        assetDir: '/case-studies/fiber-visual-thread',
        // Renders a "coming soon" banner until public/case-studies/fiber-visual-thread/cover.png exists.
        cover: { id: 'cover', alt: 'Cover: a spread of Fakir Apparels communication materials designed with Fiber Visual Thread.' },
        story: true,
        sections: [
            {
                type: 'intro',
                stageLabel: 'Prologue',
                content: [
                    'Lay a year of Fakir Apparels’ communication materials side by side and you would not guess they came from the same company. One event banner was loud and crowded, the next quiet and corporate. A poster used one typeface and the internal notice beside it used another. The logo was always there, but nothing around it agreed with anything else.',
                    'Nobody had chosen that. Each piece was made for its own deadline, by whoever was available, in whatever style felt right that day. This is the story of how one brand identity became one visual language, and how that language gave every new design the same voice.'
                ]
            },
            {
                type: 'section',
                stageLabel: 'Chapter 1 · Listen',
                title: 'One company, many voices',
                content: [
                    'I started by collecting everything I could find: event branding, marketing pieces, internal visuals, social posts. Then I laid them out together, the way someone outside the company would meet them over time.',
                    'Seen together, the problem was obvious. Every piece had been designed on its own, and so every piece spoke its own visual language. Colours drifted from the brand palette, typefaces changed from job to job, layouts were reinvented each time, and the logo was placed wherever it happened to fit.'
                ]
            },
            {
                // Renders a "coming soon" banner until audit.png exists.
                type: 'image',
                id: 'audit',
                alt: 'The audit wall: earlier Fakir Apparels materials laid side by side, each in its own style.',
                caption: 'Before: the same company, speaking in many visual languages.'
            },
            {
                type: 'callout',
                text: '**How might we** make every piece of Fakir Apparels’ communication feel like it comes from one source, without throwing away the brand identity the company already trusts?'
            },
            {
                type: 'section',
                stageLabel: 'Chapter 2 · Root',
                title: 'The brand already knew who it was',
                content: [
                    'The answer was not a new brand. Fakir Apparels already had an identity it believed in: its logo, its colours and its name. What was missing was a grammar that turned that identity into finished designs. So instead of starting over, I started from the brand and asked what it was already trying to say.',
                    'I took the identity apart into its building blocks and treated each one as a rule to grow from, not a decoration to paste on. The logo’s forms suggested shapes and graphic motifs. The brand colours became a palette with clear roles. The company’s world of fibre, thread and fabric gave the language its name and its texture: **Fiber Visual Thread**, one thread running through every piece.'
                ]
            },
            {
                type: 'section',
                stageLabel: 'Chapter 3 · Weave',
                title: 'From an identity to a language',
                content: [
                    'A visual language is the set of decisions you no longer have to make each time. I wrote those decisions down so anyone designing for the company would reach the same answers.'
                ]
            },
            {
                type: 'cards',
                cards: [
                    { title: 'Colour', body: 'The brand colours organised into roles, so it was always clear which colour leads, which supports and which stays in the background.' },
                    { title: 'Type', body: 'A small set of typefaces and a fixed hierarchy for headlines, body and details, used the same way across every format.' },
                    { title: 'Graphic elements', body: 'Shapes and motifs drawn from the brand’s own forms and the textile world, giving every piece a recognisable texture.' },
                    { title: 'Layout & logo', body: 'Repeatable grids and clear rules for where the logo sits and how much room it gets, from small notices to large event backdrops.' }
                ]
            },
            {
                // Renders a "coming soon" banner until system.png exists.
                type: 'image',
                id: 'system',
                alt: 'The Fiber Visual Thread sheet: colour roles, type hierarchy, graphic elements and layout rules.',
                caption: 'The language on one page: the decisions every new design starts from.'
            },
            {
                type: 'section',
                stageLabel: 'Chapter 4 · Speak',
                title: 'Proving it through the work',
                content: [
                    'A visual language only exists once it has been used. So I established Fiber Visual Thread the practical way: through the communication materials themselves. Every new event backdrop, marketing piece and internal visual was built on the same palette, the same type, the same elements and the same grids.',
                    'Each piece made the next one easier. Instead of starting from a blank canvas, a design started from the language, and the only decisions left were about the message. Working closely with the communication department, the rules were tested on real deadlines and refined wherever they did not hold up.'
                ]
            },
            {
                // Renders a "coming soon" banner until applications.png exists.
                type: 'image',
                id: 'applications',
                alt: 'Fakir Apparels communication materials designed with Fiber Visual Thread, shown together.',
                caption: 'After: different formats and different messages, all recognisably from one source.'
            },
            {
                type: 'section',
                title: 'What changed',
                content: [
                    'The biggest change was not any single design. It was that the designs finally agreed with each other.'
                ]
            },
            {
                type: 'compare',
                rows: [
                    { before: 'Each piece spoke its own visual language, so the company looked like several companies.', after: 'One visual language: every design reads as coming from a single source.' },
                    { before: 'The brand identity stopped at the logo.', after: 'The identity runs through colour, type, graphic elements and layout.' },
                    { before: 'Every new piece started from a blank canvas.', after: 'Every new piece starts from shared rules, so time goes into the message instead of the styling.' },
                    { before: 'Consistency depended on who made the design.', after: 'Consistency comes from the language, whoever makes the design.' }
                ]
            },
            {
                type: 'section',
                stageLabel: 'Epilogue',
                title: 'What I carried forward',
                content: [
                    'Fiber Visual Thread taught me that consistency is not about making everything look the same. It is about every design answering the same questions in the same way, so the audience hears one voice even when the messages change.'
                ]
            },
            {
                type: 'callout',
                text: 'A brand identity says who you are. A visual language makes sure every design says it the same way.'
            }
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
    'motoman': {
        title: 'Motoman',
        eyebrow: 'Product Design · Case Study',
        thesis: 'Optimizing Logistics and Navigation for On-Demand Motorcycle Delivery Services',
        role: 'As Lead Product Designer',
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
