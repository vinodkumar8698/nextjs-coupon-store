import { borderRadius } from "@mui/system";
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function MensOffer() {
    const list = [
        {
            title: "Nantucket",
            img: "https://www.codespotr.com/wp-content/uploads/2023/01/Nantucket-Whaler-Code.png",
            price: "$5.50",
        },
        {
            title: "Dept-Anonym",
            img: "https://www.couponcodetreasure.com/wp-content/uploads/2022/06/Dept-Anonym-Offer.png",
            price: "$3.00",
        },
        {
            title: "Affliction",
            img: "https://www.couponcodetreasure.com/wp-content/uploads/2022/06/Affliction-Clothing-Sale.png",
            price: "$10.00",
        },
        {
            title: "X-Ray-Jeans",
            img: "https://www.couponcodetreasure.com/wp-content/uploads/2022/06/X-Ray-Jeans-Sale.png",
            price: "$5.30",
        },
        {
            title: "Nantucket",
            img: "https://www.codespotr.com/wp-content/uploads/2023/01/Nantucket-Whaler-Code.png",
            price: "$5.50",
        },
        {
            title: "Dept-Anonym",
            img: "https://www.couponcodetreasure.com/wp-content/uploads/2022/06/Dept-Anonym-Offer.png",
            price: "$3.00",
        },
        {
            title: "Affliction",
            img: "https://www.couponcodetreasure.com/wp-content/uploads/2022/06/Affliction-Clothing-Sale.png",
            price: "$10.00",
        },
        {
            title: "X-Ray-Jeans",
            img: "https://www.couponcodetreasure.com/wp-content/uploads/2022/06/X-Ray-Jeans-Sale.png",
            price: "$5.30",
        }

    ];

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 25 }}>
                <h2>Today's Top Men's Clothing Deals</h2>
            </div>
            <Grid.Container gap={2} justify="flex-start">
                {list.map((item, index) => (
                    <Grid xs={12} sm={3} key={index}>
                        <Card isPressable isHoverable disableRipple  >
                            <Card.Body css={{ p: 0 }} >
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
