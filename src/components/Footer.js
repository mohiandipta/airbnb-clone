import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__upper">
                <div className="about">
                    <h3>About</h3>
                    <ul>
                        <li>How Airbnb works</li>
                        <li>Airbnb 2021</li>
                        <li>Investors</li>
                        <li>Airbnb Plus</li>
                        <li>Airbnb Luxe</li>
                        <li>HotelTonight</li>
                        <li>Airbnb for Work</li>
                        <li>Made possible by Hosts</li>
                        <li>Careers</li>
                        <li>Founders' Letter</li>
                    </ul>
                </div>
            </div>
            <div className="footer__lower">
                <p>© 2021 Airbnb-Clone, Mohian Dipta.</p>
                <p>· Privacy · Terms · Sitemap</p>
            </div>
        </div>
    );
}

export default Footer;
