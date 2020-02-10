import React from "react";
import Head from "next/head";
import App, { Container as NextContainer } from "next/app";
import Navbar from "../components/Navbar";

import "../styles/base.scss";


export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const { pageProps, Component } = this.props;

        return (
            <NextContainer>
                <Head>
                    <title>Next Passport Auth</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                <Component {...pageProps} />
            </NextContainer>
        );
    }
}
