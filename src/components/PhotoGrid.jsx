import PhotoCard from './PhotoCard.jsx';

export default function PhotoGrid({ photos, favorites, onToggleFavorite }) {
  if (photos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-16 text-center">
        <p className="text-base font-semibold text-stone-800">No photos found</p>
        <p className="mt-2 text-sm text-stone-500">
          Try a different author name.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavorite={favorites.includes(String(photo.id))}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
