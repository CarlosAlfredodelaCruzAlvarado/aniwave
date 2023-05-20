import { FabPersonalizado } from "../Boton";
import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../../img/logo.png"

export const Header = () => {

  const barraTop={
    width:"100%"
  }

  const HeaderPersonalizado={
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"#010101",
        
     
    }

    const Logo={
        height:"8rem"
    }

  return (
    <AppBar style={barraTop}>
      <Toolbar style={HeaderPersonalizado}>
        <img src={logo} style={Logo} />
        <FabPersonalizado />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
