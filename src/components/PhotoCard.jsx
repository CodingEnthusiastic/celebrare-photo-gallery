function HeartIcon({ filled }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.3 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

export default function PhotoCard({ photo, isFavorite, onToggleFavorite }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative overflow-hidden bg-stone-100">
        <img
          src={`https://picsum.photos/id/${photo.id}/720/540`}
          alt={`Photograph by ${photo.author}`}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
        />
        <button
          type="button"
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={isFavorite ? `Remove ${photo.author}'s photo from favourites` : `Add ${photo.author}'s photo to favourites`}
          aria-pressed={isFavorite}
          title={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
          className={`absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/95 shadow-sm transition hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-200 ${isFavorite ? 'text-rose-600' : 'text-stone-500 hover:text-rose-600'}`}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3.5">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400">
            Photographed by
          </p>
          <p className="mt-1 truncate text-sm font-semibold text-stone-800" title={photo.author}>
            {photo.author}
          </p>
        </div>
        <span className="shrink-0 text-xs text-stone-400">#{photo.id}</span>
      </div>
    </article>
  );
}
