import React, { useState, useEffect } from "react";
import Head from "next/head";
import App from "next/app";
import Navbar from "../components/Navbar";

import "../styles/base.scss";


const MyComponent = (props) => {
    const { Component, state } = props;
    const [ userState, setUserState ] = useState(state)

    useEffect(() => {
        setUserState(state)
    }, [state])

    return (
        <>
            <Navbar {...props} userState={userState} />
            <Component {...props} userState={userState} setUserState={setUserState} />
        </>
    )
}



export default class MyApp extends App {
    static async getInitialProps(props) {
        const { Component, ctx } = props;

        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        if (ctx.req && ctx.req.session.passport) {
            pageProps.user = ctx.req.session.passport.user;
        }
        return { pageProps };
    }

    constructor(props) {
        super(props);
        this.state = {
            user: props.pageProps.user
        };
    }

    render() {
        const { pageProps, Component } = this.props;

        let userSession = pageProps.session ? pageProps.session : null;

        const props = {
            ...pageProps,
            user: this.state.user,
        };

        return (
            <>
                <Head>
                    <title>Next Passport Auth</title>
                    <link rel="icon" href="/favicon.ico" />
                    <script
                        id="session"
                        type="application/json"
                        dangerouslySetInnerHTML={{
                        __html: JSON.stringify(userSession, null, 2)
                        }}
                    />
                </Head>
                <MyComponent state={this.state} Component={Component} {...props} />
            </>
        );
    }
}

