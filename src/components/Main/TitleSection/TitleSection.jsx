import PropTypes from 'prop-types';

import './TitleSection.css';

/**
 * Компонент с заголовком с полосой.
 *
 * @param {Object} props
 * @param {String} props.title Текст в заголовке
 * @param {Boolean} props.isSmall Необязательный пропс который добавляет
 * класс заголовку, делая его меньше, серого цвета и без бордера.
 * @returns {React.ReactElement} NavTab
 */
function TitleSection({ title, isSmall }) {
  return (
    <h2 className={`title-section ${isSmall && 'title-section_size_small'}`}>
      {title}
    </h2>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
};

TitleSection.defaultProps = {
  isSmall: false,
};

export default TitleSection;
