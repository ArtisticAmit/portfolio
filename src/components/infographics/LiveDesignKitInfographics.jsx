import { useEffect, useState } from 'react'
import './LiveDesignKitInfographics.css'

// Coded infographics for the Live Design Kit story. They stand in for
// screenshots we don't have, and they redraw themselves in light and dark
// mode because they're built from the site's tokens, not baked into pixels.

// The specimens must render in the real typefaces, but only this page needs
// them, so the fonts load on demand instead of on every page of the site.
const TYPE_FONTS = 'https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;600&family=Baloo+Da+2:wght@400;600&family=Noto+Sans:wght@400;600&family=Noto+Sans+Bengali:wght@400;600&family=Noto+Serif:wght@400;600&display=swap'
// icon_names keeps the variable icon font down to the handful of glyphs shown.
const SYMBOL_FONT = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=bookmark,check_circle,emoji_events,leaderboard,menu_book,quiz,school,timer&display=block'
// The two styles Rounded was compared against, pinned to weight 300 and
// trimmed to the glyphs shown so the comparison costs a few KB.
const SYMBOL_STYLE_FONT = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300&family=Material+Symbols+Sharp:wght@300&icon_names=quiz,timer&display=block'

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

// Illustrative ramps drawn on the real hues: the production primary (1441CC
// sits at ~226°) and the first draft's raw brand blue (3333FF, 240°). The
// exact production values live in PaletteEvolution below.
const TUNING_ROWS = [
    { label: 'Material defaults', hue: 226, saturation: 16, verdict: 'Too muted — safe, but characterless' },
    { label: 'Tuned for Live MCQ', hue: 226, saturation: 75, verdict: 'Personality without the glare', chosen: true },
    { label: 'Raw brand colors', hue: 240, saturation: 100, verdict: 'Great on a logo, hard on a whole UI' }
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
                            <span key={lightness} className="ldk-swatch" style={{ background: `hsl(${row.hue} ${row.saturation}% ${lightness}%)` }} />
                        ))}
                    </div>
                    <p className="ldk-tuning-verdict">{row.chosen && <span className="ldk-check" aria-hidden="true">✓ </span>}{row.verdict}</p>
                </div>
            ))}
        </div>
        <p className="ldk-footnote">Illustrative tone ramps on the production primary hue. Every tuned pairing also had to stay accessible in light and dark.</p>
    </div>
)

// Exact values from the kit's Figma token tables, as [light, dark].
const DRAFT_TOKENS = [
    ['Primary', '3333FF', '5C5CFF'],
    ['Secondary', 'FF6600', 'FF7A1A'],
    ['On Primary', 'F5F5FF', 'F5F5FF'],
    ['On Secondary', 'FFF3EB', '3D332C'],
    ['Primary Text', '4B4B4B', 'D1D2D3'],
    ['Secondary Text', 'ADACAC', '8F8D8D'],
    ['Primary Text Active', '292A2F', 'FAFAFA'],
    ['Secondary Text Active', '4B4B4B', 'ADACAC'],
    ['Primary Background', 'EDF0F5', '121318'],
    ['On Primary Background', 'DADCE0', '434759'],
    ['Secondary Background', 'FAFAFA', '292A2F'],
    ['On Secondary Background', 'E6E6E6', '474952'],
    ['Success', 'C1EC75', '006921'],
    ['Error', 'FFF5F5', '3B0303'],
    ['Warning', 'FFCC00', '665200'],
    ['Info', '85D6FF', '185A7A'],
    ['On Success', '006921', 'C1EC75'],
    ['On Error', 'FF3232', 'FF3232'],
    ['On Warning', '665200', 'FFCC00'],
    ['On Info', '185A7A', '85D6FF']
]

// Material Theme Builder's untouched output for key color 3333FF. Values are
// sampled from its light/dark preview, which doesn't show the fixed roles.
const MATERIAL_DEFAULT = {
    accents: [
        { name: 'Primary', role: ['57598E', 'C0C1FA'], on: ['FFFFFF', '282A5D'], container: ['E1E0FC', '3F4174'], onContainer: ['3F4174', 'E1E0FC'] },
        { name: 'Secondary', role: ['5C5D70', 'C5C4DB'], on: ['FFFFFF', '2E2F41'], container: ['E2E0F7', '454557'], onContainer: ['454557', 'E2E0F7'] },
        { name: 'Tertiary', role: ['735569', 'E1BBD3'], on: ['FFFFFF', '42283A'], container: ['F9DAEC', '5A3E51'], onContainer: ['5A3E51', 'F9DAEC'] },
        { name: 'Error', role: ['AB2D25', 'F4B7AE'], on: ['FFFFFF', '600F0C'], container: ['F9DBD7', '861915'], onContainer: ['861915', 'F9DBD7'] }
    ],
    surfaces: [
        ['Dim', 'DCD9DF', '131318'],
        ['Lowest', 'FFFFFF', '0E0E13'],
        ['Low', 'F5F2F9', '1B1B20'],
        ['Container', 'EFECF3', '1F1F25'],
        ['High', 'E9E7EE', '2A292F'],
        ['Highest', 'E3E1E8', '353439'],
        ['Bright', 'FBF8FF', '39383E']
    ],
    neutrals: [
        ['Surface', 'FBF8FF', '131318'],
        ['On Surface', '1B1B20', 'E3E1E8'],
        ['On Surface Variant', '46464E', 'C7C5CF'],
        ['Outline', '77767F', '918F99'],
        ['Outline Variant', 'C7C5CF', '46464E'],
        ['Inverse Surface', '303036', 'E3E1E8'],
        ['Inverse On Surface', 'F2EFF6', '303036'],
        ['Inverse Primary', 'C0C1FA', '57598E']
    ]
}

// The Material stages share one shape: accent quads, a surface ramp,
// neutrals and mode-independent fixed roles.
const TRANSLATION = {
    accents: [
        { name: 'Primary', role: ['3840DD', '99A5FF'], on: ['FFFFFF', '001A97'], container: ['5365DE', '5365DE'], onContainer: ['F7F5FF', 'F7F5FF'] },
        { name: 'Secondary', role: ['575C81', 'F3F2FF'], on: ['FFFFFF', '292E50'], container: ['D0D4FF', 'D0D4FF'], onContainer: ['565B7F', '565B7F'] },
        { name: 'Tertiary', role: ['924B1F', 'FFC9AE'], on: ['FFFFFF', '542100'], container: ['FFA26F', 'FFA26F'], onContainer: ['78360B', '78360B'] },
        { name: 'Error', role: ['BB0014', 'FFB4AB'], on: ['FFFFFF', '690006'], container: ['E51B23', 'FF544B'], onContainer: ['FFFBFF', '470003'] }
    ],
    surfaces: [
        ['Dim', 'D9D9DD', '141314'],
        ['Lowest', 'E7E7EB', '0E0E0F'],
        ['Low', 'F3F3F6', '1C1B1C'],
        ['Container', 'F8F8FC', '201F20'],
        ['High', 'FBFBFD', '2A2A2B'],
        ['Highest', 'FFFFFF', '353435'],
        ['Bright', 'EDEDF1', '3A393A']
    ],
    neutrals: [
        ['Background', 'EDEDF1', '12131A'],
        ['On Surface', '1C1B1C', 'E5E1E2'],
        ['Surface Variant', 'E1E1EA', '46464D'],
        ['On Surface Variant', '46464D', 'C7C5CE'],
        ['Outline', '77767E', '919098'],
        ['Outline Variant', 'C7C5CE', '46464D'],
        ['Surface Tint', '3F51CA', 'BBC3FF'],
        ['Inverse Surface', '313031', 'E5E1E2'],
        ['Inverse On Surface', 'F0F0F4', '313031'],
        ['Inverse Primary', 'BBC3FF', '3F51CA']
    ],
    fixed: [
        ['Primary Fixed', 'DFE0FF'],
        ['Primary Fixed Dim', 'BBC3FF'],
        ['Secondary Fixed', 'DFE0FF'],
        ['Secondary Fixed Dim', 'C0C4EE'],
        ['Tertiary Fixed', 'FFDBCA'],
        ['Tertiary Fixed Dim', 'FFB690']
    ]
}

const FINAL = {
    accents: [
        { name: 'Primary', role: ['1441CC', 'BBD2FF'], on: ['FFFFFF', '002087'], container: ['A6C4FF', '2337B2'], onContainer: ['000000', 'DFEAFF'] },
        { name: 'Secondary', role: ['0C5FFF', 'C0CFEE'], on: ['FFFFFF', '141939'], container: ['D6E4FF', '404D68'], onContainer: ['000000', 'DFEAFF'] },
        { name: 'Tertiary', role: ['E25B01', 'FFB690'], on: ['FFFFFF', '331100'], container: ['FFA366', '753409'], onContainer: ['000000', 'FFDBCA'] },
        { name: 'Error', role: ['D40000', 'FFB4AB'], on: ['FFFFFF', '690005'], container: ['FFDAD6', '93000A'], onContainer: ['930000', 'FFDAD6'] }
    ],
    surfaces: [
        ['Dim', 'E6E6E6', '111318'],
        ['Lowest', 'FFFFFF', '0C0E13'],
        ['Low', 'FFFFFF', '191C22'],
        ['Container', 'FFFFFF', '1D2028'],
        ['High', 'F4F6FA', '282B32'],
        ['Highest', 'EAEEF6', '33363D'],
        ['Bright', 'FFFFFF', '37393F']
    ],
    neutrals: [
        ['Background', 'FFFFFF', '111318'],
        ['On Surface', '000000', 'F5F5F5'],
        ['Surface Variant', 'E3E3E3', '2E2E2E'],
        ['On Surface Variant', '484848', 'C5C5C5'],
        ['Outline', '787878', '8F8F8F'],
        ['Outline Variant', 'C7C7C7', '444444'],
        ['Surface Tint', '3F51CA', 'BBD2FF'],
        ['Inverse Surface', '000000', 'E2E2E9'],
        ['Inverse On Surface', 'FFFFFF', '2E2E35'],
        ['Inverse Primary', 'BBD2FF', '1441CC']
    ],
    fixed: [
        ['Primary Fixed', 'DFEAFF'],
        ['Primary Fixed Dim', 'BBD2FF'],
        ['Secondary Fixed', 'DFEAFF'],
        ['Secondary Fixed Dim', 'C0CFEE'],
        ['Tertiary Fixed', 'FFDBCA'],
        ['Tertiary Fixed Dim', 'FFB690']
    ]
}

// Before the system: brand ramps spread across four Figma frames, each a
// slightly different copy. `main` is the swatch each mode used as the base.
const SCATTERED_RAMPS = [
    { name: 'Blue', tones: ['EBEBFF', 'D6D6FF', '9999FF', '7171FF', '5C5CFF', '3333FF'], main: ['3333FF', '7171FF'] },
    { name: 'Yellow', tones: ['FFFAE6', 'FFF5CC', 'FFEB99', 'FFE066', 'FFCC00'], main: ['FFCC00', 'FFE066'] },
    { name: 'Orange', tones: ['FFF0E6', 'FFB27F', 'FFA366', 'FF8533', 'FF6600'], main: ['FF6600', 'FFB27F'] },
    { name: 'Greys', tones: [['EAEAEA', 'ABABAB', '959595', '000000'], ['FFFFFF', '808080', '565656', '414141']] },
    { name: 'Status', tones: [['F34336', '0A920A'], ['F34336', '21C921']] }
]

const ScatteredPalette = ({ mode }) => (
    <div className="ldk-ramps">
        {SCATTERED_RAMPS.map((ramp) => {
            const tones = Array.isArray(ramp.tones[0]) ? ramp.tones[mode] : ramp.tones
            const main = ramp.main?.[mode]
            return (
                <div key={ramp.name} className="ldk-ramp">
                    <p className="ldk-ramp-name">{ramp.name}</p>
                    <ul className="ldk-ramp-tones">
                        {tones.map((hex) => (
                            <li key={hex} className={`ldk-ramp-tone${hex === main ? ' is-main' : ''}`}>
                                <span className="ldk-ramp-swatch" style={{ background: `#${hex}` }} aria-hidden="true" />
                                <code className="ldk-chip-hex">{hex}</code>
                                {hex === main && <span className="ldk-ramp-main">main</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        })}
    </div>
)

// Notes are [kind, text]: 'bad' renders a cross, 'good' a check.
const STAGES = [
    {
        tab: 'Before',
        title: 'Brand swatches scattered across Figma',
        scattered: true,
        notes: [
            ['bad', 'Four Figma frames, each with a slightly different copy of the same ramps'],
            ['bad', 'Labels that contradict their values: “Orange - 4” is both 60% and 80%, and a swatch named White is coded #000000'],
            ['bad', 'It lived only in Figma, so the app picked a few of these at random']
        ]
    },
    {
        tab: 'First draft',
        title: '20 hand-named tokens',
        notes: [
            ['bad', 'Raw brand blue (3333FF) and orange (FF6600) at full saturation'],
            ['bad', 'No on-color / container pairs to build components from'],
            ['bad', 'Two flat backgrounds — no tonal surfaces for elevation']
        ]
    },
    {
        tab: 'Material default',
        title: 'Theme Builder’s output for 3333FF',
        palette: MATERIAL_DEFAULT,
        notes: [
            ['good', 'A complete role set and surface ramp, generated from our brand blue'],
            ['bad', 'Muted to a dusty lavender primary (57598E): safe, but it no longer looked like Live MCQ'],
            ['bad', 'Secondary and tertiary drifted to slate and mauve, and the brand’s orange was gone']
        ]
    },
    {
        tab: 'Material translation',
        title: 'The draft, rebuilt on Material roles',
        palette: TRANSLATION,
        notes: [
            ['good', 'Every accent now arrives with its on-color and container'],
            ['good', 'Brand blue eased from 3333FF to 3840DD'],
            ['bad', 'Containers stayed the same in light and dark'],
            ['bad', 'Orange sank to a brown tertiary; secondary went slate grey']
        ]
    },
    {
        tab: 'Final',
        title: 'Tuned Material roles',
        palette: FINAL,
        notes: [
            ['good', 'Containers re-tuned separately for light and dark'],
            ['good', 'A deeper primary (1441CC), a clear blue secondary, and orange back as a vivid tertiary (E25B01)'],
            ['good', 'Clean white light surfaces and a cool tonal dark ramp']
        ]
    }
]

const Chip = ({ name, hex }) => (
    <li className="ldk-chip">
        <span className="ldk-chip-swatch" style={{ background: `#${hex}` }} aria-hidden="true" />
        <span className="ldk-chip-name">{name}</span>
        <code className="ldk-chip-hex">{hex}</code>
    </li>
)

const MaterialPalette = ({ palette, mode }) => {
    const pick = (pair) => pair[mode]
    return (
        <>
            <div className="ldk-accents">
                {palette.accents.map((a) => (
                    <div key={a.name} className="ldk-accent">
                        <div className="ldk-accent-half" style={{ background: `#${pick(a.role)}`, color: `#${pick(a.on)}` }}>
                            <span className="ldk-accent-name">{a.name}</span>
                            <code>{pick(a.role)}</code>
                        </div>
                        <div className="ldk-accent-half" style={{ background: `#${pick(a.container)}`, color: `#${pick(a.onContainer)}` }}>
                            <span className="ldk-accent-name">Container</span>
                            <code>{pick(a.container)}</code>
                        </div>
                    </div>
                ))}
            </div>

            <p className="ldk-palette-sub">Surface containers, dim → bright</p>
            <ol className="ldk-surfaces">
                {palette.surfaces.map(([name, light, dark]) => {
                    const hex = mode ? dark : light
                    return (
                        <li key={name} className="ldk-surface">
                            <span className="ldk-surface-swatch" style={{ background: `#${hex}` }} aria-hidden="true" />
                            <span className="ldk-surface-name">{name}</span>
                            <code className="ldk-chip-hex">{hex}</code>
                        </li>
                    )
                })}
            </ol>

            <p className="ldk-palette-sub">Neutrals & inverse</p>
            <ul className="ldk-chips">
                {palette.neutrals.map(([name, light, dark]) => (
                    <Chip key={name} name={name} hex={mode ? dark : light} />
                ))}
            </ul>

            {palette.fixed && (
                <>
                    <p className="ldk-palette-sub">Fixed — same in light and dark</p>
                    <ul className="ldk-chips">
                        {palette.fixed.map(([name, hex]) => <Chip key={name} name={name} hex={hex} />)}
                    </ul>
                </>
            )}
        </>
    )
}

export const PaletteEvolution = () => {
    const [stageIndex, setStageIndex] = useState(STAGES.length - 1)
    const [mode, setMode] = useState(0) // 0 = light, 1 = dark
    const stage = STAGES[stageIndex]

    return (
        <div className="ldk">
            <div className="ldk-palette-head">
                <ol className="ldk-stages" aria-label="Palette stage">
                    {STAGES.map((s, i) => (
                        <li key={s.tab}>
                            <button type="button" className="ldk-stage-btn" aria-pressed={stageIndex === i} onClick={() => setStageIndex(i)}>
                                <span className="ldk-stage-num">{String(i + 1).padStart(2, '0')}</span>
                                {s.tab}
                            </button>
                        </li>
                    ))}
                </ol>
                <div className="ldk-mode" role="group" aria-label="Palette mode">
                    {['Light', 'Dark'].map((label, i) => (
                        <button key={label} type="button" className="ldk-mode-btn" aria-pressed={mode === i} onClick={() => setMode(i)}>
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <section className={`ldk-palette-col${stage.palette === FINAL ? ' is-chosen' : ''}`}>
                <p className="ldk-label">{stage.tab} · {stage.title}</p>
                {stage.scattered ? (
                    <ScatteredPalette mode={mode} />
                ) : stage.palette ? (
                    <MaterialPalette palette={stage.palette} mode={mode} />
                ) : (
                    <ul className="ldk-chips">
                        {DRAFT_TOKENS.map(([name, light, dark]) => (
                            <Chip key={name} name={name} hex={mode ? dark : light} />
                        ))}
                    </ul>
                )}
                <ul className="ldk-palette-notes">
                    {stage.notes.map(([kind, text]) => (
                        <li key={text} className={`is-${kind}`}>{text}</li>
                    ))}
                </ul>
            </section>

            <p className="ldk-footnote">Values from the Figma files at each stage; the Material default is read from Theme Builder’s preview. Switch modes to compare.</p>
        </div>
    )
}

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

const ICON_STYLES = [
    { name: 'Outlined', family: 'Material Symbols Outlined', verdict: 'Squared-off terminals' },
    { name: 'Rounded', family: 'Material Symbols Rounded', verdict: 'Soft terminals that matched our style', chosen: true },
    { name: 'Sharp', family: 'Material Symbols Sharp', verdict: 'Hard corners, more technical' }
]
const ICON_WEIGHTS = [200, 300, 400, 600]
const ICON_SET = [
    ['quiz', 'Quiz'], ['timer', 'Timer'], ['school', 'Course'], ['menu_book', 'Notes'],
    ['leaderboard', 'Rank'], ['emoji_events', 'Award'], ['bookmark', 'Saved'], ['check_circle', 'Correct']
]

export const Icons = () => {
    useStylesheet(SYMBOL_FONT)
    useStylesheet(SYMBOL_STYLE_FONT)
    return (
        <div className="ldk">
            <p className="ldk-label">Material Symbols — picking the style</p>
            <div className="ldk-weights ldk-weights--styles">
                {ICON_STYLES.map((style) => (
                    <div key={style.name} className={`ldk-weight${style.chosen ? ' is-chosen' : ''}`}>
                        <span className="ldk-style-glyphs" aria-hidden="true">
                            {['quiz', 'timer'].map((glyph) => (
                                <span key={glyph} className="ldk-symbol" style={{ fontFamily: `'${style.family}'` }}>{glyph}</span>
                            ))}
                        </span>
                        <span className="ldk-weight-num">{style.name}</span>
                        <span className="ldk-style-verdict">{style.chosen && <span className="ldk-check" aria-hidden="true">✓ </span>}{style.verdict}</span>
                    </div>
                ))}
            </div>
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
