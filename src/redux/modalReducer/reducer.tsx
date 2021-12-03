import initialState from "./state";
import { SAVE_FAVORITE, DISPLAY_ADD_TO_LIST_MODAL } from "./types";
interface ActionA {
  type: typeof SAVE_FAVORITE;
  payload: {
    isSuccedToSavePlace: string;
    responseMessage: string;
  };
}
interface ActionB {
  type: typeof DISPLAY_ADD_TO_LIST_MODAL;
  payload: boolean;
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
type Action = ActionA | ActionB;

const modalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_FAVORITE:
      return { ...state, response: action.payload };
    case DISPLAY_ADD_TO_LIST_MODAL:
      return { ...state, diplayAddToListModal: action.payload };

    default:
      return state;
  }
};

export default modalReducer;
