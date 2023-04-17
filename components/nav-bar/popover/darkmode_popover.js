import { Popover, Button, Text, Link } from "@nextui-org/react";
import { AiOutlineBug } from "react-icons/ai";

const DarkModerPopover = () => {
  return (
    <Popover isBordered disableShadow>
      <Popover.Trigger>
        <Button color="gradient" auto icon={<AiOutlineBug size="20" />} />
      </Popover.Trigger>
      <Popover.Content  css={{ alignItems: "center"}}>
        <Text css={{ p: "$10", textAlign: "match-parent"}}>
        Congratulations you found `the` bug which is in my code,its better to kill by hitting it.
        </Text>
        <Link
          href="https://www.youtube.com/shorts/_zm1YI9wMx0"
          rel="noopener noreferrer"
          target="_blank">
          <AiOutlineBug size="20" />
        </Link>
      </Popover.Content>
    </Popover>
  );
};
export default DarkModerPopover;
