import { Container, Row, Col } from "react-bootstrap";
import { ArrowThroughHeart, SuitHeart } from "react-bootstrap-icons";
import thelovers from "../assets/thelovers.jpg";

export function Home() {
  return (
    <section className="home-start" id="home">
      <Container className="home-container text-center text-md-start">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="mb-4 mb-md-0">
            <h1 className="text-center text-md-start">
              Alex <span className="home-start-top">&</span> Rhys
              <span className="home-start-top">´</span>
            </h1>
            <h2 className="text-center text-md-start">
              <span className="home-start-top">Til' death do us </span>
              <span className="home-start-bottom">
                <strong>party</strong>
              </span>
              !
            </h2>
            <p className="wedding-date">
              <SuitHeart color="gray" /> 2025 <SuitHeart color="gray" /> 05{" "}
              <SuitHeart color="gray" /> 30 <SuitHeart color="gray" />
            </p>
            <p className="home-start-story mb-3">
              We met at D(r)ownload Festival 2019 ☔<br /> Bonded over loud
              music, muddy fields, and pure metal spirit.
            </p>
            <p className="home-start-story">
              Since then, we’ve rocked through life together. Surviving 5 years
              of long distance and even a global pandemic. Now, we’re ready to
              make it official and can’t wait to celebrate our marriage with
              you!
            </p>
            <p className="home-start-story mt-3">
              Join us for a night that’s as unforgettable as that first
              festival, filled with love, music, and memories to last a
              lifetime.
            </p>
            <a href="#rsvp">
              <button className="mt-6">
                <span className="home-btn-txt">
                  Take me to the RSVP please{" "}
                </span>
                <ArrowThroughHeart color="pink" size={30} />
              </button>
            </a>
          </Col>
          <Col className="text-center">
            <img
              src={thelovers}
              className="rhysandaleximg img-fluid"
              alt="Rhys and Alex"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
