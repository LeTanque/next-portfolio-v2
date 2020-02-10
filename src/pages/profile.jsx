
const pict = {
    borderRadius: "50%",
    border: "3px solid white",
    width: "100px",
}

function Profile({ user }) {

    if (!user) {
        return null
    }
    return (
        <div>
            <h2>
                <img src={user.picture} alt={user.displayName} style={pict} /> 
                Hello,{" "}
                {user.displayName}
            </h2>
            <p>This is what we know about you:</p>
            <ul>
                {Object.keys(user).map(key => (
                    <li key={key}>
                        {key}: {user[key].toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;
