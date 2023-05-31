import React from 'react';
import '../styles/infoBox.css';

function InfoBox(props) {
  return (
    <div className="info-box">
      <h3>{props.title}</h3>
      <p>{props.info}</p>
    </div>
  );
}

export default InfoBox;