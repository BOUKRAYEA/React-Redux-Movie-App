import React from "react";
import "./Movies.css";
import { connect } from "react-redux";
import { openAddModal, removeMovie, openEditModal } from "../../redux/action";
import { Card, Button } from "react-bootstrap";
import { FaPlus, FaStar } from "react-icons/fa";
import AddModalContent from "../AddModalContent/AddModalContent";
import { Link } from "react-router-dom";
import EditModalContent from "../EditModalContent/EditModalContent";

function Movies(props) {
  let filterMovie = props.movieInputs.filter(
    (movie) =>
      movie.rating >= props.minRating &&
      movie.title.toLowerCase().includes(props.input.toLowerCase())
  );
  return (
    <div className="movieContainer">
      {filterMovie.map((el, index) => (
        <Card
          key={el.id}
          style={{
            textAlign: "center",
            width: "18rem",
            height: "42.125rem",
            margin: "0 20px 20px 0",
          }}
        >
          <Card.Img variant="top" widht="285px" height="420px" src={el.img} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.date}</Card.Text>
            <Card.Text>
              {[...Array(5)].map((star, i) =>
                i < el.rating ? (
                  <FaStar key={i} color="#ffc107" />
                ) : (
                  <FaStar key={i} />
                )
              )}
            </Card.Text>
            <Link to={`/description/${el.title}`}>
              <Button variant="light" style={{ marginBottom: "20px" }}>
                Movie Description
              </Button>
            </Link>
            <br />
            <Button
              variant="success"
              style={{ marginRight: "50px" }}
              onClick={() => props.openEditModal(el.id)}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => props.removeMovie(index)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}
      <Card
        style={{
          width: "18rem",
          height: "42.125rem",
          margin: "0 20px 20px 0",
          cursor: "pointer",
        }}
        onClick={() => props.openAddModal()}
      >
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaPlus size="6rem" />
        </Card.Body>
      </Card>
      <AddModalContent />
      <EditModalContent />
    </div>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  movieInputs: state.movieInputs,
  minRating: state.minRating,
});

export default connect(mapStateToProps, {
  openAddModal,
  removeMovie,
  openEditModal,
})(Movies);
