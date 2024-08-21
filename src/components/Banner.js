import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>About Me</h1>
                <p>My name is Chris Shaji and I am currently a third year Mechanical Engineering student at Texas A&M. My areas of interest include Manufacturing and Design. I take a lot of pride in coming up with new iterations for each design, constantly finding ways to optimize finer details. I seek roles that challenges me to innovate and apply my creativity. In my free time, I enjoy working on personal engineering projects, watching new tv shows, and playing soccer.</p>

              </div>}
            </TrackVisibility>
          </Col>  
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}