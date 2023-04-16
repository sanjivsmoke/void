import { Navbar, Text, Link } from "@nextui-org/react";
import { useRouter } from "next/router";

import GifIcon from "./icon/gif_icon";
import DarkModerPopover from "./popover/darkmode_popover";

const NavigationBar = () => {
  const router = useRouter();

  const collapseItems = ["home", "about", "portfolio", "service", "contact"];

  let pageIndex;

  switch (router.pathname) {
    case `/`:
      pageIndex = "home";
      break;
    case`/about`:
      pageIndex = "about";
      break;
    case `/portfolio`:
      pageIndex = "portfolio";
      break;
    case `/service`:
      pageIndex = "service";
      break;
    case`/contact`:
      pageIndex = "contact";
      break;
  }


  // console.log("current page is", router.pathname);
  // console.log("current page without / is", pageIndex);
  // console.log("index of current page is", collapseItems.indexOf(pageIndex))

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
                 index === collapseItems.indexOf(pageIndex)
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
                index === collapseItems.indexOf(pageIndex)
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
