import styles from "../css/footer.module.css"
import { FaLinkedin,FaYoutube,FaInstagram,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import brandIcon from "../assets/brandIcon.svg"

export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.left}>
                    <img src={brandIcon} alt="" className={styles.footerBrandIcon} />
                    <p>© COPYRIGHT 2026 - Jayco MFG - ALL RIGHTS RESERVED. <br />Site By: infinityadvt.com</p>
                </div>
                <div className={styles.right}>
                    <Link to="/" className={styles.socialLink}><FaLinkedin  size={24}/></Link>
                    <Link to="/" className={styles.socialLink}><FaYoutube size={24} /></Link>
                    <Link to="/" className={styles.socialLink}><FaInstagram  size={24}/></Link>
                    <Link to="/" className={styles.socialLink}><FaXTwitter  size={24}/></Link>
                    <Link to="/" className={styles.socialLink}><FaFacebook size={24} /></Link>
                </div>
            </div>
        </div>

    )
}