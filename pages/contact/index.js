import { Card, Grid, Text } from "@nextui-org/react";

const Contact = () => {
  return (
    <>
      <Grid.Container css={{flexDirection:"column" ,"@sm":{flexDirection:"row"}}} gap={1}>
        <Grid xs={6}>
          <Card  css={{
            backgroundColor: "Black",
            alignItems: "center",
            alignSelf: "center",
          }}>
            <Card.Body>
              <Card.Image
                objectFit="cover"
                width="100%"
                height="100%"
                src="img/queen-sanji.gif"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6}>
          <Card  css={{
            backgroundColor: "Black",
            alignItems: "center",
            alignSelf: "center",
          }}>
            <Card.Body>
              <Card.Image
                objectFit="fill"
                width="100%"
                height="100%"
                src="img/kata-vs-luffy.gif"
              />
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
};
export default Contact;
