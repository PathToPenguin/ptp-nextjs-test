import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="glass-nav fixed top-0 w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold">
                Path to <span className="gradient-text">Penguin</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors focus-ring rounded px-2 py-1"
              >
                Über uns
              </a>
              <a
                href="#videos"
                className="text-gray-300 hover:text-white transition-colors focus-ring rounded px-2 py-1"
              >
                Videos
              </a>
              <a
                href="#community"
                className="text-gray-300 hover:text-white transition-colors focus-ring rounded px-2 py-1"
              >
                Community
              </a>
              <Link
                href="/impressum"
                className="text-gray-300 hover:text-white transition-colors focus-ring rounded px-2 py-1"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-gray-300 hover:text-white transition-colors focus-ring rounded px-2 py-1"
              >
                Datenschutz
              </Link>
              <a
                href="https://youtube.com/@pathtopenguin"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors focus-ring"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main id="main-content" className="flex-1 pt-24">
        <section className="pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Dein Weg von
            <br />
            <span className="gradient-text">Windows zu Linux</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lerne Schritt für Schritt die Welt von Linux kennen. Von einem Anfänger für Anfänger - mit praktischen Tipps und echten Erfahrungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@pathtopenguin"
              className="bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift focus-ring"
              target="_blank"
              rel="noopener noreferrer"
            >
              Direkt zum Kanal
            </a>
            <a
              href="#about"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift focus-ring"
            >
              Mehr erfahren
            </a>
          </div>
        </section>
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Über Path to Penguin</h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-300 mb-6">
                Path to Penguin ist mehr als nur ein YouTube-Kanal - es ist meine persönliche Reise vom überzeugten Windows-Nutzer zum begeisterten Linux-Anwender. Ich dokumentiere jeden Schritt, jeden Erfolg und auch jeden Rückschlag, um anderen den Einstieg zu erleichtern.
              </p>
              <p className="text-gray-300 mb-6">
                Als jemand, der selbst vor kurzem noch Vorurteile gegen Linux hatte, verstehe ich die Ängste und Fragen von Einsteigern. Gemeinsam überwinden wir die Hürden und entdecken, warum Linux heute eine echte Alternative für jeden ist - besonders für Gamer und kreative Anwender.
              </p>
              <p className="text-gray-300">
                Von der ersten Installation bis zur optimalen Gaming-Einrichtung - ich teile meine Erfahrungen ehrlich und verständlich, ohne Fachchinesisch.
              </p>
            </div>
          </div>
        </section>
        <section id="videos" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Neueste Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-gray-800 rounded-lg overflow-hidden hover-lift transition-all">
                <img
                  src="https://placehold.co/400x225/0ea5e9/white?text=Gaming+auf+Linux"
                  alt="Gaming auf Linux - Vorschau"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Gaming auf Linux 2025</h3>
                  <p className="text-gray-400 mb-4">
                    Steam Proton, Lutris und native Spiele - alles was du wissen musst.
                  </p>
                  <a
                    href="https://youtube.com/@pathtopenguin"
                    className="text-sky-400 hover:text-sky-300 font-medium focus-ring rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video ansehen →
                  </a>
                </div>
              </article>
              <article className="bg-gray-800 rounded-lg overflow-hidden hover-lift transition-all">
                <img
                  src="https://placehold.co/400x225/facc15/000?text=Mein+Linux+Tag+1"
                  alt="Mein Linux Tag 1 - Vorschau"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Mein erster Tag mit Linux</h3>
                  <p className="text-gray-400 mb-4">
                    Was ich am ersten Tag gelernt habe und was ich anders machen würde.
                  </p>
                  <a
                    href="https://youtube.com/@pathtopenguin"
                    className="text-sky-400 hover:text-sky-300 font-medium focus-ring rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video ansehen →
                  </a>
                </div>
              </article>
              <article className="bg-gray-800 rounded-lg overflow-hidden hover-lift transition-all">
                <img
                  src="https://placehold.co/400x225/8b5cf6/white?text=Windows+Features"
                  alt="Windows Features die ich vermisse - Vorschau"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Windows-Features die ich vermisse</h3>
                  <p className="text-gray-400 mb-4">
                    Ehrliche Einschätzung: Was Linux (noch) besser machen könnte.
                  </p>
                  <a
                    href="https://youtube.com/@pathtopenguin"
                    className="text-sky-400 hover:text-sky-300 font-medium focus-ring rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video ansehen →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="community" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Werde Teil der Community</h2>
            <p className="text-xl text-gray-300 mb-8">
              Tausche dich mit anderen Linux-Einsteigern aus, stelle Fragen und hilf mit, die Community zu wachsen. Auf unserem Discord findest du Hilfe und Gleichgesinnte.
            </p>
            <a
              href="https://discord.gg"
              className="inline-flex items-center space-x-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift focus-ring"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Discord beitreten</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Path to Penguin. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6">
            <Link
              href="/impressum"
              className="text-gray-400 hover:text-white transition-colors focus-ring rounded"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-gray-400 hover:text-white transition-colors focus-ring rounded"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
