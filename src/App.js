import './App.css';
import Flickity from 'react-flickity-component';
import "./flickity.css";
import ImageCaurosel1 from "./img/devushka_uedinenie_art_129798_1600x900.jpg";
import ImageCaurosel2 from "./img/fon_nebo_tochki_83482_1600x900.jpg";
import ImageCaurosel3 from "./img/gory_krasivo_nebo_87742_1600x900.jpg";
import ImageCaurosel4 from "./img/a7c38a8533830a195f9831c4f1284def.gif";



const flickityOptions ={
  initialIndex: 2
}

const imageCarousel = {
  id: [1,2,3,4],
  title: ["Image1", "Image2", "Image3", "GIF"],
  image: [ImageCaurosel1 , ImageCaurosel2 , ImageCaurosel3 , ImageCaurosel4]

}

function App() {


  return (
    <div className="App">
    <Flickity className="carousel"
    elementType="div"
    options={flickityOptions}
    disableImagesLoaded={false}
    reloadOnUpdate={false}
    static
    >
      {imageCarousel["id"].map((item) =>{
        return (
          <div key={item} className="Cell">
            <>
            <h1>{imageCarousel['title'][item-1]}</h1>
            <div style={{backgroundImage:`url(${imageCarousel["image"][item-1]})`, width: "100%", height: 500, backgroundSize: "cover", backgroundRepeat: "no-repeat" , overflow: "hidden"         }}></div>
            </>
          </div>
        )
      })}
    </Flickity>
  </div>
  )
}

export default App
