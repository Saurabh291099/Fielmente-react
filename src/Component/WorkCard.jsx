import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const WorkCard = (props) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{props.heading}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Link className='learnLink' to='/'>Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="#0F110F">
                            <g clip-path="url(#clip0_1014_916)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8594 2.85986L9.71138 3.97432L15.797 10.0599H2.85938V11.6599H15.797L9.72817 17.7286L10.8594 18.8599C13.7882 15.9311 16.0562 13.6631 18.8594 10.8599L10.8594 2.85986Z" fill="#0F110F" stroke="#0F110F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1014_916">
                                    <rect width="16" height="16" fill="#0F110F" transform="translate(0 7.68848) rotate(-28.7203)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Card.Img className='work_img' variant="top" src={props.imageUrl} />
                </Card.Body>
            </Card>

        </>
    )
}

export default WorkCard
