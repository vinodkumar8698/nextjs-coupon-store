import { grey } from '@mui/material/colors'
import { fontSize } from '@mui/system'
import { Avatar, Card, Container, Grid, Text } from '@nextui-org/react'
import React from 'react'
import styless from "./Featured.module.css"

const FeaturedBrands = () => {
    const images = [
        { id: 1, img: "https://www.shutterstock.com/image-vector/abstract-initial-letter-s-logo-260nw-1862762845.jpg" },
        { id: 2, img: "http://www.dsource.in/sites/default/files/resource/logo-design/logos/classic-logos-india/images/1.jpeg" },
        { id: 3, img: "https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg" },
        { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGLknLMn7FnEw5Gc_qgrpPYT_nIipq2fNfQ&usqp=CAU" },
        { id: 5, img: "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png" },
        { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-IEmKdBO-A20YrV_OzAfXCTqfxzeyL15v36R7mNUgvFobxw1wEa7kiChLUptLkz_Zak8&usqp=CAU" },
        { id: 7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvEW2dFjDEB6rsZJFnN3A5P7JSUqdEPR9x0A&usqp=CAU" },
        { id: 8, img: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/04/pjimage-3-1524555823.jpg" }
    ]
    return (
        <div>
            <Container justify='center' display='flex' style={{ marginTop: 25 }} >
                <h2 className={styless.h2Tag}>Top Featured Brands</h2>
            </Container>
            <Grid.Container gap={6} justify="flex-start" >
                {images.map((img) => (
                    <Grid xs={12} sm={3} key={img.id} justify="center" >
                        {/* <Avatar
                            src={img.img}
                            css={{ size: "$200" }}
                        /> */}
                        <div className='bg-image hover-zoom shadow-5 rounded-circle'>
                            <Card.Image
                                src={img?.img}
                                objectFit="cover"
                                width={200}
                                height={200}
                                alt={img.id}
                                className={styless.featuredImage}
                            />
                        </div>
                    </Grid>
                ))}
            </Grid.Container>
        </div >
    )
}

export default FeaturedBrands