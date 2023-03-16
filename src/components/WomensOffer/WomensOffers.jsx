import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function WomensOffers() {
    const list = [
        {
            title: "Bracelet",
            img: "https://rukminim1.flixcart.com/image/612/612/jv44mfk0/bangle-bracelet-armlet/w/t/z/adjustable-1-ybbn-91363-you-bella-original-imaeqq3bged7huhz.jpeg?q=70",
            price: "click to see",
        },
        {
            title: "Deo-Drants",
            img: "https://rukminim1.flixcart.com/image/612/612/kalecnk0pkrrdj/personal-care/d/h/p/300-st-romance-2-secret-temptation-original-imafs5matz8fkzjm.jpeg?q=70",
            price: "see",
        },
        {
            title: "Scarf",
            img: "https://rukminim1.flixcart.com/image/612/612/l572ufk0/scarf/3/b/p/free-size-st0065-stolevilla-original-imagfxhcvbhuma2b.jpeg?q=70",
            price: "click",
        },
        {
            title: "Tops",
            img: "https://rukminim1.flixcart.com/image/612/612/l572ufk0/scarf/3/b/p/free-size-st0065-stolevilla-original-imagfxhcvbhuma2b.jpeg?q=70",
            price: "BERLOOK",
        },
        {
            title: "Hoodies",
            img: "https://rukminim1.flixcart.com/image/612/612/kx9as280/sweatshirt/5/m/m/s-kttwomensweatshirt154-kotty-original-imag9r5v5a4bxqud.jpeg?q=70",
            price: "click to see",
        },
        {
            title: "Jeans",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/2/y/4/38-jegg-l-blue1-zayla-original-imagn36fqvcztkkc.jpeg?q=70",
            price: "see",
        },
        {
            title: "Crops",
            img: "https://rukminim1.flixcart.com/image/612/612/kflftzk0hlty2aw-0/shirt/m/8/j/s-1-sys-4001-funday-fashion-original-imafw7ks3kkvqzpy.jpeg?q=70",
            price: "click",
        },
        {
            title: "Tshirts",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/n/m/h/m-8339501-roadster-original-imafgmmpvubtg2pu-bb.jpeg?q=70",
            price: "BERLOOK",
        }

    ];

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                <h2>Today's Top Women's Clothing Deals</h2>
            </div>
            <Grid.Container gap={2} justify="flex-start">
                {list.map((item, index) => (
                    <Grid xs={12} sm={3} key={index}>
                        <Card isHoverable isPressable disableRipple>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={item?.img}
                                    objectFit="cover"
                                    width="100%"
                                    height={240}
                                    alt={item.title}
                                />
                            </Card.Body>
                            <Card.Footer css={{ justifyItems: "flex-start" }}>
                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text b>{item.title}</Text>
                                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                        {item.price}
                                    </Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
        </>
    );
}
