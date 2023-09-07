import { styled } from 'styled-components';
export const StyledStatistics = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 280px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-bottom: 50px;
`;
export const StyledTitle = styled.h2`
  padding: 25px 0;
  text-transform: uppercase;
  font-size: 18px;
  color: grey;
`;
export const StyledStatList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
`;
export const StyledStatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px 0;
  color: #fff;
`;
export const StyledStatLabel = styled.span`
  padding-bottom: 8px;
  font-size: 12px;
`;
export const StyledStatPercentage = styled.span`
  font-size: 18px;
`;
