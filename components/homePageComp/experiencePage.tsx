'use-client'
import { siteConfig } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { TwitterIcon } from "../icons/icons";
import TypewriterComponent from "typewriter-effect";
import { useState } from "react";
import { Button } from "@nextui-org/button";


export default function Experiencepage() {
    const serviceCostDetails = {
        webDevelopement: [{
            title: "Web Design & Development",
            about: [
                "Landing Page",
                "Web Hosting",
                "SEO optimized",
                "Amazon web service",
                "Responsive  UI/UX Design"
            ],
            price: "$149"
        }],
        photography: [{
            title: "Photography  & Digital art",
            about: [
                "Image Editing",
                "Print Design",
                "Video Editing",
                "Graphic Design",
                "Animation",
            ],
            price: "$139"
        }],
        Marketing: [
            {
                title: "SEO & Digital Marketing",
                about: [
                    "Higher Search Rankings",
                    "Social Media Optimization",
                    "On-Page SEO",
                    "Analyze performance",
                    "Content Optimization"
                ],
                price: "$129"
            }
        ]

    }


    const [pricingDetails, setPricingDetails] = useState<any | undefined>();
    const handleClick = (title: any) => {
        if (title === "Web Design & Development") {
            setPricingDetails(serviceCostDetails.webDevelopement)
        } else if (title === "Photography  & Digital art") {
            setPricingDetails(serviceCostDetails.photography)
        } else {
            setPricingDetails(serviceCostDetails.Marketing)
        }
    }

    return (
        <div className="py-10   w-full h-full">
            <div className="grid grid-col-1 sm:grid-cols-3 grid-rows-3 gap-5">
                <div className="  sm:col-span-6 pt-5  h-full w-full">
                    <h2 className="text-lg sm:text-4xl text-center leading-normal font-bold mt-5 ">
                        Explore our diverse array of services, showcasing our
                    </h2>
                    <div className="grid grid-cols-4 grid-rows-3 gap-5 p-7 " >
                        <div className="col-span-2w-1/2">
                            <h2 className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent text-3xl sm:text-4xl font-extrabold text-start " >
                                <TypewriterComponent
                                    options={{
                                        strings: [" Versatility..."],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h2></div>
                        <div className="col-span-2 col-start-3 row-start-3">
                            <h2 className="bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent text-3xl sm:text-4xl font-extrabold text-end " >
                                <TypewriterComponent
                                    options={{
                                        strings: ["Expertise..."],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h2>

                        </div>
                        <div className="col-span-2 col-start-2  row-start-2 ">
                            <h2 className="text-lg sm:text-4xl text-center  font-semibold mt-5 ">
                                AND
                            </h2>
                        </div>
                    </div>
                </div>
                {siteConfig.data.map((mData, index) => (
                    <div key={index} className=" pl-6 h-full w-full  ">
                        <Card isHoverable isPressable className="w-full h-unit-7xl  " onClick={() => { handleClick(mData.title) }}>
                            <CardHeader className="items-center justify-center flex flex-col gap-4">
                                <TwitterIcon />
                                <p className="text-2xl font-semibold ">{mData.title}</p>
                            </CardHeader>
                            <Divider />
                            <CardBody className="gap-5  ">
                                <p className="text-md sm:text-lg text-center" > {mData.about}</p>

                            </CardBody>
                            <CardFooter className="items-center justify-center">
                                <h1 className="underline text-secondary text-lg font-semibold ">
                                    Learn more
                                </h1>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
                <div className="bg-red-500 h-full sm:col-span-6  w-full">
                    <Card radius="none" className="w-full h-full ">
                        <CardHeader className="items-center justify-center">
                            <h1 className="text-3xl font-bold  ">Discover Our Service Costs</h1>
                        </CardHeader>
                        <Divider />
                        <CardBody >
                            {pricingDetails && pricingDetails.length > 0 ? (
                                pricingDetails.map((PData: any, index: number) => (
                                    <div key={index} className="grid  sm:grid-cols-3 sm:grid-rows-1 gap-4 h-full">
                                        <div className="flex items-center justify-center h-full  border-b-2 sm:border-b-0  sm:border-r-2">
                                            <h1 className="text-2xl font-medium">{PData.title}</h1>
                                        </div>
                                        <div className=" border-b-2 sm:border-b-0  sm:border-r-2">
                                            {PData.about.map((inData: any, index: number) => (
                                                <p className="text-lg text-center font-semibold pt-5" key={index}>- {inData}</p>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-5 items-center justify-center h-full">
                                            <h1 className="text-3xl font-semibold text-center text-secondary animate-pulse "> {PData.price}/- Per Project</h1>
                                            <Button size="lg" color="secondary" > Get Quote</Button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="bg-slate-400 text-2xl text-center font-semibold ">Click the services above</div>
                            )}
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <div className=" flex flex-col gap-5 ">
                        <h1 className="text-lg sm:text-5xl font-bold text-left mt-10 ">Embark on a digital odyssey
                            through the vast expanse of   cosmic
                        </h1>
                        <div className="flex-row w-full" >
                            <h1 className="text-lg sm:text-5xl   font-bold  text-secondary-500">
                                web development
                            </h1>
                            <h1 className="text-lg sm:text-5xl font-bold text-left  ">  and
                            </h1>

                            <h1 className="text-lg sm:text-5xl font-bold   text-secondary-500">photography services</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
{/* <div className=" flex flex-col gap-5 ">
                <h1 className="text-lg sm:text-5xl font-bold text-left mt-10 ">Embark on a digital odyssey
                    through the vast expanse of   cosmic
                </h1>
                <div className="flex-row w-full" >
                    <h1 className="text-lg sm:text-5xl   font-bold  text-secondary-500">
                        web development
                    </h1>
                    <h1 className="text-lg sm:text-5xl font-bold text-left  ">  and
                    </h1>

                    <h1 className="text-lg sm:text-5xl font-bold   text-secondary-500">photography services</h1>
                </div>
            </div> */}


//     <TypewriterComponent
//     options={{
//         strings: ["Web Development...", "Photography services..."],
//         autoStart: true,
//         loop: true,
//     }}
// />