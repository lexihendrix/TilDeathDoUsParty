import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import { SuitHeart } from "react-bootstrap-icons";

export function Location() {
  const [key, setKey] = useState("travel");

  return (
    <section className="location" id="the-location">
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="travel" title="Travel Information ✈️">
            <Row>
              <Col>
                <h5 className="text-center travel-header">
                  For our lovely British guests,
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="p-travel-information">
                  the easiest and quickest way is to fly directly to Landvetter
                  Airport (GOT). It’s just 1 hour and 45 mins in the air —
                  perfect for cranking up your favorite playlist and getting in
                  the mood for our big day! The airport is located about 20
                  kilometers southeast of the city and takes approximately 25
                  minutes by car to reach the city center.
                </p>
                <p className="p-travel-information">
                  Once you arrive in Gothenburg, the local transport is super
                  easy to navigate, so you can get to your accommodation or
                  explore the city without any hassle. Listed below are the
                  airlines flying from London to Gothenburg. If you have any
                  questions or need help with travel arrangements, feel free to
                  reach out to Alex! <SuitHeart color="red" />
                </p>
              </Col>
              (
              <ul className="travel-options-list">
                <li>
                ✈️<strong>London Heathrow Airport</strong> — British Airways{" "}
                  <br />
                  <span className="mt-2">Price class: 💰💰💰</span>
                </li>
                <li>
                ✈️<strong>London Gatwick Airport</strong> — Norwegian Air <br />
                <span className="mt-2">Price class: 💰💰</span>
                </li>
                <li>
                ✈️<strong>London Stansted Airport</strong> — Ryanair <br />
                  <span className="mt-2">Price class: 💰💰</span>
                </li>
              </ul>
            </Row>
          </Tab>
          <Tab className="event-tab" eventKey="event" title="The Event 🎉">
            <h5 className="text-center event-title">
              Til' Death Do Us <span className="event-red">Party</span>!
            </h5>
            <p className="event-p">
              YES - we are getting married in an actual cave! Get ready to rock
              as we tie the knot in true metalhead style at{" "}
              <a
                id="link-berg-211"
                href="https://berg211.se/bilder/"
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Berg 211.
              </a>
            </p>
            <p className="event-p">
              Deep within the stone walls of this underground bunker, we’ll
              celebrate our love surrounded by raw, industrial energy and a
              heavy vibe. Join us in Gothenburg’s most epic venue, where vaulted
              ceilings and moody lighting set the stage for a night filled with
              music, passion, and unity.
            </p>
            <p className="event-p">
              Let’s raise our horns and make this an unforgettable night of joy,
              laughter, and togetherness.
            </p>
            <p className="event-p">
              The event will start at 3pm with mingle and the ceremony starts at
              4pm, followed by a reception.
            </p>
            <p className="event-p">
              We can’t wait to share this extraordinary experience with our
              favorite people!
            </p>
            <p className="event-signoff">
              Love, <br />
              Alex & Rhys
            </p>
          </Tab>
          <Tab className="tba-tab" eventKey="tba" title="More TBA...">
            <h5 className="accommodation-header">To be announced...</h5>
            <p className="text-center mt-5 tba-info">
              This website will be updated with more information closer to the
              event (and when Alex has time to be a code 🐒) - so stay tuned{" "}
              <SuitHeart color="red" />
            </p>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
}
