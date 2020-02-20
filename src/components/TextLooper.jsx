import { useState, useEffect } from "react";
import SimpleIcons from 'simple-icons-react-component';
import TextLoop from "react-text-loop";


const TextLooper = props => {
    const { intervals, alignment, namesOfSkills, message } = props;  // Send in left, center, or right
    const [ skillsArray, setSkillsArray ] = useState();

    useEffect(() => {
        if (!skillsArray) {
            setSkillsArray(getRandomArrSkills(namesOfSkills));
        }
    }, [namesOfSkills])
    
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getRandomArrSkills = (skills) => {
        let skillCharArr = [];
        for (let i=0; i<=skills.length * 2; i++) {
            let selectSkill = skills[getRandomInt(0, namesOfSkills.length - 1)].skill;
            skillCharArr.push(selectSkill);
        };
        return skillCharArr;
    }

    if (!namesOfSkills) return <h3>Loading</h3>;

    return (
        <section className="section__textlooper">
            <main className={`main__textlooper header-major ${alignment}`}>
                <div className="block__title">{message}&nbsp;</div>

                {skillsArray ? (
                    <TextLoop 
                        interval={intervals}
                        delay={0}
                        mask={false} 
                        fade={true}
                        noWrap={false}
                        springConfig={{ stiffness: 500, damping: 53, precision: 0.1 }}
                        adjustingSpeed={150}
                        className="text-loop"
                    >
                        {skillsArray.map((entry, index) => (
                            <React.Fragment key={index + "-" + entry}>
                                <h3 className="block__text-payload">
                                    {skillsArray[index]}
                                </h3>
                                <SimpleIcons 
                                    name={entry}
                                    className="icon--skills"
                                />
                            </React.Fragment>
                        ))}
                    </TextLoop >
                ) : null}

            </main>
        </section>
    );
}


export default TextLooper;

