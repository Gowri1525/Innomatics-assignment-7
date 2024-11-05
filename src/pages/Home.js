// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling
import techntrends from '../asserts/techntrends.png'; // Ensure the path is correct

function Home() {
  return (
    <div>
      {/* Full-width image */}
      <img 
        src={techntrends}
        alt="Emerging Technology Trends"
        className="header-image" 
      />
      
      {/* Black background section for cards */}
      <div className="card-section">
        <div className="card-container">
          {/* Existing Card */}
          <Link to="/ALML_description" className="card">
            <img 
              src="https://www.jellyfishtechnologies.com/wp-content/uploads/2021/10/Artificial-Intelligence-versus-Machine-Learning.png" 
              alt="AI and ML" 
              className="card-image" 
            />
            <h4>Artificial Intelligence (AI) and Machine Learning (ML)</h4>
          </Link>

          {/* New Cards */}
          <Link to="/cloud_computing" className="card">
            <img 
              src="https://media.licdn.com/dms/image/D4D12AQEvUt75AixkUA/article-cover_image-shrink_720_1280/0/1716403274626?e=2147483647&v=beta&t=sgKRO8GecDEvGV2bL5HHOX9BEJzn54ufd2ePsDChkbM" 
              alt="Cloud Computing and Hybrid Cloud Solutions" 
              className="card-image" 
            />
            <h4>Cloud Computing and Hybrid Cloud Solutions</h4>
          </Link>

          <Link to="/cybersecurity" className="card">
            <img 
              src="https://static.wixstatic.com/media/820771_f4a61b2de0264170b252e9095b9d3fbb~mv2.jpg/v1/fill/w_640,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/820771_f4a61b2de0264170b252e9095b9d3fbb~mv2.jpg" 
              alt="Cybersecurity Innovations" 
              className="card-image" 
            />
            <h4>Cybersecurity Innovations</h4>
          </Link>

          <Link to="/quantum_computing" className="card">
            <img 
              src="https://cdn.mos.cms.futurecdn.net/c4HszRdoBKDepwtFVFhrwV-1200-80.jpg" 
              alt="Quantum Computing" 
              className="card-image" 
            />
            <h4>Quantum Computing</h4>
          </Link>

          <Link to="/blockchain" className="card">
            <img 
              src="https://savvycomsoftware.com/wp-content/uploads/2024/09/A-photorealistic-image-representing-blockchain-as-the-cornerstone-of-DePIN.webp" 
              alt="Blockchain and Decentralized Finance (DeFi)" 
              className="card-image" 
            />
            <h4>Blockchain and Decentralized Finance (DeFi)</h4>
          </Link>

          <Link to="/iot" className="card">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPrwkk6TvHEaHTWhYOKrsq0lxNRGFh8SMRA&s" 
              alt="Internet of Things (IoT) and 5G Technology" 
              className="card-image" 
            />
            <h4>Internet of Things (IoT) and 5G Technology</h4>
          </Link>

          <Link to="/xr" className="card">
            <img 
              src="https://cdn.mos.cms.futurecdn.net/Bdd9TqytLkJoqePAYNzxgc-1200-80.jpg" 
              alt="Extended Reality (XR) – AR, VR, and MR" 
              className="card-image" 
            />
            <h4>Extended Reality (XR) – AR, VR, and MR</h4>
          </Link>

          <Link to="/devops" className="card">
            <img 
              src="https://b1286009.smushcdn.com/1286009/wp-content/uploads/2024/07/shutterstock_1133982038-1024x582.jpg?lossy=1&strip=1&webp=1" 
              alt="DevOps and Automation" 
              className="card-image" 
            />
            <h4>DevOps and Automation</h4>
          </Link>

          <Link to="/software_development" className="card">
            <img 
              src="https://media.licdn.com/dms/image/v2/C5112AQHAog4fpvVBcw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1574769308782?e=2147483647&v=beta&t=lKlO3VtdbhupZGHZyeb9IwhnZryyglkqelteQ4Lv6gU" 
              alt="Software Development Trends" 
              className="card-image" 
            />
            <h4>Software Development Trends</h4>
          </Link>

          <Link to="/green_tech" className="card">
            <img 
              src="https://img.freepik.com/premium-photo/green-computing-green-technologies-green-tech-green-technology-sustainable-computing_605423-34892.jpg" 
              alt="Green Tech and Sustainable Computing" 
              className="card-image" 
            />
            <h4>Green Tech and Sustainable Computing</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
