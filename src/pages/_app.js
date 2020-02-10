import React from "react";
import Head from "next/head";
import App, { Container as NextContainer } from "next/app";
import Navbar from "../components/Navbar";

import "../styles/base.scss";

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
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

        const props = {
            ...pageProps,
            user: this.state.user
        };

        return (
            <NextContainer>
                <Head>
                    <title>Next Passport Auth</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar user={this.state.user} />
                <Component {...pageProps} />
            </NextContainer>
        );
    }
}

