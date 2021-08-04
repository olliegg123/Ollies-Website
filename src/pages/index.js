// Step 1: Import React
import * as React from 'react'
import { SpotifyTracks } from '../components/spotify-tracks';
import styled from 'styled-components'
import { dimensions } from '../util/theme';
import { TraktMovies } from '../components/trakt-movies';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  h1,
} from '../components/layout.module.css'

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
      <h1>Welcome to my Gatsby site!</h1>
      <h3>Music I'm listening to</h3>
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