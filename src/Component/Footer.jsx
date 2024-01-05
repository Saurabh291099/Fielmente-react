import React from 'react'
import { Button } from 'bootstrap';
import Logo from '../Assests/Images/cropped-fielmente-logo.webp'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* <div className="footer_main">
                <div className='container'>
                    <div className="footer">
                        <div className="inner_footer">
                            <h4>Fielmente</h4>
                            <p>Take Your Hotel & Restaurant to new Heights.</p>

                            <div className='foot_service'>
                                <Link to=''>Services</Link>
                                <Link to=''>Press Realeases</Link>
                            </div>
                        </div>
                        <div className="inner_footer">
                            <h4>sachin@fielmente.com</h4>
                            <p>Industries We Serve</p>
                            <div className='foot_service'>
                                <Link to=''>Web Development</Link>
                                <Link to=''>Cloud Kitchen Marketing</Link>
                                <Link to=''>Hotel Marketing</Link>
                                <Link to=''>Restaurant Marketing</Link>
                            </div>
                        </div>
                        <div className="inner_footer">
                            <h4>+919501868775</h4>
                            <div>
                                <Link to=''>Services</Link>|
                                <Link to=''>Fielmeente</Link>
                            </div>

                            <div className='foot_service'>
                                <Link to=''>Paid Growth | Ads</Link>
                                <Link to=''>Organic Growth | SEO</Link>
                                <Link to=''>Social Media Marketing</Link>
                                <Link to=''>Website Development</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <footer>


                <div className="container ">
                    <div className="footer-main">
                        <div className="foot-social-div">
                            <h4 className='text-center'>Find Us On</h4>
                            <div className="foot-links">
                                <Link to=''>Instagram</Link>
                                <Link to=''>Facebook</Link>
                                <Link to=''>Twitter</Link>
                                <Link to=''>Linkedin</Link>
                            </div>
                        </div>
                        <p>Get in touch to learn more about how we can drive your brand forward. As a full-service Marketing Agency, we know how to help you and your business grow and flourish. All you’ve got to do is contact us!</p>
                        <div className="footer-inner">

                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="foot-left">

                                        <div className="foot-logo-div">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="67" viewBox="0 0 30 67" fill="none">
                                                <path d="M29.9866 39.4076C30.1654 37.2674 28.5416 35.8969 27.7769 35.3755C27.3399 35.0775 26.9129 34.7746 26.4908 34.4568L10.9731 22.7826C9.11594 21.3922 7.84969 19.8379 7.05519 18.6561C5.48107 16.3123 5.31224 13.2733 6.70759 10.8203C6.73739 10.7657 6.77215 10.7061 6.8069 10.6514C8.12281 8.44669 10.3077 6.9123 12.8005 6.30152C18.506 4.89624 22.2054 8.55097 22.2054 8.55097C27.7471 13.9784 23.9732 21.7745 23.9732 21.7745C27.5833 20.4288 27.9457 16.7642 27.9457 16.7642C29.6788 8.70987 23.6802 3.74917 23.6802 3.74917C16.2615 -2.93461 8.23205 1.35572 8.23205 1.35572C-0.41814 5.90427 0.103258 13.9089 0.336644 15.6817C0.371404 15.9448 0.396234 16.208 0.416096 16.4712C0.843144 21.7596 5.28741 24.9277 5.28741 24.9277L24.1371 38.5634C24.1371 38.5634 27.4641 41.1952 28.8892 43.0872C29.3014 43.7575 29.505 44.2144 29.505 44.2144L29.9866 39.4026V39.4076Z" fill="#110D3C" />
                                                <path d="M0.0136402 26.8244C-0.165124 28.9646 1.45865 30.3351 2.22336 30.8565C2.66034 31.1545 3.08739 31.4574 3.50947 31.7752L19.0272 43.4495C20.8843 44.8399 22.1506 46.3941 22.9451 47.5759C24.5192 49.9197 24.688 52.9587 23.2927 55.4118C23.2629 55.4664 23.2281 55.526 23.1934 55.5806C21.8775 57.7853 19.6926 59.3197 17.1998 59.9305C11.4943 61.3358 7.79484 57.6811 7.79484 57.6811C2.25316 52.2536 6.02706 44.4575 6.02706 44.4575C2.41703 45.8032 2.05453 49.4679 2.05453 49.4679C0.321516 57.5222 6.32004 62.4779 6.32004 62.4779C13.7387 69.1617 21.7682 64.8713 21.7682 64.8713C30.4184 60.3278 29.897 52.3181 29.6636 50.5454C29.6289 50.2822 29.604 50.019 29.5842 49.7559C29.1571 44.4674 24.7129 41.2993 24.7129 41.2993L5.85822 27.6636C5.85822 27.6636 2.53123 25.0318 1.10609 23.1399C0.693939 22.4695 0.490344 22.0127 0.490344 22.0127L0.00867352 26.8244H0.0136402Z" fill="#110D3C" />
                                                <path d="M18.7834 15.3038C18.6692 16.8779 17.2987 18.0597 15.7246 17.9455C14.1504 17.8313 12.9686 16.4608 13.0828 14.8867C13.197 13.3125 14.5676 12.1307 16.1417 12.2449C17.7158 12.3591 18.8976 13.7297 18.7834 15.3038Z" fill="#110D3C" />
                                                <path d="M16.8967 51.5938C16.7825 53.1679 15.412 54.3498 13.8378 54.2356C12.2637 54.1213 11.0819 52.7508 11.1961 51.1767C11.3103 49.6026 12.6808 48.4208 14.255 48.535C15.8291 48.6492 17.0109 50.0197 16.8967 51.5938Z" fill="#110D3C" />
                                            </svg>
                                            <p>Fielmente Hospitality <br />
                                                Marketing Agency</p>
                                        </div>
                                        <p>Fielmente is an advisory, consultation and marketing firm dedicated to F&B and the hospitality industry.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 ryt-foot-div">
                                    <p className='foot-heading'>Let’s Stay Connected</p>
                                    <p>Enter your email to unlock 5% OFF on all our services.</p>
                                    <div className="foot-email-input">
                                        {/* <button>Submit</button> */}
                                        <input type="text" placeholder='Your Email' />
                                    </div>
                                </div>
                            </div>
                            <div className="row mobile-row">
                                <div className="col-12 col-md-6 col-lg-6 ">
                                    <div className="foot-compRyts">
                                        <p className='foot-loc-text'>© 2023 Fielmente Hospitality Marketing Agency</p>
                                        <div className='foot-compRyts-inr'>
                                            <Link className='foot-loc-text'>FAQs</Link>
                                            <Link className='foot-loc-text'>Privacy Policy</Link>
                                            <Link className='foot-loc-text'>Terms of Use</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 ryt-foot-div">
                                    <div className="foot-ryt-location">
                                        <div className="foot-ryt-location-inr">
                                            <p className='foot-heading'>To Know More</p>
                                            <Link className='foot-loc-text'>+91 9501868775</Link>
                                            <Link className='foot-loc-text'>sachin@fielmente.com</Link>
                                        </div>
                                        <div className="foot-ryt-location-inr">
                                            <p className='foot-heading'>Location</p>
                                            <p className='foot-loc-text'>Gurugram</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>









                    {/* <div className="foot-inr">
                            <div className="foot-inr-div">
                                <div className="foot-left">

                                    <div className="foot-logo-div">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="67" viewBox="0 0 30 67" fill="none">
                                            <path d="M29.9866 39.4076C30.1654 37.2674 28.5416 35.8969 27.7769 35.3755C27.3399 35.0775 26.9129 34.7746 26.4908 34.4568L10.9731 22.7826C9.11594 21.3922 7.84969 19.8379 7.05519 18.6561C5.48107 16.3123 5.31224 13.2733 6.70759 10.8203C6.73739 10.7657 6.77215 10.7061 6.8069 10.6514C8.12281 8.44669 10.3077 6.9123 12.8005 6.30152C18.506 4.89624 22.2054 8.55097 22.2054 8.55097C27.7471 13.9784 23.9732 21.7745 23.9732 21.7745C27.5833 20.4288 27.9457 16.7642 27.9457 16.7642C29.6788 8.70987 23.6802 3.74917 23.6802 3.74917C16.2615 -2.93461 8.23205 1.35572 8.23205 1.35572C-0.41814 5.90427 0.103258 13.9089 0.336644 15.6817C0.371404 15.9448 0.396234 16.208 0.416096 16.4712C0.843144 21.7596 5.28741 24.9277 5.28741 24.9277L24.1371 38.5634C24.1371 38.5634 27.4641 41.1952 28.8892 43.0872C29.3014 43.7575 29.505 44.2144 29.505 44.2144L29.9866 39.4026V39.4076Z" fill="#110D3C" />
                                            <path d="M0.0136402 26.8244C-0.165124 28.9646 1.45865 30.3351 2.22336 30.8565C2.66034 31.1545 3.08739 31.4574 3.50947 31.7752L19.0272 43.4495C20.8843 44.8399 22.1506 46.3941 22.9451 47.5759C24.5192 49.9197 24.688 52.9587 23.2927 55.4118C23.2629 55.4664 23.2281 55.526 23.1934 55.5806C21.8775 57.7853 19.6926 59.3197 17.1998 59.9305C11.4943 61.3358 7.79484 57.6811 7.79484 57.6811C2.25316 52.2536 6.02706 44.4575 6.02706 44.4575C2.41703 45.8032 2.05453 49.4679 2.05453 49.4679C0.321516 57.5222 6.32004 62.4779 6.32004 62.4779C13.7387 69.1617 21.7682 64.8713 21.7682 64.8713C30.4184 60.3278 29.897 52.3181 29.6636 50.5454C29.6289 50.2822 29.604 50.019 29.5842 49.7559C29.1571 44.4674 24.7129 41.2993 24.7129 41.2993L5.85822 27.6636C5.85822 27.6636 2.53123 25.0318 1.10609 23.1399C0.693939 22.4695 0.490344 22.0127 0.490344 22.0127L0.00867352 26.8244H0.0136402Z" fill="#110D3C" />
                                            <path d="M18.7834 15.3038C18.6692 16.8779 17.2987 18.0597 15.7246 17.9455C14.1504 17.8313 12.9686 16.4608 13.0828 14.8867C13.197 13.3125 14.5676 12.1307 16.1417 12.2449C17.7158 12.3591 18.8976 13.7297 18.7834 15.3038Z" fill="#110D3C" />
                                            <path d="M16.8967 51.5938C16.7825 53.1679 15.412 54.3498 13.8378 54.2356C12.2637 54.1213 11.0819 52.7508 11.1961 51.1767C11.3103 49.6026 12.6808 48.4208 14.255 48.535C15.8291 48.6492 17.0109 50.0197 16.8967 51.5938Z" fill="#110D3C" />
                                        </svg>
                                        <p>Fielmente Hospitality <br />
                                            Marketing Agency</p>
                                    </div>
                                    <p>Fielmente is an advisory, consultation and marketing firm dedicated to F&B and the hospitality industry.</p>
                                </div>

                                <div className="foot-compRyts">
                                    <p className='foot-loc-text'>© 2023 Fielmente Hospitality Marketing Agency</p>
                                    <div className='foot-compRyts-inr'>
                                        <Link className='foot-loc-text'>FAQs</Link>
                                        <Link className='foot-loc-text'>Privacy Policy</Link>
                                        <Link className='foot-loc-text'>Terms of Use</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="foot-inr-div">

                                <div className="foot-ryt-location">
                                    <div className="foot-ryt-location-inr">
                                        <p className='foot-heading'>To Know More</p>
                                        <Link className='foot-loc-text'>+91 9501868775</Link>
                                        <Link className='foot-loc-text'>sachin@fielmente.com</Link>
                                    </div>
                                    <div className="foot-ryt-location-inr">
                                        <p className='foot-heading'>Location</p>
                                        <p className='foot-loc-text'>Gurugram</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </div>
            </footer>
        </>
    )
}

export default Footer
