'use-client'
import { siteConfig } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import TypewriterComponent from "typewriter-effect";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";


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
    const companyWorked = [
        {
            icon: "/logos_icons/workCompany/kridas-logo.svg",
            title: "Kridas",
            link: "www.kridas.com"
        }
        ,
        {
            icon: "/logos_icons/workCompany/Next.png",
            title: "Next UI",
            link: "https://nextui.org/d"
        },
        {
            icon: "/logos_icons/workCompany/healthcare.png",
            title: "Beats Health",
            link: "https://www.thebeatshealth.com/"
        }
    ]



    const [pricingDetails, setPricingDetails] = useState<any | undefined>();
    const handleClick = (title: string) => {
        if (title === "Web Design & Development") {
            setPricingDetails(serviceCostDetails.webDevelopement)
        } else if (title === "Photography  & Digital art") {
            setPricingDetails(serviceCostDetails.photography)
        } else {
            setPricingDetails(serviceCostDetails.Marketing)
        }
    }
    const handleGetQuote = (product:string , price: number ) => {     
        const emailAddress = 'nirmalkumar22@hotmail.com';
        const subject = 'Hello from Void!';
        const content = `Thank you for your inquiry regarding "${product}" valued  "${price}". Your interest is truly valued. Rest assured, our dedicated team will meticulously review your request and craft a tailored response just for you. In the meantime, should you have any further questions or require additional details, please don't hesitate to reach out. We eagerly anticipate the opportunity to assist you further. Warm regards, P.C.Nirmal Kumar`;
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
        window.location.href = mailtoLink;
        

    }
    return (
        <div className="py-10  w-full h-full">
            <div className="grid grid-rows-1 gap-2 items-center justify-center ">
                <div className="grid grid-cols-1 grid-rows-3 gap-2 items-center justify-center">
                    <h1 className="text-center  text-3xl font-bold">    / / Who We Are: Frontline Innovators in Development</h1>
                    <p className="h-40 text-md md:text-3xl sm:text-3xl text-center leading-normal">
                        <span className="text-secondary">At our core,</span> we are a team of industry-leading developers with a passion
                        for <span className="text-secondary">innovation and a commitment</span> to excellence. With a wealth of experience
                        in the digital realm, we pride ourselves on our <span className="text-secondary">high level of coding</span> skills
                        and expertise in industry-leading technologies.
                    </p>
                    <p className="h-40 text-md md:text-3xl  sm:text-3xl text-center leading-normal">
                        <span className="text-secondary">As industry-leading developers,</span> we are not just building software – <span className="text-secondary"> we are
                            shaping the future of technology.</span> Let us be your partner in innovation,
                        <span className="text-secondary">guiding you towards success</span> in the digital age.
                    </p>
                </div>

            </div>
            <div className="w-full h-1/2  sm:col-span-6  ">
                <h1 className="text-center text-3xl font-bold p-3 "> / / OUR WORK</h1>
                <div>
                    <div className=" grid grid-cols-3   gap-4 " >
                        {companyWorked.map((workData, index) => (
                            <div key={index} >
                                <Link href={workData.link} >
                                    <Card className="w-full h-unit-4xl  items-center justify-center">
                                        <Image alt={workData.title} src={workData.icon} width={100} height={100} />
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-col-1 sm:grid-cols-3 grid-rows-3 gap-5">
                <div className="  sm:col-span-6 pt-5  h-full w-full">
                    <h2 className="text-lg sm:text-4xl text-center leading-normal font-bold mt-5 ">
                        / / Explore our diverse array of services, showcasing our
                    </h2>
                    <div className="grid grid-cols-4 grid-rows-3 gap-5 p-7 " >
                        <div className="col-span-3 ">
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
                    <div key={index} className="  h-full w-full  ">
                        <Card isHoverable isPressable className="w-full h-unit-7xl  " onClick={() => { handleClick(mData.title) }}>
                            <CardHeader className="items-center justify-center flex flex-col gap-4">
                                <Image alt={mData.title} src={mData.icon} width={50} height={40} />
                                <p className="text-secondary text-xl font-semibold ">{mData.title}</p>
                            </CardHeader>
                            <Divider />
                            <CardBody >
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
                <div className=" h-full sm:col-span-6  w-full">

                    <h1 className=" text-center text-3xl font-bold  ">
                        / / Discover Our Service Costs
                    </h1>
                    <Divider />
                    <div>
                        {pricingDetails && pricingDetails.length > 0 ? (
                            pricingDetails.map((PData: any, index: number) => (
                                <div key={index} className="grid  sm:grid-cols-3 sm:grid-rows-1 gap-4 h-full">
                                    <div className="flex items-center justify-center h-full  border-b-2 sm:border-b-0  sm:border-r-2">
                                        <h1 className=" text-secondary   text-2xl font-medium">{PData.title}</h1>
                                    </div>
                                    <div className=" border-b-2 sm:border-b-0  sm:border-r-2">
                                        {PData.about.map((inData: any, index: number) => (
                                            <p className="text-lg text-center font-semibold pt-5 pb-2" key={index}>- {inData}</p>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-5 items-center justify-center h-full">
                                        <Button radius="none" size="lg" color="secondary" onClick={() => handleGetQuote(PData.title , PData.price)} > Get Quote</Button>
                                        <h1 className="bg-gradient-to-r  from-purple-500 text-3xl font-semibold text-center animate-pulse "> {PData.price}/- Per Project</h1>
                                    </div>
                                </div>
                            ))

                        ) : (

                            <div className="flex  items-center justify-center h-unit-6xl w-full text-2xl   font-semibold ">
                                <h1>   Click the services above</h1>
                            </div>

                        )}
                    </div>
                    <Divider />
                </div>

            </div>
        </div>
    )
}


//     <TypewriterComponent
//     options={{
//         strings: ["Web Development...", "Photography services..."],
//         autoStart: true,
//         loop: true,
//     }}
// />