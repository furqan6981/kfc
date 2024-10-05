import React from 'react'
import { Link } from 'react-router-dom'

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.kfcpakistan.com/images/2bc5d940-3b00-11ef-a6d3-a91706ef6866-995x356copy_desktop_image-2024-07-05185539.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.kfcpakistan.com/images/6d17d1f0-49c4-11ef-a04a-7d79419be0af-995x356_desktop_image-2024-07-24135546.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.kfcpakistan.com/images/6d17d1f0-49c4-11ef-8581-bb135cf642fe-995x356_desktop_image-2024-07-24135546.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.kfcpakistan.com/images/a4214300-f29b-11ee-84d7-dbdd7f31cafb-1copy_desktop_image-2024-04-04155438.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.kfcpakistan.com/images/3a8bb530-68d2-11ef-8e13-918d9a12afde-995x356_desktop_image-2024-09-02022240.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='d-flex justify-content-center'>
 <Link to='/login' className="btn btn-danger centered-btn" type="button">REORDER</Link>

</div>

    </>
  )
}

export default Carousel
