import {  Collapse, Text } from "@nextui-org/react";


function Footer() {
  

  return (
    <Collapse
      title={<Text b size={20}   css={{
        textGradient: "30deg, $blue600 -50%, $purple600 100%",
      }}>- MR. プリンス</Text>}
      subtitle="Click To Know More About Me">
      <Text>
      Copyright © 2023
      </Text>
    </Collapse>
  );
}

export default Footer;
