import { FETCH_DATA_USER } from "./types";

export const fetchMoviesDataAction = (
  value: [
    {
      id: number;
      vote_average: number;
      title: string;
      poster_path: string;
      backdrop_path: string;
    }
  ]
) => ({
  type: FETCH_DATA_USER,
  payload: value,
});
