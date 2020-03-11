import { useEffect, useState } from "react";

const Projects = props => {
    const { projects } = props;
    const [ userProjects, setUserProjects ] = useState(null);

    useEffect(() => {
        setUserProjects(projects)
    }, [])

    if (!userProjects) return <h2>Loading</h2>;
    console.log('userProjects --> ', userProjects);
    

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
                        <h3>{project.name}</h3>
                    </React.Fragment>
                ))}
            </div>
        </main>
    );
}

export default Projects;

