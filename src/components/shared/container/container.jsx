import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ children, className, ...props }) => (
  <div
    className={`mx-auto w-full max-w-full 2xl:max-w-screen-2xl px-6 lg:px-20 2xl:px-0 ${className}`}
    {...props}
  >
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
