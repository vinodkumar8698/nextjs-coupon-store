import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container, Navbar } from "@nextui-org/react";
// import { Container } from '@mui/system';
import Image from 'next/image';
const images = [
    { id: 1, img: "https://thumbs.dreamstime.com/b/print-213104691.jpg" },
    { id: 2, img: "https://img.freepik.com/premium-vector/usa-labor-day-gift-promotion-coupon-banner-background-elegant-labor-day-voucher_255246-887.jpg?w=2000" },
    { id: 3, img: "https://thumbs.dreamstime.com/b/print-213104691.jpg" },
    { id: 4, img: "https://img.freepik.com/premium-vector/usa-labor-day-gift-promotion-coupon-banner-background-elegant-labor-day-voucher_255246-887.jpg?w=2000" },
]

const styles = {
    caroselImage: {
        width: "100%",
        height: "45vh",
        objectFit: "fill",
        objectPosition: "center",
        borderRadius: "10px"
    }
}
const CarouselComp = () => {
    return (
        // <Container responsive xl fluid  >
        <div style={{ marginTop: "20px" }}>
            <Carousel autoPlay swipeable showStatus={false} showThumbs={true} interval={3000} infiniteLoop showArrows showIndicators={false} centerMode  >
                {images.map(img => (
                    // <div key={img.id}>
                    <Image key={img.id} src={img.img} alt="navbar logo" unoptimized style={styles.caroselImage}
                        width={250}
                        height={150}
                        blurDataURL="data:..."
                        placeholder="blur" />
                    // </div>
                ))}
            </Carousel>
        </div>
        // </Container>
    )
}

export default CarouselComp