import { product } from "../Product"
// export const product = {
//     company : "Porsche",
//     modelName : "911 GT3 RS",
//     URL : "https://backiee.com/static/wallpapers/1000x563/401070.jpg",
//     price : "EUR 253 454,00 TTC",
//     description : {
//         puissance1 : "386 kW/525 ch",
//         puissance2 : "Puissance (kW)/Puissance (ch)",
//         acceleration1 : "3.2 s",
//         acceleration2 : "Accélération de 0 à 100 km/h",
//         vitesse1 : "296 km/h",
//         vitesse2 : "Vitesse maximale sur le circuit"
//     }   
// }
export const Description = ()=>{
    const {puissance1, puissance2, acceleration1, acceleration2, vitesse1, vitesse2} = product.description;
    const style1 = {
        textAlign: 'center'
    }
    const styleAll = {
        display : 'flex',
        // width : '100px',
        justifyContent : 'space-between',
        // display : 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-evenly',
        // alignItems: 'flex-start',
        // height: '100vh', 
        paddingTop : '465px'
        // paddingRight: '10px',

    }
    return (
    <div style={styleAll}>
        <div style={style1}>
            <h2><b>{puissance1}</b></h2>
            <p>{puissance2}</p>
        </div>

        <div style={style1}>
            <h2><b>{acceleration1}</b></h2>
            <p>{acceleration2}</p>
        </div>

        <div style={style1}>
            <h2><b>{vitesse1}</b></h2>
            <p>{vitesse2}</p>
        </div>

    </div>)
}