import { borderRadius } from "@mui/system";
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function MensOffer() {
    const list = [
        {
            title: "Watches",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/watch/w/s/d/-original-imagnqcjgxcxmfjb.jpeg?q=70",
            price: "$5.50",
        },
        {
            title: "Shoes",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/d/o/e/9-5g-845-campus-mod-blu-wht-original-imag4g3xnanhz7zk-bb.jpeg?q=70",
            price: "$3.00",
        },
        {
            title: "Tshirts",
            img: "https://rukminim1.flixcart.com/image/612/612/k05ljm80/t-shirt/k/w/r/xl-poly-510-11-tqh-original-imafkygaynurrcyj.jpeg?q=70",
            price: "$10.00",
        },
        {
            title: "Wallets",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/wallet-card-wallet/a/k/w/kyle-1-4-5-ubf130blr1037-8-wallet-urban-forest-3-7-original-imagkcafzqmde8gb.jpeg?q=70",
            price: "$5.30",
        },
        {
            title: "Jewellers",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/pendant-locket/j/8/b/na-na-2-pcs-silver-heart-matching-couple-pendant-faizam-original-imaghskvtez6gguw.jpeg?q=70",
            price: "$5.50",
        },
        {
            title: "Jeans",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/v/n/l/32-bhdilv22591-light-tone-being-human-original-imagmtcd2p5ejdwn.jpeg?q=70",
            price: "$3.00",
        },
        {
            title: "Hoodies",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/sweatshirt/k/q/q/5-6-years-522058348-4-monte-carlo-original-imagkjv6ugwykzyg.jpeg?q=70",
            price: "$10.00",
        },
        {
            title: "Shirts",
            img: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/t/l/2/xl-men-regular-super-slim-fit-striped-casual-shirt-icome-original-imagf9q2epye5kks-bb.jpeg?q=70",
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
                                    height={260}
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
