import { useEffect, useState } from "react";

import Project from "./Project";


const Projects = props => {
    const { projects } = props;
    const [ userProjects, setUserProjects ] = useState(null);

    useEffect(() => {
        setUserProjects(projects)
    }, []);


    if (!userProjects) return <h2>Loading</h2>;
    
    return (
        <main className="main__projects-container" >
            <section className="section__projects" >
                <div className="block__project-header">
                    <h3>Projects</h3>
                </div>
            </section>
            <div className="block__project">
                {userProjects && userProjects.map(project => (
                    <React.Fragment key={project.id}>
                        <Project 
                            
                            project={project}
                        />
                        {/* {project.id === userProjects.length - 1 ? null : (
                            <hr/>
                        )} */}
                    </ React.Fragment>
                ))}
            </div>
        </main>
    );
}

export default Projects;

