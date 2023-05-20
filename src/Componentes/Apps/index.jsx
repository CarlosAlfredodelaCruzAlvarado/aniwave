import apps from "../../img/apps.png"
import ios from "../../img/ios.png"
import android from "../../img/android.png"

export const Apps =()=>{

    const titulo={
        color:"#e6e6e6",
        fontSize: "1.5rem",
        fontFamily:"Maven Pro, sans-serif",
        fontWeight:"bold",
        marginBottom:"1rem"
        
    }

    const app ={
        width:"20%",
        borderRadius:"10px"
    }

    const so={
     width:"15rem",

    }

    const contenedorSO={
        display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        justifyContent:"space-around"
        
    }

    const columna={
        display:"flex",
        flexDirection: "row",
        width:"50vw"
    
               

    }

    return(
        <div>
        <p style={titulo}>Descarga nuestra aplicación para móviles:</p>
        
            <div style={columna}>
                <img src={apps} style={app} alt="App Aniwave"></img>
                <div style={contenedorSO}>
                    <img src={android} style={so} alt="Android"></img>
                    <img src={ios} style={so} alt="iOS"></img>
                </div>
            </div>

        </div>
    )
}