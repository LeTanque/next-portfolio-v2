import Thought from "./Thought";


export default function Thoughts(props) {
    const contStyle = { 
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    };
    const thoughtsHeader = {
        width: "100%"
    }

    return (
        <section className="section--thoughts-container" style={contStyle} >
            <div className="block--thoughts-header" style={thoughtsHeader} >
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
