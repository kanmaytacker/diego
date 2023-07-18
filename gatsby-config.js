require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    {
      resolve: `gatsby-source-supabase`,
      options: {
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_KEY,
        types: [
          {
            type: 'Tournament',
            query: (client) => {
              return client.from('tournament').select('id, city_id, created_at, metadata, skill_id, winnings, city:city_id(*)');
            }, //sync or async
          },
          {
            type: 'Team',
            query: (client) => {
              return client.from('team').select('id, phone, name, players');
            }
          }
        ],
      },
    },
  ],
};
