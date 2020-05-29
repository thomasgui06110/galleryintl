import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby-plugin-intl";
require("../styles/artistes.css");

const StyledFlexBox = styled.div`
 
  border-radius: 5px;
  box-shadow: 2px 2px 1px 3px rgba(0, 0, 0, 0.0);
  transition: box-shadow 0.9s;
  will-change: transform;
  { /* overflow: hidden; */}
  margin: 1rem 0.5rem;
  ${'' /* transition-duration: 1s; */}
  
`;

const StyledFlexBoxArtist = styled.div`
   {
    /* width: 380px; */
  }
  max-height: 20rem;
  height: 18rem;
  width: 18rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 8px auto;
  background-size: cover;
  background-position: center center;
  @media (max-width: 1000px) {
    max-height: 27rem;
    margin: auto;
  }
`;

const StyledTexte = styled.div`
  position: absolute;
  bottom: 8px;
  min-width: 40%;
  padding: 0px 10px 10px 10px;
  height: 54px;
  text-align: center;
  border-radius: 20px;
  line-height: 20px;
  background-color: #e5e5e5ad;
  left: 6px;
  opacity: 0.1;
  -webkit-transition: 500ms;
  transition: 500ms;

  @media (max-width: 900px) {
    opacity: 1;
    transition: 800ms;
    background-color: #e5e5e5;
  }
`;

const linkStyles = {
  color: "grey",
};

const StyledImg = styled.div`
  transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out,
    -webkit-transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.3) rotate(5deg);
    opacity: 0.5;
  }
`;

const StyledH2 = styled.h3`
  opacity: 1;
  width: 100%;
  z-index: 5;
  text-align: center;
  left: 0px;
  height: auto;
  margin: 0 auto;
  font-size: 20px;
  line-height: 20px;
  padding: 5px 0 0 0;
  border-radius: 30%;
  color: #000;
  font-weight: bold;
  transition-duration: 0.8s;
  @media (max-width: 900px) {
    height: auto;
  }
`;
const StyledH3 = styled.h3`
  opacity: 1;
  width: 100%;
  z-index: 5;
  text-align: center;
  left: 0px;
  height: auto;
  margin: 0 auto;
  font-size: 18px;
  line-height: 20px;
  padding: 5px 0 0 0;

  color: #000;

  transition-duration: 0.8s;
  @media (max-width: 900px) {
    height: 50px;
  }
`;

const ArtistsUrban = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio(sort: { fields: acf___ordre, order: ASC },filter: {acf: {rubrique: {eq: "Urban art"}}}) {
            edges {
              node {
                excerpt
                id
                slug
                content
                title
                acf {
                  Type_d_artiste
                  ordre
                  rubrique
                }
                featured_media {
                  alt_text
                  source_url
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 550) {
                        ...GatsbyImageSharpFluid
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(props) =>

        props.allWordpressWpPortfolio.edges.map((ArtistsItem) => (
          <>
           
            <Col
              className="d-flex justify-content-center"
              key={ArtistsItem.node.id}
            >
              <StyledFlexBox>
                <StyledFlexBoxArtist className="cadre">
                  <StyledImg className="photo">
                    <Link to={`/artiste/urbanart/${ArtistsItem.node.slug}`}>
                      <Img
                        fluid={
                          ArtistsItem.node.featured_media.localFile
                            .childImageSharp.fluid
                        }
                        alt={ArtistsItem.node.title}
                      />
                    </Link>
                  </StyledImg>
                  <StyledTexte className="texte">
                    <StyledH2>
                      <Link
                       to={`/artiste/urbanart/${ArtistsItem.node.slug}`}
                        style={linkStyles}
                      >
                    
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ArtistsItem.node.title,
                          }}
                        ></span>
                      </Link>
                    </StyledH2>
                    <StyledH3>
                      <Link
                        to={`/artiste/urbanart/${ArtistsItem.node.slug}`}
                        style={linkStyles}
                      >
                        {ArtistsItem.node.acf.Type_d_artiste.map((type) => (
                          <span key={type} style={{ marginRight: "4px" }}>
                            {type}
                          </span>
                        ))}{" "}
                      </Link>
                    </StyledH3>
                  </StyledTexte>
                </StyledFlexBoxArtist>
              </StyledFlexBox>
            </Col>
          </>
        ))
      }
    />
  );
};

export default ArtistsUrban;