import React from 'react';
import './Pictures.css';

const Pictures = () => {
  return (
    <div className="pictures-container">
      <div className="illustration-container">
        <img src="/image1.png" alt="" className="img-fluid" />
      </div>
      <div className="illustration-container">
        <img src="/image3.png" alt="" className="img-fluid" />
      </div>
    </div>
  );
}

export default Pictures;   
