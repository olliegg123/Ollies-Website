// Step 1: Import React
import * as React from 'react';
import "../util/styles.css";
import { SpotifyTracks } from '../components/spotify-tracks';
import styled from 'styled-components'
import { dimensions } from '../util/theme';
import { TraktMovies } from '../components/trakt-movies';
import { Text } from '../components/intro2';
import IntroPic from '../components/intro_pic';
import "@fontsource/georama";
import Delayed from '../components/Delayed';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';


import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

const IntroContainer = styled.main`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 100px 0;
  min-height: calc(100vh);
`;

const Section = styled.section`
  padding: 1rem;
  max-width: 80rem;
  margin: auto;
  margin-bottom: 4rem;
`;

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <IntroContainer>
      <Delayed waitBeforeShow={500}>
        <IntroPic opacityTransition="2500"/>
        </Delayed>
        <br />
        <Text />
      </IntroContainer>
      <Section>
        <h3>Music I'm listening to</h3>
        <SpotifyTracks />
      </Section>
      <Section>
        <h3>Movies I watched</h3>
        <TraktMovies />
      </Section>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage