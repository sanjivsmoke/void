import {
  Button,
  Card,
  Grid,
  Image,
  Input,
  Link,
  Progress,
  Row,
  Spacer,
  Text,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import { CiLocationOn } from "react-icons/ci";
import { BiMailSend, BiMobileAlt } from "react-icons/bi";
// import styles from "../../styles/Home.module.css";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const data = {
    customerEmail: { Name: "", Email: "", Message: "" },
  };

  const adress =
    "https://www.google.com/maps/place/Plot+no.+124,+Pearl+Vaigai+Apartments,+Vaigai+Nagar,+Urapakkam,+Chennai,+Tamil+Nadu+603210/@12.8571319,80.067764,20z/data=!4m6!3m5!1s0x3a52f7a85832915f:0x9c07d96d84866a29!8m2!3d12.8571269!4d80.0679396!16s%2Fg%2F11pf5d0hj_";

  return (
    <Row
      css={{
        flexDirection: "column",
        gap: "$10",
        "@sm": { flexDirection: "row" },
      }}>
      <Card
        css={{
          backgroundColor: "Black",
          alignItems: "center",
          alignSelf: "center",
          w: "100%",
          h: "100%",
        }}>
        <Card.Body>
          {/* 
            // GOOGLE MAP API REQUIRED TO RUN LIVE MAP 
            <iframe
              className={styles.iframe}
              src={adress}
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe> */}
          <Link
            href={adress}
            rel="noopener noreferrer"
            target="_blank"
            css={{ height: "100%" }}>
            <Image
              alt="adress"
              width="100%"
              height="100%"
        
              src="img/adress.PNG"
            />
          </Link>
        </Card.Body>
      </Card>

      <Card
        css={{
          backgroundColor: "Black",

          alignItems: "center",
          alignSelf: "center",
          w: "100%",
          h: "100%",
        }}>
        <Card.Header
          css={{
            margin: "$5",
            marginLeft: "$20",
            gap: "$5",
          }}>
          <Text size={25} b>
            Get in Touch
            <Progress
              css={{ width: "100%" }}
              color="secondary"
              size="xs"
              value={100}
            />
          </Text>
        </Card.Header>
        <Card.Body css={{ rowGap: "$8" }}>
          <Row
            css={{
              flexDirection: "column",
              gap: "$3",
              "@sm": { flexDirection: "row", gap: "$2" },
            }}>
            <Card
              isHoverable
              isPressable
              variant="bordered"
              css={{ alignItems: "center" }}>
              <Tooltip content="Click to copy the Adress" color="secondary">
                <Card.Body
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `Plot no. 124, Vaigai Nagar, Urapakkam, Chennai, Tamil Nadu 603210`
                    )
                  }
                  css={{
                    alignItems: "center",
                    display: "none",
                    "@xs": { display: "inherit" },
                  }}>
                  <CiLocationOn />
                  <Text>Chennai, Tamil Nadu, INDIA</Text>
                </Card.Body>
              </Tooltip>
            </Card>
            <Card
              isHoverable
              isPressable
              variant="bordered"
              css={{
                alignItems: "center",
                width: "inherit",

                "@md": { width: "inherit" },
              }}>
              <Tooltip content="Click to copy the Email ID" color="secondary">
                <Card.Body
                  onClick={() =>
                    navigator.clipboard.writeText("nirmailkumar22@hotmail.com")
                  }
                  css={{ alignItems: "center" }}>
                  <BiMailSend />
                  <Text>nirmailkumar22@hotmail.com</Text>
                </Card.Body>
              </Tooltip>
            </Card>
            <Card
              isHoverable
              isPressable
              variant="bordered"
              css={{ alignItems: "center" }}>
              <Tooltip content="Click to copy mobile Number" color="secondary">
                <Card.Body
                  onClick={() => navigator.clipboard.writeText("9443513022")}
                  css={{ alignItems: "center" }}>
                  <BiMobileAlt />
                  <Text>+91 9443513022</Text>
                </Card.Body>
              </Tooltip>
            </Card>
          </Row>
          <Input
            css={{ alignSelf: "flex-start", width: "60%" }}
            animated
            aria-label="name"
            placeholder="Name"
            color="secondary"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            css={{ alignSelf: "flex-start", width: "60%" }}
            animated
            aria-label="email"
           placeholder="Email"
            color="secondary"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Grid css={{ alignSelf: "flex-start", padding: "$0", width: "60%" }}>
            <Textarea
              css={{ width: "100%" }}
              aria-label="message"
            
              onChange={(e) => setMessage(e.target.value)}
            />
            <Spacer y={0.5} />

            <Button
              auto
              color="secondary"
              size="md"
              onPress={() => {
                console.log(name, email, message);
              }}>
              Send Message
            </Button>
          </Grid>
        </Card.Body>
      </Card>
    </Row>
  );
};
export default Contact;
