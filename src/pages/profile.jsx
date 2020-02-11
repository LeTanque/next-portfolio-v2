import { useEffect, useState } from "react";

const pict = {
    borderRadius: "50%",
    border: "3px solid white",
    width: "100px",
}

const Profile = props => {
    const { user } = props;
    const [ userProfile, setUserProfile ] = useState({
        picture: "",
        displayName: "",
    })

    useEffect(() => {
        setUserProfile(user)
    }, [user])
    
    if (!user) return (
        <h4>Loading...</h4>
    )

    return (
        <main className="main__profile-card-container" >
            <section className="section__profile-card" >
                <div className="block__profile-header">
                    <img src={userProfile.picture} alt={userProfile.displayName} style={pict} /> 
                    <h2>
                        Hello,{" "}
                        {userProfile.displayName}
                    </h2>
                </div>
                <ul>
                    {Object.keys(user).map(key => (
                        <li key={key}>
                            <strong>{key}</strong>: {user[key].toString()}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Profile;
