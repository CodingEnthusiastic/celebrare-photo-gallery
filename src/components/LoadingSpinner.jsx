export default function LoadingSpinner() {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-4 rounded-2xl border border-stone-200 bg-white/70 px-6 py-14" role="status" aria-live="polite">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-stone-200 border-t-stone-800" />
      <p className="text-sm font-medium text-stone-600">Loading photos...</p>
      <span className="sr-only">Please wait while photos are loading.</span>
    </div>
  );
}
