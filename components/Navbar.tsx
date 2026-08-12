import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0b0f19]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Preet Sumara
        </Link>

        <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
  <a
    href="https://github.com/preetsumara"
    target="_blank"
    rel="noreferrer"
    className="text-gray-300 transition hover:text-white"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/preet-sumara"
    target="_blank"
    rel="noreferrer"
    className="text-gray-300 transition hover:text-white"
  >
    LinkedIn
  </a>

  <a
    href="/resume.pdf"
    download
    className="rounded-lg bg-green-500 px-4 py-2 font-medium text-black transition hover:bg-green-400"
  >
    Resume
  </a>
</div>
      </div>
    </header>
  );
}