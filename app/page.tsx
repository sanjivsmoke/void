"use client"

import LandingPage from "@/components/homePageComp/landingPage";
import Experiencepage from "@/components/homePageComp/experiencePage";
import CompanyTieUp from "@/components/homePageComp/companyTieUp";


export default function Home() {

	return (
		<div className=" h-full w-full gap-2">
			<LandingPage />
			<Experiencepage />
		</div>
	);
}
