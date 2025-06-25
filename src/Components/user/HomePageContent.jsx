import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { arrayIndex, productList } from "../../Utils";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Modal, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePageContent() {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({ name: '', image: '', price: '', startRating: 0, product_details: {} });

    function setShowModal(item) {
        setShow(true);
        setSelectedProduct({ ...selectedProduct, ...item });
    }
    return (
        <>
            <div className="main-content row g-0 gap-3">
                <Carousel className="carousel-parent" fade interval={2000} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 car_img"
                            src="/assets/collection/banner1.jpeg"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 car_img"
                            src="/assets/collection/banner2.jpeg"
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 car_img"
                            src="/assets/collection/banner3.jpeg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div id="category" className="mt-5"></div>
                <section className="feature_part py-4 box-shadow">
                    <div className="my-3">
                        <h1 className="gradientThemeColor titleHeading text-center">Our Product Category</h1>
                    </div>
                    <div className="container-fluid p-lg-0 overflow-hidden">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 cl-xs-12 col-12">
                                <div className="single_feature_post_text">
                                    <img src="/assets/collection/chiken-cat.jpeg" alt="#" style={{ height: '507px', width: '429px' }} />
                                    <div className="hover_text">
                                        <span className="btn_2">Chikankari</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 cl-xs-12 col-12">
                                <div className="single_feature_post_text">
                                    <img src="/assets/collection/handloom.jpeg" alt="#" style={{ height: '507px', width: '429px' }} />
                                    <div className="hover_text">
                                        <span className="btn_2">Handloom Saree</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 cl-xs-12 col-12">
                                <div className="single_feature_post_text">
                                    <img src="/assets/collection/handcrafted.jpeg" alt="#" style={{ height: '507px', width: '429px' }} />
                                    <div className="hover_text">
                                        <span className="btn_2">Handcrafted Saree</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="products" className="mt-5"></div>
                <section className="new_arrival box-shadow my-3">
                    <div className="container-fluid">
                        <div className="row">
                            <h1 className="gradientThemeColor titleHeading text-center">Products For You</h1>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-none">
                                <select className="form-select" name="" id="">
                                    <option value="">Select Category</option>
                                    <option value="1">Chikankari</option>
                                    <option value="2">Hadloom Saree</option>
                                    <option value="3">Handcrafted Saree</option>
                                </select>
                            </div>
                            <div className="col-lg-12">
                                <div className="new_arrival_iner filter-container">

                                    {
                                        productList.map((item, index) => (
                                            <div key={arrayIndex('product', index)} className="single_arrivel_item weidth_1 mix shoes">
                                                <img src={item.image} alt="#" style={{ width: '23em', height: '29em' }} />
                                                <div className="hover_text">
                                                    <p>{item.name}</p>
                                                    <h5>{item.description}</h5>
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
                                                    <div className="social_icon cart_icon">
                                                        <Link><i className="fas fa-heart"></i></Link>
                                                        <Link><i className="fa-solid fa-cart-shopping"></i></Link>
                                                    </div>

                                                    <button className="btn btn-outline-light mt-2" onClick={() => setShowModal(item)}>
                                                        Quick View
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <div id="about" className="mb-5"></div>
                <div className="my-3 welcome_title">
                    <h1>About Us</h1>
                </div>
                <section className="" >
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

            <Modal size="lg" show={show} onHide={() => setShow(false)} dialogClassName="modal-90w"
                aria-labelledby="product-modal" >
                <Modal.Header closeButton>
                    <Modal.Title id="product-modal">
                        {selectedProduct.name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* Image + Summary Section */}
                    <div className="d-flex flex-column flex-md-row align-items-start mb-4">
                        {/* Product Image */}
                        <div className="me-md-4 mb-3 mb-md-0">
                            <img
                                src={selectedProduct.image}
                                alt="Georgette Saree"
                                style={{ width: '300px', maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        </div>

                        {/* Product Info */}
                        <div>
                            <h5 className="mb-2 text-success">
                                {selectedProduct.name}
                            </h5>
                            <p><strong>Price:</strong> {selectedProduct.price}</p>
                            {/* <p><strong>Regular Price:</strong> <del>{selectedProduct.price}</del></p> */}

                            <div className="d-flex flex-wrap gap-2 mt-3">
                                <Button variant="primary">Add to Cart</Button>
                                <Button variant="success">Buy It Now</Button>
                                <Button variant="outline-secondary">Add to Wishlist</Button>
                            </div>
                            <div>
                                {/* All Product Details in One Card */}
                                <Card className="mt-4">
                                    <Card.Body>
                                        <Card.Title>Product Details</Card.Title>
                                        <ul className="list-unstyled mb-3 justify-content-between">
                                            {Object.keys(selectedProduct?.product_details)?.map((key, index) => (
                                                <li key={arrayIndex('sub', index)}><strong>{key}</strong> :{selectedProduct.product_details[key]}</li>
                                            ))}
                                        </ul>

                                        <p className="text-muted small mb-1">
                                            {selectedProduct.description}
                                        </p>
                                        <p className="text-muted small">
                                            <strong>Disclaimer:</strong> There might be a slight variation in the actual color of the product due to different screen resolutions.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>


                </Modal.Body>
            </Modal>
        </>
    );
}

export default HomePageContent;