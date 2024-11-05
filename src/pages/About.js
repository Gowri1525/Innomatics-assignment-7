// src/pages/About.js
import React from 'react';
import './About.css'; // Make sure to create this CSS file for styling

function About() {
  return (
    <div className="about-container">
      {/* Full-width header image */}
      <img
        src="https://www.isquarebs.com/blog/wp-content/uploads/2022/09/Top-technology.jpg"
        alt="Technology Trends"
        className="header-image"
      />

      {/* Description Section */}
      <div className="description">
        <h1>About Trends and Technology</h1>
        <p>
          In the rapidly evolving landscape of technology, several key trends are reshaping industries and influencing daily life. One significant area focuses on the advancement of intelligent systems that leverage algorithms and data to enhance decision-making and automate processes. These systems are being integrated into various applications, driving efficiencies and enabling new capabilities across sectors.
        </p>

        {/* First additional image */}
        <div className="image-container">
          <img
            src="https://myvistage.com/hub/wp-content/uploads/sites/4/2021/11/21_222_0114-Tech-trends-for-business-2022-and-beyond-Blog-Hero-1024-x-686.jpg"
            alt="Tech Trends"
            className="side-image"
          />
        </div>

        <p>
          Another area of transformation involves the growing reliance on flexible and scalable solutions that leverage remote servers and services. This shift allows organizations to optimize their resources, improve collaboration, and respond swiftly to changing market demands. As these solutions become more accessible, businesses of all sizes are increasingly adopting them to streamline operations and foster innovation.
        </p>

        <p>
          Security remains a top priority as the digital landscape expands. With increasing connectivity comes the need for robust measures to protect sensitive information and infrastructure from malicious attacks. New strategies and technologies are being developed to safeguard data, enhance privacy, and ensure compliance with regulatory standards.
        </p>

        {/* Second additional image */}
        <div className="image-container">
          <img
            src="https://static.tecnichenuove.it/electricmotorengineering/2019/05/Focus-3-e1557730834544.jpg"
            alt="Focus on Technology"
            className="side-image"
          />
        </div>

        <p>
          The intersection of physical and digital worlds is also gaining traction, with immersive technologies that create engaging experiences for users. These innovations are finding applications in areas ranging from entertainment to education, transforming how individuals interact with content and each other.
        </p>

        <p>
          Environmental sustainability is a growing concern that drives the development of solutions aimed at reducing carbon footprints and improving energy efficiency. Organizations are increasingly exploring practices that contribute to sustainability, including the use of renewable resources and greener processes.
        </p>

        <p>
          The evolution of interconnected devices is enabling a more integrated approach to everyday life. With smart technology becoming more prevalent, consumers are experiencing increased convenience and efficiency in managing their homes and personal devices. This connectivity also extends to various sectors, enhancing operational efficiencies and providing real-time insights.
        </p>

        <p>
          Lastly, the continuous evolution of software development practices emphasizes the importance of collaboration, automation, and iterative processes. New methodologies are emerging to facilitate faster delivery of high-quality software, empowering teams to respond more effectively to user needs and market trends.
        </p>

        <p>
          As these transformative forces converge, they create a dynamic environment ripe for innovation and growth, shaping the future of industries and the way individuals engage with technology.
        </p>
      </div>
    </div>
  );
}

export default About;
