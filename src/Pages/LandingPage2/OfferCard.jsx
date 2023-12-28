import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const OfferCard = (props) => {
    return (
        <>
            <Card className='offerCard'>
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.heading}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text> */}
                    <Link to={props.btnUrl} className='offer-btn'>Know More</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default OfferCard
