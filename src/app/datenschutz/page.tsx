import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Path to Penguin",
  description: "Datenschutzerklärung von Path to Penguin.",
};

export default function Datenschutz() {
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
            <Link href="/impressum" className="text-gray-300 hover:text-white focus-ring">
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-gray-300 hover:text-white focus-ring"
              aria-current="page"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-10" id="main-content">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <span className="font-medium">Frank Michael Becker</span>, E-Mail:
            <a
              className="text-sky-400 hover:underline"
              href="mailto:pathtopenguin@gmail.com"
            >
              pathtopenguin@gmail.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">Bitte ergänzen Sie hier Ihre vollständigen Kontaktdaten.</p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">2. Hosting</h2>
          <p>Diese Website wird als statische Seite über GitLab Pages bereitgestellt.</p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">3. Zugriffsdaten (Server-Logfiles)</h2>
          <p>
            Beim Aufruf der Seite können technische Informationen (z. B. IP-Adresse, Datum/Uhrzeit, User-Agent) durch den
            Hosting-Anbieter verarbeitet werden. Diese Daten dienen der Auslieferung und Sicherheit der Website.
          </p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">4. Externe Inhalte und Links</h2>
          <p>
            Auf der Startseite können externe Ressourcen (z. B. Schriften/CSS von Drittanbietern) und Links zu Plattformen wie
            YouTube eingebunden sein. Beim Aufruf dieser Inhalte gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
          </p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">5. Cookies</h2>
          <p>Diese Seite setzt keine eigenen Cookies. Drittanbieter könnten beim Laden externer Inhalte Cookies setzen.</p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">6. Ihre Rechte</h2>
          <p>
            Sie haben, soweit die gesetzlichen Voraussetzungen vorliegen, das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.
          </p>
          <p>Wenden Sie sich hierzu an die oben genannte Kontaktadresse.</p>
        </section>
        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">7. Kontakt</h2>
          <p>
            Für Anliegen zum Datenschutz kontaktieren Sie uns unter:
            <a className="text-sky-400 hover:underline" href="mailto:pathtopenguin@gmail.com">
              pathtopenguin@gmail.com
            </a>
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
