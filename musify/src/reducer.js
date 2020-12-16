export const initialState = {
  token: null,
  user: null,
  playlists: [],
  playing: false,
  item: null,
  categories: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      console.log("Set token");
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default reducer;
