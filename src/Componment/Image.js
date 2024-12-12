import { product } from "../Product"

export const Image = ()=>{
    const styles = {}
    return (<img style={styles} src={product.URL} alt="Not Found" />)
}