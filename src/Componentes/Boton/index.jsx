import Fab from "@mui/material/Fab";

const CustomStyle = (color) => ({
  backgroundColor: color || "#1C1C1C",
  color: "#E6E6E6",
  fontFamily: "Sigmar, cursive",
  border: "5px double #4A4A4A",
  fontSize: "1.5rem",
  width: "15rem",
  height: "3rem",
});


export const FabPersonalizado = () => {

  return (
    <>
      <Fab style={CustomStyle()} variant="extended">
        Nuevo Video
      </Fab>
      

    </>
  );
};


export const FabPersonalizadoNuevo = () => {

  return (<>
        <Fab style={CustomStyle("#045c94")} variant="extended">
        Guardar
      </Fab>

      <Fab style={CustomStyle("#86112E")} variant="extended">
        Limpiar
      </Fab></>);
}