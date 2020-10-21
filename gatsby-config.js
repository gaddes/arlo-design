/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Arlo Design',
    siteUrl: 'https://www.arlodesign.ca/',
    description: 'Bespoke design and development services in Vancouver, Canada',
    image: '/logo_circle.png',
  },
  // Your site config here
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-smoothscroll',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
        // Do not use Google CDN for font downloads.
        // Instead we include these fonts manually by:
        //  1) installing packages typeface-open-sans/typeface-domine
        //  2) importing/requiring these at the top of this file
        // These packages _should_ automatically include the CSS property
        //  font-display: swap; which renders system font while the final font
        //  is loading, to prevent missing text on first page load.
        omitGoogleFont: true,
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        // Your google analytics tracking id
        trackingId: 'UA-180200185-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // Enable IP anonymization
        anonymize: true,
        // Respect user's Do Not Track request
        respectDNT: true,
      },
    },
  ],
}
