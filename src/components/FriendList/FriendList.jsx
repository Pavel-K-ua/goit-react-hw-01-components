import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFriendList,
  StyledFriendItem,
  StyledFriendStatus,
  StyledFriendAvatar,
  StyledFriendName,
} from './FriendList.Styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend => (
        <StyledFriendItem key={friend.id}>
          {friend.isOnline ? (
            <StyledFriendStatus
              style={{
                backgroundColor: 'green',
              }}
            ></StyledFriendStatus>
          ) : (
            <StyledFriendStatus
              style={{
                backgroundColor: 'red',
              }}
            ></StyledFriendStatus>
          )}
          <StyledFriendAvatar
            src={friend.avatar}
            alt={friend.name}
            width="58"
          />
          <StyledFriendName>{friend.name}</StyledFriendName>
        </StyledFriendItem>
      ))}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
