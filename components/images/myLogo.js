import { Image, Row, Text } from "@nextui-org/react";

export default function Img(logoColor) {
  if (logoColor === "whiteLogo") {
    return (
      <Row css={{alignItems:"center", rowGap:"$0"}}>
        <Text b color="inherit">
          ப.சி.நிர்மல் குமார்
        </Text>
        <Image
          width={150}
          height={150}
          css={{alignItems:"flex-start"}}
          alt=""
          src="void-logo-zip-file/png/logo-no-background.png"
        />
      </Row>
    );
  } else {
   return(
    <Row css={{alignItems:"center", rowGap:"$0"}}>
    <Text b color="inherit">
      ப.சி.நிர்மல் குமார்
    </Text>
    <Image
      width={150}
      height={150}
      css={{alignItems:"flex-start"}}
      alt=""
      src="void-logo-zip-file/png/logo-white.png"
    />
  </Row>
   )
  }
  }
