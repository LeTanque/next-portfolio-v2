import { useEffect, useState } from "react";
import { GoLink, GoMarkGithub } from "react-icons/go";

const Projects = props => {
    const { projects } = props;
    const [ userProjects, setUserProjects ] = useState(null);

    useEffect(() => {
        setUserProjects(projects)
    }, [])

    if (!userProjects) return <h2>Loading</h2>;
    
    return (
        <main className="main__projects-container" >
            <section className="section__projects" >
                <div className="block__project-header">
                    <h2>Projects</h2>
                </div>
            </section>
            <div className="block__project">
                {userProjects && userProjects.map(project => (
                    <React.Fragment key={project.id} >
                        <div  className="block__single-project">
                            <div className="block__single-project-header">
                                <img src={project.iconUrl} alt={project.name} className="img__project-icon" />
                                <h3>{project.name}</h3>
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

                            <div className="block__project-image-container" >
                                <img src={project.imageUrl} alt={project.name} className="img__project-image" />
                            </div>
                        </div>

                        <hr/>
                        
                    </React.Fragment>
                ))}
            </div>
        </main>
    );
}

export default Projects;

