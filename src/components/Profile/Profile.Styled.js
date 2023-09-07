import { styled } from 'styled-components';

export const StyledProfile = styled.div`
  max-width: 280px;
  display: block;
  margin: 50px auto;

  background-color: #fff;
  box-shadow: 1px 1px 1px 1px grey;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px;
`;

export const StyledAvatar = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const StyledName = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const StyledTag = styled.p`
  font-size: 14px;
  color: grey;
  font-weight: 500;
`;

export const StyledLocation = styled.p`
  font-size: 14px;
  color: grey;
  font-weight: 500;
`;

// ================stats==============

export const StyledStatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: 14px;
  color: grey;
  flex: 1;
  border: 1px solid grey;
  padding: 18px 0;
  background-color: lightgrey;
`;

export const StyledLabel = styled.span`
  font-size: 12px;
  color: grey;
  padding-bottom: 5px;
  font-weight: 500;
`;
export const StyledQuantity = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #000;
`;
