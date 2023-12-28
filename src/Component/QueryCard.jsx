import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const QueryCard = (props) => {
  return (
    <>

      <Card style={{ flexDirection: props.index }}>
        {/* <Card.Img variant="top" src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" /> */}

        <div className="query_imgDiv">
          <Card.Img variant="top" src={props.imageUrl} />
        </div>
        <Card.Body>
          <Card.Title>{props.heading}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <div className='queryBtn_div'>
            <Link className='' to={props.link}>{props.btntext}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <g clip-path="url(#clip0_1014_430)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.01581 4.48385L6.54457 6.01285L14.8058 8.42539L3.45985 14.6424L4.2287 16.0455L15.5747 9.82855L13.1687 18.067L14.7044 18.5155C15.8655 14.5396 16.7646 11.4607 17.8759 7.65538L7.01581 4.48385Z" fill="#F26633" stroke="#F26633" />
                </g>
                <defs>
                  <clipPath id="clip0_1014_430">
                    <rect width="16" height="16" fill="white" transform="translate(0 8.32812) rotate(-28.7203)" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </Card.Body>


      </Card>
    </>
  )
}

export default QueryCard
