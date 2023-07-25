import PropTypes from 'prop-types';

import './NavTab.css';

/**
 * Компонент с навигацией по странице «О проекте».
 * @param {props} props
 * @returns {React.ReactElement} <NavTab />
 */
function NavTab(props) {
  const { title, isSmall } = props;

  return (
    <h2 className={`nav-tab ${isSmall && 'nav-tab_size_small'}`}>
      {title}
    </h2>
  );
}

NavTab.propTypes = {
  /**
   * title String - Текст в заголовке.
  */
  title: PropTypes.string.isRequired,
  /**
   * isSmall Boolean - Необязательный пропс который добовляет класс
   * к заголовку, делая его меньше, серого цвета и без бордера.
   */
  isSmall: PropTypes.bool,
};

NavTab.defaultProps = {
  isSmall: false,
};

export default NavTab;
