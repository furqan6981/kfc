import React from 'react'
import './PageCSS/contact.css'
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className='container text-light mt-5'>
        <h2 className='text-center contact'>Contact Us</h2>
        <div className='row'>
            <div className='col-md-4 mt-3'>
                <div className='contactus-box'>
                    <span className='d-flex '>
                        <IoCall className='i' />
                        <h5 className='px-2'>Head Office</h5>
                    </span>
                    <h4>0213-5877976</h4>
                    <span className='d-flex mt-4'>
                        <FaMapMarkerAlt className="i" />
                        <h5 className='px-2'>Location</h5>
                    </span>
                    <h4>Ocean Tower, 20th Floor, G-3, Block -9, Scheme 5, Main Clifton Road, Karachi, Pakistan</h4>
                </div>
            </div>
            <div className='col-md-4 mt-3'>
                <div className='contactus-box'>
                    <span className='d-flex'>
                        <IoCall className='i' />
                        <h5 className='px-2'>
                        Regional Office Lahore</h5>
                    </span>
                    <h4>042-35884570</h4>
                    <span className='d-flex mt-4'>
                        <FaMapMarkerAlt className="i" />
                        <h5 className='px-2'>Location</h5>
                    </span>
                    <h4>27-A Ali Block New Garden Town Opposite Barkat Market Lahore</h4>
                </div>

            </div>
            <div className='col-md-4 mt-3'>
                <div className='contactus-box'>
                    <span className='d-flex'>
                        <IoCall className='i' />
                        <h5 className='px-2'>Regional Office Islamabad</h5>
                    </span>
                    <h4>0512726877</h4>
                    <span className='d-flex mt-4'>
                        <FaMapMarkerAlt className="i" />
                        <h5 className='px-2'>Location</h5>
                    </span>
                    <h4>United Bakery Building, 11، School Rd, F-6 Markaz F-6, Islamabad, Islamabad Capital Territory 44000</h4>
                </div>
            </div>

            <div className='col-md-6 mt-3'>
                <div className='contactus-box'>
                    <span className='d-flex'>
                        <IoCall className='i' />
                        <h5 className='px-2'>Helpline</h5>
                    </span>
                    <h4>UAN: 111 532 532</h4>

                </div>
            </div>

            <div className='col-md-6 mt-3'>
                <div className='contactus-box'>
                    <span className='d-flex'>
                        <MdEmail className='i' />
                        <h5 className='px-2'>Complaints Email</h5>
                    </span>
                    <h4>customercare@kfcpakistan.com</h4>

                </div>
            </div>


        </div>
      </div>
    </>
  )
}

export default Contact
