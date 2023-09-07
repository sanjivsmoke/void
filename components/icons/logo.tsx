'use client'
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";


export const GifIcon = () => {
  const { theme } = useTheme()

  const [dynamicLogos, setDynamicLogo] = useState("/logos_icons/NTHO.gif")

  useEffect(() => {
    if (theme === "light") {
      setDynamicLogo("/logos_icons/void-website-favicon-black.png");
    } else {
      setDynamicLogo("/logos_icons/NTHO.gif");
    }
  }, [theme]);
  return (
    <>
      <Image
        src={dynamicLogos}
        alt="Default Image"
        width={80}
        height={45}
      />
    </>
  );
};

