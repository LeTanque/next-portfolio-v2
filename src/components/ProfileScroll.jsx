import { useEffect, useState, useRef } from "react";
import FogBanner from "./FogBanner";
import Whois from "./Whois";
import Projects from "./Projects";

const FadeInSection = props => {
    const { frame } = props;
    
    const [ userSkills, setUserSkills ] = useState(null);
    const [ isVisible, setVisible ] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        setUserSkills({ 
            skills: {
                technology: skills.filter(skill => skill.type === "technology"),
                personal: skills.filter(skill => skill.type === "personal"),
                year: skills.filter(skill => skill.type === "year"),
            }
        })
    }, []);
    
    return (
        <div
            className={`block__fade-in-section ${frame ? frame : ""} ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

const ProfileScroll = () => {
    return (
        <section className="section__profile-scroll">
            <FadeInSection frame="fog-banner" >
                <FogBanner className="block__scroll-box" />
            </FadeInSection>

            <FadeInSection frame="simplebox" >
                <div className="block__scroll-box" style={{ backgroundColor: "dodgerblue" }}></div>
            </FadeInSection>

            <FadeInSection frame="whois" >
                <Whois className="block__scroll-box" />
            </FadeInSection>
            
            <FadeInSection frame="projects" >
                <Projects className="block__scroll-box" />
            </FadeInSection>

        </section>
    );
}


export default ProfileScroll;
