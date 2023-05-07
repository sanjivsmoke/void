import NavigationBar from "../components/nav-bar";
import { Card, Grid, Text } from "@nextui-org/react";
import Footer from "../components/footer/footer";

const Layout = (props) => {
  return (
    
    <Grid.Container >
      <Grid xs={12}>
        <NavigationBar />
      </Grid>
      <Grid
        css={{ height:"73vh", width: "stretch",p:"$0",m:"$0" }}
        xs={12}
        >
        {props.children}
      </Grid>
      <Grid css={{ w: "stretch"}}>
        <Footer />
      </Grid>
    </Grid.Container>
  );
};

export default Layout;
