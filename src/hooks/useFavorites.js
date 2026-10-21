import { useEffect, useReducer } from 'react';
import favoritesReducer from '../reducers/favoritesReducer.js';

const STORAGE_KEY = 'celebrare-photo-gallery:favorites';

function loadSavedFavorites() {
  try {
    const savedValue = localStorage.getItem(STORAGE_KEY);
    if (!savedValue) return [];

    const parsedValue = JSON.parse(savedValue);
    if (!Array.isArray(parsedValue)) return [];

    // Picsum's API represents its IDs as strings; normalise stored values too.
    return parsedValue
      .filter((id) => typeof id === 'string' || typeof id === 'number')
      .map(String);
  } catch {
    // Storage may be unavailable or contain invalid JSON; keep the app usable.
    return [];
  }
}

/** Keeps reducer-managed favourites in sync with localStorage. */
export default function useFavorites() {
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    undefined,
    loadSavedFavorites,
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // The gallery can still be used if browser storage is blocked or full.
    }
  }, [favorites]);

  function toggleFavorite(photoId) {
    dispatch({ type: 'TOGGLE_FAVORITE', photoId: String(photoId) });
  }

  return { favorites, toggleFavorite };
}
