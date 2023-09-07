import { styled } from 'styled-components';
export const StyledFriendList = styled.ul`
  width: 280px;
  margin: 0 auto;
  margin-bottom: 50px;
`;
export const StyledFriendItem = styled.li`
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 1px 1px 1px 1px grey;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 10px;
`;
export const StyledFriendStatus = styled.span`
  width: 15px;
  height: 15px;
  background-color: green;
  border-radius: 50%;
`;
export const StyledFriendAvatar = styled.img`
  border-radius: 5px;
`;
export const StyledFriendName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
