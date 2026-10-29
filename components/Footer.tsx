export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-12 bg-slate-900 py-6 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm sm:px-6 lg:px-8">
        <p>
          Copyright &copy; {currentYear} | Tumwesige Nelson | All rights reserved
        </p>
      </div>
    </footer>
  );
}
