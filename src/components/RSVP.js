import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SuitHeart } from "react-bootstrap-icons";
import { useState } from "react";

export function RSVP() {
  const [formFields, setFormFields] = useState({
    contact: "",
    attending: "",
    email: "",
    phone: "",
    invitation_code: "",
    message: "",
  });

  const [status, setStatus] = useState({});
  const [isAttending, setIsAttending] = useState(false);
  const [numPeople, setNumPeople] = useState(1);

  // Track guest details for each attendee
  const [attendees, setAttendees] = useState([
    { first_name: "", last_name: "", food: "" },
  ]);

  // Toggle attendance and reset guests if unchecked
  const handleToggle = () => {
    setIsAttending(!isAttending);
    if (!isAttending) setNumPeople(1);
    setAttendees([{ first_name: "", last_name: "", food: "" }]);
  };

  // Handle change in number of people attending
  const handleNumPeopleChange = (e) => {
    const value = Math.min(4, Math.max(1, parseInt(e.target.value, 10) || 1));
    setNumPeople(value);

    // Adjust attendee fields
    const newAttendees = [...attendees];
    if (value > attendees.length) {
      for (let i = attendees.length; i < value; i++) {
        newAttendees.push({ first_name: "", last_name: "", food: "" });
      }
    } else {
      newAttendees.length = value;
    }
    setAttendees(newAttendees);
  };

  // Handle individual attendee input change
  const handleAttendeeChange = (index, field, value) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index][field] = value;
    setAttendees(updatedAttendees);
  };

  // Handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Submit form data to Google Sheets
  const handleSubmit = (event) => {
    event.preventDefault();

    // Concatenate names and foods
    const concatenatedNames = attendees
      .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
      .join(", ");

    const concatenatedFood = attendees
      .map(({ food }) => food)
      .filter((food) => food) // filter out empty fields
      .join(", ");

    // Prepare FormData
    const formData = new FormData();
    formData.append("contact", formFields.contact);
    formData.append("attending", isAttending ? "Yes" : "No");
    formData.append("email", formFields.email);
    formData.append("phone", formFields.phone);
    formData.append("invitation_code", formFields.invitation_code);
    formData.append("names", concatenatedNames);
    formData.append("food", concatenatedFood);
    formData.append("message", formFields.message);

    // Send to Google Sheets script (update with your Google Script URL)
    fetch(
      "https://script.google.com/macros/s/AKfycbxSl3P9YhZ0P3-4bs6SIvEq5A64bvhcZ5cfaLTlPw0VShjT5uXnmn46nWg1An-tUlLf/exec",
      {
        method: "POST",
        redirect: "follow",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "error") {
          setStatus({
            success: false,
            message: "💩: " + data.message,
          });
        } else {
          setStatus({
            success: true,
            message: "The details was successfully sent!",
          });
        }
        //console.log("Success:", data);
        setFormFields({
          contact: "",
          attending: "",
          email: "",
          phone: "",
          invitation_code: "",
          message: "",
        });
        setIsAttending(false);
        setNumPeople(1);
        setAttendees([{ first_name: "", last_name: "", food: "" }]);
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus({
          success: false,
          message: "Something went wrong, please try later again!",
        });
      });
  };

  return (
    <section className="rsvp-section" id="rsvp">
      <Container>
        <Row>
          <Col>
            <h3 className="text-center">Invitation Form</h3>
            <p className="text-center rsvp-paragraph">
              <span className="rsvp-heart">
                <SuitHeart />
              </span>
              Please respond by 31st of January 2025
              <span className="rsvp-heart">
                <SuitHeart />
              </span>
            </p>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex align-items-center">
            <Form.Group as={Col} xs={12} md={6} className="mb-3">
              <Form.Control
                type="text"
                name="contact"
                placeholder="Who is filling out this form?"
                value={formFields.contact}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formFields.email}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="d-flex align-items-center">
            <Form.Group as={Col} xs={12} md={6} className="mb-3">
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone"
                value={formFields.phone}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} className="mb-3">
              <Form.Control
                type="text"
                placeholder="🥷: The Super Secret Invitation Code"
                name="invitation_code"
                value={formFields.invitation_code}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="d-flex align-items-center attending-row">
            <Col xs={12} md={6} className="mb-3">
              <Form.Label className="form-labels">
                Can you make it to our big day?
              </Form.Label>
              <Form.Group>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label={
                    isAttending
                      ? "Accepts with pleasure 💕"
                      : "Sorry - can't make it 🥺"
                  }
                  name="attending"
                  checked={isAttending}
                  onChange={handleToggle}
                />
              </Form.Group>
            </Col>
            {isAttending && (
              <Form.Group as={Col} xs={12} md={4} className="mb-3">
                <Form.Label className="form-labels">
                  Number of guests attending
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  value={numPeople}
                  onChange={handleNumPeopleChange}
                  min="1"
                  max="4"
                />
              </Form.Group>
            )}
          </Row>
          {isAttending && (
            <Row> 
              <Col xs={12} className="attending-row">
                <p>Attending guests</p>
              </Col>
            </Row>
          )}
          {isAttending && (
            <Row className="mb-3">
              {attendees.map((attendee, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <div className="guest-row">
                  <span className="guest-heart">
                    <SuitHeart size={14} />
                  </span>
                  <span className="guest">Guest </span>
                  <span className="guest-index">{index + 1}</span>
                  <span className="guest-heart">
                    <SuitHeart size={14} />
                  </span>
                  </div>
                  <Row>
                    <Form.Group as={Col} md={4} className="mb-3">
                      <Form.Control
                        name="first_name"
                        type="text"
                        placeholder="First name"
                        value={attendee.first_name}
                        onChange={(e) =>
                          handleAttendeeChange(
                            index,
                            "first_name",
                            e.target.value
                          )
                        }
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={4} className="mb-3">
                      <Form.Control
                        name="last_name"
                        type="text"
                        placeholder="Last name"
                        value={attendee.last_name}
                        onChange={(e) =>
                          handleAttendeeChange(
                            index,
                            "last_name",
                            e.target.value
                          )
                        }
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={4} className="mb-3">
                      <Form.Control
                        name="allergies"
                        type="text"
                        placeholder="Allergies or special food requirements"
                        value={attendee.food}
                        onChange={(e) =>
                          handleAttendeeChange(index, "food", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Row>
                </div>
              ))}
            </Row>
          )}
          <Row>
            <Form.Group as={Col} md={6} className="mb-3">
              <Form.Label className="form-labels">
                Message for bride and groom
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Drop Alex & Rhys a message here if you like <3"
                value={formFields.message}
                onChange={handleFormChange}
                row={4}
              />
            </Form.Group>
          </Row>
          <Row className="align-items-center">
            <Col>
              <Button variant="success" type="submit" className="mt-3">
                Submit
              </Button>
            </Col>
            {status.message && (
              <Col xs={12} className="mt-5">
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </Col>
            )}
          </Row>
        </Form>
      </Container>
    </section>
  );
}
