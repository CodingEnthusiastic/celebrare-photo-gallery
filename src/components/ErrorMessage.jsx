export default function ErrorMessage({ message }) {
  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50 px-6 py-10 text-center" role="alert">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-700">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M12 8v5m0 3h.01M10.3 3.9 2.7 17.1A2 2 0 0 0 4.4 20h15.2a2 2 0 0 0 1.7-2.9L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="mt-4 text-base font-semibold text-rose-900">We couldn't load the photos</h2>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-rose-800">{message}</p>
      <p className="mt-3 text-xs text-rose-700">Check your internet connection and reload the page.</p>
    </div>
  );
}
