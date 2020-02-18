import fetch from "isomorphic-fetch";
import Thought from "../components/Thought";



const Thoughts = props => {

    return (
        <section className="section--thoughts-container"   >
            <div className="block--thoughts-header"  >
                <h2>Latest Thoughts</h2>
            </div>
            {props.thoughts &&
                props.thoughts.map(thought => (
                    <div key={thought.id} >
                        <Thought thought={thought} />
                    </div>
                ))}
            {!props.thoughts && <div >Loading...</div>}
        </section>
    );
}

Thoughts.getInitialProps = async (ctx) => {
    const { req } = ctx;
    const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
    const res = await fetch(`${baseURL}/api/thoughts`);
    return {
        thoughts: await res.json(),
    };
};

export default Thoughts;




