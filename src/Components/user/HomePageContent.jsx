import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { arrayIndex, productList } from "../../Utils";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Custom Width Modal
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

function HomePageContent() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="main-content row g-0 gap-3 mx-2">
                <div className="my-3 welcome_title">
                    <h1>Welcome To,</h1>
                    <h1>Kamataah Desirable drapes</h1>
                </div>
                <section className="">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                                <div className="intro-section">
                                    <h1>Welcome to Our Handcrafted Heritage Store</h1>
                                    <p>
                                        Discover the timeless elegance of <span>Chikankari artistry</span> and the rich tradition of <span>handloom sarees</span>. We take pride in offering a curated collection of <span>handcrafted and handwoven products</span>, celebrating the skills of Indian artisans. Each piece in our collection reflects authenticity, craftsmanship, and cultural heritage — perfect for those who value quality and tradition.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 banner_part">
                                <div className="banner_slider">
                                    <div className="single_banner_slider">
                                        <div className="banner_text">
                                            <div className="banner_text_iner">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feature_part py-4 box-shadow">
                    <div className="my-3">
                        <h1 className="gradientThemeColor titleHeading text-center">Our Product Category</h1>
                    </div>
                    <div className="container-fluid p-lg-0 overflow-hidden">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 cl-xs-12 col-12">
                                <div className="single_feature_post_text">
                                    <img src="/assets/collection/c_kari.jpeg" alt="#" style={{ height: '507px', width: '429px' }} />
                                    <div className="hover_text">
                                        <span className="btn_2">Chinkan kari</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 cl-xs-12 col-12">
                                <div className="single_feature_post_text">
                                    <img src="/assets/collection/handloom.jpeg" alt="#" style={{ height: '507px', width: '429px' }} />
                                    <div className="hover_text">
                                        <span className="btn_2">Hadloom Saree</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 cl-xs-12 col-12">
                                <div className="single_feature_post_text">
                                    <img src="/assets/collection/handcraeft.jpg" alt="#" style={{ height: '507px', width: '429px' }} />
                                    <div className="hover_text">
                                        <span className="btn_2">Handcrafted Saree</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="new_arrival box-shadow my-3">
                    <div className="container-fluid">
                        <div className="row">
                            <h1 className="gradientThemeColor titleHeading text-center">Products For You</h1>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-none">
                                <select className="form-select" name="" id="">
                                    <option value="">Select Category</option>
                                    <option value="1">Chinkan kari</option>
                                    <option value="2">Hadloom Saree</option>
                                    <option value="3">Handcrafted Saree</option>
                                </select>
                            </div>
                            <div className="col-lg-12">
                                <div className="new_arrival_iner filter-container">

                                    {
                                        productList.map((item, index) => (
                                            <div key={arrayIndex('product', index)} className="single_arrivel_item weidth_1 mix shoes">
                                                <img src={item.image} alt="#" style={{ width: '23em', height: '25em' }} />
                                                <div className="hover_text">
                                                    <p>{item.category}</p>
                                                    <h5>{item.name}</h5>
                                                    <div className="rate_icon">
                                                        {
                                                            Array.from({ length: 5 }, (_, i) => (
                                                                <span key={i}>
                                                                    {i + 1 <= item.startRating ? <i className="fas fa-star"></i> : <span> <i className="fa-regular fa-star"></i></span>}
                                                                </span>
                                                            ))
                                                        }
                                                    </div>
                                                    <h6>{item.price}</h6>
                                                    <div className="social_icon">
                                                        <Link><i className="fas fa-heart"></i></Link>
                                                        <Link><i className="fa-solid fa-cart-shopping"></i></Link>
                                                    </div>

                                                    <Button variant="primary" onClick={() => setShow(true)}>
                                                        Custom Width Modal
                                                    </Button>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="box-shadow mb-3">
                    <div className="row g-0">
                        <div className="col-12">
                            <h1 className="gradientThemeColor titleHeading text-center">Our Partners</h1>
                            <div className="partners-container">
                                <div className="partner-card ">
                                    <img
                                        src="/assets/img/partner/partner_1.jpeg"
                                        alt="Partner 1"
                                        className="partner-image" />
                                    <h3 className="partner-name">Pooja Srivastava</h3>
                                    <h3 className="partner-name">CO-FOUNDER</h3>
                                    <p className="partner-details">
                                        Specializing in traditional Chikankari embroidery, handcrafted by skilled artisans.
                                    </p>
                                </div>

                                <div className="partner-card">
                                    <img
                                        src="/assets/img/partner/partner_2.jpeg"
                                        alt="Partner 2"
                                        className="partner-image" />
                                    <h3 className="partner-name">Antara Mukherjee</h3>
                                    <h3 className="partner-name">CO-FOUNDER</h3>
                                    <p className="partner-details">
                                        Known for their exquisite handloom weaves and sustainable practices across India.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-6">
                        <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/_kamataah_/" data-instgrm-version="14" >
                        </blockquote>
                        <script async src="//www.instagram.com/embed.js"></script>
                    </div> */}

                    </div>
                </section>


            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default HomePageContent;