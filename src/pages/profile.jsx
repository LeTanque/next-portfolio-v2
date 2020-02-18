import fetch from "isomorphic-fetch";
import { useEffect, useState } from "react";
import TextLooper from "../components/TextLooper";



const Profile = props => {
    const { userData } = props;
    const [ userProfile, setUserProfile ] = useState(null);
    const [ userSkills, setUserSkills ] = useState(null);

    useEffect(() => {
        if (userData) {
            setUserProfile({ profile: userData.profile })
            setUserSkills({ 
                skills: {
                    technology: userData.skills.filter(skill => skill.type === "technology"),
                    personal: userData.skills.filter(skill => skill.type === "personal"),
                    year: userData.skills.filter(skill => skill.type === "year"),
                }
            })
        }
    }, [userData])

    if (!userData || !userProfile || !userSkills) return <h2>Loading</h2>;

    return (
        <main className="main__profile-card-container" >
            <TextLooper intervals={[1900, 2200]}  alignment={"left"} namesOfSkills={userSkills.skills.technology}  message={"I love building with"} />
            <section className="section__profile-card" >
                <div className="block__profile-header">
                    <h2>Hello!</h2>
                </div>
                <div className="block__profile-body">
                    <h5>My name is Frank Martinez.</h5>
                    {userProfile && userProfile.profile.slice(0,2).map(item => {
                        return (
                            <p key={item.id}>
                                {item.block}
                            </p>
                        )
                    })}
                </div>
            </section>
            <TextLooper intervals={[2800, 3200]}   alignment={"right"} namesOfSkills={userSkills.skills.personal}  message={"I love building with"} />
            <section className="section__profile-card" >
                <div className="block__profile-body">
                    {userProfile && userProfile.profile.slice(2,5).map(item => {
                        return (
                            <p key={item.id}>
                                {item.block}
                            </p>
                        )
                    })}
                </div>
            </section>
            <TextLooper intervals={[2000, 2000]}   alignment={"center"} namesOfSkills={userSkills.skills.year}  message={`I have`} />
            <section className="section__profile-card" >
                <div className="block__profile-body">
                    {userProfile && userProfile.profile.slice(5, -1).map(item => {
                        if (item.style === "list") {
                            let listArr = item.block.split('*** ');
                            listArr = listArr.slice(1);
                            return (
                                <ul>
                                    {listArr.map((listItem, index) => (
                                        <li key={index}>
                                            {listItem}
                                        </li>
                                    ))}
                                </ul>
                            )
                        } else {
                            return (
                                <p key={item.id}>
                                    {item.block}
                                </p>
                            )
                        }
                    })}
                </div>
                <div className="block__signature">{userProfile.profile[userProfile.profile.length - 1].block}</div>
            </section>
        </main>
    );
}

Profile.getInitialProps = async (ctx) => {
    const { req } = ctx;
    const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseURL}/api/profile`);

    return {
        userData: await res.json(),
    };

};


export default Profile;
