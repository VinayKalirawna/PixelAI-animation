import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

const About = () => {
    const aboutRef = useRef(null);
    const heroTextRef = useRef(null);
    const statsRef = useRef(null);
    const timelineRef = useRef(null);
    const featuresRef = useRef(null);
    const teamRef = useRef(null);
    const visionRef = useRef(null);

    useEffect(() => {
        // Ensure ScrollTrigger is refreshed
        ScrollTrigger.refresh();

        const ctx = gsap.context(() => {
            // Hero Section Animation
            gsap.fromTo(
                ".about-hero-title",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".about-hero-title",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                ".about-hero-subtitle",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".about-hero-subtitle",
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                ".about-hero-description",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".about-hero-description",
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Stats Counter Animation
            const statsElements = document.querySelectorAll(".stat-number");
            statsElements.forEach((stat, index) => {
                const finalValue = parseInt(stat.getAttribute("data-count"));

                gsap.fromTo(
                    stat,
                    { innerHTML: 0 },
                    {
                        innerHTML: finalValue,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerHTML: 1 },
                        delay: index * 0.2,
                        scrollTrigger: {
                            trigger: stat,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            // Timeline Animation
            gsap.fromTo(
                ".timeline-item",
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".timeline",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Features Cards Animation
            gsap.fromTo(
                ".feature-card",
                { y: 80, opacity: 0, scale: 0.8 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".features-grid",
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Team Section Animation
            gsap.fromTo(
                ".team-title",
                { scale: 0.5, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".team-title",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                ".team-member",
                { y: 100, opacity: 0, rotation: 15 },
                {
                    y: 0,
                    opacity: 1,
                    rotation: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".team-grid",
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Vision Section with Parallax
            gsap.fromTo(
                ".vision-bg",
                { y: "-20%" },
                {
                    y: "20%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: visionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );

            // Vision text reveal animation
            gsap.fromTo(
                ".vision-text span",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".vision-text",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                ".vision-description",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".vision-description",
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Floating circles animation
            gsap.to(".circle-1", {
                y: -30,
                duration: 3,
                yoyo: true,
                repeat: -1,
                ease: "power2.inOut",
            });

            gsap.to(".circle-2", {
                y: -20,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: "power2.inOut",
                delay: 1,
            });

            gsap.to(".circle-3", {
                y: -25,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: "power2.inOut",
                delay: 2,
            });
        }, aboutRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="about-container" ref={aboutRef}>
            {/* Hero Section */}
            <section className="about-hero" ref={heroTextRef}>
                <div className="about-hero-content">
                    <h1 className="about-hero-title">
                        REVOLUTIONIZING
                        <span className="gradient-text">CREATIVITY</span>
                    </h1>
                    <p className="about-hero-subtitle">
                        Through Artificial Intelligence
                    </p>
                    <p className="about-hero-description">
                        At PixelAI, we're not just creating art—we're redefining
                        the boundaries between human imagination and artificial
                        intelligence, crafting a future where creativity knows
                        no limits.
                    </p>
                </div>
                <div className="floating-elements">
                    <div className="float-circle circle-1"></div>
                    <div className="float-circle circle-2"></div>
                    <div className="float-circle circle-3"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats" ref={statsRef}>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number" data-count="1000000">
                            0
                        </span>
                        <span className="stat-suffix">+</span>
                        <p className="stat-label">AI Artworks Created</p>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number" data-count="50000">
                            0
                        </span>
                        <span className="stat-suffix">+</span>
                        <p className="stat-label">Active Creators</p>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number" data-count="99">
                            0
                        </span>
                        <span className="stat-suffix">%</span>
                        <p className="stat-label">User Satisfaction</p>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number" data-count="24">
                            0
                        </span>
                        <span className="stat-suffix">/7</span>
                        <p className="stat-label">AI Processing</p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="about-timeline" ref={timelineRef}>
                <h2 className="section-title">OUR JOURNEY</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-year">2023</div>
                        <div className="timeline-content">
                            <h3>Foundation</h3>
                            <p>
                                PixelAI was born from a vision to democratize
                                AI-powered creativity
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-year">2024</div>
                        <div className="timeline-content">
                            <h3>First Million</h3>
                            <p>
                                Reached our first million AI-generated artworks
                                milestone
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-year">2025</div>
                        <div className="timeline-content">
                            <h3>Global Expansion</h3>
                            <p>
                                Launched advanced neural networks for
                                next-generation creativity
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="about-features" ref={featuresRef}>
                <h2 className="section-title">WHAT MAKES US DIFFERENT</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🧠</div>
                        <h3>Advanced Neural Networks</h3>
                        <p>
                            Powered by cutting-edge AI algorithms that
                            understand artistic nuance
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Lightning Fast</h3>
                        <p>
                            Generate stunning artwork in seconds with our
                            optimized processing
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3>Unlimited Creativity</h3>
                        <p>
                            From photorealistic to abstract—explore endless
                            artistic possibilities
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Privacy First</h3>
                        <p>
                            Your creations are yours—we prioritize data security
                            and ownership
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team" ref={teamRef}>
                <h2 className="section-title team-title">
                    MEET THE VISIONARIES
                </h2>
                <div className="team-grid">
                    <div className="team-member">
                        <div className="member-avatar">
                            <div className="avatar-placeholder">AI</div>
                        </div>
                        <h4>Alex Chen</h4>
                        <p>Founder & CEO</p>
                        <span>AI Research Pioneer</span>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">
                            <div className="avatar-placeholder">SM</div>
                        </div>
                        <h4>Sarah Martinez</h4>
                        <p>CTO</p>
                        <span>Neural Network Architect</span>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">
                            <div className="avatar-placeholder">DK</div>
                        </div>
                        <h4>David Kim</h4>
                        <p>Head of Design</p>
                        <span>Creative Technologist</span>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="about-vision" ref={visionRef}>
                <div className="vision-bg"></div>
                <div className="vision-content">
                    <div className="vision-text">
                        <span>THE</span> <span>FUTURE</span> <span>OF</span>{" "}
                        <span>ART</span>
                        <span>IS</span> <span>HERE</span>
                    </div>
                    <p className="vision-description">
                        We envision a world where AI amplifies human creativity
                        rather than replacing it—where every individual has
                        access to professional-grade artistic tools powered by
                        artificial intelligence.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
