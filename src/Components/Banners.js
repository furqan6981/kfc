import React from 'react'

const Banners = () => {
  return (
    <>
<div className="container mt-5">
  <div className="row">
    <div className="col-md-6 mt-2">
      <img src="https://www.kfcpakistan.com/static/media/pickup-banner.01fde5a7db5ef06f7bce.png" className="img-fluid rounded" alt="Image 1" />
    </div>
    <div className="col-md-6 mt-2">
      <img src="https://www.kfcpakistan.com/static/media/favorites-banner.afff26bc6d0127f68baa.png" className="img-fluid rounded" alt="Image 2" />
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 mt-2">
      <img src="https://www.kfcpakistan.com/static/media/scamOrdr.6f809bf83912dd8dbe31.jpg" className="img-fluid rounded" alt="Image 3" />
    </div>
    <div className="col-md-6 mt-2 d-flex flex-column align-items-center text-light rounded lastdiv text-center">
      <img src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png" className="img-fluid" width={300} alt="Image 4" />
      <p className='fs-3'>Adding 11 herbs and spices, Explore our menu and add items to your cart.</p>
      <button className='btn btn-danger'>EXPLORE MENU</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Banners
