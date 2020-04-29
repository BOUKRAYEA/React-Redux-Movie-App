const INITIAL_STATE = {
  input: "",
  movieInputs: [
    {
      id: 1,
      title: "Al Risalah",
      img: "https://reliancehvg.co.in/store/images/P/Al%20Risalah1.jpg",
      date: "1976",
      rating: 5,
      description:
        "The story of prophet 'Muhammad' PBUH and the delivery of the message of God 'Allah'.",
    },
    {
      id: 2,
      title: "Inception",
      img:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      date: "2010",
      rating: 5,
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    },
    {
      id: 3,
      title: "Shawshank Redemption",
      img:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      date: "1994",
      rating: 5,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 4,
      title: "Blade Runner 2049",
      img:
        "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      date: "2017",
      rating: 4,
      description:
        "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    },
    {
      id: 5,
      title: "The Invisible Man",
      img:
        "https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
      date: "2020",
      rating: 3,
      description:
        "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
    },
    {
      id: 6,
      title: "The Godfather",
      img:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
      date: "1972",
      rating: 5,
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 7,
      title: "Schindler's List",
      img:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      date: "1993",
      rating: 2,
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    },
    {
      id: 8,
      title: "Raging Bull",
      img:
        "https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
      date: "1980",
      rating: 1,
      description:
        "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
    },
    {
      id: 9,
      title: "Casablanca",
      img:
        "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
      date: "1942",
      rating: 3,
      description:
        "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
    },
    {
      id: 10,
      title: "SAW V",
      img:
        "https://m.media-amazon.com/images/M/MV5BMzc2ZWQ4YTYtZDY0Zi00YzkxLTgxNTMtMTE3MDE3NzQyNjc2XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_.jpg",
      date: "2008",
      rating: 3,
      description:
        "Following Jigsaw's grisly demise, Mark Hoffman is commended as a hero, but Agent Strahm is suspicious, and delves into Hoffman's past. Meanwhile, another group of people are put through a series of gruesome tests.",
    },
    {
      id: 11,
      title: "Wanted",
      img:
        "https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
      date: "2008",
      rating: 2,
      description:
        "A frustrated office worker learns that he is the son of a professional assassin and that he shares his father's superhuman killing abilities.",
    },
  ],
  isOpenAddModal: false,
  isOpenEditModal: false,
  currentIndex: 0,
  minRating: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_ADD_MODAL":
      return {
        ...state,
        isOpenAddModal: !state.isOpenAddModal,
      };

    case "ADD_MOVIE":
      return {
        ...state,
        movieInputs: [
          ...state.movieInputs,
          {
            id: Date.now(),
            title: action.payload[0],
            img: action.payload[1],
            date: action.payload[2],
            rating: action.payload[3],
            description: action.payload[4],
          },
        ],
        isOpenAddModal: !state.isOpenAddModal,
      };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movieInputs: state.movieInputs.filter(
          (el, index) => index !== action.payload
        ),
      };

    case "OPEN_EDIT_MODAL":
      return {
        ...state,
        isOpenEditModal: !state.isOpenEditModal,
        currentIndex: action.payload,
      };

    case "EDIT_MOVIE":
      return {
        ...state,
        isOpenEditModal: !state.isOpenEditModal,
        movieInputs: state.movieInputs.map((movie) =>
          movie.id === action.payload[0]
            ? {
                id: action.payload[0],
                title: action.payload[1],
                img: action.payload[2],
                date: action.payload[3],
                rating: action.payload[4],
                description: action.payload[5],
              }
            : movie
        ),
      };

    case "ON_CHANGE_INPUT":
      return {
        ...state,
        input: action.payload.target.value,
      };

    case "SEARCH_MOVIE_BY_RATING":
      return {
        ...state,
        minRating: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
