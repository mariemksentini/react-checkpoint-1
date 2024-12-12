import { product } from "../Product"

export const Name = ()=>{
    const style = {
        
        textAlign: 'center',
        padding :'5px'
    }
    const {company, modelName, price} = product
    return(<div style={style}>
        <h2>{company} {modelName}</h2>
        <h3>{price}</h3>
    </div>)
}