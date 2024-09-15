export function Navigation({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex items-center gap-x-4 text-zinc-700">{children}</ul>
  );
}
