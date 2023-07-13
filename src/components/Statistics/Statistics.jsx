import PropTypes from 'prop-types'; 
import { StatEl } from 'components/StatElement/StatEl';
import css from './Statistics.module.css'

export const Statistics = ({ stats }) => {
    console.log('stats', stats);

    return (
        <section className={css.statistics}>
            {/* <h2 className={css.title}>{title}</h2> */}
            <ul className={css.statList}>
            {stats.map(({id, percentage, label}) =>(
                <StatEl
                    key={id}
                    label={label}
                    percentage={percentage}
                />
            ))}
  </ul>
</section>
)
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}