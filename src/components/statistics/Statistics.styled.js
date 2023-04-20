import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/randomHexColor';

export const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 288px;
  border-radius: 2px;
  margin-bottom: 30px;
`;

export const StatisticTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatisticList = styled.ul`
  display: flex;
  flex-grow: 1;
  list-style: none;
  justify-content: space-around;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 288px;
  padding: 10px;
  background-color: ${getRandomHexColor};
`;

export const StatisticLabel = styled.span`
  margin-bottom: 5px;
`;

export const StatisticPercentage = styled.span`
  font-size: 20px;
`;
