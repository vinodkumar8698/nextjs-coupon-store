import { grey } from '@mui/material/colors'
import { fontSize } from '@mui/system'
import { Avatar, Card, Container, Grid, Text } from '@nextui-org/react'
import React from 'react'
import styless from "./Featured.module.css"
const styles = {
    featuredImage: {
        boxShadow: "0 12px 20px 6px #ffffff",
        borderRadius: "50%",
        cursor: "pointer",
    },
    featuredImageC: {
        boxShadow: "rgb(234 221 221) -4px 5px 20px 0px",
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}
const FeaturedBrands = () => {
    const images = [
        { id: 1, img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
        { id: 2, img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
        { id: 3, img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
        { id: 4, img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
        { id: 5, img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
        { id: 6, img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
        { id: 7, img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
        { id: 8, img: "https://i.pravatar.cc/150?u=a04258114e29026702d" }
    ]
    return (
        <div>
            <Container justify='center' display='flex' style={{ marginTop: 25 }} >
                <h2 className={styless.h2Tag}>Top Featured Brands</h2>
            </Container>
            <Grid.Container gap={2} justify="flex-start">
                {images.map((img) => (
                    <Grid xs={12} xl={3} sm={3} key={img.id}>

                        {/* <Avatar
                            src={img.img}
                            css={{ size: "$200" }}
                        /> */}

                        <div style={styles.featuredImageC} className={styless.featuredImageC}>
                            <Card.Image
                                src={img?.img}
                                objectFit="cover"
                                width={240}
                                height={240}
                                alt={img.id}
                                style={styles.featuredImage}
                            />
                        </div>
                    </Grid>
                ))}
            </Grid.Container>
        </div >
    )
}

export default FeaturedBrands