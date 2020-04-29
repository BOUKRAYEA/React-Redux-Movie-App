export const openAddModal = (payload) => {
  return {
    type: "OPEN_ADD_MODAL",
    payload,
  };
};

export const addMovie = (payload) => {
  return {
    type: "ADD_MOVIE",
    payload,
  };
};

export const removeMovie = (payload) => {
  return {
    type: "REMOVE_MOVIE",
    payload,
  };
};

export const openEditModal = (payload) => {
  return {
    type: "OPEN_EDIT_MODAL",
    payload,
  };
};

export const editMovie = (payload) => {
  console.log(payload);
  return {
    type: "EDIT_MOVIE",
    payload,
  };
};

export const handleChangeInput = (payload) => {
  return {
    type: "ON_CHANGE_INPUT",
    payload,
  };
};

export const searchMovieByRating = (payload) => {
  return {
    type: "SEARCH_MOVIE_BY_RATING",
    payload,
  };
};
