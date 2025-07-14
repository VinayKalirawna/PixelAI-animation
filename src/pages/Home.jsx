import React, { use, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./Home.css";


const Home = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const stripTransform = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-50%"]
    );

    const stripTransform2 = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-50%"]
    );

    const sectionRef = React.useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    useEffect(() => {
        window.Shery.imageEffect(".o-img", {
            style: 4,
            config: {
                uColor: { value: false },
                uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
                uAmplitude: { value: 1.5, range: [0, 5] },
                uFrequency: { value: 3.5, range: [0, 10] },
                geoVertex: { range: [1, 64], value: 32 },
                zindex: { value: -9996999, range: [-9999999, 9999999] },
                aspect: { value: 1 },
                ignoreShapeAspect: { value: true },
                shapePosition: { value: { x: 0, y: 0 } },
                shapeScale: { value: { x: 0.5, y: 0.5 } },
                shapeEdgeSoftness: { value: 0.14, range: [0, 0.5] },
                shapeRadius: { value: 0.5, range: [0, 2] },
                currentScroll: { value: 0 },
                scrollLerp: { value: 0.07 },
                gooey: { value: false },
                infiniteGooey: { value: false },
                growSize: { value: 4, range: [1, 15] },
                durationOut: { value: 1, range: [0.1, 5] },
                durationIn: { value: 1.5, range: [0.1, 5] },
                displaceAmount: { value: 0.5 },
                masker: { value: false },
                maskVal: { value: 1, range: [1, 5] },
                scrollType: { value: 0 },
                noEffectGooey: { value: true },
                onMouse: { value: 0 },
                noise_speed: { value: 0.2, range: [0, 10] },
                metaball: { value: 0.2, range: [0, 2] },
                discard_threshold: { value: 0.5, range: [0, 1] },
                antialias_threshold: { value: 0.002, range: [0, 0.1] },
                noise_height: { value: 0.5, range: [0, 2] },
                noise_scale: { value: 10, range: [0, 100] },
            },
        });

        window.Shery.imageEffect(".section-3-img", {
            style: 4,
            config: {
                onMouse: { value: 1 },
                uColor: { value: false },
                uSpeed: { value: 0.9, range: [0.1, 1], rangep: [1, 10] },
                uAmplitude: { value: 2.5, range: [0, 8] },
                uFrequency: { value: 3.5, range: [0, 10] },
                geoVertex: { range: [1, 64], value: 32 },
                zindex: { value: -9996999, range: [-9999999, 9999999] },
                aspect: { value: 1 },
                ignoreShapeAspect: { value: true },
                shapeEdgeSoftness: { value: 0.14, range: [0, 0.5] },
                scrollLerp: { value: 0.07 },
                growSize: { value: 4, range: [1, 15] },
                durationOut: { value: 1, range: [0.1, 5] },
                durationIn: { value: 1.5, range: [0.1, 5] },
                displaceAmount: { value: 0.5 },
                masker: { value: false },
                maskVal: { value: 1, range: [1, 5] },
                scrollType: { value: 0 },
                noEffectGooey: { value: true },
                noise_speed: { value: 0.2, range: [0, 10] },
                metaball: { value: 0.2, range: [0, 2] },
                discard_threshold: { value: 0.5, range: [0, 1] },
                antialias_threshold: { value: 0.002, range: [0, 0.1] },
                noise_height: { value: 0.5, range: [0, 2] },
                noise_scale: { value: 10, range: [0, 100] },
            },
        });
    }, []);

    return (
        <div className="home-container">
            <div className="home-1-secton">
                <h1 className="tech-header">
                    TECHN
                    <span>
                        <img
                            className="o-img"
                            src="https://res.cloudinary.com/dphhbdytb/image/upload/v1752223635/d7f7a2d0-80bb-454e-abd2-5345cee19db3_v5xnps.png"
                            alt=""
                        />
                    </span>
                    L
                    <span>
                        <img
                            className="o-img"
                            src="https://res.cloudinary.com/dphhbdytb/image/upload/v1752223640/b754cb59-7a74-4104-a129-60988261e4b3_ahchba.png"
                            alt=""
                        />
                    </span>
                    GY
                </h1>

                <div className="vr-img">
                    <img
                        className="vr-image"
                        src="https://res.cloudinary.com/dphhbdytb/image/upload/v1752226557/989cb242-c81e-4ca8-ab6e-0a918c829e64-removebg-preview_cbsgrz.png"
                        alt=""
                    />
                </div>

                <div className="behind-vr-img" ref={containerRef}>
                    <motion.div
                        className="first-strip"
                        style={{ x: stripTransform, rotate: "-5deg" }}
                    >
                        <div className="ai-tech">
                            {" "}
                            <h3 className="strip-content-tech">
                                AI TECHNOLOGY
                            </h3>
                        </div>
                        <div className="synth">
                            {" "}
                            <h3 className="strip-content-syth">SYNTHESIS</h3>
                        </div>
                        <div className="pink">
                            <h3 className="des">DESIGN</h3>
                        </div>
                        <div className="evo">
                            <h3 className="strip-content-evo">EVOVISIONS</h3>
                        </div>
                        <div className="eth">
                            <h3 className="strip-content-eth">EVERYTHING</h3>
                        </div>

                        <div className="ai-tech">
                            {" "}
                            <h3 className="strip-content-tech">
                                AI TECHNOLOGY
                            </h3>
                        </div>
                        <div className="synth">
                            {" "}
                            <h3 className="strip-content-syth">SYNTHESIS</h3>
                        </div>
                        <div className="pink">
                            <h3 className="des">DESIGN</h3>
                        </div>
                        <div className="evo">
                            <h3 className="strip-content-evo">EVOVISIONS</h3>
                        </div>
                        <div className="eth">
                            <h3 className="strip-content-eth">EVERYTHING</h3>
                        </div>
                    </motion.div>
                    <motion.div
                        className="second-strip"
                        style={{ x: stripTransform2, rotate: "-5deg" }}
                    >
                        <div className="ai-tech">
                            {" "}
                            <h3 className="strip-content-tech">
                                AI TECHNOLOGY
                            </h3>
                        </div>
                        <div className="synth">
                            {" "}
                            <h3 className="strip-content-syth">SYNTHESIS</h3>
                        </div>
                        <div className="pink">
                            <h3 className="des">DESIGN</h3>
                        </div>
                        <div className="evo">
                            <h3 className="strip-content-evo">EVOVISIONS</h3>
                        </div>
                        <div className="eth">
                            <h3 className="strip-content-eth">EVERYTHING</h3>
                        </div>

                        <div className="ai-tech">
                            {" "}
                            <h3 className="strip-content-tech">
                                AI TECHNOLOGY
                            </h3>
                        </div>
                        <div className="synth">
                            {" "}
                            <h3 className="strip-content-syth">SYNTHESIS</h3>
                        </div>
                        <div className="pink">
                            <h3 className="des">DESIGN</h3>
                        </div>
                        <div className="evo">
                            <h3 className="strip-content-evo">EVOVISIONS</h3>
                        </div>
                        <div className="eth">
                            <h3 className="strip-content-eth">EVERYTHING</h3>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="home-2-section">
                <div className="section-2-left">
                    <h2 className="supported">Supported By: </h2>
                    <div className="supported-icon">
                        <div className="supported-icon-chatgpt">
                            <img
                                className="icon-image"
                                src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-icon-white-png-on-a-black-background.png"
                                alt=""
                            />
                            <p>DALL-E</p>
                        </div>
                        <div className="supported-icon-chatgpt">
                            <img
                                className="icon-image"
                                src="https://play-lh.googleusercontent.com/JOTw5kZfjmdK-8sy6H4sVF6oSYWjaN9WtcBrbLneohHjbNaZQ0N4Yl5mSK1EZcLE8I8"
                                alt=""
                            />
                            <p>Deepart</p>
                        </div>
                        <div className="supported-icon-chatgpt">
                            <img
                                className="icon-image"
                                src="https://cdn-icons-png.flaticon.com/512/732/732171.png"
                                alt=""
                            />
                            <p>Adobe</p>
                        </div>
                        <div className="supported-icon-chatgpt">
                            <img
                                className="icon-image"
                                src="https://cdn.jim-nielsen.com/macos/512/perplexity-ask-anything-2024-11-06.png?rf=1024"
                                alt=""
                            />
                            <p>Perplexity</p>
                        </div>
                    </div>
                </div>
                {/* Section 2 */}
                <div className="section-2-right">
                    <div className="header-right">
                        <div className="header-right-text">
                            <h1 className="header-right-text-h">1M</h1>
                            <p className="header-right-text-p">Users</p>
                        </div>
                        <div className="header-right-text">
                            <h1 className="header-right-text-h">50M</h1>
                            <p className="header-right-text-p">Impressions</p>
                        </div>
                        <div className="header-right-text">
                            <h1 className="header-right-text-h">500K</h1>
                            <p className="header-right-text-p">Happy Clients</p>
                        </div>
                    </div>
                    <div className="bottom-right">
                        <div className="bottom-right-img">
                            <img
                                className="bottom-right-image"
                                id="bottom-right-image-1"
                                src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                                alt=""
                            />
                            <img
                                className="bottom-right-image"
                                id="bottom-right-image-2"
                                src="https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                                alt=""
                            />
                            <img
                                className="bottom-right-image"
                                id="bottom-right-image-3"
                                src="https://plus.unsplash.com/premium_photo-1682123941366-b3750c1ac728?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGJveXN8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />
                        </div>
                        <div className="bottom-right-text-below">
                            <h3 className="happy-cust">
                                Millions of Happy <br /> Customer
                            </h3>
                            <p className="hlp-degn">
                                AI tools to help design and create
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 3 */}
            <div className="home-section-3" ref={sectionRef}>
                <div className="section-3-header">
                    <motion.h1
                        className="section-3-header-h"
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 50 }
                        }
                        transition={{ duraton: 0.5, delay: 0.3 }}
                    >
                        MAGICAL PXEL BASED <br /> ART
                    </motion.h1>

                    <div className="section-3-header-below">
                        <motion.img
                            className="section-3-img"
                            src="https://res.cloudinary.com/dphhbdytb/image/upload/v1752223635/d7f7a2d0-80bb-454e-abd2-5345cee19db3_v5xnps.png"
                            alt=""
                        />
                        <div className="section-3-text">
                            <motion.p
                                className="PixelAlchemy"
                                initial={{ opacity: 0, y: 30 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 30 }
                                }
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                PixelAlchemy
                            </motion.p>

                            <motion.h1
                                className="section-3-text-header"
                                initial={{ opacity: 0, y: 30 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 30 }
                                }
                                transition={{ duration: 0.9, delay: 0.9 }}
                            >
                                EXPLORE THE MAGIC <br /> OF PIXELAI
                            </motion.h1>
                            <motion.p
                                className="section-3-text-main"
                                initial={{ opacity: 0, y: 30 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 30 }
                                }
                                transition={{ duration: 1.0, delay: 1.2 }}
                            >
                                PixelAlchemy is a unique where the Technology
                                and
                                <br />
                                creativity blend seamlessly to produce
                                captivating AI
                                <br /> generated art. Designed for artists,
                                enthusiasta, and
                                <br />
                                newcomers alike, PixelAlchemy provides
                                immmerssive <br />
                                space to explore.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
