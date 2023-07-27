import PropTypes from 'prop-types';

import './NavTab.css';

/**
 * Компонент с навигацией по странице «О проекте».
 *
 * @param {Object} props
 * @param {String} props.title Текст в заголовке
 * @param {Boolean} props.isSmall Необязательный пропс который добавляет
 * класс заголовку, делая его меньше, серого цвета и без бордера.
 * @returns {React.ReactElement} NavTab
 */
function NavTab({ title, isSmall }) {
  return (
    <h2 className={`nav-tab ${isSmall && 'nav-tab_size_small'}`}>
      {title}
    </h2>
  );
}

NavTab.propTypes = {
  title: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
};

NavTab.defaultProps = {
  isSmall: false,
};

export default NavTab;
