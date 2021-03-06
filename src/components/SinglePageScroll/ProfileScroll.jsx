import { useEffect, useState, useRef } from "react";
import { Element } from 'react-scroll';
// import { GiTank } from "react-icons/gi";

import FogBanner from "./FogBanner";
// import Whois from "./Whois";
import Projects from "./Projects/Projects";
import Summary from "./Summary";
import Contact from "./Contact";

// import skills from "../../data/Skills";
import projects from "../../data/Projects";
import summary from "../../data/Summary";
import contact from "../../data/Contact";


const FadeInSection = props => {
    const { frame } = props;
    
    const [ isVisible, setVisible ] = useState(false);
    // const domRef = useRef();

    useEffect(() => {
        // const observer = new IntersectionObserver(entries => {
        //     entries.forEach(entry => setVisible(entry.isIntersecting));
        // });
        // observer.observe(domRef.current);
    }, []);
    
    return (
        <div
            className={`block__fade-in-section ${frame ? frame : ""} ${isVisible ? "is-visible" : "is-visible"}`}
            // ref={domRef}
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
                <div className="block__scroll-box one" ></div>
            </FadeInSection>
            
            <FadeInSection frame="summary" >
                <Element  name="summary" className="element__profile-scroll" >
                    <Summary className="block__scroll-box" summary={summary} />
                </Element>
            </FadeInSection>

            <FadeInSection frame="projects" >
                <Element  name="projects" className="element__profile-scroll"  >
                    <Projects className="block__scroll-box" projects={projects} />
                </Element>
            </FadeInSection>

            <FadeInSection frame="contact" >
                <Element  name="contact" className="element__profile-scroll"  >
                    <Contact className="block__scroll-box" contact={contact} />
                </Element>
            </FadeInSection>

        </section>
    );
}


export default ProfileScroll;
