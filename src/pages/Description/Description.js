import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Description(props) {
  return (
    <div>
      {props.movieInputs.map(
        (el) =>
          el.title === props.match.params.id && (
            <Card key={el.id} className="text-center">
              <Card.Header as="h2">{el.title}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {[...Array(5)].map((star, i) =>
                    i < el.rating ? (
                      <FaStar key={i} color="#ffc107" />
                    ) : (
                      <FaStar key={i} />
                    )
                  )}
                </Card.Text>
                <img widht="285px" height="420px" src={el.img} alt={el.title} />

                <br />
                <br />
                <Card.Text style={{ fontSize: "1.25rem" }}>
                  {el.description}
                </Card.Text>
                <Link to="/">
                  <Button variant="primary">Go back</Button>
                </Link>
              </Card.Body>
            </Card>
          )
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movieInputs: state.movieInputs,
});

export default connect(mapStateToProps)(Description);
