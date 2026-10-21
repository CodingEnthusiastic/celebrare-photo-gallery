import { useCallback, useMemo, useState } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos.js';
import useFavorites from '../hooks/useFavorites.js';
import ErrorMessage from './ErrorMessage.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';
import PhotoGrid from './PhotoGrid.jsx';
import SearchBar from './SearchBar.jsx';

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const { favorites, toggleFavorite } = useFavorites();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase();

    if (!query) return photos;

    return photos.filter((photo) =>
      photo.author.toLocaleLowerCase().includes(query),
    );
  }, [photos, searchTerm]);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900">
      <div className="mx-auto max-w-[1440px] px-4 py-9 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <header className="mb-9 border-b border-stone-200 pb-8 sm:mb-11 sm:pb-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Celebrare · Frontend assignment
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                Photo Gallery<span className="text-rose-600">.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-stone-600 sm:text-base">
                A little inspiration in every frame. Explore photographs and save your favourites.
              </p>
            </div>
            <SearchBar value={searchTerm} onChange={handleSearchChange} />
          </div>
          {!loading && !error && (
            <div className="mt-7 flex items-center justify-between gap-4 text-sm text-stone-500">
              <p aria-live="polite">
                Showing <span className="font-semibold text-stone-800">{filteredPhotos.length}</span>{' '}
                {filteredPhotos.length === 1 ? 'photo' : 'photos'}
              </p>
              <p>
                <span className="font-semibold text-rose-600">{favorites.length}</span>{' '}
                {favorites.length === 1 ? 'favourite' : 'favourites'} saved
              </p>
            </div>
          )}
        </header>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <PhotoGrid
            photos={filteredPhotos}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}

        <footer className="mt-12 border-t border-stone-200 pt-5 text-xs text-stone-400">
          Photos provided by the Picsum Photos public API.
        </footer>
      </div>
    </main>
  );
}
