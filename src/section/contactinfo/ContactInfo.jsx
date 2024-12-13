import React from 'react';
import styles from "./ContactInfoStyles.module.css";
import Presdient from "../../section/contactinfo/excommpics/President.png"; // Adjust the path as needed
import Service from "../../section/contactinfo/excommpics/SVP.png"; // Adjust the path as needed
import Fellow from "../../section/contactinfo/excommpics/FVP.png"; // Adjust the path as needed
import Member from "../../section/contactinfo/excommpics/MVP.png"; // Adjust the path as needed
import Finance from "../../section/contactinfo/excommpics/FIVP.png"; // Adjust the path as needed
import Parents from "../../section/contactinfo/excommpics/PParent.png"; // Adjust the path as needed
import Recording from "../../section/contactinfo/excommpics/RecSec.png"; // Adjust the path as needed
import Corresponding from "../../section/contactinfo/excommpics/CorSec.png"; // Adjust the path as needed
import Outreach from "../../section/contactinfo/excommpics/Outreach.png"; // Adjust the path as needed
import Historians from "../../section/contactinfo/excommpics/Historian.png"; // Adjust the path as needed
import SAA from "../../section/contactinfo/excommpics/Advisor.png"; // Adjust the path as needed
import Advisor from "../../section/contactinfo/excommpics/Advisor.png"; // Adjust the path as needed


function ContactInfo() {
    const contacts = [
        { name: ["Sally Wu"], title: "President", email: "president@iotaphi.org", image: Presdient },
        { name: ["Katelyn Phy", "Arra Vargas"], title: "Service Vice President", email: "service@iotaphi.org", image: Service },
        { name: ["Elson Wong", "Welton Czhang"], title: "Fellowship Vice President", email: "fellowship@iotaphi.org", image: Fellow },
        { name: ["Christian Carino", "Brendon Lin"], title: "Membership Vice President", email: "membership@iotaphi.org", image: Member },
        { name: ["James Lau", "Tony Zhong"], title: "Finance Vice President", email: "finance@iotaphi.org", image: Finance },
        { name: ["Amy Gonzalez"], title: "Pledge Parents", email: "pledgeparents@iotaphi.org", image: Parents },
        { name: ["Brandon Vu"], title: "Recording Secretary", email: "recsec@iotaphi.org", image: Recording },
        { name: ["Brandon Vu"], title: "Corresponding Secretary", email: "recsec@iotaphi.org", image: Corresponding },
        { name: ["Bryannaranee Pulido", "Madison Liang"], title: "Outreach Secretary", email: "historians@iotaphi.org", image: Outreach },
        { name: ["Nathan Galedo", "Sean Batson"], title: "Historians", email: "historians@iotaphi.org", image: Historians },
        { name: ["N/A"], title: "Sergant At Arms", email: "advisors@iotaphi.org", image: SAA },
        { name: ["Advisors"], title: "Advisors", email: "advisors@iotaphi.org", image: Advisor },
    ];


    return (
        <div className={styles.contactInfo}>
            <div className={styles.header}>
                <h1>Contact Us</h1>
            </div>
            <p>If you have any questions for a specific executive committee, feel free to email us. We will reply as soon as possible!</p>
            <div className={styles.grid}>
                {contacts.map((contact, index) => (
                    <div className={styles.card} key={index}>
                        <img src={contact.image} alt={contact.title} className={styles.image} />
                        <div className={styles.name}>
                            {contact.name.map((n, i) => (
                                <React.Fragment key={i}>
                                    {n}
                                    {i < contact.name.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </div>
                        <p className={styles.title}>{contact.title}</p>
                        <a href={`mailto:${contact.email}`} className={styles.email}>
                            {contact.email}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ContactInfo;
