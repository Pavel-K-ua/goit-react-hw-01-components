import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledStatistics,
  StyledTitle,
  StyledStatList,
  StyledStatItem,
  StyledStatLabel,
  StyledStatPercentage,
} from './Statistics.Styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StyledStatistics>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledStatList>
        {stats.map(stat => (
          <StyledStatItem
            key={stat.id}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
          >
            <StyledStatLabel>{stat.label}</StyledStatLabel>
            <StyledStatPercentage>{stat.percentage}%</StyledStatPercentage>
          </StyledStatItem>
        ))}
      </StyledStatList>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number,
      label: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
