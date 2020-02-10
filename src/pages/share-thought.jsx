import Router from "next/router";

const { useState } = require("react");


export default function ShareThought() {
    const [ message, setMessage ] = useState("");

    async function submit(event) {
        event.preventDefault();
        await fetch("/api/thoughts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message
            })
        });
        Router.push("/");
    }

    return (
        <section className="section__form" >
            <form onSubmit={submit} >
                <div>
                    <h3>What is in your mind?</h3>
                    <input
                        type="text"
                        placeholder="Say something"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                    />
                </div>
                <button variant="primary" type="submit">
                    Share
                </button>
            </form>
        </section>
    );
}
