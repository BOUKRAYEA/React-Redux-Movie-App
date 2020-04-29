import React, { useState } from "react";
import "./SearchBar.css";
import { handleChangeInput, searchMovieByRating } from "../../redux/action";
import { connect } from "react-redux";
import { Navbar, Form, FormControl } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function SearchBar(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <Navbar bg="dark" variant="dark">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={props.input}
          onChange={(event) => props.handleChangeInput(event)}
        />

        <div style={{ display: "flex", marginLeft: "15px" }}>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "#eae3cf"
                  }
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => props.searchMovieByRating(ratingValue)}
                />
              </label>
            );
          })}
        </div>
      </Form>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
});

export default connect(mapStateToProps, {
  handleChangeInput,
  searchMovieByRating,
})(SearchBar);
