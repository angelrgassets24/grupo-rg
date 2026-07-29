import Link from "next/link";

export default function LandingPage() {
  return (
    <div style={{ width: "100%" }}>
      <header
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "24px clamp(20px, 6vw, 72px)",
          borderBottom: "1px solid #DAD5C8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              position: "relative",
              width: "36px",
              height: "36px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "36px",
                height: "10px",
                background: "#12203D",
                borderRadius: "2px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "10px",
                height: "36px",
                background: "#12203D",
                borderRadius: "2px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "14px",
                left: "14px",
                width: "22px",
                height: "10px",
                background: "#12203D",
                borderRadius: "2px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "26px",
                left: "14px",
                width: "10px",
                height: "10px",
                background: "#B08A5A",
                borderRadius: "2px",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "1.5px",
                color: "#12203D",
              }}
            >
              GRUPO RG
            </div>
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "2.5px",
                color: "#8A8578",
                textTransform: "uppercase",
              }}
            >
              Estrategia e Inversión
            </div>
          </div>
        </div>
        <nav style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(16px, 3vw, 44px)" }}>
          <a href="#nosotros" style={{ fontSize: "14px", color: "#14161A", textDecoration: "none" }}>
            Nosotros
          </a>
          <a href="#servicios" style={{ fontSize: "14px", color: "#14161A", textDecoration: "none" }}>
            Servicios
          </a>
          <a href="#contacto" style={{ fontSize: "14px", color: "#14161A", textDecoration: "none" }}>
            Contacto
          </a>
          <Link
            href="/auth/login"
            style={{
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#F3F0E9",
              background: "#12203D",
              padding: "12px 24px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Cotizador Privado
          </Link>
        </nav>
      </header>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(32px, 6vw, 80px)",
          padding: "clamp(48px, 10vw, 100px) clamp(20px, 6vw, 72px)",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#B08A5A",
              fontWeight: 600,
            }}
          >
            Grupo financiero boutique
          </div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: 1.08,
              color: "#12203D",
              margin: 0,
            }}
          >
            Estructuramos proyectos.
            <br />
            Operamos resultados.
          </h1>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#5B5748",
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Grupo RG presta, estructura y opera proyectos de inversión — con la disciplina institucional que exige el capital y
            la cercanía de un socio operativo.
          </p>
          <div style={{ display: "flex", gap: "16px", paddingTop: "12px" }}>
            <a
              href="#contacto"
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#F3F0E9",
                background: "#12203D",
                padding: "16px 30px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Hablemos
            </a>
            <a
              href="#servicios"
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#12203D",
                border: "1px solid #C7C0AE",
                padding: "16px 30px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Nuestros servicios
            </a>
          </div>
        </div>
      </section>

      <section
        id="nosotros"
        style={{
          padding: "clamp(48px, 8vw, 96px) clamp(20px, 6vw, 72px)",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid #DAD5C8",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px, 5vw, 80px)" }}>
          <div
            style={{
              flex: "1 1 160px",
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#8A8578",
              fontWeight: 600,
            }}
          >
            Quiénes somos
          </div>
          <div
            style={{
              flex: "2 1 420px",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(22px, 3vw, 30px)",
              lineHeight: 1.45,
              color: "#12203D",
              fontWeight: 400,
              maxWidth: "760px",
            }}
          >
            Dejamos de ser una casa de préstamos para convertirnos en un grupo financiero que financia, estructura y{" "}
            <span style={{ fontStyle: "normal", color: "#B08A5A" }}>opera</span> directamente los proyectos en los que
            participa — para inversionistas patrimoniales y para empresas que buscan crecer.
          </div>
        </div>
      </section>

      <section
        id="servicios"
        style={{
          padding: "clamp(48px, 8vw, 96px) clamp(20px, 6vw, 72px)",
          maxWidth: "1440px",
          margin: "0 auto",
          borderTop: "1px solid #DAD5C8",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flexEnd",
            marginBottom: "56px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#8A8578",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              Lo que hacemos
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(26px, 4vw, 36px)",
                color: "#12203D",
              }}
            >
              Nos adaptamos a la naturaleza de cada proyecto
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px",
            borderTop: "1px solid #DAD5C8",
            paddingTop: "36px",
          }}
        >
          {[
            { num: "01", title: "Financiamiento", desc: "Arrendamiento, factoraje y préstamos estructurados para necesidades de corto y largo plazo." },
            { num: "02", title: "Estructuración", desc: "Diseñamos vehículos y esquemas de coinversión a la medida de cada proyecto." },
            { num: "03", title: "Operación", desc: "No solo invertimos: operamos directamente los activos y negocios en los que participamos." },
            { num: "04", title: "Consultoría", desc: "Asesoría financiera y legal para decisiones de inversión informadas." },
          ].map((item) => (
            <div key={item.num} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#B08A5A" }}>
                {item.num}
              </div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "21px", color: "#12203D" }}>
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#5B5748",
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "clamp(48px, 8vw, 96px) clamp(20px, 6vw, 72px)",
          background: "#12203D",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            borderTop: "1px solid rgba(243, 240, 233, 0.15)",
          }}
        >
          <div style={{ flex: "1 1 320px", padding: "40px 0 0 0" }}>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#8A8A9A",
                marginBottom: "16px",
              }}
            >
              Para inversionistas
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "26px",
                color: "#F3F0E9",
                lineHeight: 1.3,
                marginBottom: "16px",
              }}
            >
              Proyectos estructurados, no promesas.
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#B9C0CE",
                maxWidth: "440px",
              }}
            >
              Participación en proyectos de inversión con estructura clara y operación transparente.
            </div>
          </div>
          <div style={{ flex: "1 1 320px", padding: "40px 0 0 0" }}>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#8A8A9A",
                marginBottom: "16px",
              }}
            >
              Para empresas
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "26px",
                color: "#F3F0E9",
                lineHeight: 1.3,
                marginBottom: "16px",
              }}
            >
              Capital y coinversión para crecer.
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#B9C0CE",
                maxWidth: "440px",
              }}
            >
              Financiamiento y coinversión para impulsar liquidez, crecimiento y operación de tu empresa.
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        style={{
          padding: "clamp(48px, 8vw, 96px) clamp(20px, 6vw, 72px)",
          maxWidth: "1440px",
          margin: "0 auto",
          borderTop: "1px solid #DAD5C8",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 6vw, 80px)" }}>
          <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#8A8578",
                fontWeight: 600,
              }}
            >
              Contacto
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "34px",
                color: "#12203D",
                lineHeight: 1.2,
              }}
            >
              Hablemos de tu proyecto.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
              <a href="mailto:hola@gruporg.mx" style={{ fontSize: "15px", color: "#14161A", textDecoration: "none" }}>
                hola@gruporg.mx
              </a>
              <a href="tel:+523320328694" style={{ fontSize: "15px", color: "#14161A", textDecoration: "none" }}>
                +52 (33) 2032 8694
              </a>
              <div style={{ fontSize: "15px", color: "#5B5748" }}>Guadalajara, México</div>
            </div>
            <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
              <a href="https://wa.me/523320328604" style={{ fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", color: "#5B5748", textDecoration: "none" }}>
                WhatsApp
              </a>
              <a href="https://www.instagram.com/rg_assets" style={{ fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", color: "#5B5748", textDecoration: "none" }}>
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/rg-assets/" style={{ fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", color: "#5B5748", textDecoration: "none" }}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          padding: "24px clamp(20px, 6vw, 72px)",
          borderTop: "1px solid #DAD5C8",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "12px", color: "#8A8578" }}>RG ASSETS SAPI de C.V.</div>
      </footer>
    </div>
  );
}
