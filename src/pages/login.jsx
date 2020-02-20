import { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

const Login = props => {
    const { setUserState, userState } = props;

    const [ formState, setFormState ] = useState({
        username: "",
        password: ""
    });
    const [ transpile, setTranspile ] = useState({})
    

    useEffect(() => {
        if (transpile.data) {
            const transpiled = JSON.parse(transpile.data);
            setUserState({ ...userState, user: transpiled.props.pageProps.user })
        }
    }, [transpile])
    

    const submitForm = async event => {
        event.preventDefault();
        await axios({
            method: "POST",
            baseURL: "/auth/login",
            headers: {
                "Content-Type": "application/json"
            },
            data: { username: formState.username, password: formState.password }
        })
        .then(response => {
            const transform = (node) => {
                if (node.type === "script" && node.name === "script" && node.attribs.id === "__NEXT_DATA__") {
                    setTranspile( node.children[0] );
                    return <h6>{node.children[0]}</h6>
                }
            }
            const options = { transform: transform };
            let cleanResponse = response.data.replace("<!DOCTYPE html>", "");
            cleanResponse = cleanResponse.replace("<html>", "");
            ReactHtmlParser(cleanResponse, options);
            Router.push("/");
        })
        .catch(err => console.log("error in submit form", err));
        setFormState({ username:"", password:"" })
    };

    return (
        <section className="section__form login">
            <form onSubmit={submitForm}>
                <input
                    name="username"
                    type="text"
                    placeholder="Username..."
                    value={formState.username}
                    onChange={event =>
                        setFormState({
                            ...formState,
                            [event.target.name]: event.target.value
                        })
                    }
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password..."
                    value={formState.password}
                    onChange={event =>
                        setFormState({
                            ...formState,
                            [event.target.name]: event.target.value
                        })
                    }
                />
                <button onSubmit={submitForm}>Submit</button>
            </form>
        </section>
    );
};


Login.getInitialProps = async function () {
    return { 
        transitionType: 'none',
        timeout: 0
    }
}


export default Login;
