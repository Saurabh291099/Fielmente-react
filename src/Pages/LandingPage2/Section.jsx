import React from 'react'

const Section = (props) => {

    return (
        <>
            <div class="container">
                <div class="row landig-section-inner" style={{ flexDirection: props.index }}>
                    <div class="col-sm-12 col-md-12 col-lg-6 add-section">
                        {/* <h2>Are you looking for Hotel Website Development?</h2> */}
                        <h2>{props.heading}</h2>
                        <p>{props.text}</p>
                        {/* <p>As a Hotel Marketing Agency every day, we build trust through communication, transparency, and results.</p> */}
                        <div class="row circle-row">
                            <div class="col add-circle-div">
                                <div className="add-circle add-circle1">
                                    <img src={props.icon1} alt="" />
                                </div>
                                <span>{props.text1}</span>
                                {/* <span>Online Presence</span> */}
                            </div>
                            <div class="col add-circle-div">
                                <div className="add-circle add-circle2">
                                    <img src={props.icon2} alt="" />
                                </div>
                                <span>{props.text2}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col add-circle-div">
                                <div className="add-circle add-circle3">
                                    <img src={props.icon3} alt="" />
                                </div>
                                <span>{props.text3}</span>
                            </div>
                            <div class="col add-circle-div">
                                <div className="add-circle add-circle4">
                                    <img src={props.icon4} alt="" />
                                </div>
                                <span>{props.text4}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col add-circle-div">
                                <div className="add-circle add-circle5">
                                    <img src={props.icon5} alt="" />
                                </div>
                                <span>{props.text5}</span>
                            </div>
                            <div class="col add-circle-div">
                                <div className="add-circle add-circle6">
                                    <img src={props.icon6} alt="" />
                                </div>
                                <span>{props.text6}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6 col-img-div">
                        <img src={props.image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section
