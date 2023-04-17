import { Popover, Button, Text, Link, Row } from "@nextui-org/react";
import { AiOutlineBug } from "react-icons/ai";
import TypewriterComponent from "typewriter-effect";

const DarkModerPopover = () => {
  return (
    <Popover isBordered disableShadow>
      <Popover.Trigger>
        <Button color="gradient" auto icon={<AiOutlineBug size="20" />} />
      </Popover.Trigger>
      <Popover.Content  css={{ alignItems: "center" }}>
        <Text css={{ p: "$10",  textAlign: "match-parent"}}>
        Congratulations on finding Bugs.
        <TypewriterComponent
            options={{
              strings: ["Bugs are meant to be killed","But which one !?"],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>
        <Row css={{p:"$2"}} justify="space-evenly">
        <Link
        css={{gap:"$20" }}
          href="https://www.youtube.com/shorts/_zm1YI9wMx0"
          rel="noopener noreferrer"
          target="_blank">
          <AiOutlineBug size="20" />
        </Link>
        <Link
        css={{gap:"$20",color:"$cyan700" }}
          href="https://www.youtube.com/shorts/pmAGRt1Z0i4"
          rel="noopener noreferrer"
          target="_blank">
          <AiOutlineBug size="20" />
        </Link>
        <Link
        css={{gap:"$20",color:"GoldenRod" }}
          href="https://www.youtube.com/shorts/aftQAbHdXZs"
          rel="noopener noreferrer"
          target="_blank">
          <AiOutlineBug size="20" />
        </Link>
        <Link
        css={{gap:"$20" ,color:"$red800"}}
          href="https://www.youtube.com/shorts/P9ZkTIgsByk"
          rel="noopener noreferrer"
          target="_blank">
          <AiOutlineBug size="20" />
        </Link>
        </Row>
        
      </Popover.Content>
    </Popover>
  );
};
export default DarkModerPopover;
