import { createTheme, NextUIProvider,  } from "@nextui-org/react";
import Head from "next/head";
import Layout from "./layout";
import { useSSR } from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  const { isBrowser } = useSSR()



  const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: "$green200",
        primaryLightHover: "$green300",
        primaryLightActive: "$green400",
        primaryLightContrast: "$green600",
        primary: "#4ADE7B",
        primaryBorder: "$green500",
        primaryBorderHover: "$green600",
        primarySolidHover: "$green700",
        primarySolidContrast: "$white",
        primaryShadow: "$green500",

        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#5E1DAD",

        // you can also create your own color
        myColor: "#ff4ecd",

        // ...  more colors
      },
      className: "dark",
      space: {},
      fonts: {},
    },
  });

  return (
    isBrowser && ( 
      <NextUIProvider theme={darkTheme}>
        <Head>
          <title>NirmalKumar Portfolio</title>
          <meta name="portfolio" content="Nirmal Kumar's portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    )
  );
}

export default MyApp;
