import { Card, Col, Container, Image, Spacer, Text } from "@nextui-org/react";
import TypewriterComponent from "typewriter-effect";

const PortfolioPage = () => {
  return (
    <>
      <Card css={{ bgColor: "transparent", alignItems: "center" }}>
        <Image sizes="md" src="img/obito.png" alt="obito" />
        <Spacer />
        <Text h2  css={{ m: 0, alignItems: "flex-start", textGradient: "45deg, $red600 -20%, $pink600 50%" }}>
          <TypewriterComponent
            options={{
              strings: ["Page is under development .. !!"],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>
      </Card>
    </>
  );
};
export default PortfolioPage;
