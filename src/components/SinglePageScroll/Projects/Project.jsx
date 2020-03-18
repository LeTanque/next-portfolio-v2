import { useState, useEffect } from "react";
import { GoChevronUp, GoChevronDown, GoLink, GoMarkGithub } from "react-icons/go";


const Project = props => {
    const { project } = props;
    const mediaMatch = window.matchMedia('(min-width: 900px)');
    const [ matches, setMatches ] = useState(mediaMatch.matches);
    

    const [ visible, setVisible ] = useState({
        visible: false,
        containerHeight: "55px",
        containerBg: "rgba(17,17,17,0.95)",
        imgMargin: "-175px auto 0 auto"
    })

    const pictureReveal = () => {
        if (visible.visible) {
            setVisible({
                visible: false,
                containerHeight: "55px",
                containerBg: "rgba(17,17,17,0.97)",
                imgMargin: "-175px auto 0 auto"
            })
        }
        
        else if (!visible.visible && matches) {
            setVisible({
                visible: true,
                containerHeight: "550px",
                containerBg: "rgba(17,17,17,0)",
                imgMargin: "0 auto"
            })
        }
        else if (!visible.visible && !matches) {
            setVisible({
                visible: true,
                containerHeight: "100%",
                containerBg: "rgba(17,17,17,0)",
                imgMargin: "0 auto"
            })
        }
    }

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });

    return (
        <>
            <div  className="block__single-project">
                <div className="block__single-project-header">
                    <img src={project.iconUrl} alt={project.name} className="img__project-icon" />
                    <h4>{project.name}</h4>
                </div>

                <div className="block__single-project-description">
                    <p>{project.description}</p>
                    <div className="block__project-link" >
                        <GoLink /><a href={project.link} className="link__project" alt={project.name} >Link to deployed site</a>
                    </div>
                    {project.github ? (
                        <div className="block__project-link" >
                            <GoMarkGithub /><a href={project.github} className="link__project" alt={project.name} >Link to repo</a>
                        </div>
                    ) : null}
                </div>

                <div className="block__project-image-container" style={{ 
                    height: visible.containerHeight,
                    backgroundColor: visible.containerBg
                }} >
                    <img src={project.imageUrl} alt={project.name} className="img__project-image" style={{
                        margin: visible.imgMargin
                    }}/>
                </div>

                <div className="block__project-image-action" >
                    {visible.visible ? (
                        <GoChevronUp onClick={pictureReveal} />
                    ) : (
                        <>
                            {/* <div>preview</div> */}
                            <GoChevronDown onClick={pictureReveal} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};


export default Project

