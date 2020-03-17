import { useEffect, useState } from "react";

const Summary = props => {
    const { summary } = props;
    const [ userSummary, setUserSummary ] = useState(null);

    useEffect(() => {
        setUserSummary(summary)
    }, [])

    if (!userSummary) return <h2>Loading</h2>;

    return (
        <main className="main__summary-container" >
            <section className="section__summary" >
                <div className="block__summary-header">
                    <h2>Summary</h2>
                </div>
            </section>
            <div className="block__summary">
                {userSummary && userSummary.map((summary, index) => (
                    <React.Fragment key={index} >
                        <p>{summary.paragraph}</p>
                    </React.Fragment>
                ))}
            </div>
        </main>
    );
}

export default Summary;

