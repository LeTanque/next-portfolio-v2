import { useEffect, useState } from "react";

const Projects = props => {
    // const [ userSkills, setUserSkills ] = useState(null);


    useEffect(() => {
    }, [])

    // if (!userSkills) return <h2>Loading</h2>;

    return (
        <main className="main__projects-container" >
            <section className="section__projects" >
                <div className="block__profile-header">
                    <h1>Frank Martinez</h1>
                    <h5>Full-stack web developer</h5>
                </div>
            </section>
            <TextLooper intervals={[1900, 2200]}  alignment={"left"} namesOfSkills={userSkills.skills.year}  message={""} />
        </main>
    );
}

export default Projects;

