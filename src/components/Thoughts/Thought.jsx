


export default function Thought({ thought }) {
    const cardStyle = { 
        marginTop: "15px",
        backgroundColor: "#131313",
    };

    return (
        <section className="section--thought" style={cardStyle}>
            <div>
                <h4>{thought.message}</h4>
                <p>{thought.author}</p>
            </div>
        </section>
    );
}

