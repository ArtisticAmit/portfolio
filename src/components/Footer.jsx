import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <div className="footer-social">
                    <a href="https://www.behance.net/ArtisticAmit" target="_blank" rel="noopener noreferrer" className="text-button">
                        Behance
                    </a>
                    <a href="https://medium.com/@ArtisticAmit" target="_blank" rel="noopener noreferrer" className="text-button">
                        Medium
                    </a>
                </div>
                <a href="https://www.linkedin.com/in/artisticamit?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-button">
                    LinkedIn
                </a>
            </div>
        </footer>
    )
}

export default Footer
