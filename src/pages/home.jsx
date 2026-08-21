import styles from "../css/home.module.css"
import { motion } from "motion/react";
import { Link } from "react-router"
import { heroSlides, trustData, industriesData, capabilitiesData, servicesData, productsData, featuresData, processData, newsData } from "../data/homeData"
import aboutImage from "../assets/home/about.png"
import why from "../assets/home/why.png"
import qualityImage from "../assets/home/certifications.png"
import sustainibityImage from "../assets/home/sustainibility.png"
import supportImage from "../assets/home/supportImage.png"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useState, useEffect } from "react"

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [currentService, setCurrentService] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        if (!isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);
    useEffect(() => {
        if (activeIndex === heroSlides.length - 1) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(1);
            }, 900);

            return () => clearTimeout(timer);
        }

        if (activeIndex === 0) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(heroSlides.length - 2);
            }, 900);

            return () => clearTimeout(timer);
        }
    }, [activeIndex, heroSlides.length]);

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const containerItem = {
        hidden: {
            opacity: 0,
            y: 30
        },

        visible: {
            opacity: 1,
            y: 0
        }
    };
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.heroSlides} style={{ transform: `translateX(-${activeIndex * 100}%)`, transition: isTransitioning ? "transform 0.7s ease-in-out" : "none" }}>
                    {heroSlides.map((item, index) => (
                        <div className={styles.heroSlide} key={index}>
                            <img src={item.src} alt="" className={styles.heroImage} />
                            <div className={styles.heroOverlay}></div>
                            <div className={styles.heroText}>
                                <h1>{item.headline}</h1>
                                <p>{item.description}</p>
                                <div className={styles.heroBtns}>
                                    <Link to={item.primaryLink}>{item.primaryBtn}</Link>
                                    {item.secondaryBtn && <Link to={item.secondaryLink}>{item.secondaryBtn}</Link>}
                                </div>
                                <div className={styles.steppers}>
                                    {heroSlides.slice(0, 3).map((_, index) => (
                                        <div className={styles.stepper} onClick={() => setActiveIndex(index + 1)}>
                                            <div className={activeIndex === index + 1 ? styles.activeStepperNumber : styles.stepperNumber} >{String(index + 1).padStart(2, "0")}</div>
                                            <span className={activeIndex === index + 1 ? styles.activeStepperLine : styles.stepperLine} ></span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
            <div className={styles.trust}>
                <div className={styles.trustContent}>
                    {trustData.map((item, index) => (
                        <div className={styles.trustBox} key={index}>
                            <img src={item.src} alt="" className={styles.trustIcon} />
                            <div className={styles.trustDetail}>
                                <h2>{item.trustName}</h2>
                                <p>{item.trustDetail}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.aboutContent}>
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className={styles.aboutText}>
                        <h3>Who We Are</h3>
                        <hr className={styles.aboutLine} />
                        <h2>ENGINEERING THE FUTURE <br />Through Precision Manufacturing</h2>
                        <p>Jayco Manufacturing combines advanced technology, skilled workforce and a passion for innovation to create reliable products that power industries and build a stronger tomorrow.</p>
                        <Link to="/" className={styles.productsBtn}>explore products <BsArrowRight /></Link>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} viewport={{ once: true }} className={styles.aboutImageBox}>
                        <img src={aboutImage} alt="" className={styles.aboutImage} />
                    </motion.div>
                </div>

            </div>
            <div className={styles.capabilities}>
                <div className={styles.capabilitiesContent}>
                    <div className={styles.capabilitiesText}>
                        <h2>Our Capabilities</h2>
                        <span className={styles.capabilityLine}></span>
                    </div>
                    <motion.div className={styles.capabilityBoxes} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {capabilitiesData.map((item, index) => (
                            <motion.div key={index} variants={containerItem} className={styles.capabilityBox}>
                                <img src={item.src} alt="" className={styles.capabilityIcon} />
                                <div className={styles.capabilityBoxText}>
                                    <h3>{item.capabilityName}</h3>
                                    <p>{item.capabilityDescription}</p>
                                </div>
                                <Link to="/"><BsArrowRight size={24} /></Link>
                            </motion.div>
                        ))}

                    </motion.div>
                </div>
            </div>
            <div className={styles.services}>
                <div className={styles.servicesContent}>
                    <div className={styles.servicesText}>
                        <h2>OUR SERVICES</h2>
                        <div className={styles.serviceNavigationLine}>
                            <span className={styles.serviceLine}></span>
                            <div className={styles.serviceNavigation}>
                                <div className={currentService === 0 ? styles.DisabledServiceNavigation : styles.serviceLeftNavigation} onClick={() => { if (currentService > 0) { setCurrentService(currentService - 1) } }}><BsArrowLeft /></div>
                                <div className={currentService === servicesData.length - 1 ? styles.DisabledServiceNavigation : styles.serviceRightNavigation} onClick={() => { if (currentService < servicesData.length - 1) { setCurrentService(currentService + 1) } }}><BsArrowRight /></div>
                            </div>
                        </div>
                    </div>
                    <motion.div className={styles.serviceBoxes}>
                        <motion.div className={styles.serviceBox1} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            {servicesData.slice(currentService, currentService + 3).map((item, index) => (
                                <motion.div variants={containerItem} className={styles.serviceBox}>
                                    <div className={styles.serviceImageBox}><img src={item.src} alt="" className={styles.serviceImage} /></div>
                                    <div className={styles.serviceBoxText}>
                                        <h3>{item.serviceTitle}</h3>
                                        <p>{item.serviceDescription}</p>
                                        <Link to="/">Learn More <BsArrowRight className={styles.arrowIcon1} size={24} /></Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div className={styles.serviceBox2} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {servicesData.slice(currentService, currentService + 2).map((item, index) => (
                            <motion.div variants={containerItem} className={styles.serviceBox}>
                                <div className={styles.serviceImageBox}><img src={item.src} alt="" className={styles.serviceImage} /></div>
                                <div className={styles.serviceBoxText}>
                                    <h3>{item.serviceTitle}</h3>
                                    <p>{item.serviceDescription}</p>
                                    <Link to="/">Learn More <BsArrowRight className={styles.arrowIcon1} size={24} /></Link>
                                </div>
                            </motion.div>
                        ))}
                        </motion.div>
                        <motion.div className={styles.serviceBox3} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {servicesData.slice(currentService, currentService + 1).map((item, index) => (
                            <motion.div variants={containerItem} className={styles.serviceBox}>
                                <div className={styles.serviceImageBox}><img src={item.src} alt="" className={styles.serviceImage} /></div>
                                <div className={styles.serviceBoxText}>
                                    <h3>{item.serviceTitle}</h3>
                                    <p>{item.serviceDescription}</p>
                                    <Link to="/">Learn More <BsArrowRight className={styles.arrowIcon1} size={24} /></Link>
                                </div>
                            </motion.div>
                        ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.productsContent}>
                    <div className={styles.productsText}>
                        <h2>Featured Products</h2>
                        <span className={styles.productLine}></span>
                    </div>
                    <motion.div className={styles.productBoxes} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {productsData.map((item, index) => (
                            <motion.div variants={containerItem} className={styles.productBox}>
                                <div className={styles.productImageBox}><img src={item.src} alt="" className={styles.productImage} /></div>
                                <div className={styles.productBoxText}>
                                    <h3>{item.productName}</h3>
                                    <p>{item.productDescription}</p>
                                    <Link to="/">view details <BsArrowRight className={styles.arrowIcon2} size={24} /></Link>
                                </div>

                            </motion.div>
                        ))}

                    </motion.div>

                </div>
            </div>
            <div className={styles.industries}>
                <div className={styles.industriesContent}>
                    <div className={styles.industriesText}>
                        <h2>Industries We Serve</h2>
                        <span className={styles.industryLine}></span>
                    </div>
                    <motion.div className={styles.industryBoxes} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {industriesData.map((item, index) => (
                            <motion.div variants={containerItem} viewport={{ once: true }} className={styles.industryBox} key={index}>
                                <img src={item.src} alt="" className={styles.industryImage} />
                                <h4>{item.industryName}</h4>
                            </motion.div>
                        ))}

                    </motion.div>

                </div>
            </div>
            <div className={styles.why}>
                <div className={styles.whyContent}>
                    <div className={styles.whyImageBox}>
                        <img src={why} alt="" className={styles.whyImage} />
                    </div>
                    <div className={styles.whyText}>
                        <h2>Why Jayco</h2>
                        <hr />
                        <motion.div className={styles.featuresBoxes} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            {featuresData.map((item, index) => (
                                <motion.div key={index} className={styles.featureBox} variants={containerItem}>
                                    <img src={item.src} alt="" className={styles.featureImage} />
                                    <div className={styles.featureDetails}>
                                        <h3>{item.featureName}</h3>
                                        <p>{item.featureDescription}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className={styles.process}>
                <div className={styles.processContent}>
                    <div className={styles.processText}>
                        <h2>Manufacturing Excellence</h2>
                        <span className={styles.processLine} />
                    </div>
                    <div className={styles.processSteps}>
                        <hr className={styles.processBoxLine} />
                        <motion.div className={styles.processBoxes} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            {processData.map((item, index) => (
                                <motion.div className={styles.processBox} variants={containerItem}>
                                    <div className={styles.processImageBox}>
                                        <img src={item.src} alt="" className={styles.processImage} />
                                    </div>
                                    <div className={styles.processBoxText}>
                                        <h3>{item.processName}</h3>
                                        <p>{item.processDescription}</p>
                                    </div>

                                </motion.div>
                            ))}

                        </motion.div>
                    </div>
                </div>
            </div>
            <div className={styles.extra}>
                <div className={styles.extraContent}>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className={styles.quality}>
                        <h2>Quality & Certifications</h2>
                        <div className={styles.qualityContent}>
                            <img src={qualityImage} alt="" className={styles.qualityImg} />
                            <Link to="/" className={styles.viewCertificationBtn}>View All Certifications <BsArrowRight /></Link>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }} className={styles.sustainibity}>
                        <h2>Sustainability</h2>
                        <div className={styles.sustainibityContent}>
                            <img src={sustainibityImage} alt="" className={styles.sustainibityImage} />
                            <div className={styles.sustainibityDetail}>
                                <p>Committed to sustainable manufacturing practices that protect the environment and create a better future.</p>
                                <Link to="/" className={styles.initiativesbtn}>Our Initiatives <BsArrowRight /></Link>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} viewport={{ once: true }} className={styles.insights}>
                        <h2>Latest Insights</h2>
                        <div className={styles.insightBoxes}>
                            {newsData.map((item, index) => (
                                <div className={styles.insightBox}>
                                    <img src={item.src} alt="" className={styles.insightImage} />
                                    <div className={styles.insightDetail}>
                                        <h3>{item.newsTitle}</h3>
                                        <p>{item.newsDate}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={styles.support}>
                <div className={styles.supportContent}>
                    <div className={styles.supportImageBox}>
                        <img src={supportImage} alt="" className={styles.supportImage} />
                    </div>
                    <div className={styles.supportText}>
                        <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}><b>READY TO BUILD TOGETHER?</b><br />Connect with our engineering experts to discuss your <br />requirements.</motion.p>
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }} className={styles.supportBtns}>
                            <button className={styles.supportBtn}>Contact Us</button>
                            <button className={styles.supportBtn}>Request Quote</button>
                        </motion.div>
                    </div>
                </div>

            </div>
        </>
    )
}