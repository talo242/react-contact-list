import React from 'react';

function Phone(props) {
  return <a className="contact-phone" href={'tel:' + props.phone}>{props.phone}</a>
}

export default Phone;