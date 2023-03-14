import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container, Navbar } from "@nextui-org/react";
// import { Container } from '@mui/system';
import Image from 'next/image';
const images = [
    "/banner_home-290x580.jpeg",
    "/banner_home-290x580 (1).jpeg",
    "/banner_home-290x580 (2).jpeg",
    "/banner_home-290x580 (3).jpeg",
]
const img1 = "/banner_home-290x580.jpeg"
const CarouselComp = () => {
    return (
        <Container responsive xl fluid >
            <div style={{ marginTop: "20px" }}>
                <Carousel autoPlay infiniteLoop interval={3000} showArrows showIndicators={false} stopOnHover centerMode >
                    {images.map(img => (
                        <div key={img}>
                            <Image src={img} alt="navbar logo"
                                width={250}
                                height={380}
                                blurDataURL="data:..."
                                placeholder="blur" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </Container>
    )
}

export default CarouselComp