import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/material/AccordionActions"

export const SimpleAccordion=()=> {

 const AccordionPersonalizado={
    backgroundColor: '#1C1C1C',
    
    marginBottom: '2rem',
    border: '5px solid #4A4A4A',
    borderRadius: '10px',


    
 }

 const TypographyOPersonalizadoTitulo={
    fontFamily: "Maven Pro, sans-serif",
    fontSize: "3rem",
    fontWeight:"bold",
    color:"#E6E6E6",
    textShadow: "2px 2px 1px #fff",


 }

 const TypographyOPersonalizadoContenido={
    fontFamily: "Maven Pro, sans-serif",
    fontSize: "1.5rem",
    color:"#E6E6E6",
    textAlign: "justify",
    
    
    
 }

 const TypoTitulo={
    fontSize:"2rem",
    fontWeight:"bold",
    marginTop:"1.5rem",
    marginBottom:"0.5rem"
 }
    
 const ListaPersonalizada = {
     marginLeft:"2rem"
  }

  return (
    <div>
      <Accordion style={AccordionPersonalizado}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={TypographyOPersonalizadoTitulo}>Preguntas Frecuentes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={TypographyOPersonalizadoContenido}>
            <h1 style={TypoTitulo}>¿Cómo puedo acceder a la plataforma de streaming?</h1>

            <p>Para acceder a nuestra plataforma de streaming, simplemente necesitas visitar nuestro sitio web o descargar nuestra aplicación móvil desde la tienda de aplicaciones correspondiente. Una vez que te hayas registrado con una cuenta, podrás iniciar sesión y disfrutar de nuestro contenido.</p>
            <h1 style={TypoTitulo}>¿Cuáles son los costos asociados con la suscripción a la plataforma de streaming?</h1>
            <p>Nuestra plataforma de streaming ofrece una amplia gama de contenido, incluyendo películas, series, documentales, programas de televisión y más. Trabajamos con diversos estudios y productores para asegurarnos de ofrecer una selección variada y actualizada de contenido para todos los gustos.</p>
            <h1 style={TypoTitulo}>¿Puedo ver el contenido de la plataforma en diferentes dispositivos?</h1>
            <p>Sí, nuestra plataforma de streaming es compatible con una variedad de dispositivos, incluyendo computadoras de escritorio, laptops, smartphones, tablets y smart TVs. Puedes disfrutar del contenido en múltiples dispositivos siempre y cuando tengas una conexión a Internet estable.</p>
            <h1 style={TypoTitulo}>¿Puedo descargar contenido para verlo sin conexión?</h1>
            <p>Sí, ofrecemos la opción de descargar cierto contenido para verlo sin conexión a Internet. Esto te permite disfrutar de tus películas y series favoritas cuando estés viajando o en lugares donde no tengas acceso a una conexión de datos. Sin embargo, no todo el contenido está disponible para descarga debido a restricciones de derechos de autor.</p>
           

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={AccordionPersonalizado}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={TypographyOPersonalizadoTitulo}>Políticas de Privacidad</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={TypographyOPersonalizadoContenido}>
            <p>En Aluraflix, valoramos y respetamos tu privacidad. Nos comprometemos a proteger la información personal que nos proporciones mientras utilizas nuestros servicios. Esta Declaración de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos tu información. Al utilizar nuestros servicios, aceptas los términos y condiciones establecidos en esta Declaración de Privacidad.</p>
            
            <h1 style={TypoTitulo}>Recopilación de información:</h1>

            <p>Recopilamos la información personal que nos proporcionas al registrarte en nuestra plataforma, como tu nombre, dirección de correo electrónico, fecha de nacimiento, información de pago, entre otros datos necesarios para brindarte nuestros servicios.</p>
            <p>También podemos recopilar información no personal, como datos de uso, dirección IP, tipo de dispositivo, navegador utilizado y otra información técnica para mejorar la calidad de nuestro servicio y proporcionar una experiencia personalizada.</p>

            <h1 style={TypoTitulo}>Uso de la información:</h1>
            <p>Utilizamos la información recopilada para administrar tu cuenta, procesar pagos, brindarte asistencia al cliente, ofrecerte contenido relevante, mejorar nuestros servicios y enviar comunicaciones relacionadas con la plataforma.</p>
            <p>Podemos utilizar información anónima y agregada para fines estadísticos y de investigación, sin revelar datos personales identificables.</p>
            <h1 style={TypoTitulo}>Divulgación de la información:</h1>
            <p>No vendemos, alquilamos ni divulgamos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para brindar nuestros servicios o cumplir con las obligaciones legales.
</p>
            <p>Podemos compartir información con proveedores de servicios de confianza que nos asisten en la operación de nuestra plataforma, sujetos a acuerdos de confidencialidad.</p>
            <h1 style={TypoTitulo}>Protección de la información:</h1>
            <p>Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tu información personal contra accesos no autorizados, pérdidas o modificaciones.</p>
            <p>Sin embargo, debes ser consciente de que ninguna medida de seguridad es completamente infalible, y no podemos garantizar la seguridad absoluta de tus datos.</p>
            <br></br>
           <p>Si tienes alguna pregunta o inquietud sobre nuestra Declaración de Privacidad, no dudes en ponerte en contacto con nosotros. Valoramos tu confianza y trabajamos constantemente para proteger tu privacidad y brindarte la mejor experiencia posible.</p>

          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={AccordionPersonalizado}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={TypographyOPersonalizadoTitulo}>Términos de Uso</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={TypographyOPersonalizadoContenido}>
            
            <p>Al acceder y utilizar los servicios ofrecidos por Aluraflix, aceptas cumplir con los siguientes términos y condiciones. Estos términos de uso constituyen un acuerdo legalmente vinculante entre tú y Aluraflix. Si no estás de acuerdo con alguno de los siguientes términos, te pedimos que no utilices nuestros servicios.</p>
            
            <h1 style={TypoTitulo}>Contenido y licencia:</h1>
            <p>Aluraflix proporciona acceso a un amplio catálogo de contenido, incluyendo películas, series, documentales y programas de televisión. El contenido disponible en nuestra plataforma está sujeto a derechos de autor y otros derechos de propiedad intelectual.</p>
            <p>Al utilizar nuestros servicios, te otorgamos una licencia limitada, no exclusiva y no transferible para acceder y reproducir el contenido únicamente para uso personal y no comercial. No tienes permitido realizar copias, distribuir, modificar, transmitir o explotar de cualquier otra forma el contenido sin el consentimiento previo por escrito de Aluraflix o los titulares de los derechos.</p>

            <h1 style={TypoTitulo}>Cuentas de usuario:</h1>
            <p>Para acceder a ciertas funcionalidades de nuestra plataforma, puedes necesitar crear una cuenta de usuario. Al registrarte, debes proporcionar información precisa, completa y actualizada.</p>
            <p>Eres responsable de mantener la confidencialidad de tu cuenta y de todas las actividades que ocurran bajo tu nombre de usuario y contraseña. Debes notificarnos de inmediato si sospechas que tu cuenta ha sido comprometida o utilizada de manera no autorizada.</p>

            <h1 style={TypoTitulo}>Uso aceptable:</h1>
            <p>Al utilizar nuestros servicios, te comprometes a no realizar las siguientes acciones:
                <ul style={ListaPersonalizada}>
                    <li type="circle" >Violar cualquier ley o regulación aplicable.</li>
                    <li type="circle">Interferir, dañar o comprometer la integridad de nuestros sistemas, infraestructura o seguridad.</li>
                    <li type="circle">Acceder o intentar acceder a áreas restringidas de nuestra plataforma, servidores o sistemas no autorizados para ti.</li>
                    <li type="circle" >Publicar, transmitir o compartir contenido que sea ilegal, ofensivo, difamatorio, obsceno, violento o que vulnere los derechos de terceros.</li>
                </ul>
            </p>

            <h1 style={TypoTitulo}>Responsabilidad y exención de garantía:</h1>
            <p>Aluraflix se esfuerza por proporcionar un servicio de calidad, pero no podemos garantizar que nuestro servicio estará libre de interrupciones, errores o defectos. Utilizas nuestros servicios bajo tu propio riesgo.</p>
            <p>No nos hacemos responsables por cualquier daño directo, indirecto, incidental, especial o consecuencial derivado del uso o la imposibilidad de utilizar nuestros servicios.</p>
           </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}