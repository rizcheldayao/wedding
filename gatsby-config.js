module.exports = {
  siteMetadata: {
    title: 'Wood Wedding',
  },
  plugins: ['gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  {
    resolve: 'gatsby-plugin-favicon',
    options: {
      logo: './src/favicon.png',
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-113634291-2',
      // Puts tracking script in the head instead of the body
      head: false,
      // Avoids sending pageview hits from custom paths
      exclude: ['/preview/**", "/do-not-track/me/too/'],
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'WoodWedding',
      short_name: 'WoodWedding',
      start_url: '/',
      background_color: '#fff',
      theme_color: '#f7d0cb',
      display: 'minimal-ui',
      icon: 'src/favicon.png',
    },
  }
]}
