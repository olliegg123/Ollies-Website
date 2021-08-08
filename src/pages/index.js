// Step 1: Import React
import * as React from 'react';
import "../util/styles.css";
import { SpotifyTracks } from '../components/spotify-tracks';
import styled from 'styled-components'
import { TraktMovies } from '../components/trakt-movies';
import { Intro } from '../components/intro2';
import { AllLists } from '../components/lists';
import { AllButtons } from '../components/buttons';
import IntroPic from '../components/intro_pic';
import "@fontsource/georama";
import "@fontsource/ubuntu"; 
import ImageFadeIn from "react-image-fade-in";
import Delayed from '../components/Delayed';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';


import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

const IntroContainer = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 200px;
  min-height: calc(100vh);
`;

const ListsContainer = styled.main`
  padding: 1rem;
  max-width: 80rem;
  margin: auto;
  height: 100%
`;

const IntroPicContainer = styled.main`
  position: relative;
  padding-bottom: 15px;
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
      <IntroPicContainer>
      <Delayed waitBeforeShow={6000}>
      <ImageFadeIn opacityTransition={2} width={250} height={250} src="https://i.imgur.com/Ci1QQUj.png" />
        </Delayed>
        </IntroPicContainer>
        <br />
        <Intro />
      </IntroContainer>
      <a name="main"></a>
      <ListsContainer>
        <AllLists />
      </ListsContainer>
      <Section>
        <h3>My recent Spotify adventures...</h3>
        <SpotifyTracks />
      </Section>
      <Section>
        <AllButtons></AllButtons>
      </Section>
      <Section>
        <h3>Some of my favourite movies...</h3>
        <TraktMovies />
      </Section>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage