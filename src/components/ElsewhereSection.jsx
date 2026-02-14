import React from 'react'
import './ElsewhereSection.css'

const socialLinks = [
    { name: 'Bluesky', icon: '🦋' },
    { name: 'Layers', icon: '📁' },
    { name: 'Dribbble', icon: '🏀' },
    { name: 'Github', icon: '🐙' },
    { name: 'LinkedIn', icon: '🔗' },
    { name: 'Email Me', icon: '✉️', extra: 'hello@daleanthony.com' }
]

const ElsewhereSection = () => {
    return (
        <section className="elsewhere">
            <h3 className="section-title">Elsewhere</h3>
            <div className="link-list">
                {socialLinks.map((link, index) => (
                    <div key={index} className="link-row">
                        <div className="link-main">
                            <span className="link-icon">{link.icon}</span>
                            <span className="link-name">{link.name}</span>
                        </div>
                        {link.extra && <span className="link-extra">{link.extra}</span>}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ElsewhereSection
