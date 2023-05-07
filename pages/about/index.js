import { Button, Card, Container, Image, Link, Text } from "@nextui-org/react";

const About = () => {
  return (
    <Card
      css={{
        height: "100%",
        display: "flex",
        padding: "$1",
        bgColor: "Gray",
        gap: "$2",
      }}>
      <Card.Body>
      <Text> About Me</Text>
      </Card.Body>
    </Card>
  );
};
export default About;
