import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';

function ProtectedRouteElement({ element: Component, isLoggedIn, ...props }) {
  return (
    isLoggedIn
      // eslint-disable-next-line react/jsx-props-no-spreading
      ? <Component {...props} />
      : <Navigate to="/signin" replace />
  );
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRouteElement;
