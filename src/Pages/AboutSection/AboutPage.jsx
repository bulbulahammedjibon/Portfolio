import React from "react";
import Navbar from "../../Component/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>About Me</h1>
        <p className="max-w-5xl mx-auto shadow-2xl p-12 ">
          I am a passionate junior web developer with over two years of
          experience in learning and building web applications. I have skills in
          front-end and back-end development, with expertise in HTML5, CSS3,
          JavaScript, and modern frameworks like React.js, Express.js, and
          Node.js. I enjoy creating responsive, user-friendly interfaces using
          Tailwind, Material UI, and Bootstrap, while ensuring seamless
          functionality with MongoDB and Firebase on the back end.
          <br />
          <br />I am committed to constantly learning and growing as a
          developer, and I'm excited to bring my skills to real-world projects.
          Although I’m just starting out professionally, my enthusiasm for
          coding drives me to continually improve and stay up to date with the
          latest technologies.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
