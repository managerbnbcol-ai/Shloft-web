const heroBackground =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80";

const beachSuitesImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";

const usaquenImage =
  "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1200&q=80";

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <header className="sticky top-0 z-50 border-b border-gold/30 bg-midnight/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold text-2xl font-bold text-gold">
              SH
            </span>
            <div>
              <p className="text-lg font-serif tracking-wide text-gold">Superhost Loft</p>
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">Gestión inmobiliaria premium</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.3em] text-white/80 md:flex">
            <a href="#beneficios" className="hover:text-gold">
              Beneficios
            </a>
            <a href="#portafolio" className="hover:text-gold">
              Portafolio
            </a>
            <a href="#inversionistas" className="hover:text-gold">
              Inversionistas
            </a>
            <a href="https://wa.me/573001112233" target="_blank" rel="noreferrer" className="hover:text-gold">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col gap-24 pb-24">
        <section
          className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-gold">Experiencias inmobiliarias de lujo</p>
            <h1 className="text-4xl font-serif sm:text-5xl lg:text-6xl">
              Tu inversión, tu descanso, nuestra gestión
            </h1>
            <p className="max-w-2xl text-base text-white/80 sm:text-lg">
              Administramos propiedades vacacionales con estándares hoteleros, tecnología de punta y hospitalidad cinco estrellas para que disfrutes de ingresos pasivos con total tranquilidad.
            </p>
            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-midnight shadow-lg transition hover:bg-gold/90"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>

        <section id="beneficios" className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">¿Por qué Superhost Loft?</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Beneficios exclusivos para tu propiedad</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-6 font-serif text-2xl text-gold">Energía solar</h3>
              <p className="mt-4 text-sm text-white/80">
                Implementamos soluciones de energía renovable que reducen costos operativos y elevan el valor sostenible de cada propiedad.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="text-4xl">🛰️</div>
              <h3 className="mt-6 font-serif text-2xl text-gold">Conectividad Starlink</h3>
              <p className="mt-4 text-sm text-white/80">
                Garantizamos internet de alta velocidad en ubicaciones remotas para experiencias de hospedaje impecables y trabajo remoto sin interrupciones.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="text-4xl">⭐</div>
              <h3 className="mt-6 font-serif text-2xl text-gold">Servicio 5 estrellas</h3>
              <p className="mt-4 text-sm text-white/80">
                Nuestro equipo opera con estándares hoteleros premium, asegurando reseñas excepcionales y ocupaciones sobresalientes todo el año.
              </p>
            </article>
          </div>
        </section>

        <section id="portafolio" className="bg-white/5 py-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Portafolio</p>
              <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Proyectos que elevan destinos</h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-midnight">
                <div
                  className="h-72 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${beachSuitesImage})` }}
                />
                <div className="space-y-4 p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-gold">Caribe colombiano</p>
                  <h3 className="font-serif text-2xl">Beach Suites Tayrona</h3>
                  <p className="text-sm text-white/80">
                    Complejo boutique frente al mar inspirado en la biodiversidad del Tayrona, equipado con energía solar y tecnología inteligente para huéspedes globales.
                  </p>
                </div>
              </article>
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-midnight">
                <div
                  className="h-72 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${usaquenImage})` }}
                />
                <div className="space-y-4 p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-gold">Bogotá D.C.</p>
                  <h3 className="font-serif text-2xl">SH Suites Usaquén</h3>
                  <p className="text-sm text-white/80">
                    Apartaestudios urbanos con diseño minimalista, concierge 24/7 y experiencias personalizadas para viajeros corporativos y de placer.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="inversionistas" className="mx-auto max-w-5xl rounded-3xl border border-gold/40 bg-gradient-to-br from-midnight via-midnight to-black px-6 py-16 text-center shadow-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-gold">Alianza de inversión</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Convierte tus propiedades en destinos icónicos</h2>
          <p className="mt-6 text-base text-white/80 sm:text-lg">
            Diseñamos modelos financieros a medida, gestionamos operaciones diarias y maximizamos el retorno de tu inversión con transparencia y datos en tiempo real.
          </p>
          <a
            href="mailto:inversionistas@superhostloft.com"
            className="mt-10 inline-flex rounded-full border border-gold px-10 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-gold hover:bg-gold hover:text-midnight"
          >
            Solicitar información
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-lg text-gold">Superhost Loft S.A.S</p>
            <p>NIT 901.458.963-2</p>
            <p>Cra. 7 #123-45, Bogotá, Colombia</p>
          </div>
          <div className="flex flex-col gap-2 text-sm uppercase tracking-[0.3em] md:text-right">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-gold">
              Instagram
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gold">
              LinkedIn
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-gold">
              Facebook
            </a>
          </div>
          <div className="md:text-right">
            <p className="uppercase tracking-[0.3em] text-gold">Contacto</p>
            <a href="mailto:hola@superhostloft.com" className="hover:text-gold">
              hola@superhostloft.com
            </a>
            <p className="text-white/70">+57 300 111 2233</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
