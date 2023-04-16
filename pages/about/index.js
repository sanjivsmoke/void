import { Button, Card, Image, Link, Text } from "@nextui-org/react";

const About = () => {
  return (
    <Card
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "$10",
        bgColor: "Black",
      }}>
      <Link
        href="https://www.youtube.com/shorts/kPOyIDRUdS4"
        target="https://www.youtube.com/shorts/kPOyIDRUdS4">
        <Button shadow color="gradient" auto>
          Want to Know About Me !!
        </Button>
      </Link>
    </Card>
  );
};
export default About;
