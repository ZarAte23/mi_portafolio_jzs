import Image from "next/image";
// Nota: Navbar no se importa aquí porque ya está en layout.tsx

export default function Home() {
  return (
    <main>
      {/* SECCIÓN 1: HERO CON IMAGEN PROFESIONAL */}
      {/* Usamos hero-main-bg definido en globals.css */}
      <section className="hero is-fullheight hero-main-bg">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-white is-spaced">
              Joaquín Zárate
            </h1>
            <h2 className="subtitle is-3 has-text-info-light">
              Software Engineer Jr & Solutions Architect Jr
            </h2>
            <div className="column is-8 is-offset-2">
              <p className="is-size-5 has-text-white-ter">
                Mi objetivo es diseñas y deplegar de arquitecturas
                híbridas.Mi visión es convertir ideas complejas en infraestructuras
                escalables mediante el equilibrio combinando
                <strong className="has-text-blue-light"> High-Code </strong>y
                <strong className="has-text-blue-light"> No-Code</strong>.
              </p>
            </div>
            <div className="buttons is-centered mt-6">
              <a
                href="#proyectos"
                className="button is-info is-large is-rounded has-text-weight-bold shadow-lg"
              >
                Explorar Soluciones
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: EL BÚNKER (VALOR AGREGADO) */}
      <section
        id="infraestructura"
        className="section is-medium has-background-dark has-text-light"
      >
        <div className="container">
          <h2 className="title has-text-centered has-text-white mb-6">
            Infraestructura de Desarrollo: Eficiencia Distribuida
          </h2>
          <div className="columns is-vcentered">
            <div className="column is-6">
              <div className="notification is-slate-custom">
                {/* Nota: Asegúrate de tener is-slate-custom en globals.css o usa is-info is-light */}
                <h3 className="title is-4">Dual-Hardware Ecosystem</h3>
                <p>
                  Optimizo mi flujo de trabajo mediante un ecosistema dual que
                  garantiza calidad y rendimiento. Utilizo la potencia de{" "}
                  <strong>Apple Silicon (M1)</strong> para interfaces de alta
                  fidelidad y la robustez de <strong>WSL2 en Windows 10</strong>{" "}
                  para la orquestación de servicios backend, Docker y bases de
                  datos relacionales.
                </p>
              </div>
            </div>
            <div className="column is-6 has-text-centered">
              <div className="box has-background-black-ter has-text-white">
                <span className="icon is-large mb-4">
                  <i
                    className="fas fa-microchip fa-3x"
                    style={{ color: "#38bdf8" }}
                  ></i>
                </span>
                <p className="is-size-4 has-text-weight-bold">Hardware Stack</p>
                <p>Apple + HP </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fragmento corregido de la Sección de Proyectos */}
      <section id="proyectos" className="section has-background-black-bis">
        <div className="container">
          <h2 className="title has-text-centered has-text-white mb-6">
            Proyectos Destacados
          </h2>
          <div className="columns is-multiline">
            {/* Proyecto 1 */}
            <div className="column is-4">
              <div className="card project-card">
                <div className="card-content">
                  <div className="tags mb-2">
                    <span className="tag is-info is-light">Ruby on Rails</span>
                    <span className="tag is-dark">PostgreSQL</span>
                  </div>
                  <p className="title is-4 has-text-white">OmniConnect API</p>
                  <div className="content has-text-grey-light">
                    API escalable diseñada con <strong>Service Pattern</strong>{" "}
                    para la gestión de inventarios y flujos de datos críticos.
                  </div>
                </div>
              </div>
            </div>
            {/* Repetir estructura para otros proyectos... */}
            <div className="column is-4">
              <div className="card project-card">
                <div className="card-content">
                  <div className="tags mb-2">
                    <span className="tag is-info is-light">En proceso</span>
                    
                  </div>
                  <p className="title is-4 has-text-white">Proyecto 2</p>
                  <div className="content has-text-grey-light">
                    <strong>Proximamente</strong>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card project-card">
                <div className="card-content">
                  <div className="tags mb-2">
                    <span className="tag is-info is-light">En proceso</span>
                    
                  </div>
                  <p className="title is-4 has-text-white">Proyecto 3</p>
                  <div className="content has-text-grey-light">
                    <strong>Proximamente</strong>{" "}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer has-background-black has-text-white">
        <div className="container has-text-centered">
          <p className="is-size-7 has-text-white">
            Joaquín Zárate <strong> || </strong> 2026
          </p>
          <div className="buttons is-centered mt-3">
            <a href="#" className="button is-dark is-small">
              GitHub
            </a>
            <a href="#" className="button is-link is-small">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
