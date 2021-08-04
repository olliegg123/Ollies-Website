import styled from 'styled-components'
import { dimensions } from '../util/theme';
import React, { useState, ComponentProps } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const IntroBox = styled.div`
  width: 100%;
  max-width: ${dimensions.maxWidth};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;