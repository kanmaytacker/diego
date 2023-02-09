module.exports = {
  siteMetadata: {
    title: `Gurufa Games`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gurufa Games`,
        short_name: `Gurufa Games`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
