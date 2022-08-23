import React from 'react'
import pic from "./Crousel.png";
import pic2 from "./Crousel1.jpg"
import pic3 from "./Crousel2.jpg"
import pic4 from "./Crousel3.jpg"
// style={{width: '80rem',height:'30rem'}}

const Crousel = () => {
  return (
    <div className='container14'>

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  data-interval="3000">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner"  >
    <div className="carousel-item active">
      <img className="w-100" src={pic3} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="w-100" src={pic2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="w-100" src={pic4} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>

// </div>

  )
}

export default Crousel