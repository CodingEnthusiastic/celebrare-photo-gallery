/** Pure reducer: it only calculates the next favourites state. */
export default function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const isAlreadyFavorite = state.includes(action.photoId);

      if (isAlreadyFavorite) {
        return state.filter((id) => id !== action.photoId);
      }

      return [...state, action.photoId];
    }

    default:
      return state;
  }
}
