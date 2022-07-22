import React from 'react';

export default function Image(props) {
  return (
    <>
      <img src={props.logo} alt="pic" className="img-fluid" />
    </>
  );
};