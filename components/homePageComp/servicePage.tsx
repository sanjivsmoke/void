import { Card, CardBody, CardFooter, CardHeader, CircularProgress, Divider, Image } from "@nextui-org/react";
import { siteConfig } from "@/config/site";




export default function ServicePage() {
    return (
        <>
            <Divider />
            <h1 className="text-center text-2xl sm:text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent m-3">Space Exploration Services</h1>
            < div className="  grid grid-col-none  sm:grid-row-3 sm:grid-cols-3 gap-3 p-5 items-center justify-center h-full sm:h-1/2 w-full " >
                {siteConfig.data.map((mData, index) => (
                    <Card key={index} className="max-w-6xl h-full sm:max-h-unit-7xl ">
                        <CardHeader className="items-center justify-center gap-4">
                            {/* <TwitterIcon /> */}
                            <p className="text-2xl font-semibold ">{mData.title}</p>
                        </CardHeader>
                        <Divider />
                        <CardBody className="gap-5  ">
                            {mData.about.map((inData, index) => (
                                <p className="text-lg" key={index}>- {inData}</p>
                            ))}
                        </CardBody>
                        {/* <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://github.com/nextui-org/nextui"
                            >
                                Visit source code on GitHub.
                            </Link>
                        </CardFooter> */}
                    </Card>
                ))
                }


            </div >

        </>
    )
}
