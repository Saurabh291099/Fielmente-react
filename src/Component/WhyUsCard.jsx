import React from 'react'
import Card from 'react-bootstrap/Card';
const WhyUsCard = (props) => {
    return (
        <>
            <Card>
                <div className="card_imgdiv">
                    <Card.Img variant="top" src={props.imageUrl} />
                </div>
                <Card.Body>
                    <Card.Title>{props.heading}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default WhyUsCard
