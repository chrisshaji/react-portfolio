import { Container, Row, Col, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    { 
      title: "Rubik's Cube Solver",
      description: "A machine that solves Rubik's cubes in under 5 seconds",
      imgUrl: projImg1,
      linkUrl: "https://github.com/chrisshaji/Rubik-s-cube-Solver",
    },
    {
      title: "Children's Museum Exhibit",
      description: "Interactive and Engaging exhibit for children",
      imgUrl: projImg2,
      linkUrl: "https://github.com/chrisshaji/Children-s-Mueseum",
    },
    {
      title: "Autonomous RC Car",
      description: "Currently designing an RC car from scratch with LiDAR capabilities",
      imgUrl: projImg3,
    },
    {
      title: "Kitchen Organizer",
      description: "Organization system that declutters your kitchen",
      imgUrl: projImg4,
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
