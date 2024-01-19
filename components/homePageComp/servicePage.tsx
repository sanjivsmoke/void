import { Card, CardBody, CardHeader, CircularProgress, Divider } from "@nextui-org/react";
import Image from "next/image";

export default function ServicePage() {
    return (
        <div className="flex flex-col sm:flex-row  h-full items-center w-full justify-center gap-2 sm:gap-10 py-10 ">

            <div className="bg-red-500 grid grid-cols-5 grid-rows-5 h-full w-full gap-3 p-2 ">
                <div className="bg-blue-400 col-span-2 row-span-3 " >1</div>
                <div className="bg-yellow-300 col-span-2 row-span-2 col-start-4 row-start-1 ">
                    <div className="h-full w-full">

                    </div>
                </div>
                <div className="bg-gray-400 col-span-3 row-span-3 col-start-3 row-start-3">3</div>
                <div className="bg-orange-400 col-span-2 row-span-2 col-start-1 row-start-4">4</div>
                <div className="bg-green-400 row-span-2 col-start-3 row-start-1">5</div>
            </div>

            <div className=" h-full w-full ">

            </div>
        </div>
    )
}
