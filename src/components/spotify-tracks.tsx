import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MediaGrid, Medium, MediumTitle } from './media-grid';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface SpotifyTracksProps {
  limit?: number;
}


export const SpotifyTracks: React.FC<SpotifyTracksProps> = ({ limit }) => {
  const tracks = useStaticQuery(graphql`
  query {
    allSpotifyTopTrack(
      limit: 6
      filter: { time_range: { eq: "short_term" } }
      sort: { fields: order }
    ) {
      edges {
        node {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300, height: 300, quality: 90)
                }
            }
          }
          name
          artistString
          external_urls {
            spotify
          }
        }
      }
    }
  }
`);

  return (
    <MediaGrid>
      {tracks.allSpotifyTopTrack.edges.slice(0, limit || 6).map(e => (
        <Medium
          title={`${e.node.name}`}
          target="_blank"
          href={e.node.external_urls.spotify}
          key={e.node.external_urls.spotify}
        >
          <GatsbyImage
            image={e.node.image.localFile.childImageSharp.gatsbyImageData}
            alt={`Album cover for ${e.node.name}`}
            imgStyle={{ objectFit: 'contain' }}
          />
          <MediumTitle>
            
          <span>{e.node.name}</span>
            <span className="faded">{e.node.artistString}</span>
            
          </MediumTitle>
        </Medium>
      ))}
    </MediaGrid>
  );
};