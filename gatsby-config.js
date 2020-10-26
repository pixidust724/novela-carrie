module.exports = {
  siteMetadata: {
    title: `Carrie Lau`,
    name: `Carrie Lau Porfolio`,
    siteUrl: `https://carrielau.com/`,
    description: `PSM, Project Manager, UX/UI Designer, Web Designer and software enginner, open to job in Germany`,
    hero: {
      heading: `Hello, I'm Carrie. From 🇭🇰 currently in 🇩🇪, studying M.Sc in Human Computer interaction `,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/pixidust724`,
      },
      // {
      //   name: `instagram`,
      //   url: `https://instagram.com/narative.co`,
      // },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/claume/`,
      },
      {
        name: `medium`,
        url: `https://medium.com/@carrielau`,

      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/claume`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        // mailchimp: true, // make sure this is true!
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: '', // add your MC list endpoint here; see plugin repo for instructions
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
