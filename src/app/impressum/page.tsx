import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Path to Penguin",
  description: "Impressum von Path to Penguin.",
};

export default function Impressum() {
  return (
    <div>
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-white hover:text-sky-400 focus-ring">
            Path to Penguin
          </Link>
          <nav className="text-sm space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white focus-ring">
              Startseite
            </Link>
            <Link
              href="/impressum"
              className="text-gray-300 hover:text-white focus-ring"
              aria-current="page"
            >
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-gray-300 hover:text-white focus-ring">
              Datenschutz
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-10" id="main-content">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <p>
            Betreiber: <span className="font-medium">Frank Michael Becker</span>
            <br />
            Kontakt: <a className="text-sky-400 hover:underline" href="mailto:pathtopenguin@gmail.com">pathtopenguin@gmail.com</a>
          </p>
          <p className="text-gray-400 text-sm">
            Hinweis: Bitte ergänzen Sie hier Ihre vollständigen Pflichtangaben (Name/Anschrift) je nach Rechtsform.
          </p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt</h2>
          <p>Verantwortlich nach § 18 Abs. 2 MStV: Frank Michael Becker (E-Mail wie oben).</p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte wird keine Gewähr übernommen; verantwortlich ist der jeweilige Anbieter.
          </p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">Online-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a
              className="text-sky-400 hover:underline"
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </section>
        <p className="text-gray-400 text-sm">Stand: 09.08.2025</p>
      </main>
      <footer className="border-t border-gray-800 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-sm text-gray-400 flex flex-wrap gap-4 justify-between">
          <span>© Path to Penguin</span>
          <span className="space-x-3">
            <Link className="hover:text-white" href="/impressum">
              Impressum
            </Link>
            <Link className="hover:text-white" href="/datenschutz">
              Datenschutz
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
