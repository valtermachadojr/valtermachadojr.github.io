import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Home = () => (
  <Layout>
    <SEO
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <section className="section hero-body has-text-centered">
      <div className="column is-6 is-offset-3">
      <figure className="photo image is-128x128">
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "me.jpg" }) {
                childImageSharp {
                  fixed(width: 128, height: 128) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          `}
          render={data => (
            <Img
              fixed={data.file.childImageSharp.fixed}
              imgStyle={{ borderRadius: '100%' }}
              alt="Valter Machado Jr"
            />
          )}
        />
      </figure>
      <h1 className="title has-text-centered has-text-light">Valter Machado Jr</h1>
      <h2 className="subtitle has-text-centered has-text-warning">Front-End Developer</h2>
      <p className="has-text-centered has-text-light">Novo site em breve</p>
      </div>
    </section>
  </Layout>
)

export default Home
