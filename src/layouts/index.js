import React from 'react'
import Helmet from 'react-helmet'
import Application from '../containers/Application';


const Layout = ({ data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Wood wedding website' },
        { name: 'keywords', content: 'wood, wedding, oliver wood, rizchel dayao' },
      ]}
    />
    <Application />
  </div>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
