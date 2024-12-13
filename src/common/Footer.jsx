import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./FooterStyles.module.css";
import iotaphilogo from "../assets/iotaphilogo.png";

function Footer() {
    return (
        <section id="footer" className={styles.footerSection}>
            <div className={styles.logoContainer}>
                <img src={iotaphilogo} alt="Organization Logo" className={styles.logoImage} />
                <p>&copy; 2024 Alpha Phi Omega - University of California, Davis. All rights reserved.</p>
            </div>
            <div className={styles.linksContainer}>
                <h3>Quick Links</h3>
                <div className={styles.linksWrapper}>
                    <Link to="/">Home</Link>
                    <a href="#wiki">Wiki</a>
                    <a href="#leadership">Leadership</a>
                    <a href="#friendship">Friendship</a>
                    <a href="#service">Service</a>
                    <Link to="/contact-info">Contact Information</Link>
                    <a href="#portal">Member Portal</a>
                    <a href="#newsletter">Newsletter</a>
                    <a href="#sponsors">Sponsors</a>
                    <a href="#volunteers">Volunteers</a>
                </div>
            </div>
            <div className={styles.socialContainer}>
                <h3>Follow Us</h3>
                <div className={styles.socialLinks}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <button className={styles.donateButton}>Donate</button>
            </div>
        </section>
    );
}

export default Footer;