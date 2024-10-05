import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products} from '../Components/Products'
// import './PageCSS/detail.css'

const DetailPage2 = () => {

  // const {id} = useParams

  let productId2 = useParams()     
  let filterData2 = Products.find(x => x.id == productId2.id)

  const [val, setVal] = useState(0)

  const incQty = ()=>{
    setVal(val+1)
  }

  const decQty = ()=>{
    if (val > 0) {
      setVal(val - 1);
    }
  }

  return (   
    <>
<div>
  <div className="container mt-5 ">
    <div className="card cardss rounded">
      <div className="card-body">
        <h1 className="card-title text-light">{filterData2.title}</h1>
        <h5 className="card-subtitle">{filterData2.desc}</h5>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-6">
            <div className="white-box text-center"><img src={filterData2.image} className="img-responsive img-fluid" /></div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-6">
            <h4 className="box-title mt-5">What you'll get:</h4>
            <p>{filterData2.desc}</p>
            <h2 className="mt-5">
              Rs: {filterData2.price}
              {/* <small className="text-success">(36%off)</small> */}
            </h2>
            {/* <button className="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title data-original-title="Add to cart">
              <i className="fa fa-shopping-cart" />
            </button> */}
            <button onClick={decQty} className='btn btn-light'>-</button>

            <button className="btn btn-danger btn-rounded mx-2">Buy Now</button>
            <button onClick={incQty} className='btn btn-light'>+</button>

            <br/> 
            <br/> 
            <p>Your total is: <span> Rs: {filterData2.price * val}</span></p>

          </div>
         
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default DetailPage2