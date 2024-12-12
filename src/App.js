
import './App.css';
import { Description } from './Componment/Description';
import { Image } from './Componment/Image';
import { Name } from './Componment/Name';
import { Price } from './Componment/Price';

function App() {
  const styleall = {
    backgroundImage: 'url(https://backiee.com/static/wallpapers/1000x563/401070.jpg)',
    color : 'white',
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    margin : '0px',
    fontFamily: 'Trebuchet MS, sans-serif'
  }
  return (
    <div style={styleall}>
      {/* <Image/> */}
      <Price/>
      <Name/>
      <Description/>
    </div>)
}

export default App;
