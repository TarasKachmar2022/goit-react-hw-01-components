import PropTypes from 'prop-types';

export function Statistics({title, stats}) {
    return (
    <ul>
        <li>
            <h2>{title}</h2>
            {stats.map(({id, label, percentage}) => (
            <div key={id}>
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>))}
        </li>
    </ul>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
};