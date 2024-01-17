"use client"



import { useState } from "react";
import { } from "@nextui-org/react";
import TypewriterComponent from "typewriter-effect";
import LandingPage from "@/components/homePageComp/landingPage";
import Experiencepage from "@/components/homePageComp/experiencePage";
import ServicePage from "@/components/homePageComp/servicePage";


export default function Home() {

	return (
		<div className=" h-full w-full gap-2">
			<LandingPage />
			<Experiencepage />
			<ServicePage />
		</div>
	);
}
