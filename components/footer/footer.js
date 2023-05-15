import {
  Button,
  Card,
  Collapse,
  Grid,
  Link,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

function Footer() {
  const router = useRouter();

  // method to update copyright year automaticlly
  var today = new Date();

  const currentDate = today.getFullYear();
  // social connect  icon gap

  const spacingGap = 1;

  // social connect icon size
  const iconSize = 30;

  const handleClickContacts = () => {
    router.push("/contact");
  };
  const handleClickPhotography = () => {
    router.push("/portfolio");
  };
 
  return (
    <Collapse
      title={
        <Text
          b
          size={20}
          css={{
            textGradient: "30deg, $blue600 -50%, $purple600 100%",
          }}>
          - MR. プリンス
        </Text>
      }
      subtitle="To Know More">
      <Grid.Container gap={2} css={{ justifyContent: "space-evenly" }}>
        <Grid
          css={{ flexDirection: "column", "@sm": { flexDirection: "row" } }}>
          <Card css={{ backgroundColor: "Black", size: "min-content" }}>
            <Card.Body css={{}}>
              <Card.Header
                css={{
                  justifyContent: "center",
                  borderBottom: "$borderWeights$light solid $gray800",
                }}>
                <Text h6 color="white">
                  WORK WITH US
                </Text>
              </Card.Header>
              <Spacer />
              <Text css={{ textAlign: "center" }}>
                Get in touch for a virtual branding and collaborate with my
                industry leading unique partners.
              </Text>
              <Button
              id="contact"
                bordered
                color="gradient"
                onClick={handleClickContacts}
                css={{ margin: "$15" }}>
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid
          css={{ flexDirection: "column", "@sm": { flexDirection: "row" } }}>
          <Card css={{ backgroundColor: "Black", size: "min-content" }}>
            <Card.Body css={{}}>
              <Card.Header
                css={{
                  justifyContent: "center",
                  borderBottom: "$borderWeights$light solid $gray800",
                }}>
                <Text h6 color="white">
                 INTO THE WIDE LIFE
                </Text>
              </Card.Header>
              <Spacer />
              <Text css={{ textAlign: "center" }}>
              “ It is through living that we discover ourselves, at the same time as we discover the world around us. ”
              </Text>
              <Button
                bordered
                color="gradient"
                onClick={handleClickPhotography}
                css={{ margin: "$15" }}>
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid
          css={{ flexDirection: "column", "@sm": { flexDirection: "row" } }}>
          <Card css={{ backgroundColor: "Black", size: "min-content" }}>
            <Card.Body>
              <Card.Header
                css={{
                  justifyContent: "center",
                  borderBottom: "$borderWeights$light solid $gray800",
                }}>
                <Text h6 color="white">
                  SOCIAL MEDIA CONNECTS
                </Text>
              </Card.Header>
              <Spacer />
              <Text css={{ textAlign: "center" }}>
                Connect and follow along for behind the scenes contents and to
                learn about Void.
              </Text>
              <Spacer y={2.6} />
              <Row css={{ display: "flex", justifyContent: "center" }}>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/pz_nirmalkumar/">
                  <TiSocialInstagram size={iconSize} />
                </Link>
                <Spacer x={spacingGap} />
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/rocking.kumar.31?mibextid=ZbWKwLhgjc">
                  <TiSocialFacebook size={iconSize} />
                </Link>
                <Spacer x={spacingGap} />
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/nirmal-kumar-433536149/">
                  <TiSocialLinkedin size={iconSize} />
                </Link>
                <Spacer x={spacingGap} />
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/sanjivsmoke">
                  <TiSocialGithub size={iconSize} />
                </Link>
                <Spacer x={spacingGap} />
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/nirmal022">
                  <TiSocialTwitter size={iconSize} />
                </Link>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
      <Text color="white" css={{ paddingLeft: "45%" }}>
        Copyright © {currentDate}
      </Text>
    </Collapse>
  );
}

export default Footer;
