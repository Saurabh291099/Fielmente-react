import React from 'react'
import img from '../../Assests/Images/clients/burffs.webp'
const TestimonialCard = () => {
    return (
        <>
            <div className="card">
                <div className="row card-header">
                    <div className="col-3">
                        <img src={img} alt="testimonial profile" />
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col">
                                <span>Saurabh</span>
                                <span>*****</span>
                            </div>
                        </div>
                        <span>Frontend Developer</span>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem inventore officiis maiores! Magnam enim dolore possimus eligendi aliquam?</p>
                </div>

            </div>
        </>
    )
}

export default TestimonialCard
