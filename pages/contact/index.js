import { Card, Grid, Text } from "@nextui-org/react";

const Contact = () => {
  return (
    <>
      <Grid.Container gap={1}>
        <Grid xs={6}>
          <Card>
            <Card.Body>
              <Text>Default card. (shadow)</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6}>
          <Card variant="flat">
            <Card.Body>
              <Text>Flat card.</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
};
export default Contact;
