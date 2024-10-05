import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { secProducts} from '../Components/Products'
import './PageCSS/detail.css'

const DetailPage = () => {

  // const {id} = useParams

  let productId = useParams()     
  let filterData = secProducts.find(x => x.id == productId.id)

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
        <h1 className="card-title text-light">{filterData.title}</h1>
        <h5 className="card-subtitle">{filterData.desc}</h5>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-6">
            <div className="white-box text-center"><img src={filterData.image} className="img-responsive img-fluid" /></div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-6">
            <h4 className="box-title mt-5">What you'll get:</h4>
            <h2>{filterData.desc}</h2>
            <h2 className="mt-5">
              Rs: {filterData.price}
            </h2>

            <button onClick={decQty} className='btn btn-light'>-</button>

            <button className="btn btn-danger btn-rounded mx-2">Buy Now</button>
            <button onClick={incQty} className='btn btn-light'>+</button>

            <br/> 
            <br/> 
            <p>Your total is: <span> Rs: {filterData.price * val}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default DetailPage