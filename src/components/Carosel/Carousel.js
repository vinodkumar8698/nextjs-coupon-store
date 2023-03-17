import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

import styles from "./Carousel.module.css"

export default function Carousel() {
    const images = [
        { id: "1", src: "https://mdbootstrap.com/img/new/slides/041.jpg" },
        { id: "2", src: "https://mdbootstrap.com/img/new/slides/042.jpg" },
        { id: "3", src: "https://mdbootstrap.com/img/new/slides/043.jpg" },
    ]
    return (
        <div className={`my-4 ${styles.carosel_container}  `} >
            <MDBCarousel showControls delay={4000} touch={true}>
                {images.map((item) => (
                    <MDBCarouselItem
                        className={`'w-100 d-block' ${styles.caro_img} rounded-5 shadow-4-strong `}
                        itemId={item.id}
                        src={item.src}
                        alt={item.id}
                    >
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselItem>
                ))}
            </MDBCarousel>
            {/* <MDBCarousel showControls showIndicators>
                <MDBCarouselItem
                    className={`'w-100 d-block rounded-5 shadow-4-strong' ${styles.carosel_container} `}
                    itemId={1}
                    src='https://mdbootstrap.com/img/new/slides/041.jpg'
                    alt='...'
                >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className={`'w-100 d-block' ${styles.carosel_container}`}
                    itemId={2}
                    src='https://mdbootstrap.com/img/new/slides/042.jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/new/slides/043.jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel> */}
        </div >
    );
}