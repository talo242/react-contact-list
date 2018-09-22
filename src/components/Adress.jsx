import React from 'react';

function Address(props) {
  return <a href={`http://maps.google.com/?q=${props.address}`}>{props.address}</a>
}

export default Address;