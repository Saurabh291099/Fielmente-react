import React from 'react'
import url1 from "../../Assests/indus-we-serv/portrait-happy-smiling-bellboy-standing-by-luggage-trolley-travel-resort-lounge-cheerful-elegant-professional-hotel-staff-employee-standing-check-reception-desk 1 (1).png"
import url2 from '../../Assests/indus-we-serv/employee-checking-guest-passport-validate-online-booking-reservation-man-travelling-work-front-desk-staff-verifying-identification-documents-providing-excellent-concierge-services 1 (1).png'
import url3 from '../../Assests/indus-we-serv/beautiful-waitress-holding-champagne-bottle (1).png'

function Section5() {
  return (
    <div className='container my-3'>
        <div className="text-center m-auto" style={{width:"min(100%, 60rem)"}}>
            <h2 className='h2-lg ff-p c-fw-6 text-gray5'>Harness the power of social media marketing to elevate your hotel's presence.</h2>
        </div>
        <div className="d-flex flex-lg-row flex-md-row flex-column align-items-center justify-content-center gap-5">
            <div className="left">
                <img src={url1} alt="" />
            </div>
            <div className="middle">
                <img src={url2} alt="" />
            </div>
            <div className='right'>
                <img src={url3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section5