import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./Gallery.css";
import { debug } from "three/src/nodes/TSL.js";

const Gallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const galleryItems = [
        {
            id: 1,
            src: "https://res.cloudinary.com/dphhbdytb/image/upload/v1752875948/f044e99d-9a2a-48ed-92c7-56f597798455_na2nxy.png",
            title: "Neural Dreams",
            description:
                "Dive into the subconscious mind of AI, where abstract thoughts transform into vivid digital landscapes through deep learning algorithms.",
            category: "Abstract Art",
        },
        {
            id: 2,
            src: "https://res.cloudinary.com/dphhbdytb/image/upload/v1752875919/66c72eb2-1803-42c9-aeca-8512b407bdff_hm7bqi.png",
            title: "Cybernetic Fusion",
            description:
                "Where organic meets digital - a stunning representation of human-machine symbiosis rendered in ethereal blues and purples.",
            category: "Sci-Fi Art",
        },
        {
            id: 3,
            src: "https://res.cloudinary.com/dphhbdytb/image/upload/v1752875893/d5ac3b15-2b69-4d3b-9889-d0b09304ef94_dxedni.png",
            title: "Quantum Particles",
            description:
                "Visualizing the invisible - subatomic particles dance in harmonious patterns, creating mesmerizing geometric formations.",
            category: "Scientific Art",
        },
        {
            id: 4,
            src: "https://res.cloudinary.com/dphhbdytb/image/upload/v1752875892/632589f4-14d0-40cf-9bbe-44e77029ac35_qg0pnn.png",
            title: "Digital Metamorphosis",
            description:
                "Witness the transformation of code into art, where algorithms bloom into breathtaking visual symphonies.",
            category: "Digital Art",
        },
        {
            id: 5,
            src: "https://res.cloudinary.com/dphhbdytb/image/upload/v1752876137/30482186-6901-4efc-a217-d3e5f89a942a_w7idcz.png",
            title: "Electric Dreams",
            description:
                "Neon-lit visions from the AI's imagination, pulsing with electric energy and vibrant color gradients.",
            category: "Neon Art",
        },
        {
            id: 6,
            src: "https://res.cloudinary.com/dphhbdytb/image/upload/v1752223640/b754cb59-7a74-4104-a129-60988261e4b3_ahchba.png",
            title: "AI Fading Out",
            description:
                "The AI is the Future, We shoud Adapt learn and be very careful using that. Also need to make Ensure they are not a threat to Humans",
            category: "E",
        },
    ];
    useEffect(() => {
        window.Shery.imageEffect(".diagonal-image-container", {
            style: 4,
        });
    }, []);

    return (
        <div className="gallery-container" ref={containerRef}>
            <motion.div
                className="gallery-header"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="gallery-title">AI GALLERY</h1>
                <p className="gallery-subtitle">
                    Explore the infinite possibilities of artificial creativity
                </p>
            </motion.div>

            <div className="diagonal-gallery-wrapper">
                {galleryItems.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const itemRef = useRef(null);
                    const isInView = useInView(itemRef, {
                        once: false,
                        amount: 0.3,
                    });

                    return (
                        <motion.div
                            key={item.id}
                            ref={itemRef}
                            className={`diagonal-gallery-item ${
                                isEven ? "left-align" : "right-align"
                            }`}
                            initial={{
                                opacity: 0,
                                x: isEven ? -100 : 100,
                                y: 50,
                            }}
                            animate={
                                isInView
                                    ? { opacity: 1, x: 0, y: 0 }
                                    : {
                                          opacity: 0,
                                          x: isEven ? -100 : 100,
                                          y: 50,
                                      }
                            }
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                        >
                            <div className="diagonal-content-wrapper">
                                <div className="diagonal-image-container">
                                    <img
                                        className="diagonal-gallery-img"
                                        src={item.src}
                                        alt={item.title}
                                    />
                                </div>

                                <motion.div
                                    className="diagonal-text-content"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 30 }
                                    }
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2 + 0.3,
                                        ease: "easeOut",
                                    }}
                                >
                                    <span className="diagonal-category">
                                        {item.category}
                                    </span>
                                    <h3 className="diagonal-title">
                                        {item.title}
                                    </h3>
                                    <p className="diagonal-description">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                className="gallery-footer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <p className="gallery-footer-text">
                    Each artwork is uniquely generated by our advanced AI
                    algorithms, representing the cutting edge of artificial
                    creativity and digital artistry.
                </p>
            </motion.div>
        </div>
    );
};

export default Gallery;
