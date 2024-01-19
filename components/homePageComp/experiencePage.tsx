import { Avatar, Card, CardBody, CardFooter, CardHeader, Chip, CircularProgress, Divider, Spacer } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Experiencepage() {


    return (
        <div className="grid grid-row-2 sm:grid-cols-2 w-full gap-5 sm:gap-10 py-10 items-center justify-center ">
            <div className=" h-[550px] w-full grid grid-cols-1 gap-1 m-2 ">
                <div className="text-center ">
                    <h1 className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent  text-2xl sm:text-4xl font-bold  ">Crafting celestial experiences into the web fabric as a,</h1>
                </div>
                {siteConfig.experience.map((data, index) => (
                    <div key={index} className=" flex  flex-col sm:flex-row gap-4 items-center  p-2 text-start justify-evenly">
                        <Avatar radius="sm" isBordered src={data.image} className="w-40 h-20 sm:h-20 " ></Avatar> <div>
                            <h1 className="text-2xl "> {data.title}</h1>
                            <h2 className="text-lg "> {data.companyName} </h2>
                            <h3 className="text-sm"> {data.companyInfo}</h3>
                        </div>
                    </div>
                ))}
                {/* <div className=" flex flex-col sm:flex-row gap-4 items-center  p-2 text-start justify-evenly">
                    <Avatar radius="sm" isBordered src="/logos_icons/star-map.png" className="w-40 sm:w-60  h-20 sm:h-20 " ></Avatar>
                    <div>
                        <h1 className="text-2xl "> Front-End Developer</h1>
                        <h2 className="text-lg "> Crud Operation </h2>
                        <h3 className="text-sm"> CRUD Operations is a technology wise creative company doing extensive
                            projects in the field of Website Designing, Website Development.- May 2022 to Sectember 2022</h3>
                    </div>
                </div> */}

            </div>
            <div className=" h-full w-full grid grid-cols-2 sm:grid-rows-1 place-items-center  gap-3 p-2">
                <Image className="col-span-2 items-center" alt="spaceship" src="/logos_icons/ufo.png" width={50} height={50} />
                {siteConfig.skillData.map((skillItems, index) => (
                    <Card key={index} className="w-[220px] h-[230px] border-none bg-gradient-to-r from-violet-500 to-purple-500">
                        <CardBody className="justify-center items-center pb-0">
                            <CircularProgress
                                classNames={{
                                    svg: "w-36 h-36 drop-shadow-md",
                                    indicator: "stroke-white",
                                    track: "stroke-white/10",
                                    value: "text-3xl font-semibold text-white",
                                }}
                                value={skillItems.percentage}
                                strokeWidth={2}
                                showValueLabel={true}
                                label={<Chip
                                    classNames={{
                                        base: "border-1 border-white/30",
                                        content: "text-white/90 text-small font-semibold",
                                    }}
                                    variant="bordered"
                                >
                                    {skillItems.title}
                                </Chip>}
                            />
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    )
}
