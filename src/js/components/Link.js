import React, { PropTypes } from 'react'

const Link = (props) => {
  const {onClick, children, active} = props;

  if(active){
    return (
      <span>{children}</span>
    );
  }else{
    return (
      <a href="#"
        onClick={ e => {e.preventDefault(); onClick()} }>
        {children}
      </a>
    );
  }
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;