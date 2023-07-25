import PropTypes from 'prop-types';

import './NavTab.css';

/**
 * Компонент с навигацией по странице «О проекте»..
 * @param {object} props
 * @returns {React.ReactElement} <Promo />
 */
function NavTab(props) {
  const { title } = props;

  return (
    <h2 className="nav-tab">
      {title}
    </h2>
  );
}

NavTab.propTypes = {
  /**
   * title String - Текст в заголовке h2.
  */
  title: PropTypes.string.isRequired,
};

export default NavTab;
