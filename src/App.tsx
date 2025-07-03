import './App.css';
import { Footer } from './dist/components/Footer';
import { Header } from './dist/components/Header';


function App() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="contenido-hero">
          <h2>Diseño y Desarrollo Web <span>Freelancer</span></h2>
          <p className="eslogan-hero">"Soluciones Digitales"</p>
          <div className="ubicacion">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="88"
              height="88" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFC107" fill="none"
              strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p> Ciudad de Mèxico</p>
          </div>
          <a className="boton">Contactar</a>
        </div>
        {/* <!-- / .contenido-hero --> */}
      </section>

      <main className="contenedor sombra">
        <h2>Mis Servicios</h2>
        <div className="servicios">
          <section className="servicio">
            <h3>Diseño Web</h3>
            <div className="iconos">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette" width="40"
                height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none"
                strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 
                    .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </div>
            <p>
              Diseño y desarrollo de sitios profesionales adaptados a cada proyecto, respetando la identidad visual y funcional del cliente.
            </p>
          </section>

          <section className="servicio">
            <h3>Aplicanes Móviles</h3>
            <div className="iconos">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-android"
                width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 10l0 6" />
                <path d="M20 10l0 6" />
                <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
                <path d="M8 3l1 2" />
                <path d="M16 3l-1 2" />
                <path d="M9 18l0 3" />
                <path d="M15 18l0 3" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple" width="44"
                height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z" />
                <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
              </svg>
            </div>
            <p>Desarrollo de apps móviles modernas, funcionales y que se integran perfectamente con tu sitio web.</p>
          </section>

          <section className="servicio">
            <h3>E-Commerce</h3>
            <div className="iconos">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="44"
                height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                <path d="M3 10l18 0" />
                <path d="M7 15l.01 0" />
                <path d="M11 15l2 0" />
              </svg>
            </div>
            <p>Tiendas Online personalizados y escalables, con gestión de productos, pagos seguros, carrito de compras y panel administrativo.</p>
          </section>
        </div>
        {/* <!-- /Servicios --> */}


        <section id="contacto_hero">
          <h2>Contacto</h2>
          <form className="formulario">
            <fieldset>
              <legend>Contactame llenando todos los campos</legend>
              <div className="contenedor-campos">
                <div className="campo">
                  <label >Nombre</label>
                  <input className="input-text" type="text" placeholder="Tu nombre"></input>
                </div>

                <div className="campo">
                  <label >Teléfono</label>
                  <input className="input-text" type="number" placeholder="Tu teléfono"></input>
                </div>

                <div className="campo">
                  <label >Correo</label>
                  <input className="input-text" placeholder="Tu Email"></input>
                </div>

                <div className="campo">
                  <label >Mensaje</label>
                  <textarea className="input-text"></textarea>
                </div>
              </div>
              {/* <!-- contenedor campos --> */}
              <div className="flex alinear-derecha">
                <input className="boton w-sm-100" type="submit" value="Enviar"></input>
              </div>
            </fieldset>
          </form>


        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
