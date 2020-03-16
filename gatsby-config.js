module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Valter Machado Jr',
    author: '@vmachadojunior',
    siteUrl: 'https://valtermachadojr.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Valter Machado Jr',
        short_name: 'Valter Machado',
        start_url: '/',
        background_color: '#303030',
        theme_color: '#303030',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_UA,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
