export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-xl">
      <label htmlFor="author-search" className="sr-only">
        Search photos by author name
      </label>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.2 4.2" strokeLinecap="round" />
      </svg>
      <input
        id="author-search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search by author name..."
        autoComplete="off"
        className="w-full rounded-2xl border border-stone-200 bg-white py-3.5 pl-12 pr-4 text-sm text-stone-800 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:ring-4 focus:ring-stone-200/60"
      />
    </div>
  );
}
