import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./MainpageStyles.module.css";
import apologo from "../../assets/apologo.png";
import iotaphilogo from "../../assets/iotaphilogo.png";
import leadershippic from "../../assets/leadershippic.jpg";
import friendshippic from "../../assets/friendshippic.png";
import servicepic from "../../assets/servicepic.png";
import rushinfo from "../../assets/rushinfo.png";
import contactphoto from "../../assets/contactphoto.png";


function Mainpage() {
    const [navbarOpaque, setNavbarOpaque] = useState(false);
    const [isFullyInView, setIsFullyInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            const rushElement = document.getElementById("rush");

            if (aboutSection) {
                const aboutTop = aboutSection.getBoundingClientRect().top;
                setNavbarOpaque(aboutTop <= 50);
            }

            if (rushElement) {
                const rect = rushElement.getBoundingClientRect();
                setIsFullyInView(
                    rect.top + rect.height / 2 < window.innerHeight && rect.bottom - rect.height / 2 > 0
                );
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };


    const smoothScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <>
            <nav className={`${styles.navbar} ${navbarOpaque ? styles.opaque : ""}`}>

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
                    <a onClick={() => smoothScroll("home")}>Home</a>
                    <a onClick={() => smoothScroll("about")}>About</a>
                    <a onClick={() => smoothScroll("rush")}>Rush</a>
                    <a onClick={() => smoothScroll("contact")}>Contact</a>
                    <a
                        href="https://wiki.iotaphi.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Wiki
                    </a>
                    <a onClick={() => smoothScroll("memberlogin")}>Member Login</a>
                </div>

            </nav>






            <section id="home" className={styles.homeSection}>
                <div className={styles.imageContainer}>
                    <img src={iotaphilogo} alt="Second Picture" className={styles.secondImage} />
                </div>
                <div className={styles.arrowContainer} onClick={scrollToAbout}>
                    ↓
                </div>
            </section>





            <section id="about" className={styles.aboutSection}>
                <h1 className={styles.aboutTitle}>About Us</h1>
                <p className={styles.aboutDescription}>
                    Alpha Phi Omega is a co-ed collegiate community service fraternity that strives to
                    develop three cardinal principles: Leadership, Friendship, and Service.
                    The Iota Phi Chapter at UC Davis is among the largest in the nation, with members
                    serving more than 10,000 hours in the Davis community each year.
                </p>

                <div className={styles.aboutContent}>
                    {/* Card 1: Be a Leader */}
                    <div className={`${styles.aboutcard} ${styles.cardLeader}`}>
                        <div className={styles.cardText}>
                            <h2>01</h2>
                            <h3>Be a Leader</h3>
                            <p>
                                Alpha Phi Omega helps members grow as leaders by offering roles like chapter officer
                                and project leader. Members can also join workshops to build skills for APO and beyond,
                                with both online and in-person options led by trained volunteers.
                            </p>
                            <button>More about Leadership →</button>
                        </div>
                        <div className={styles.cardImageWrapper}>
                            <div className={styles.rectangleBackground}></div>
                            <img src={leadershippic} alt="Leadership" />
                        </div>
                    </div>

                    {/* Card 2: Be a Friend */}
                    <div className={`${styles.aboutcard} ${styles.cardFriend}`}>
                        <div className={styles.cardImageWrapper}>
                            <div className={styles.rectangleBackground}></div>
                            <img src={friendshippic} alt="Friendship" />
                        </div>
                        <div className={styles.cardText}>
                            <h2>02</h2>
                            <h3>Be a Friend</h3>
                            <p>
                                Being a friend in Alpha Phi Omega means supporting each other, building lasting connections,
                                and creating a welcoming community where everyone feels valued. The surest way to have a friend,
                                is to be a friend.
                            </p>
                            <button>← More about Friendship</button>
                        </div>
                    </div>

                    {/* Card 3: Be of Service */}
                    <div className={`${styles.aboutcard} ${styles.cardService}`}>
                        <div className={styles.cardText}>
                            <h2>03</h2>
                            <h3>Be of Service</h3>
                            <p>
                                The Iota Phi chapter of Alpha Phi Omega annually performs over 10,000 hours of service to Davis
                                and the surrounding areas, working with schools, food banks, and community leaders.
                            </p>
                            <button>View our Service Opportunities →</button>
                        </div>
                        <div className={styles.cardImageWrapper}>
                            <div className={styles.rectangleBackground}></div>
                            <img src={servicepic} alt="Service" />
                        </div>
                    </div>
                </div>
            </section>








            <section
                id="rush"
                className={`${styles.rushSection} ${isFullyInView ? styles.active : ''}`}
            >
                <div className={styles.headerContainer}>
                    <h1>Rush F2K25</h1>
                </div>
                <div className={styles.videoContainer}>
                    <iframe
                        className={styles.youtubeVideo}
                        src="https://www.youtube.com/embed/XCzbFpBYY0M?si=8UVqoDOV31nE9C06"
                        title="Rush F2K25 Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>



                <div className={styles.rushcard}>
                    <h2>Mark your calendars!</h2>
                    <img src={rushinfo} alt="Rush Event" className={styles.cardImage} />
                    <p>
                        If you're interested in making friends and making a difference in the Davis community, come to our RUSH week events! During RUSH week, you'll be able to meet the brothers and hang out with us in a series of fun and games.
                    </p>
                </div>



                <div className={styles.rushcard}>
                    <h2>Why join us?</h2>
                    <p>
                        If developing leadership skills, establishing strong friendships, and serving the community interests you, then you'll enjoy being a part of Alpha Phi Omega. Be active, and help serve the chapter, campus, community, and country. Develop lifelong friendships. Leave a mark on your college experience.
                    </p>
                </div>

            </section>




            <section id="contact" className={styles.contactSection}>
                <h1 className={styles.title}>Contact us!</h1>

                <div className={styles.topButtons}>
                    <button className={styles.contactButton}>Want to sponsor us?</button>
                    <button className={styles.contactButton}>Need Volunteers?</button>
                </div>

                <div className={styles.contentContainer}>
                    {/* Left Side */}
                    <div className={styles.leftContainer}>
                        <div className={styles.infoBox}>
                            <p>
                                Specifically want to contact a certain executive committee?
                                <br />
                                Go through here →
                                <a href="/contact-info" className={styles.linkButton}>
                                    Contact Information
                                </a>
                            </p>
                        </div>

                        <form className={styles.contactForm}>
                            <p className={styles.formTitle}>If not, you can contact us through this message page!</p>

                            <div className={styles.inputWrapper}>
                                <input
                                    type="text"
                                    className={styles.inputField}
                                    placeholder="Name"
                                />
                            </div>

                            <div className={styles.inputWrapper}>
                                <input
                                    type="email"
                                    className={styles.inputField}
                                    placeholder="Email"
                                />
                            </div>

                            <div className={styles.textareaWrapper}>
                                <textarea
                                    className={styles.textareaField}
                                    placeholder="Message"
                                ></textarea>
                                <button type="submit" className={styles.sendButton}>➤</button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side */}
                    <div className={styles.rightContainer}>
                        <img src={contactphoto} alt="Group Photo" className={styles.groupPhoto} />
                    </div>
                </div>
            </section>




            <section id="footer" className={styles.footerSection}>
                <div className={styles.logoContainer}>
                    <img src={iotaphilogo} alt="Organization Logo" className={styles.logoImage} />
                    <p>&copy; 2024 Alpha Phi Omega - University of California, Davis. All rights reserved.</p>
                </div>
                <div className={styles.linksContainer}>
                    <h3>Quick Links</h3>
                    <div className={styles.linksWrapper}>
                        <a href="#home">Home</a>
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





        </>
    );
}

export default Mainpage;
