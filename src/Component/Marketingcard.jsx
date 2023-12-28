import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Marketingcard = (props) => {

    return (

        <>

            {/* {CardData.map((d) => {
                return ( */}

            <div className='markt_card'>
                <Card>
                    <div className='marktcard_Imgdiv'>
                        <Card.Img variant="top" src={props.imageUrl} />
                    </div>
                    <Card.Body>
                        <Card.Title>{props.heading}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <div className="moreBtn-div">

                            <Link className='moreBtn' to={props.btnLink} variant="primary">{props.btnText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.65545 1.26412L4.18422 2.79312L12.4455 5.20566L1.0995 11.4226L1.86835 12.8258L13.2143 6.60882L10.8084 14.8472L12.344 15.2957C13.5051 11.3199 14.4042 8.24102 15.5155 4.43565L4.65545 1.26412Z" fill="#F26633" stroke="#F26633" />
                                </svg>
                            </Link>

                        </div>
                    </Card.Body>
                </Card>
            </div>
            {/* )
            })} */}

        </>
    )
}

export default Marketingcard
