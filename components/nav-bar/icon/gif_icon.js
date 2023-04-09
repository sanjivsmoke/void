import { Image } from "@nextui-org/react";

const GifIcon = () => {
  return (
    <Image
      showSkeleton
      objectFit="fit"
      src="img/1F4j.gif"
      alt="Default Image"
      width={80}
      height={55}
      css={{borderRadius:"$sm"}}
    />
  );
};

export default GifIcon;
