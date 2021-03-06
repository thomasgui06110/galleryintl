/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Header from "./header";
import Footer from "./Footer";
import SEO from "./SEO";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import CookieConsent, { Cookies } from "react-cookie-consent";

const Space = styled.div`
  padding: 1vh 7vw 1vw 7vw;

  @media (max-width: 1000px) {
    padding: 1vh 2vw 1vw 2vw;
  }
`;
const Section = styled.section`
  margin: 1rem auto 1rem auto;
  background-color: #fff;
  padding: 2% 2% 5% 2%;
  border-radius: 10px;
  @media (max-width: 1000px) {
    padding: 1vh 1vw 1vw 1vw;
  }
`;
// const Wrapper = styled.div`
//   background-color: rgba(210, 210, 210, 0.5);
// `;
const GLayout = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <Container fluid>
        <Space>
          <Section> {children}</Section>
        </Space>
      </Container>
      <Footer />
      <CookieConsent
        acceptOnScroll={true}
        acceptOnScrollPercentage={50}
        onAccept={({ acceptedByScrolling }) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("You must accept cookies. Click Ok. Thanks");
          } else {
            alert("Accept was triggered by clicking the Accept button");
          }
        }}
       
        flipButtons
        location="bottom"
        buttonText="OK, I accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        By continuing on this site, you accept the use of third-party services
        that may install cookies for statistical purposes only.
        <span style={{ fontSize: "10px" }}></span>
      </CookieConsent>
    </>
  );
};

export default GLayout;
