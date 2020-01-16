import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import Img from 'gatsby-image';

const AboutImg = ({ filename, alt }) => (
  // const imageFixed = image.node.childImageSharp.fixed;

(<div>
      <Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />
      </div>)
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
