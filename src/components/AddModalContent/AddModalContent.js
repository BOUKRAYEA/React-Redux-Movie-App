import React, { useState } from "react";
import { openAddModal, addMovie } from "../../redux/action";
import { connect } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";

const inputsCheck = (title, picture, date, rating, description) => {
  const isURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
    picture
  );
  if (title.length === 0) alert("Movie can't be blank");
  else if (!isURL) alert("Please check the movie picture URL");
  else if (isNaN(date) || date.length === 0)
    alert("Please check the release date");
  else if (isNaN(rating) || rating.length === 0)
    alert("Please check the rating");
  else if (description.length === 0) alert("Description can't be blank");
  else return true;
};

function AddModalContent(props) {
  const [movie, setMovie] = useState({
    title: "",
    picture: "",
    date: "",
    rating: "",
    description: "",
  });
  return (
    <div>
      <Modal show={props.isOpenAddModal} onHide={props.openAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicMovie">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                value={movie.title}
                maxLength="30"
                onChange={(event) =>
                  setMovie({ ...movie, title: event.target.value })
                }
                placeholder="Eg: Fast and Furious 7"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPicture">
              <Form.Label>Movie Picture</Form.Label>
              <Form.Control
                type="text"
                value={movie.picture}
                onChange={(event) =>
                  setMovie({ ...movie, picture: event.target.value })
                }
                placeholder="Eg: https://www.wikipedia.org/La_Casa_De_Papel.png"
              />
            </Form.Group>

            <Form.Group controlId="formBasicDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="text"
                value={movie.date}
                maxLength="4"
                onChange={(event) =>
                  setMovie({ ...movie, date: event.target.value })
                }
                placeholder="Eg: 2020"
              />
            </Form.Group>

            <Form.Group controlId="formBasicRating">
              <Form.Label>IMDB rating</Form.Label>
              <Form.Control
                type="text"
                value={movie.rating}
                maxLength="1"
                onChange={(event) =>
                  setMovie({ ...movie, rating: event.target.value })
                }
                placeholder="Eg: 1-5"
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                maxLength="255"
                placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dignissimos repellat esse sint reprehenderit animi eos quo magnam, quam officiis."
                rows="3"
                onChange={(event) =>
                  setMovie({ ...movie, description: event.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.openAddModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              inputsCheck(
                movie.title,
                movie.picture,
                movie.date,
                movie.rating,
                movie.description
              ) &&
              props.addMovie([
                movie.title,
                movie.picture,
                movie.date,
                movie.rating,
                movie.description,
              ])
            }
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isOpenAddModal: state.isOpenAddModal,
  movieInputs: state.movieInputs,
});

export default connect(mapStateToProps, { openAddModal, addMovie })(
  AddModalContent
);
