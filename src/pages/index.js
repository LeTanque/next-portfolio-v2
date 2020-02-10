import fetch from "isomorphic-fetch";
import Thoughts from "../components/Thoughts";

const rocket = {
    textAlign: "center"
};

function Index(props) {
    
    return (
        <section  style={rocket} className="section__index">
            <Thoughts thoughts={props.thoughts} />
        </section>
    );
}

Index.getInitialProps = async ({ req }) => {
    const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseURL}/api/thoughts`);
    return {
        thoughts: await res.json()
    };
};

export default Index;
