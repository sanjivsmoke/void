'use client'
import { useTheme } from "next-themes";
import Image from "next/image";



export const GifIcon = () => {
  const { theme } = useTheme()
  let dynamicLogos = "/logos_icons/NTHO.gif"
  dynamicLogos = theme === "light" ? "/logos_icons/void-website-favicon-black.png" : "/logos_icons/NTHO.gif"
  // const [dynamicLogos, setDynamicLogo] = useState("/logos_icons/NTHO.gif")

  // useEffect(() => {
  //   if (theme === "light") {
  //     setDynamicLogo("/logos_icons/void-website-favicon-black.png");
  //   } else {
  //     setDynamicLogo();
  //   }
  // }, [theme]);
  return (

    <Image
      src={dynamicLogos}
      alt="Default Image"
      width={50}
      height={50}
      aria-labelledby="imageDark"
    />

  );
};

