import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledProfile,
  StyledDescription,
  StyledAvatar,
  StyledName,
  StyledTag,
  StyledLocation,
  StyledStatsList,
  StyledStatsItem,
  StyledLabel,
  StyledQuantity,
} from './Profile.Styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledAvatar src={avatar} alt={username} />
        <StyledName>{username}</StyledName>
        <StyledTag>{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </StyledDescription>

      <StyledStatsList className="stats">
        <StyledStatsItem>
          <StyledLabel>Followers</StyledLabel>
          <StyledQuantity>{stats.followers}</StyledQuantity>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledLabel>Views</StyledLabel>
          <StyledQuantity>{stats.views}</StyledQuantity>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledLabel>Likes</StyledLabel>
          <StyledQuantity>{stats.likes}</StyledQuantity>
        </StyledStatsItem>
      </StyledStatsList>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
