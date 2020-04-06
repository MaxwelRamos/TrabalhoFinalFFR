export const ADD_MOVIE = "ADD_MOVIE";

export const addMovie = movieAdd => ({
    type: ADD_MOVIE,
    payload: movieAdd
});