import banner from "../../img/banner.jpg"


export const Banner =()=>{

    const BannerPersonalizado={
       width:"100%",
       height:"100vh",
       objectFit:"cover"

    }


    return(
        <img  src={banner} style={BannerPersonalizado} alt="Banner Principal"/>
    )
}