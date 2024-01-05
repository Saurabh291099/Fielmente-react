import React from 'react'
import '../../Style/Landinpage2.css'
import logo from '../../Assests/Images/cropped-fielmente-logo.webp'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import landingformimg from '../../Assests/Images/landingpage2/landingpage2-formimg.png'
import Rectangle from '../../Assests/Images/landingpage2/Rectangle 6(1).png'
import Section from './Section';
import footLogo from '../../Assests/Images/cropped-logo2.png'
import Contact from '../../Component/Contact'
import { Autoplay, Navigation, Pagination, FreeMode, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Slider from "react-slick";


// icons start 

import icon1 from '../../Assests/Images/landingpage2/icons/Frame.png'
import icon2 from '../../Assests/Images/landingpage2/icons/Frame (8).png'
import icon3 from '../../Assests/Images/landingpage2/icons/Frametrust.png'
import icon4 from '../../Assests/Images/landingpage2/icons/Frameengine.png'
import icon5 from '../../Assests/Images/landingpage2/icons/Frame (21).png'
import icon6 from '../../Assests/Images/landingpage2/icons/Frame (20).png'


// Images start 

import image1 from '../../Assests/Images/landingpage2/Rectangle 6.png'
import image2 from '../../Assests/Images/landingpage2/greeting-guests 1.png'
import image3 from '../../Assests/Images/landingpage2/Rectangle 6 (1).png'
import image4 from '../../Assests/Images/landingpage2/image_1-removebg-preview 1.png'
import image5 from '../../Assests/Images/landingpage2/Rectangle 6 (2).png'
import image6 from '../../Assests/Images/landingpage2/Rectangle 6 (3).png'
import image7 from '../../Assests/Images/landingpage2/Untitled-2 1.png'
import OfferCard from './OfferCard';



import offercardimg1 from '../../Assests/Images/landingpage2/icons/offercard1.png'
import offercardimg2 from '../../Assests/Images/landingpage2/icons/offercard2.png'

// Client Images 

import bharirawaha from '../../Assests/Images/clients/bharirawaha.webp'
import burffs from '../../Assests/Images/clients/burffs.webp'
import burkey from '../../Assests/Images/clients/burkey.webp'
import desiBar from '../../Assests/Images/clients/desiBar.webp'
import dhruvees from '../../Assests/Images/clients/dhruvees.webp'
import donergyro from '../../Assests/Images/clients/donergyro.webp'
import doubletree from '../../Assests/Images/clients/doubletree.webp'
import ebc from '../../Assests/Images/clients/ebc.webp'
import fgdimg from '../../Assests/Images/clients/fgdimg.webp'
import gharsekhana from '../../Assests/Images/clients/gharsekhana.webp'
import goldentulip from '../../Assests/Images/clients/goldentulip.webp'
import HakkaClub from '../../Assests/Images/clients/HakkaClub.jpg'
import hotelmarriote from '../../Assests/Images/clients/hotelmarriote.webp'
import lakefront from '../../Assests/Images/clients/lakefront.webp'
import parkplaza from '../../Assests/Images/clients/parkplaza.webp'
import radission from '../../Assests/Images/clients/radission.webp'
import Vidli from '../../Assests/Images/clients/Vidli-Cloud-Kitchens.webp'
import TestimonialCard from './TestimonialCard';

const LandingPage2 = (props) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const webdevdata = [
        {
            heading: 'Are you looking for Hotel Website Development?',
            img: image1,
            text: 'As a Hotel Marketing Agency every day, we build trust through communication, transparency, and results.',
            img1: icon1,
            img2: icon2,
            img3: icon3,
            img4: icon4,
            img5: icon5,
            img6: icon6,
            text1: 'Online Presence',
            text2: 'Showcase your hotel',
            text3: 'Build Trust',
            text4: 'Search Engine Visibility',
            text5: 'Direct Bookings',
            text6: 'Enhanced Customer Service',
        },
        {
            heading: 'Why Choose Us?',
            img: image2,
            text: 'Force of 18+ Hospitality Marketing Experts.',
            img1: icon1,
            img2: icon2,
            img3: icon3,
            img4: icon4,
            img5: icon5,
            img6: icon6,
            text1: 'Expertise in Hospitality',
            text2: 'Effective Paid Advertising Campaigns',
            text3: 'Strategic Social Media Management',
            text4: 'Customized Marketing Solution',
            text5: 'Optimized for Search Engines',
            text6: 'Exceptional Website Development',
        },
        {
            heading: 'Looking for Search Engine Optimization?',
            img: image3,
            text: 'Improve your hotel’s online visibility and attract more guests with effective hotel SEO (Search Engine Optimization) services.',
            img1: icon1,
            img2: icon2,
            img3: icon3,
            img4: icon4,
            img5: icon5,
            img6: icon6,
            text1: 'Technical SEO',
            text2: 'Off Page SEO',
            text3: 'On Page SEO',
            text4: 'Keywords Research',
            text5: 'Google My Business',
            text6: 'Local SEO',
        },
        {
            heading: 'Looking for Social Media Management?',
            img: image4,
            text: 'Elevate guest engagement and draw potential with our Social Media Strategies?',
            img1: icon1,
            img2: icon2,
            img3: icon3,
            img4: icon4,
            img5: icon5,
            img6: icon6,
            text1: 'Engage Guests',
            text2: 'Reputation Management',
            text3: 'Direct Bookings',
            text4: 'Showcase Your Hotel',
            text5: 'Visual Appeal',
            text6: 'Reach a Wider Audience',
        },
        {
            heading: 'Are you looking for Hotel Influencer Marketing?',
            img: image5,
            text: 'Elevate guest engagement and draw potential with our Social Media Strategies?',
            img1: icon1,
            img2: icon2,
            img3: icon3,
            img4: icon4,
            img5: icon5,
            img6: icon6,
            text1: 'Increased Brand Awareness',
            text2: 'Trusted Recommendations',
            text3: 'Reach a Targeted Audience',
            text4: 'Unique Experiences',
            text5: 'Storytelling and Engagement',
            text6: 'Differentiation and Competitive Edge',
        },
        {
            heading: 'Need help with Google Ads to increase your Hotel Revenue?',
            img: image6,
            text: 'Elevate guest engagement and draw potential with our Social Media Strategies?',
            img1: icon1,
            img2: icon2,
            img3: icon3,
            img4: icon4,
            img5: icon5,
            img6: icon6,
            text1: 'Increased Visibility',
            text2: 'Targeted Advertising',
            text3: 'Cost-Effective Results',
            text4: 'Drive Direct Bookings',
            text5: 'Compete Effectively',
            text6: 'Real-Time Optimization',
        },
    ]
    const OfferCardData = [
        { heading: 'Hotel Website Design & Development', imageUrl: offercardimg1, btnUrl: '/' },
        { heading: 'Social Media Management', imageUrl: offercardimg2, btnUrl: '/' },
    ]
    const clientsImages = [
        { imageUrl: bharirawaha },
        { imageUrl: burffs },
        { imageUrl: burkey },
        { imageUrl: desiBar },
        { imageUrl: dhruvees },
        { imageUrl: donergyro },
        { imageUrl: doubletree },
        { imageUrl: ebc },
        { imageUrl: fgdimg },
        { imageUrl: gharsekhana },
        { imageUrl: goldentulip },
        { imageUrl: HakkaClub },
        { imageUrl: hotelmarriote },
        { imageUrl: lakefront },
        { imageUrl: parkplaza },
        { imageUrl: radission },
        { imageUrl: Vidli },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <>
            <nav className='landing-navDiv'>
                <div className="container landing-nav">
                    <img src={logo} alt="Fielmente Logo" />
                    <div className='nav-phone'>
                        <span>Dial Now:</span>
                        <Link className='call'><i className="fa-solid fa-phone"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M11.0225 1.6429C12.624 1.81165 14.1199 2.52195 15.2629 3.65635C16.4059 4.79075 17.1274 6.28129 17.3082 7.88147M11.0225 4.78576C11.7953 4.93813 12.5044 5.31928 13.0578 5.87971C13.6113 6.44015 13.9835 7.154 14.1261 7.92861M17.269 13.3658V15.7229C17.2698 15.9417 17.225 16.1583 17.1374 16.3588C17.0497 16.5593 16.9211 16.7393 16.7599 16.8872C16.5986 17.0352 16.4083 17.1478 16.201 17.2179C15.9937 17.288 15.774 17.314 15.5561 17.2943C13.1383 17.0316 10.8159 16.2054 8.77538 14.8822C6.87696 13.6758 5.26743 12.0663 4.0611 10.1679C2.73322 8.11813 1.90686 5.78439 1.64896 3.35576C1.62932 3.13848 1.65514 2.9195 1.72478 2.71275C1.79441 2.506 1.90633 2.31601 2.05341 2.15489C2.2005 1.99376 2.37952 1.86503 2.57908 1.77688C2.77864 1.68873 2.99437 1.6431 3.21253 1.6429H5.56967C5.95098 1.63915 6.32065 1.77417 6.60977 2.02282C6.89889 2.27146 7.08773 2.61675 7.1411 2.99433C7.24059 3.74867 7.42509 4.48933 7.6911 5.20218C7.79681 5.48341 7.81969 5.78905 7.75702 6.08288C7.69436 6.37671 7.54878 6.64641 7.33753 6.86004L6.33967 7.8579C7.45818 9.82497 9.08688 11.4537 11.054 12.5722L12.0518 11.5743C12.2654 11.3631 12.5351 11.2175 12.829 11.1548C13.1228 11.0922 13.4284 11.115 13.7097 11.2208C14.4225 11.4868 15.1632 11.6713 15.9175 11.7708C16.2992 11.8246 16.6478 12.0168 16.8969 12.3109C17.1461 12.605 17.2785 12.9804 17.269 13.3658Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> <span>+919501868775</span></Link>
                    </div>
                </div>
            </nav>

            <section className="contact-form-divland">
                <div className="container">
                    <div className="row">
                        <div className="col landing-contact-left">
                            <h2><span style={{ color: '#625ACA' }}>Hospitality Marketing</span> <br />Agency Based in Gurgaon</h2>
                            <p>Are you looking with a well-rooted Hotel Advertisement Company that stays alongside you with targeted, site specific programs to boost your marketing strategies?</p>
                            <div>
                                <img src={landingformimg} alt="" />
                            </div>
                        </div>
                        <div className="col landing-contact-form">
                            <h3>Connect with our Marketing Expert</h3>

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        {/* <Form.Label>First name</Form.Label> */}
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Full name"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                                        {/* <Form.Label>Last name</Form.Label> */}
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Enter your Email"
                                        // defaultValue="Otto"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                        {/* <Form.Label>Username</Form.Label> */}
                                        <InputGroup hasValidation>

                                            <Form.Control
                                                type="text"
                                                placeholder="Brand Name"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                                        {/* <Form.Label>City</Form.Label> */}
                                        <Form.Control type="text" placeholder="Phone Number" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                                        {/* <Form.Label>State</Form.Label> */}
                                        <Form.Control type="text" placeholder="Message" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                {/* <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group> */}
                                <Button className='landing-submit' type="submit">Submit</Button>
                            </Form>


                        </div>
                    </div>
                </div>
            </section>

            <section className='serving-div'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col-sm-12">
                            <img src={Rectangle} alt="" />
                        </div>
                        <div className="col-md-12 col-lg-6 col-sm-12 landing-about">
                            <h6>About Company</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="348" height="2" viewBox="0 0 348 2" fill="none">
                                <path d="M0 1.28174H348" stroke="url(#paint0_linear_1014_1917)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1014_1917" x1="0" y1="1.28174" x2="348" y2="1.28174" gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="1" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h3>We’re Here To Serve You</h3>
                            <p>Do you wish for excellent design inputs, development solutions and long term management for your dream projects.</p>

                            <div className="circle-div">

                                <div className='circle circle1'>
                                    <span className='circle-head'>50L+</span>
                                    <span>REVENUE <br /> GENERATED</span>
                                </div>
                                <div className='circle circle2'>
                                    <span className='circle-head'>10k+</span>
                                    <span>BOOKING <br /> ACHIEVED</span>
                                </div>
                                <div className='circle circle3'>
                                    <span className='circle-head'>90%</span>
                                    <span>SATISFACTION <br /> RATE</span>
                                </div>
                                <div className='circle circle4'>
                                    <span className='circle-head'>10+</span>
                                    <span>YEARS OF <br /> EXPERIENCE</span>
                                </div>

                            </div>
                            <div className='contact-btn-div'>
                                <Link to='/contact-page' className='contactus-btn'>Contact us</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='serving-div'>
                <div className="container">
                    <div className="row">
                        <div className="col offer-img-div">
                            <img src={image7} alt="" />
                        </div>
                        <div className="col landing-about">
                            <h6>ouR OFFERINGS</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="348" height="2" viewBox="0 0 348 2" fill="none">
                                <path d="M0 1.28174H348" stroke="url(#paint0_linear_1014_1917)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1014_1917" x1="0" y1="1.28174" x2="348" y2="1.28174" gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="1" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h3>What We Offer</h3>
                            <p>We offer a range of services like Hotel Marketing, Restaurant Marketing, Cloud Kitchen Marketing, Hostel Marketing, Cafe Marketing to fuel your business growth and success.</p>
                            {/* <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="208" height="211" viewBox="0 0 208 211" fill="none">
                                    <g filter="url(#filter0_d_1014_1922)">
                                        <circle cx="101.027" cy="101.309" r="96.0274" fill="#DB6717" />
                                        <circle cx="101.027" cy="101.309" r="98.4888" stroke="white" stroke-width="4.92275" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1014_1922" x="0.078125" y="0.358887" width="207.808" height="209.777" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dx="5.9073" dy="7.8764" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.408333 0 0 0 0 0.181771 0 0 0 0 0.0255208 0 0 0 1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1014_1922" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1014_1922" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="208" height="211" viewBox="0 0 208 211" fill="none">
                                    <g filter="url(#filter0_d_1014_1923)">
                                        <circle cx="100.955" cy="101.309" r="96.0274" fill="#7522B7" />
                                        <circle cx="100.955" cy="101.309" r="98.4888" stroke="white" stroke-width="4.92275" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1014_1923" x="0.00585938" y="0.358887" width="207.808" height="209.777" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dx="5.9073" dy="7.8764" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.26551 0 0 0 0 0.0492188 0 0 0 0 0.4375 0 0 0 1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1014_1923" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1014_1923" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="207" height="213" viewBox="0 0 207 213" fill="none">
                                    <g filter="url(#filter0_d_1014_1930)">
                                        <circle cx="101.885" cy="101.309" r="96.0274" fill="#1D1768" />
                                        <circle cx="101.885" cy="101.309" r="98.4888" stroke="white" stroke-width="4.92275" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1014_1930" x="0.935547" y="0.358887" width="205.839" height="211.746" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dx="3.9382" dy="9.84551" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0612108 0 0 0 0 0.0397743 0 0 0 0 0.329167 0 0 0 1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1014_1930" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1014_1930" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="205" height="213" viewBox="0 0 205 213" fill="none">
                                    <g filter="url(#filter0_d_1014_1934)">
                                        <circle cx="100.973" cy="101.309" r="96.0274" fill="#99025C" />
                                        <circle cx="100.973" cy="101.309" r="98.4888" stroke="white" stroke-width="4.92275" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1014_1934" x="0.0234375" y="0.358887" width="204.854" height="211.746" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dx="2.95365" dy="9.84551" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.295833 0 0 0 0 0.0234201 0 0 0 0 0.185786 0 0 0 1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1014_1934" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1014_1934" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div> */}
                            <div className="slider-div">
                                {/* <OfferCard /> */}

                                <Swiper
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}

                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={false}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    spaceBetween={10}
                                    slidesPerView={3}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}

                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        480: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                        },
                                        1440: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        }
                                    }}
                                >

                                    {OfferCardData.map((data) => {
                                        return (
                                            <SwiperSlide>
                                                <OfferCard heading={data.heading} imageUrl={data.imageUrl} btnUrl='' />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>


                            </div>
                            <div className='contact-btn-div'>
                                <Link to='/contact-page' className='contactus-btn'>Contact us</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="advertisements">

                {webdevdata.map((data, index) => {
                    return (
                        <Section heading={data.heading} text={data.text} image={data.img} icon1={data.img1} icon2={data.img2} icon3={data.img3} icon4={data.img4} icon5={data.img5} icon6={data.img6} text1={data.text1} text2={data.text2} text3={data.text3} text4={data.text4} text5={data.text5} text6={data.text6} index={index % 2 !== 0 ? 'row-reverse' : 'row'} />
                    )
                })}

            </section >

            <section className="container section-wrapper partners_section my-2 py-2">
                <h2><span>Our</span> Clients</h2>

                {/* <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={10}
                    slidesPerView={4}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }}
                >

                    <SwiperSlide> <img src={bharirawaha} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={burffs} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={burkey} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={desiBar} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={dhruvees} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={donergyro} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={doubletree} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={ebc} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={fgdimg} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={gharsekhana} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={goldentulip} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={HakkaClub} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={hotelmarriote} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={lakefront} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={parkplaza} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={radission} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={Vidli} alt="Our Client" /> </SwiperSlide>

                </Swiper> */}

                <Slider {...settings}>
                    {clientsImages.map((data) => {
                        return (
                            <div className='p-2 d-flex justify-content-center align-items-center'>
                                <img src={data.imageUrl} alt="Our Client" />
                            </div>
                        )
                    })}
                </Slider>

            </section>

            <section className="testimonial" style={{ background: '#110D3C', color: '#fff' }}>
                <div className="container">
                    <div className="testimonial-wrapper">
                        <div className='inner-testimonial'>
                            <span>Testimonials</span>
                            <h3>The Voices of Delight</h3>
                            <p>Testimonials Sharing Stories of Success and Satisfaction - A Glimpse into Fulfilled Collaborations.</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="167" viewBox="0 0 190 167" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M128.041 166.076C133.497 164.002 142.01 159.446 148.171 155.305C155.542 150.35 165.669 140.901 170.713 134.271C179.771 122.364 184.51 110.254 187.233 92.0495C189.065 79.8083 189.195 76.7004 189.364 41.17C189.544 3.38248 189.707 5.75435 186.713 2.76047C183.824 -0.129014 185.533 0.00085415 150.342 0.000851074C116.354 0.000848102 117.544 -0.068503 114.736 2.07351C114.018 2.62028 112.984 3.83038 112.435 4.76229L111.439 6.45716L111.339 38.6521L111.239 70.847L112.036 72.7001C112.972 74.8757 115.541 77.3003 117.481 77.8393C118.277 78.0599 124.905 78.2112 133.852 78.2123L148.886 78.2145L148.886 80.5344C148.886 85.8164 147.38 94.7803 145.495 100.719C142.988 108.615 139.164 114.982 133.625 120.48C129.106 124.966 123.873 128.528 116.517 132.127C111.138 134.759 110.331 135.412 108.853 138.331C108.462 139.104 108.201 140.481 108.188 141.843C108.17 143.814 108.415 144.615 110.232 148.504C117.147 163.302 117.713 164.241 120.601 165.714C122.719 166.795 125.76 166.942 128.041 166.076ZM18.9434 166.346C20.988 165.969 30.602 161.264 35.808 158.094C51.602 148.474 63.9306 135.587 71.1451 121.156C76.4205 110.603 79.0336 99.9432 80.8739 81.4648C81.3631 76.5543 81.5033 69.2122 81.6353 41.5419C81.818 3.33968 81.9833 5.75876 78.9849 2.76046C76.0958 -0.128657 77.8029 0.000844732 42.6333 0.000841657C8.35316 0.00083866 9.55478 -0.0737004 6.76712 2.22401C6.03589 2.82686 5.00767 4.18304 4.48195 5.23782L3.52641 7.15553L3.53453 39.0878C3.54264 70.4153 3.55703 71.0517 4.29417 72.6805C5.15783 74.589 6.47529 76.0755 8.32253 77.2258C9.58392 78.0116 9.98014 78.0345 25.4727 78.2145L41.3317 78.399L41.2191 81.3504C40.928 88.9737 39.0878 98.0461 36.5319 104.455C33.904 111.045 30.7566 115.852 25.9804 120.57C21.6336 124.863 17.1957 127.923 10.2295 131.428C3.55149 134.788 1.68505 136.336 0.92911 139.143C0.0344412 142.465 0.505587 144.139 4.9088 153.292C7.36626 158.401 9.54701 162.423 10.3882 163.398C12.525 165.876 15.6521 166.954 18.9434 166.346Z" fill="#9982E4" fill-opacity="0.45" />
                        </svg>
                    </div>

                    <div className="testimonial-cards">
                        <TestimonialCard />
                    </div>
                </div>
            </section>


            <section className="container section-wrapper partners_section my-2 py-2">
                <h2>We are part of their Success Stories!</h2>
                <p>Nurturing Success Together with  Commitment, Exemplifying Excellence in Every Step.</p>
                {/* <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"

                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        }
                    }}
                >


                    <SwiperSlide> <img src={doubletree} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={ebc} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={fgdimg} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={gharsekhana} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={goldentulip} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={HakkaClub} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={hotelmarriote} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={lakefront} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={parkplaza} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={radission} alt="Our Client" /> </SwiperSlide>
                    <SwiperSlide> <img src={Vidli} alt="Our Client" /> </SwiperSlide>

                </Swiper> */}

                <Slider {...settings}>
                    {clientsImages.map((data) => {
                        return (
                            <div className='p-2 d-flex justify-content-center align-items-center'>
                                <img src={data.imageUrl} alt="Our Client" />
                            </div>
                        )
                    })}


                </Slider>


            </section>

            <Contact />

            <footer>
                <div className="container footer-img-div">
                    <img src={footLogo} alt="fielmente logo" />
                    <div className="policy-div">
                        <Link>Privacy Policy</Link>
                        <Link>Terms & Conditions</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default LandingPage2
