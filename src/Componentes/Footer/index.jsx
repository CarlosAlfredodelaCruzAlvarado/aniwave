
import { SimpleAccordion } from "../PreguntasFrecuentes";
import logo from "../../img/logo.png";
import {SocialMedia} from "../SocialMedia"
import { Apps } from "../Apps";


export const Footer = () => {
    const FooterPersonalizado = {
      padding: "",
      backgroundColor: "#010101",
      width:"100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      
      
    };
  
    const ContenedorColumnas = {
      display: "flex",
      justifyContent: "space-evenly",
      flexShrink:"5",
      

    };
  
    const LogoRedes = {
      display: "flex",
      flexDirection: "column",
      width:"25%",
      alignItems:"stretch"
      
      
      
    };

    const Redes={
        marginBottom:"1rem",
        
    }

    const Acordeones={
        width:"45vw",
        flexShrink:"2"

        
    }
  
    const Logo = {
      height: "8rem",
      margin: "auto",
      display: "block",
      padding: "0 0 2%"
    };
  
    const CopyRight = {
      color: "#ffffff",
      textAlign: "center",
      fontSize: "0.9rem"
    };
  
    return (
      <footer style={FooterPersonalizado}>

        <img src={logo} style={Logo} alt="Logo de Aniwave" />

        <div style={ContenedorColumnas}>
          <div style={LogoRedes}>
           <section style={Redes}>
            <SocialMedia />
            </section>
            <section>
            <Apps />
            </section>
          </div>
  
          <div style={Acordeones}>
            <SimpleAccordion />
          </div>
        </div>
  
        <div style={CopyRight}>
          <p>Todos los contenidos y materiales disponibles en Aniwave están protegidos por las leyes de derechos de autor y propiedad intelectual.</p>
          <p>Queda estrictamente prohibida la reproducción, distribución, exhibición o cualquier otra forma de utilización no autorizada de dicho contenido sin el permiso previo por escrito de los propietarios de los derechos.</p>
        </div>
      </footer>
    );
  };
  