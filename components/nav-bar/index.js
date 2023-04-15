import { Navbar, Text,  Link } from "@nextui-org/react";
import { useRouter } from "next/router";

import GifIcon from "./icon/gif_icon";
import DarkModerPopover from "./popover/darkmode_popover";

const NavigationBar = () => {
  const router = useRouter();

  const collapseItems = [
    "home",
    "about",
    "portfolio",
    "service",
    "contact",
  ];



  return (
    <>
      <Navbar maxWidth={"xl"} isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
              gap: "$5",
            },
          }}>
          <GifIcon />
          <Text css={{ fontFamily: "$mono" }} size="x-large" b color="inherit">
            | Void
          </Text>
        </Navbar.Brand>

        <Navbar.Content
          enableCursorHighlight="true"
          activeColor="secondary"
          hideIn="xs"
          variant="underline">
          {collapseItems.map((homePage, index) => (
            <Navbar.Link
              key={index}
              isActive={
                router.pathname == "/"
                  ? index === 0
                  : index === router.pathname.indexOf(homePage)
              }
              href={homePage === "home" ? "/" : homePage}>
              {homePage === "/" ? "home" : homePage}
            </Navbar.Link>
          ))}
          {/* <Navbar.Link
            isActive={router.pathname === desktopItems[0]}
            href={desktopItems[0]}>
            Home
          </Navbar.Link>
          <Navbar.Link
            isActive={router.pathname === desktopItems[1]}
            href={collapseItems[1]}>
            about{" "}
          </Navbar.Link>
          <Navbar.Link
            isActive={router.pathname === "portfolil"}
            href={collapseItems[2]}>
            Portfolio
          </Navbar.Link>
          <Navbar.Link
            isActive={router.pathname === " service" ? "true" : "false"}
            href={collapseItems[3]}>
            Service
          </Navbar.Link> */}
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
          hideIn="xs">
          <DarkModerPopover />
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={index}
              activeColor="secondary"
              isActive={
                router.pathname == "/"
                  ? index === 0
                  : index === router.pathname.indexOf(item)
              }>
              <Link
                color="inherit"
                href={item === "home" ? "/" : item}
                css={{
                  minWidth: "100%",
                }}>
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
          <Navbar.CollapseItem>
            <Text> sorry we dont provide Light Mode !! </Text>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
