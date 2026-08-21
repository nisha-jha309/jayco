import styles from "../css/navbar.module.css"
import { NavLink, Link } from "react-router"
import logo from "../assets/brandIcon.svg"
import { HiOutlineSearch } from "react-icons/hi";
import { FiGlobe } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { navLinks } from "../data/navbarData"
import { useState } from "react";
export default function Navbar() {
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("United States");

    const countries = [
        "United States",
        "India"
    ];
    const [isHover, setIsHover] = useState(null);
    const [isMenuHover, setIsMenuHover] = useState(null);
    const [isMenuClick, setIsMenuClick] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className={styles.nav} onMouseLeave={() => setIsHover(null)}>
                <div className={styles.navContent}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" className={styles.logoIcon} />
                    </div>
                    <div className={styles.navLinks}>
                        {navLinks.map((item, index) => (
                            <div className={styles.navItem} key={index}>
                                <NavLink to={item.path} onMouseOver={() => setIsHover(index)} className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>{item.navName} {item.subLinks.length > 0 && (isHover === index ? <RiArrowDropDownLine size={24} /> : <RiArrowDropUpLine size={24} />)}</NavLink>
                                {isHover === index && item.subLinks.length > 0 && (<div className={styles.subLinks}>
                                    {item.subLinks.map((subLink, sublinkIndex) => (
                                        <Link to={subLink.path} key={sublinkIndex}>{subLink.subName}</Link>
                                    ))
                                    }
                                </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={styles.rightNav}>
                        <div className={styles.search}>
                            <Link className={styles.searchIcon} to="/"><HiOutlineSearch size={24} /></Link>
                        </div>
                        <div className={styles.countryDiv} onClick={() => setIsCountryOpen(prev => !prev)}>
                            <div className={styles.globeIcon}> <FiGlobe size={24} /> </div>
                            <div className={styles.countryName}>{selectedCountry}</div>
                            {isCountryOpen ? <RiArrowDropUpLine size={24} color="white" /> : <RiArrowDropDownLine size={24} color="white" />
                            }
                            {isCountryOpen && (
                                <div className={styles.countryDropdown}>
                                    {countries.map((country) => (
                                        <div className={styles.countryOption} key={country} onClick={(e) => { e.stopPropagation(); setSelectedCountry(country); setIsCountryOpen(false); }}>
                                            {country}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link className={styles.requestQuoteBtn} to ="/">request quote</Link>
                    </div>
                </div>
                <div className={styles.mobileNavContent}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" className={styles.logoIcon} />
                    </div>
                    <div className={styles.rightNav}>
                        <div className={styles.search}>
                            <Link className={styles.searchIcon} to="/"><HiOutlineSearch size={16} /></Link>
                        </div>
                        <div className={styles.countryDiv} onClick={() => setIsCountryOpen(prev => !prev)}>
    <div className={styles.globeIcon}> <FiGlobe size={16} /> </div>
    <div className={styles.countryName}>{selectedCountry}</div>
    {isCountryOpen ? <RiArrowDropUpLine size={16} color="white" /> : <RiArrowDropDownLine size={16} color="white"/>
    }
    {isCountryOpen && (
        <div className={styles.countryDropdown}>
            {countries.map((country) => (
                <div className={styles.countryOption} key={country} onClick={(e) => {  e.stopPropagation();  setSelectedCountry(country);  setIsCountryOpen(false);}}>
                    {country}
                </div>
            ))}
        </div>
    )}
</div>
                        <Link className={styles.requestQuoteBtn} to="/">request quote</Link>
                        <div className={styles.mobileNav}>
                            <div className={styles.menuIcon} onClick={() => { setIsOpen(prev => !prev) }}>
                                <CiMenuBurger size={16} />
                            </div>
                            {isOpen && (<div className={styles.menuNav}>
                                {navLinks.map((item, index) => (
                                    <div className={styles.menuNavLinks}>
                                        <NavLink to={item.path} key={index} onClick={() => { if (item.subLinks.length > 0) { setIsMenuClick(prev => prev === index ? null : index); } else { setIsOpen(false); } }} className={({ isActive }) => isActive ? styles.mobileActiveLink : styles.mobileNavLink}>{item.navName} {item.subLinks.length > 0 && (isMenuClick === index ? <RiArrowDropDownLine size={24} /> : <RiArrowDropUpLine size={24} />)}</NavLink>
                                        <div className={styles.menuSubLinks}>
                                            {isMenuClick === index && (item.subLinks.map((subLink, sublinkIndex) => (
                                                <Link to={subLink.path} key={sublinkIndex} onClick={() => setIsOpen(false)}>{subLink.subName}</Link>
                                            )))
                                            }
                                        </div>
                                    </div>
                                ))}</div>
                            )}

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}