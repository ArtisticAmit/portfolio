import { useEffect } from 'react'
import './LiveDesignKitInfographics.css'

// Coded infographics for the Live Design Kit story. They stand in for
// screenshots we don't have, and they redraw themselves in light and dark
// mode because they're built from the site's tokens, not baked into pixels.

// The specimens must render in the real typefaces, but only this page needs
// them, so the fonts load on demand instead of on every page of the site.
const TYPE_FONTS = 'https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;600&family=Baloo+Da+2:wght@400;600&family=Noto+Sans:wght@400;600&family=Noto+Sans+Bengali:wght@400;600&family=Noto+Serif:wght@400;600&display=swap'
// icon_names keeps the variable icon font down to the handful of glyphs shown.
const SYMBOL_FONT = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=bookmark,check_circle,emoji_events,leaderboard,menu_book,quiz,school,timer&display=block'

const loadedSheets = new Set()
const useStylesheet = (href) => {
    useEffect(() => {
        if (loadedSheets.has(href)) return
        loadedSheets.add(href)
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
    }, [href])
}

const Meter = ({ value, max = 3, label }) => (
    <span className="ldk-meter" role="img" aria-label={`${label}: ${value} of ${max}`}>
        {Array.from({ length: max }, (_, i) => (
            <span key={i} className={`ldk-meter-dot${i < value ? ' is-on' : ''}`} />
        ))}
    </span>
)

const Arrow = ({ direction = 'right' }) => (
    // Glyph comes from CSS so layouts can turn → into ↓ when they stack.
    <span className={`ldk-arrow ldk-arrow--${direction}`} aria-hidden="true" />
)

/* ---------- Chapter 1: what the audit turned up ---------- */

// Three clock glyphs drawn in deliberately different icon styles, standing in
// for icons pulled from different libraries.
const ClockGlyph = ({ style }) => {
    if (style === 'filled') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M12 7v5l3 2" stroke="var(--card-bg)" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
        )
    }
    if (style === 'sharp') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" /><path d="M12 7v5h4" stroke="currentColor" strokeWidth="2.5" fill="none" /></svg>
        )
    }
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1" fill="none" /></svg>
    )
}

const FRAGMENT_SCREENS = [
    { id: 'a', label: 'Screen A', icon: 'filled', note: 'Hard corners, serif heading' },
    { id: 'b', label: 'Screen B', icon: 'thin', note: 'Soft corners, another font, thin icons' },
    { id: 'c', label: 'Screen C', icon: 'sharp', note: 'Pill button, cramped spacing' },
    { id: 'd', label: 'Screen D · dark', icon: 'thin', note: 'Text fading into the background' }
]

const AUDIT_SYMPTOMS = [
    'Buttons changed shape & size per screen',
    'Identical components, different corner radii',
    'Ad-hoc spacing',
    'Several font families at once',
    'Icons from different libraries',
    'Contrast below accessibility standards',
    'Dark mode built from ill-suited colors',
    'No style guide, no shared names'
]

export const Fragments = () => (
    <div className="ldk">
        <p className="ldk-label">One “Start exam” button, four strangers</p>
        <div className="ldk-screens">
            {FRAGMENT_SCREENS.map((screen) => (
                <div key={screen.id} className="ldk-screen-wrap">
                    <div className={`ldk-screen ldk-screen--${screen.id}`}>
                        <span className="ldk-screen-bar" />
                        <p className="ldk-screen-title">Mock test 12</p>
                        <p className="ldk-screen-meta"><ClockGlyph style={screen.icon} /> 30 min</p>
                        <span className={`ldk-screen-btn ldk-btn--${screen.id}`}>Start exam</span>
                    </div>
                    <p className="ldk-screen-label">{screen.label}</p>
                    <p className="ldk-screen-note">{screen.note}</p>
                </div>
            ))}
        </div>
        <p className="ldk-label">What the audit kept finding</p>
        <ul className="ldk-symptoms">
            {AUDIT_SYMPTOMS.map((item) => (
                <li key={item} className="ldk-symptom"><span className="ldk-x" aria-hidden="true">✕</span>{item}</li>
            ))}
        </ul>
    </div>
)

/* ---------- Chapter 2: three grammars in one app ---------- */

const GRAMMARS = [
    { id: 'material', name: 'Material', note: 'What Flutter’s widgets speak natively' },
    { id: 'swift', name: 'SwiftUI-like', note: 'iOS conventions, borrowed' },
    { id: 'shadcn', name: 'shadcn/ui-like', note: 'Web conventions, borrowed' }
]

export const Languages = () => (
    <div className="ldk">
        <div className="ldk-grammars">
            {GRAMMARS.map((grammar) => (
                <div key={grammar.id} className="ldk-grammar">
                    <span className={`ldk-grammar-sample ldk-grammar-sample--${grammar.id}`}>Continue</span>
                    <p className="ldk-grammar-name">{grammar.name}</p>
                    <p className="ldk-grammar-note">{grammar.note}</p>
                </div>
            ))}
        </div>
        <div className="ldk-merge"><Arrow direction="down" /></div>
        <div className="ldk-result ldk-result--bad">
            <p className="ldk-result-title">One Flutter app, three grammars</p>
            <p className="ldk-result-body">Each brings its own radii, spacing and component logic. Every screen becomes a translation — and translations drift.</p>
        </div>
    </div>
)

/* ---------- Chapter 3: the crossroads ---------- */

const CRITERIA = ['Flexibility', 'Speed to start', 'Sustainability']

const OPTIONS = [
    {
        name: 'Build fully custom',
        scores: [3, 1, 1],
        notes: ['Maximum — every widget hand-coded', 'Heavy research, long build', 'Permanent maintenance on us'],
        verdict: 'Too costly to sustain'
    },
    {
        name: 'Adopt a third-party system',
        scores: [2, 3, 1],
        notes: ['Bound to what the library offers', 'Fastest to stand up', 'Could change or shut down anytime'],
        verdict: 'Fragile dependency'
    },
    {
        name: 'Build on Material Design',
        scores: [3, 2, 3],
        notes: ['Deeply customizable', 'Theme Builder gives a head start', 'Mature, first-class in Flutter, ours to extend'],
        verdict: 'Practical & ownable',
        chosen: true
    }
]

export const Decision = () => (
    <div className="ldk">
        <div className="ldk-options">
            {OPTIONS.map((option) => (
                <div key={option.name} className={`ldk-option${option.chosen ? ' is-chosen' : ''}`}>
                    {option.chosen && <span className="ldk-badge">The road we took</span>}
                    <p className="ldk-option-name">{option.name}</p>
                    <dl className="ldk-option-scores">
                        {CRITERIA.map((criterion, i) => (
                            <div key={criterion} className="ldk-option-row">
                                <dt>{criterion} <Meter value={option.scores[i]} label={criterion} /></dt>
                                <dd>{option.notes[i]}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="ldk-option-verdict">{option.verdict}</p>
                </div>
            ))}
        </div>
    </div>
)

/* ---------- Chapter 4: building it ---------- */

const PIPELINE = [
    { title: 'Material baseline', body: 'The grammar Flutter already speaks' },
    { title: 'Material Theme Builder', body: 'Generate a base theme' },
    { title: 'Customize everything', body: 'Color · Type · Spacing · Icons · Components' },
    { title: 'Demo Flutter app', body: 'Prototype it inside a real product' }
]

export const Pipeline = () => (
    <div className="ldk">
        <ol className="ldk-pipeline">
            {PIPELINE.map((step, i) => (
                <li key={step.title} className={`ldk-pipe-step${i === 2 ? ' is-focus' : ''}`}>
                    <span className="ldk-pipe-num">{String(i + 1).padStart(2, '0')}</span>
                    <p className="ldk-pipe-title">{step.title}</p>
                    <p className="ldk-pipe-body">{step.body}</p>
                </li>
            ))}
        </ol>
    </div>
)

// Concept only: the hue is simplified so the diagram explains the decision
// (saturation) without pretending to be the production palette.
const TUNING_ROWS = [
    { label: 'Material defaults', saturation: 16, verdict: 'Too muted — safe, but characterless' },
    { label: 'Tuned for Live MCQ', saturation: 58, verdict: 'Personality without the glare', chosen: true },
    { label: 'Raw brand colors', saturation: 100, verdict: 'Great on a logo, hard on a whole UI' }
]
const TONES = [92, 78, 60, 42, 26]

export const ColorTuning = () => (
    <div className="ldk">
        <div className="ldk-tuning">
            {TUNING_ROWS.map((row) => (
                <div key={row.label} className={`ldk-tuning-row${row.chosen ? ' is-chosen' : ''}`}>
                    <p className="ldk-tuning-label">{row.label}</p>
                    <div className="ldk-swatches" aria-hidden="true">
                        {TONES.map((lightness) => (
                            <span key={lightness} className="ldk-swatch" style={{ background: `hsl(168 ${row.saturation}% ${lightness}%)` }} />
                        ))}
                    </div>
                    <p className="ldk-tuning-verdict">{row.chosen && <span className="ldk-check" aria-hidden="true">✓ </span>}{row.verdict}</p>
                </div>
            ))}
        </div>
        <p className="ldk-footnote">Concept diagram with a simplified hue. Every tuned pairing also had to stay accessible in light and dark.</p>
    </div>
)

const BANGLA_SAMPLE = 'প্রশ্ন ১২ · সঠিক উত্তরটি বেছে নাও'
const LATIN_SAMPLE = 'Mock Test 12 — 75% · ৳500'

const FONT_CANDIDATES = [
    { name: 'Balooda', family: '"Baloo Da 2", sans-serif', verdict: 'Evaluated' },
    { name: 'Anek Bangla', family: '"Anek Bangla", sans-serif', verdict: 'Evaluated' },
    { name: 'Noto Sans', family: '"Noto Sans Bengali", "Noto Sans", sans-serif', verdict: 'Won on stability & language support', chosen: true }
]

export const FontEval = () => {
    useStylesheet(TYPE_FONTS)
    return (
        <div className="ldk">
            <div className="ldk-font-retired">
                <span className="ldk-font-retired-name">Kalpurush + Inter</span>
                <span className="ldk-font-retired-why">Retired — Kalpurush lacked multilingual and symbol support</span>
            </div>
            <div className="ldk-fonts">
                {FONT_CANDIDATES.map((font) => (
                    <div key={font.name} className={`ldk-font${font.chosen ? ' is-chosen' : ''}`}>
                        <p className="ldk-font-name">{font.name}</p>
                        <p className="ldk-font-sample" style={{ fontFamily: font.family }} lang="bn">{BANGLA_SAMPLE}</p>
                        <p className="ldk-font-sample ldk-font-sample--latin" style={{ fontFamily: font.family }}>{LATIN_SAMPLE}</p>
                        <p className="ldk-font-verdict">{font.chosen && <span className="ldk-check" aria-hidden="true">✓ </span>}{font.verdict}</p>
                    </div>
                ))}
            </div>
            <p className="ldk-footnote">Specimens rendered live in each typeface, using the same bilingual exam copy.</p>
        </div>
    )
}

const TYPE_ROLES = [
    { role: 'Display', serif: false, size: '2rem', sample: 'Live MCQ' },
    { role: 'Headline', serif: false, size: '1.5rem', sample: 'Your mock test results' },
    { role: 'Title', serif: false, size: '1.15rem', sample: 'Bangla Literature · Set 4' },
    { role: 'Body', serif: true, size: '1rem', sample: 'Read each question carefully before you choose an answer.' },
    { role: 'Label', serif: false, size: '0.8rem', sample: 'Start exam' }
]

export const TypeSystem = () => {
    useStylesheet(TYPE_FONTS)
    return (
        <div className="ldk">
            <div className="ldk-families">
                <div className="ldk-family">
                    <span className="ldk-family-aa ldk-sans">Aa</span>
                    <p className="ldk-family-name">Noto Sans</p>
                    <p className="ldk-family-role">Headings & UI</p>
                </div>
                <div className="ldk-family">
                    <span className="ldk-family-aa ldk-serif">Aa</span>
                    <p className="ldk-family-name">Noto Serif</p>
                    <p className="ldk-family-role">Body text</p>
                </div>
            </div>
            <ul className="ldk-roles">
                {TYPE_ROLES.map((item) => (
                    <li key={item.role} className="ldk-role">
                        <span className="ldk-role-name">{item.role}<span className="ldk-role-font">{item.serif ? 'Serif' : 'Sans'}</span></span>
                        <span className={`ldk-role-sample ${item.serif ? 'ldk-serif' : 'ldk-sans'}`} style={{ fontSize: item.size }}>{item.sample}</span>
                    </li>
                ))}
            </ul>
            <p className="ldk-footnote">Material’s type roles, reassigned to the Noto pair. Sizes shown are relative; the reworked scale lives in the kit.</p>
        </div>
    )
}

const BUTTON_FAMILY = [
    { variant: 'filled', name: 'Filled', role: 'Highest emphasis' },
    { variant: 'tonal', name: 'Tonal', role: 'Secondary emphasis' },
    { variant: 'outlined', name: 'Outlined', role: 'Medium emphasis' },
    { variant: 'text', name: 'Text', role: 'Lowest emphasis' }
]

export const Buttons = () => (
    <div className="ldk">
        <p className="ldk-label">Before — improvised, one per feature</p>
        <div className="ldk-btn-row">
            {['a', 'b', 'c', 'd'].map((id) => (
                <span key={id} className={`ldk-screen-btn ldk-btn--${id}`}>Start exam</span>
            ))}
        </div>
        <div className="ldk-merge"><Arrow direction="down" /></div>
        <p className="ldk-label">After — one family, four clear roles</p>
        <div className="ldk-btn-family">
            {BUTTON_FAMILY.map((button) => (
                <div key={button.variant} className="ldk-btn-spec">
                    <span className={`ldk-m3-btn ldk-m3-btn--${button.variant}`}>Start exam</span>
                    <p className="ldk-btn-name">{button.name}</p>
                    <p className="ldk-btn-role">{button.role}</p>
                </div>
            ))}
        </div>
    </div>
)

const ICON_WEIGHTS = [200, 300, 400, 600]
const ICON_SET = [
    ['quiz', 'Quiz'], ['timer', 'Timer'], ['school', 'Course'], ['menu_book', 'Notes'],
    ['leaderboard', 'Rank'], ['emoji_events', 'Award'], ['bookmark', 'Saved'], ['check_circle', 'Correct']
]

export const Icons = () => {
    useStylesheet(SYMBOL_FONT)
    return (
        <div className="ldk">
            <p className="ldk-label">Material Symbols Rounded — picking the weight</p>
            <div className="ldk-weights">
                {ICON_WEIGHTS.map((weight) => (
                    <div key={weight} className={`ldk-weight${weight === 300 ? ' is-chosen' : ''}`}>
                        <span className="ldk-symbol" style={{ fontVariationSettings: `'wght' ${weight}` }} aria-hidden="true">quiz</span>
                        <span className="ldk-weight-num">{weight}</span>
                    </div>
                ))}
            </div>
            <p className="ldk-label">The set at weight 300</p>
            <ul className="ldk-icon-grid">
                {ICON_SET.map(([glyph, name]) => (
                    <li key={glyph} className="ldk-icon">
                        <span className="ldk-symbol" aria-hidden="true">{glyph}</span>
                        <span className="ldk-icon-name">{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const SPACING_STEPS = [1, 2, 3, 4, 6, 8]

export const Spacing = () => (
    <div className="ldk">
        <div className="ldk-spacing">
            {SPACING_STEPS.map((multiple) => (
                <div key={multiple} className="ldk-space">
                    <span className="ldk-space-bar" style={{ height: `${multiple * 4 * 2.5}px` }} />
                    <span className="ldk-space-px">{multiple * 4}</span>
                    <span className="ldk-space-mult">×{multiple}</span>
                </div>
            ))}
        </div>
        <p className="ldk-footnote">One 4px base unit; every gap is a multiple of it. Steps shown are representative.</p>
    </div>
)

/* ---------- Chapter 5: the loop ---------- */

export const TestLoop = () => (
    <div className="ldk">
        <div className="ldk-loop">
            <div className="ldk-loop-node">
                <span className="ldk-pipe-num">01</span>
                <p className="ldk-pipe-title">Implement</p>
                <p className="ldk-pipe-body">Component goes into the demo Flutter app</p>
            </div>
            <Arrow />
            <div className="ldk-loop-node">
                <span className="ldk-pipe-num">02</span>
                <p className="ldk-pipe-title">Test</p>
                <p className="ldk-pipe-body">Usability and visual checks, light and dark</p>
            </div>
            <Arrow />
            <div className="ldk-loop-node ldk-loop-node--question">
                <span className="ldk-pipe-num">03</span>
                <p className="ldk-pipe-title">Did color break it?</p>
            </div>
        </div>
        <div className="ldk-branches">
            <div className="ldk-branch ldk-branch--retry">
                <p className="ldk-branch-tag">Yes ↺</p>
                <p className="ldk-pipe-body">Re-tune the tonal values, then run the loop again</p>
            </div>
            <div className="ldk-branch ldk-branch--pass">
                <p className="ldk-branch-tag">No ✓</p>
                <p className="ldk-pipe-body">It earns its place in the kit</p>
            </div>
        </div>
    </div>
)
