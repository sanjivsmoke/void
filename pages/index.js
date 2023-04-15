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
  //   [{
  //     photo:"img/nirmal.jpg",
  //     text:"image1"
  //   },
  //   {
  //     photo: "img/nirmalKumar_image.jpg",
  //     text:"image2"
  //   },
  //   {
  //     photo: "img/itachEye.gif",
  //     text:"itach 1"
  //   }
  // ]
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

  console.log("the image are", bannerImage);
  console.log("the curretnimage are", currentBannerImage);
  return (
    <>
      <Col
        css={{
          "@xs": {
            display: "none",
          },
          "@sm": {
            display: "inherit",
          },
          "@md": {
            display: "inherit",
          },
          "@lg": {
            display: "inherit",
          },
          "@mdMin": {
            display: "inherit",
          },
        }}>
        <Container
          css={{
            //  bgColor: "$accents2",
            maxWidth: "inherit",
            display: "flex",
          }}
          fluid>
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
        </Container>
        <Spacer y={5} />
        <Container css={{ display: "flex" }}>
          <Card
            css={{
              $$cardColor: "$black",
              alignSelf: "center",
              alignItems: "flex-start",
            }}>
            <Card.Body css={{ gap: "$5" }}>
              <Text
                h1
                css={{
                  textGradient: "45deg, $blue600 , $purple600 50%",
                }}>
                P.C.NIRMAL KUMAR
              </Text>
              <Progress
                striped
                indeterminated
                color="secondary"
                status="black"
              />
              <Text h2 color="white" css={{ m: 0, alignItems: "flex-start" }}>
                Creative
                <TypewriterComponent
                  options={{
                    strings: ["Developer", "Designer", "Photographer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Text>
              <Button
                bordered
                color="gradient"
                size={"lg"}
                onClick={() => router.push("contact")}
                auto>
                Get in Touch
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </>
  );
}
