"use client"
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useState } from "react";
import { Spacer } from "@nextui-org/react";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
	const bannerImageArray = siteConfig.homeImage;
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [bannerImage, setBannerImage] = useState(bannerImageArray[currentImageIndex].href);

	const handleClick = () => {
		const nextIndex = (currentImageIndex + 1) % bannerImageArray.length; // Circular increment
		setCurrentImageIndex(nextIndex);
		setBannerImage(bannerImageArray[nextIndex].href);
	};

	return (
		<section className=" flex flex-col sm:flex-row  h-full items-center w-full justify-center gap-2 sm:gap-10 py-2 ">
			<Card className=" bg-black h-full w-full " isPressable onPress={handleClick}>
				<CardBody className="overflow-visible p-0">
					<Image height={100} width={500} alt={"hai"} src={bannerImage} className="z-0 w-full h-full object-contain justify-center" />
				</CardBody>
			</Card>
			<div className=" flex flex-col  w-full  h-full  justify-start py-10 ">
				<Spacer y={20} />
				<h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent text-3xl sm:text-5xl font-extrabold "  >P.C.NIRMAL KUMAR</h1>
				<h1 className="text-2xl sm:text-4xl font-bold text-start">Creative 	<TypewriterComponent
					options={{
						strings: ["Developer", "Designer", "Photographer"],
						autoStart: true,
						loop: true,
					}}
				/></h1>
			</div>
		</section >
	);
}
