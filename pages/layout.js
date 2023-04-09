import NavigationBar from "../components/nav-bar";
import { Card, Grid, Text } from "@nextui-org/react";
import { Container, Row, Col } from "@nextui-org/react";
import Footer from "../components/footer/footer";

const Layout = (props) => {
  return (
    
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <NavigationBar />
      </Grid>
      <Grid
        css={{ height: "640px", width: "inherit" }}
        direction="column"
        xs={12}>
        {props.children}
      </Grid>
      <Grid css={{ w: "stretch", position: "sticky" }}>
        <Footer />
      </Grid>
    </Grid.Container>
  );
};

export default Layout;
