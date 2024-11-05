// src/pages/services/Videos.js
import React from 'react';

function Videos() {
  return (
    <div className="videos-container">
      <h2>Recommended Videos</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/z_I-7L3kQ6Q" 
        title="YouTube Video 1" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/FcjuIGUGAak" 
        title="YouTube Video 2" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Videos;
