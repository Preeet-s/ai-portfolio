export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-400 md:flex-row">
        <p>© {new Date().getFullYear()} Preet Sumara. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/preetsumara" className="hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/preet-sumara/" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:preetpro.learning@gmail2.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}