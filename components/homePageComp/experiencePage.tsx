import { Card, CardBody, CardHeader, CircularProgress } from "@nextui-org/react";
import Image from "next/image";


export default function Experiencepage() {
    return (
        <div className="flex flex-col sm:flex-row  h-full items-center w-full justify-center gap-2 sm:gap-10 py-10 ">
            <div className=" h-full w-full ">

            </div>
            <Card className=" h-full w-full ">
                <CardHeader> skills</CardHeader>
                <CardBody className="justify-start items-start pb-0">
                    <CircularProgress
                        classNames={{
                            svg: "w-36 h-36 drop-shadow-md",
                            indicator: "stroke-white",
                            track: "stroke-white/10",
                            value: "text-3xl font-semibold text-white",
                        }}
                        value={70}
                        strokeWidth={4}
                        showValueLabel={true}
                    />
                </CardBody>
            </Card>
        </div>
    )
}
