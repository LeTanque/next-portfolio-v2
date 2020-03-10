import { useEffect, useState } from "react";
import TextLooper from "./TextLooper";


const Whois = props => {
    const { skills } = props;
    const [ userSkills, setUserSkills ] = useState(null);


    useEffect(() => {
        setUserSkills({ 
            skills: {
                technology: skills.filter(skill => skill.type === "technology"),
                personal: skills.filter(skill => skill.type === "personal"),
                year: skills.filter(skill => skill.type === "year"),
            }
        })
    }, [])

    if (!userSkills) return <h2>Loading</h2>;

    return (
        <main className="main__profile-card-container" >
            <section className="section__profile-card" >
                <div className="block__profile-header">
                    <h1>Frank Martinez</h1>
                    <h5>Full-stack web developer</h5>
                </div>
            </section>
            <TextLooper intervals={[1900, 2200]}  alignment={"right"} namesOfSkills={userSkills.skills.technology}  message={""} />
        </main>
    );
}

export default Whois;
