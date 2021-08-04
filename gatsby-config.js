module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Ollie Gerrard's Site",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-image",
            "gatsby-remark-images-grid",
            "gatsby-plugin-sharp",
            `gatsby-plugin-styled-components`,
            `gatsby-plugin-remote-images`,
            `gatsby-transformer-sharp`,
            'react-rough-notation',
            'typewriter-effect',
            'prop-types',
            'react-image-fade-in',
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
              },
            },
            {
              resolve: `gatsby-source-spotify`,
              options: {
                clientId: `9a7e4990d87742deaf8c2d78886d4631`,
                clientSecret: `dcddcd73d05a466caf0932a7609cf6af`,
                refreshToken: `AQCyiWCYTqOvusaqpHzAZh82xjsXJ1lPV3GgnQtsK3wLSf8qLo_b5Y3nE5thmAggd2ej48ZJF654bVmjFtso55rOfpgnB93SILE4IURT7oS-mB4hxW0MAe8dKVlnUnK2IOQ`,
            
                fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
                fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
                timeRanges: ['short_term'], // optional. Set time ranges to be fetched
              },
            },
            {
              resolve: `gatsby-source-trakt-tmdb`,
              options: {
                traktApiKey: "173a1c5e3de4bf9dc77fe9ffcf2c65d57af5d5cc181979c8ecbffad2d2f7a26a",
                username: "olliegg",
                tmdbApiKey: "670b6a2096375e421cf8cfac0c5ca362", // optional, to fetch metadata
                language: "en-US", // optional, language for metadata (e.g. titles)
                limit: 10 // optional, number of items to fetch per category
              },
            },
  ],
};
