import { borderRadius } from "@mui/system";
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function MensOffer() {
    const list = [
        {
            title: "Orange",
            img: "https://nextui.org/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "https://nextui.org/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Cherry",
            img: "https://nextui.org/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "https://nextui.org/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Avacado",
            img: "https://nextui.org/images/fruit-4.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "https://nextui.org/images/fruit-6.jpeg",
            price: "$3.00",
        },
        {
            title: "Cherry",
            img: "https://nextui.org/images/fruit-7.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "https://nextui.org/images/fruit-8.jpeg",
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
                        <Card isPressable isHoverable  >
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
