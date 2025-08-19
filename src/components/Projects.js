import { Container, Row, Col, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.jpeg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "ASME Go Kart",
      description: "A drivable Go-Kart made from scratch",
      imgUrl: projImg5,
      linkUrl: "/projects/asme-go-kart"
    },
    {
      title: "Rubik's Cube Solver",
      description: "A machine that solves Rubik's cubes",
      imgUrl: projImg1,
      linkUrl: "/projects/rubiks-cube-solver"
    },
    {
      title: "Children's Museum Exhibit",
      description: "Interactive and Engaging exhibit for children",
      imgUrl: projImg2,
      linkUrl: "/projects/childrens-museum"
    },
    {
      title: "Strandbeest",
      description: "Project for T.U.R.T.L.E Robotics Organization",
      imgUrl: projImg6,
      linkUrl: "/projects/strandbeest"
    },
    {
      title: "Kitchen Organizer",
      description: "Organization system that declutters your kitchen",
      imgUrl: projImg4,
      linkUrl: "/projects/kitchen-organizer"
    },
    {
      title: "Autonomous RC Car",
      description: "Currently designing an RC car from scratch with LiDAR capabilities",
      imgUrl: projImg3,
      linkUrl: "/projects/autonomous-rc-car"
    },
    {
      title: "Scissor Lift",
      description: "Class project for MEEN 360",
      imgUrl: projImg7,
      linkUrl: "/projects/scissor-lift"
    },
  ];
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt={""}></img>
    </section>
  );
}
