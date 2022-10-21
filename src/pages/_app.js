import React, { useState, useEffect } from "react";
import Head from "next/head";
import App from "next/app";
import Nav from "../components/Nav";

import { PageTransition } from "next-page-transitions";

import "../styles/base.scss";


const MyComponent = (props) => {
    const { Component, state, router } = props;
    const [ userState, setUserState ] = useState(state)
    
    useEffect(() => {
        setUserState(state)
    }, [state])
    
    return (
        <>
            <Nav userState={userState} router={router.route}/>
            <PageTransition
                timeout={props.timeout}
                classNames={`page-transition-${props.transitionType}`}
                loadingClassNames={`section__loading`}
                loadingDelay={0}
                loadingTimeout={{
                    enter: props.timeout,
                    exit: 0,
                }}
            >
                <Component 
                    {...props}
                    key={router.route}
                    userState={userState} 
                    setUserState={setUserState} 
                />
            </PageTransition>
        </>
    )
}



export default class MyApp extends App {
    static async getInitialProps(props) {
        const { Component, ctx, router } = props;

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
        const { pageProps, Component, router } = this.props;

        let userSession = pageProps.session ? pageProps.session : null;

        const props = {
            ...pageProps,
            user: this.state.user,
            router,
        };

        return (
            <>
                <Head>
                    <title>LeTanque</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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

