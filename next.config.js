// ./next.config.js
require("dotenv").config();

const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const nextConfig = {
    webpack: (config, { dev }) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: "url-loader",
                options: {
                limit: 1000000,
                compact: true
                }
            }
        });
        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,
            new Dotenv({   // Read the .env file
                path: path.join(__dirname, ".env"),
                systemvars: true
            })
        ];
        return config;
    }
}

module.exports = withPlugins([
    withSass
], nextConfig)
