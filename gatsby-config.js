module.exports = {
    siteMetadata: {
        title: `Fenomen Group`,
        description: `Помощник руководителя отдела продаж`,
        author: `@AlexanderPlx`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#0066FF`,
                theme_color: `#0087FF`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/logo_next.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['PT Serif'],
                },
                custom: {
                    families: ['Inter', 'Open Sans'],
                    urls: ['/fonts/fonts.css']
                }
            }
        },
        'gatsby-plugin-postcss',
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
