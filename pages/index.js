import {
  Button,
  Container,
  Image,
  Row,
  Text,
  Col,
  Card,
  Spacer,
  Progress,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  const router = useRouter();

  const bannerImage = [
    "img/nirmal.jpg",
    "img/nirmalKumar_image.jpg",
    "img/itachEye.gif",
  ];
  const [currentBannerImage, setCurrentBannerImage] = useState(bannerImage[0]);

  const handleCLick = () => {
    if (currentBannerImage === "img/nirmal.jpg") {
      setCurrentBannerImage(bannerImage[1]);
    } else if (currentBannerImage === "img/nirmalKumar_image.jpg") {
      setCurrentBannerImage(bannerImage[2]);
    } else {
      setCurrentBannerImage(bannerImage[0]);
    }
  };

  // console.log("the curretnimage are", currentBannerImage);
  return (
    <>
      <Row css={{ flexDirection: "column", "@sm": { flexDirection: "row" } }}>
        <Card
          isPressable
          isHoverable
          css={{
            backgroundColor: "Black",
            alignItems: "center",
            alignSelf: "center",
          }}>
          <Card.Body css={{ padding: "$0" }}>
            <Card.Image
              // src="https://nextui.org/images/card-example-5.jpeg"
              src={currentBannerImage}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
              onClick={handleCLick}
            />
          </Card.Body>
        </Card>
        <Card
          css={{
            $$cardColor: "$black",
            alignSelf: "center",
            alignItems: "flex-start",
          }}>
          <Card.Body>
            <Text
              h1
              hideIn={"sm"}
              css={{
                textGradient: "45deg, $blue600 , $purple600 50%",
              }}>
              P.C.NIRMAL KUMARd
            </Text>
            <Text
              h2
              showIn={"sm"}
              css={{
                textGradient: "45deg, $blue600 , $purple600 50%",
              }}>
              P.C.NIRMAL KUMAR
            </Text>
            <Progress striped indeterminated color="secondary" status="black" />
            <Text h3 color="white" css={{ m: 0, alignItems: "flex-start" }}>
              Creative
              <TypewriterComponent
                options={{
                  strings: ["Developer", "Designer", "Photographer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>
          </Card.Body>
          <Button
            bordered
            color="gradient"
            size="lg"
            onClick={() => router.push("contact")}
            auto>
            Get in Touch
          </Button>
        </Card>
      </Row>
    </>
  );
}
