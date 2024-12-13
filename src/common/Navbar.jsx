import React from 'react';
import styles from "./NavbarStyles.module.css";
import { Link } from 'react-router-dom';
import apologo from "../assets/apologo.png";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navLeft}>
                {/* Logo linking back to the home section */}
                <a href="#home">
                    <img
                        src={apologo}
                        alt="APO Logo"
                        className={styles.logo}
                    />
                </a>

                {/* Newsletter Section */}
                <div className={styles.newsletterText}>
                    <h3>
                        Also visit:
                        <a
                            href="path-to-weekly-newsletter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.newsletterLink}
                        >
                            Weekly Newsletter
                        </a>
                    </h3>
                </div>
            </div>

            <div className={styles.navRight}>
                <a
                    href="https://wiki.iotaphi.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Wiki
                </a>
                <a href="#memberlogin">Member Login</a>
            </div>
        </nav>
    );
}

export default Navbar;