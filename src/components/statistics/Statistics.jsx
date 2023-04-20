import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';
import { getRandomHexColor } from '../../utils/randomHexColor';

export function Statistics({ title, stats }) {
  return (
    <StatisticSection>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem color={getRandomHexColor()} key={id}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercentage>{percentage}%</StatisticPercentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
