import React, { useState } from "react";
import { openEditModal, editMovie } from "../../redux/action";
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

function EditModalContent(props) {
  const [movie, setMovie] = useState({
    title: "",
    picture: "",
    date: "",
    rating: "",
    description: "",
  });
  return (
    <div>
      {props.movieInputs.map(
        (el) =>
          el.id === props.currentIndex && (
            <Modal
              key={el.id}
              show={props.isOpenEditModal}
              onHide={props.openEditModal}
            >
              <Modal.Header closeButton>
                <Modal.Title>Edit Movie</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicMovie">
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="30"
                      value={movie.title}
                      onChange={(event) =>
                        setMovie({ ...movie, title: event.target.value })
                      }
                      placeholder={el.title}
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
                      placeholder={el.img}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicDate">
                    <Form.Label>Release Date</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="4"
                      value={movie.date}
                      onChange={(event) =>
                        setMovie({ ...movie, date: event.target.value })
                      }
                      placeholder={el.date}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicRating">
                    <Form.Label>IMDB rating</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="1"
                      value={movie.rating}
                      onChange={(event) =>
                        setMovie({ ...movie, rating: event.target.value })
                      }
                      placeholder={el.rating}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      maxLength="255"
                      onChange={(event) =>
                        setMovie({ ...movie, description: event.target.value })
                      }
                      placeholder={el.description}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.openEditModal}>
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
                    props.editMovie([
                      el.id,
                      movie.title,
                      movie.picture,
                      movie.date,
                      movie.rating,
                      movie.description,
                    ])
                  }
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          )
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movieInputs: state.movieInputs,
  isOpenEditModal: state.isOpenEditModal,
  currentIndex: state.currentIndex,
});

export default connect(mapStateToProps, { openEditModal, editMovie })(
  EditModalContent
);
