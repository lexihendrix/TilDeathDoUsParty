import { Container, Col } from "react-bootstrap";
import { ArrowUpCircle, SuitHeartFill } from "react-bootstrap-icons";

export function Footer() {
  return (
    <Container>
      <footer className="d-flex justify-content-between py-3 my-4 border-top">
          <Col className="col-md-6 d-flex justify-content-start align-items-center">
            <span className="mb-3 me-2 mb-md-0">
              &copy; 2024 Crafted by Alex 🦄 with her <SuitHeartFill className="heart" color="red" />
              <span> for Rhys</span>
            </span>
          </Col>
          <Col className="col-md-2 justify-content-end d-flex">
            <div id="back-to-top">
              <a href="#home" title="Back to top">
                <ArrowUpCircle color="goldenrod" size={50} />
              </a>
            </div>
          </Col>
      </footer>
    </Container>
  );
}
