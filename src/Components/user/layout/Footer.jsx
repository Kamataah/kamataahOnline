import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer_part" id='footer'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Category</h4>
                            <ul className="list-unstyled">
                                <li><Link>Fashion</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Company</h4>
                            <ul className="list-unstyled">
                                <li><Link>About</Link></li>
                                <li><Link to={"/policy"}>Policy</Link></li>
                                <li><Link>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="single_footer_part">
                            <h4>Address</h4>
                            <ul className="list-unstyled">
                                <li><span className='text-light'>E3/21, Shirine Garden,Aundh,Pune</span></li>
                                <li><span className='text-light'>+91-9670608890</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="single_footer_part">
                            <h4>Newsletter</h4>
                            <div id="mc_embed_signup">
                                <form target="_blank" className="subscribe_form relative mail_part">
                                    <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                        className="placeholder hide-on-focus" />
                                    <button type="button" id="newsletter-submit"
                                        className="email_icon newsletter-submit button-contactForm">subscribe</button>
                                    <div className="mt-10 info"></div>
                                </form>
                            </div>
                            <div className="social_icon">
                                <Link target='_blank' to={'https://www.facebook.com/share/1AufZrPw4f/'}><i className="fa-brands fa-facebook"></i></Link>
                                <Link target='_blank' to={'https://api.whatsapp.com/send/?phone=+919670608890&text=Hey%20There&type=phone_number&app_absent=0'}><i className="fa-brands fa-whatsapp"></i></Link>
                                <Link target='_blank' to={'https://www.instagram.com/_kamataah_/'}><i className="fa-brands fa-instagram" ></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="copyright_text text-light @2025">
                            &copy; Kamataah 2025 | All rights reserved. <br />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
