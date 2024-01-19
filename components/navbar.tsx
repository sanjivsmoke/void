"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";
import { GifIcon } from "./icons/logo";
import { useState } from "react";;
import { usePathname } from 'next/navigation'



export const Navbar = () => {

	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	let pageIndex: number;

	switch (pathname) {
		case `/`:
			pageIndex = 0;
			break;
		case `/portfolio`:
			pageIndex = 2;
			break;
		case `/contact`:
			pageIndex = 4;
			break;
	}

	return (
		<NextUINavbar maxWidth="full" position="sticky">
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<GifIcon />
					<p className="font-bold text-2xl ">| VOID</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{siteConfig.navItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === pageIndex ? "secondary" : "foreground"
							}
							className="w-full font-bold"
							href={item.href}
							size="lg"
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<ThemeSwitch />
				<NavbarItem>
					<Button isIconOnly color="secondary" aria-label="Like">
						<HeartFilledIcon />
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{siteConfig.navItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === pageIndex ? "secondary" : "foreground"
							}
							className="w-full"
							href={item.href}
							size="lg"
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextUINavbar>
	);
};
