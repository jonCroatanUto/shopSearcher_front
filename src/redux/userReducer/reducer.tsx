import initialState from "./state";
import { FETCH_DATA_USER } from "./types";
interface Action {
  type: typeof FETCH_DATA_USER;
  payload: [
    {
      id: number;
      vote_average: number;
      title: string;
      name: string;
      poster_path: string;
      backdrop_path: string;
    }
  ];
}
// interface ActionC {
//   type: typeof MOVIES_DETAILS;
//   payload: {
//     adult: boolean;
//     poster_path: string;
//     overview: string;
//     genres: string[];
//     release_date: string;
//     runtime: number;
//     spoken_languages: string[];
//     production_companies: string[];
//     production_countries: string[];
//   };
// }
// interface ActionB {
//   type: typeof CHANGE_MOVIE_POSITION;
//   payload: number;
// }
// interface ActionD {
//   type: typeof MOVIES_DETAILS_SHOW;
//   payload: boolean;
// }
// type Action = ActionA | ActionB | ActionC | ActionD;

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_USER:
      return { ...state, useData: action.payload };

    default:
      return state;
  }
};

export default userReducer;
