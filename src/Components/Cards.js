import React from "react";
import { Products } from "./Products";
import { secProducts } from "./Products";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>

    <div className='container  mt-2' >
    <h1 className="text-white mt-2 headingPro "> EXPLORE MENU </h1>
    <h1 className=" borderPro text-left"></h1>
      <div className="d-flex justify-content-center mt-5 mb-5 borr">
      <div className='card-bor mx-4'>
            <img className='img-fluid' src='https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png' />
            <p className='text-center text-light'>Everyday Value</p>
        </div>
        <div className='card-bor'>
            <img className='img-fluid' src='https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png' />
            <p className='text-center text-light'>Ala-Carte-&-Combos</p>
        </div>
        <div className='card-bor mx-4'>
            <img className='img-fluid' src='https://www.kfcpakistan.com/images/961300b0-4551-11ef-b48c-a54d8b3e86b1-Thumbnail(1)-2024-07-18220338.png' />
            <p className='text-center text-light'>Promotion</p>
        </div>
        <div className='card-bor'>
            <img className='img-fluid' src='https://www.kfcpakistan.com/images/afc536d0-ff99-11ed-a006-17c81341cbe8-Signaturebox-2023-05-31095826.png' />
            <p className='text-center text-light'>Signature-Boxes</p>
        </div>
        <div className='card-bor mx-4'>
            <img className='img-fluid' src='https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-Sharing-2023-05-31095826.png' />
            <p className='text-center text-light'>Sharing</p>
        </div>
      </div>

        
    </div>

      <div className="container">
        <h1 className="text-white mt-2 headingPro"> BEST SELLERS </h1>
        <h1 className=" borderPro text-left"></h1>
        <div className="row">
          {secProducts.map((i) => (
            <>
              <div className="col-lg-3 col-sm-6 mt-3">
                <div className="card h-100 d-flex flex-column productsCard">
                  <div className="container d-flex justify-content-center">
                  <h1 className="card1 mx-2"></h1>
                  <h1 className="card1 mx-2"></h1>
                  <h1 className="card1 mx-2"></h1>
                  </div>
 
                <h5 className="card-title text-light mt-2 px-3 fs-3">{i.title}</h5>
                
                    {/* <p className="card-text text-light fs-5 text-end">Rs: {i.price}</p> */}
                    <p className="card-price">Rs{i.price}</p>

                   <Link to={`/products/${i.id}`}>
                        <img src={i.image} className="card-img-top " alt="..." />
                   </Link> 

                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-white mt-2 headingPro"> TOP DEALS </h1>
        <h1 className=" borderPro text-left"></h1>
        <div className="row">
          {Products.map((i) => (
            <>
              <div className="col-lg-3 col-sm-6 mt-3">
                <div className="card h-100 d-flex flex-column productsCard">

                <div className="container d-flex justify-content-center">
                  <h1 className="card1 mx-2"></h1>
                  <h1 className="card1 mx-2"></h1>
                  <h1 className="card1 mx-2"></h1>
                  </div>

                  <Link to={`/product/${i.id}`}>
                        <img src={i.image} className="card-img-top " alt="..." />
                   </Link> 
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-light">{i.title}</h5>
                    <p className="card-text text-light desc">{i.desc.slice(0,70)}..</p>
                    <p className="card-text text-light fs-5">Rs: {i.price}</p>
                    <a href="#" className="btn btn-danger mt-auto">
                    + ADD TO BUCKET
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

    </>
  );
};

export default Cards;
