import Telefono_logo from './Imagenes/Telefono_logo.png'
import  phone_icon from './Imagenes/phone_icon.png'
import whatsapp_icon from './Imagenes/whatsapp_icon.png'
import facebook_logo from './Imagenes/facebook_logo.jpg'
import ubicacion from './Imagenes/ubicacion.png'

import './App.css';
import React, { Component } from "react";

class App extends Component {

  render() {
  return (
  <div>
<body>
	<div id="img_principal">
		<div id = "div_p">
			<h1>Plataforma Educativa</h1>
		</div>
	</div>
	<div>
		<div id="menu">
			<ul id = "menu_1">
				<li><a href="" className = "opcion_menu">Inicio</a></li>
				<li className= "drop">
					<span className = "opcion_menu">Niveles</span>
					<ul className = "drop_content">
						<li><a href="" className= "niveles">Primaria</a></li>
						<li><a href="" class = "niveles">Secundaria</a></li>
						<li className="ultimo-menu"><a href="" class = "niveles">Preparatoria</a></li>
					</ul>
				</li>
				<li className= "drop">
					<span className = "opcion_menu">Tematicas</span>
					<ul className = "drop_content">
						<li><a href="" className= "niveles">Informatica</a></li>
						<li><a href="" className = "niveles">Administracion</a></li>
						<li className=""><a href="" className = "niveles">Manualidades</a></li>
					</ul>
				</li>
				<li><a href="" class = "opcion_menu">Mi Cuenta</a></li>
			</ul>
		</div>
		<div id = "bienvenidos">
			<div id = "bienvenidos_1">
				<h1 id = "Titulo">Aprende Con Nosotros</h1>
				<p id = "m_bienvenida">
          Dentro de esta plataforma, nuestra organización sin fines de lucro  intenta dotar de conocimiento a cualquier persona 
          que tenga el deseo o necesidad de aprender. Sin costo, ofrecemos cursos de los distintos niveles educativos, desde 
          primaria hasta preparatoria e incluso de educación avanzada, todos disponibles para quien lo desee. 
        </p>
			</div>
		</div>
		<div className = "seccion" id="seccion1">
			<div className = "subseccion">
				<h3>Niveles Educativos</h3>
				<p>Dentro de los distintos niveles educativos para los cuales ofrecemos cursos estan: </p>
				<ul>
					<li>Primaria</li>
					<li>Secundaria</li>
					<li>Preparatoria</li>
					<li>Licenciatura</li>
				</ul>
			</div>
		</div>
    <div className = "seccion" id="seccion2">
			<div className = "subseccion">
				<h3>Por Tematica</h3>
				<p>Si quieres encontrar cursos relacionados a una sola tematica, tenemos: </p>
				<ul>
					<li>Informatica Basica</li>
					<li>Administracion</li>
					<li>Tecnologias de la informacion</li>
					<li>Manualidades</li>
				</ul>
			</div>
		</div>
		<div id = "contacto">
			<div id = "c_titulo">
				<h3>Datos de Contacto</h3>
			</div>
			<div id = "contacto_2">
				<div id = "c_d_1"></div>
				<div id = "c_d_2">
					<h4>Telefonos</h4>
					<div id = "div_logo_tel"><img src={Telefono_logo} id = "logo_tel"/></div>
					<div id = "tel">
						<img src={phone_icon}/>
						<p id = "tel_1">4423360876</p>
					</div>
					<div id = "cel">
						<img src={whatsapp_icon}/>
						<p id = "tel_2">4423360876</p>
					</div>
				</div>
				<div id = "c_d_3">
					<img src={facebook_logo}/>
				</div>
				<div id = "c_d_4">
					<h4>Ubicacion</h4>
					<div id = "ubicacion"><img src={ubicacion}/></div>
					<p>Corregidora No 77 esquina el descanso, Barrio de el puerto</p>
				</div>
				<div id = "c_d_5"></div>
			</div>
		</div>
	</div>
</body>
</div>
  );
  }
}

export default App;

