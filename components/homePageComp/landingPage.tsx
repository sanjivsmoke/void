"use client"
import { Card, CardHeader, CardBody, Spacer, } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function LandingPage() {

    const { theme } = useTheme();
    let banner = siteConfig.homeImage[0].href
    banner = theme === 'light' ? siteConfig.homeImage[1].href : siteConfig.homeImage[0].href
    return (
        <div className=" flex flex-col sm:flex-row  h-full items-center w-full justify-center gap-2 sm:gap-10 py-10 ">
            <Card className=" h-full w-full " radius="none" isPressable >
                <CardBody className="overflow-visible p-0">
                    <Image height={100} width={500} alt={"hai"} src={banner} className="z-0 w-full h-full object-cover justify-center" />
                </CardBody>
            </Card>
            <div className="  w-full  h-full    ">
                <Spacer y={20} />
                <h1 className="text-2xl sm:text-4xl font-serif ">Greetings, cosmic traveler! 🚀</h1>
                <h1 className="text-2xl sm:text-4xl font-serif ">I am, </h1>
                <h1 className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent text-3xl sm:text-5xl font-extrabold "  >
                    P.C.NIRMAL KUMAR</h1>
                <h1 className="text-2xl sm:text-4xl font-serif ">  – your stellar Full-stack navigator aboard the code-powered spacecraft.</h1>


                {/* <h1 className="text-2xl sm:text-4xl font-bold text-start">Creative 	<TypewriterComponent
					options={{
						strings: ["Developer", "Designer", "Photographer"],
						autoStart: true,
						loop: true,
					}}
				/></h1> */}
            </div>
        </div >)
}