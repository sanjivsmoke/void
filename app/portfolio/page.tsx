"use client"
import { galleryImage } from "@/config/site";
import { Image } from "@nextui-org/react";
import { Key } from "react";


let gallery: any = []

galleryImage.gImage.forEach(function (value: string) {
	gallery.push("/images/" + value)
});



export default function PortfolioPage() {
	return (
		<div className="grid grid-cols-6 grid-rows-10 gap-2 sm:gap-4 h-full w-full items-center justify-center ">
			{gallery.map((data: any, index: Key | null | undefined) => (
				< div key={index} className="col-span-2 row-span-3 bg-slate-50">
					<Image
						radius="none"
						removeWrapper
						alt="NextUI hero Image"
						src={data}
					/></div>))}
			{/* <div className="col-span-2 row-span-3 col-start-3 bg-gray-500">
				<Image
					radius="none"
					removeWrapper
					alt="NextUI hero Image"
					src="/images/DSC00467.jpg"
				/></div>
			<div className="col-span-2 row-span-3 col-start-5 bg-orange-400">
				<Image
					radius="none"
					removeWrapper
					alt="NextUI hero Image"
					src="/images/DSC00479.jpg"
				/></div>
			<div className="col-span-3 row-span-4 row-start-4 bg-red-400">
				<Image
					radius="none"
					removeWrapper
					alt="NextUI hero Image"
					src="/images/DSC03305-2.jpg"
				/></div>
			<div className="col-span-3 row-span-4 col-start-4 row-start-4 bg-yellow-400">
				<Image
					radius="none"
					removeWrapper
					alt="NextUI hero Image"
					src="/images/DSC03484-2.jpg"
				/>
			</div>
			<div className="col-span-2 row-span-3 row-start-8 bg-lime-600">
				<Image
					radius="none"
					removeWrapper
					alt="NextUI hero Image"
					src="/images/DSC07314.jpg"
				/>
			</div>
			<div className="col-span-2 row-span-3 col-start-3 row-start-8 bg-green-400">
				<Image
					radius="none"
					removeWrapper
					alt="NextUI hero Image"
					src="/images/DSC04684.jpg"
				/>
			</div>
			<div className="col-span-2 row-span-3 col-start-5 row-start-8 bg-sky-600">
				<Image
					radius="none"
					removeWrapper
					alt="NextUI hero Image"
					src="/images/DSC03333-2.jpg"
				/>
			</div> */}
		</div >

	);
}
