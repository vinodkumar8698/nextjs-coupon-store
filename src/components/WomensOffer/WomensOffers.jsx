import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function WomensOffers() {
    const list = [
        {
            title: "Florence",
            img: "https://www.couponcodetreasure.com/wp-content/uploads/2022/08/Florence-by-Mills-Coupon-Code.png",
            price: "click to see",
        },
        {
            title: "moodytiger",
            img: "https://www.codespotr.com/wp-content/uploads/2023/03/moodytiger-Coupon-Code.png",
            price: "see",
        },
        {
            title: "moodytiger",
            img: "https://www.codespotr.com/wp-content/uploads/2023/03/moodytiger-Coupon-Code.png",
            price: "click",
        },
        {
            title: "BERLOOK",
            img: "https://www.codespotr.com/wp-content/uploads/2023/02/BERLOOK-Code.png",
            price: "BERLOOK",
        },
        {
            title: "Florence",
            img: "https://www.couponcodetreasure.com/wp-content/uploads/2022/08/Florence-by-Mills-Coupon-Code.png",
            price: "click to see",
        },
        {
            title: "moodytiger",
            img: "https://www.codespotr.com/wp-content/uploads/2023/03/moodytiger-Coupon-Code.png",
            price: "see",
        },
        {
            title: "moodytiger",
            img: "https://www.codespotr.com/wp-content/uploads/2023/03/moodytiger-Coupon-Code.png",
            price: "click",
        },
        {
            title: "BERLOOK",
            img: "https://www.codespotr.com/wp-content/uploads/2023/02/BERLOOK-Code.png",
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
