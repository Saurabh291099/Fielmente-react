import React from 'react'

const Section = (props) => {

    return (
        <>
            <div className="container">
                <div className="row landig-section-inner" style={{ flexDirection: props.index }}>
                    <div className="col-sm-12 col-md-12 col-lg-6 add-section">
                        {/* <h2>Are you looking for Hotel Website Development?</h2> */}
                        <h2>{props.heading}</h2>
                        <p>{props.text}</p>
                        {/* <p>As a Hotel Marketing Agency every day, we build trust through communication, transparency, and results.</p> */}
                        <div className="row circle-row">
                            <div className="col add-circle-div">
                                <div className="add-circle add-circle1">
                                    <img src={props.icon1} alt="" />
                                </div>
                                <span>{props.text1}</span>
                                {/* <span>Online Presence</span> */}
                            </div>
                            <div className="col add-circle-div">
                                <div className="add-circle add-circle2">
                                    <img src={props.icon2} alt="" />
                                </div>
                                <span>{props.text2}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col add-circle-div">
                                <div className="add-circle add-circle3">
                                    <img src={props.icon3} alt="" />
                                </div>
                                <span>{props.text3}</span>
                            </div>
                            <div className="col add-circle-div">
                                <div className="add-circle add-circle4">
                                    <img src={props.icon4} alt="" />
                                </div>
                                <span>{props.text4}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col add-circle-div">
                                <div className="add-circle add-circle5">
                                    <img src={props.icon5} alt="" />
                                </div>
                                <span>{props.text5}</span>
                            </div>
                            <div className="col add-circle-div">
                                <div className="add-circle add-circle6">
                                    <img src={props.icon6} alt="" />
                                </div>
                                <span>{props.text6}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-img-div">
                        <img src={props.image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section
