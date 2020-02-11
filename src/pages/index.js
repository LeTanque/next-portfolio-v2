import fetch from "isomorphic-fetch";
import Thoughts from "../components/Thoughts";

const rocket = {
    textAlign: "center"
};

const Index = props => {
    return (
        <section  style={rocket} className="section__index">
            <Thoughts thoughts={props.thoughts} />
        </section>
    );
}

Index.getInitialProps = async (ctx) => {
    const { req } = ctx;
    const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseURL}/api/thoughts`);
    return {
        thoughts: await res.json(),
    };
};

export default Index;
